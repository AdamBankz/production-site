import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const BACKEND_URL = 'https://cf9f-45-80-158-244.ngrok-free.app';

  const tiktokUrlRegex = /^https?:\/\/(vm\.tiktok\.com\/[A-Za-z0-9]+|(?:www\.)?tiktok\.com\/@[^\/]+\/(video|photo)\/\d+)/;

  const validateUrl = (url: string) => {
    const isValid = tiktokUrlRegex.test(url.trim());
    setIsValidUrl(isValid);
    return isValid;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    validateUrl(url);
  };

  const downloadFile = async (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleDownload = async () => {
    if (!isValidUrl) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid TikTok video URL",
        variant: "destructive",
      });
      return;
    }

    setIsDownloading(true);
    let filenameToCleanup: string | null = null;

    try {
      const processResponse = await fetch(`${BACKEND_URL}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      });

      if (!processResponse.ok) {
        const errorData = await processResponse.json().catch(() => ({ detail: 'Unknown error during processing.' }));
        throw new Error(errorData.detail || 'Video processing failed at backend.');
      }

      const data = await processResponse.json();
      filenameToCleanup = data.filename;

      if (!filenameToCleanup) {
        throw new Error("Failed to get unique filename from backend.");
      }

      const fileResponse = await fetch(`${BACKEND_URL}/serve-video/${filenameToCleanup}`);

      if (!fileResponse.ok) {
        const errorData = await fileResponse.json().catch(() => ({ detail: 'Unknown error during file fetch.' }));
        throw new Error(errorData.detail || 'Failed to fetch video file from backend.');
      }

      const videoBlob = await fileResponse.blob();
      await downloadFile(videoBlob, filenameToCleanup);

      toast({
        title: "Download Complete",
        description: "Your video has been downloaded successfully!",
      });

      if (filenameToCleanup && filenameToCleanup !== 'tiktok_video.mp4') {
        try {
          const cleanupResponse = await fetch(`${BACKEND_URL}/cleanup/${filenameToCleanup}`, {
            method: 'DELETE',
          });
          if (!cleanupResponse.ok) {
            const cleanupErrorData = await cleanupResponse.json().catch(() => ({ detail: 'Cleanup failed.' }));
            console.warn(`Cleanup failed: ${cleanupErrorData.detail}`);
          }
        } catch (cleanupError) {
          console.error(`Error during cleanup call:`, cleanupError);
        }
      }

      setVideoUrl('');
      setIsValidUrl(false);
    } catch (error) {
      console.error('Download process error:', error);
      toast({
        title: "Operation Failed",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-tiktool-cyan/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/2 w-[600px] h-[600px] bg-tiktool-magenta/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 mt-20">
          <div className="mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoforme.png?20250516192741"
              alt="TikTool Logo"
              className="h-24 md:h-32 w-auto mx-auto drop-shadow-[0_0_15px_rgba(0,229,229,0.5)] animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            TikTok Video <span className="text-gradient glow">Downloader</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-200">
            Just paste the link and we'll handle the rest.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 shadow-glow-subtle max-w-2xl mx-auto animate-scale-in opacity-0 animation-delay-300">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="video-url" className="text-lg font-medium">
                TikTok Video URL
              </Label>
              <div className="relative">
                <Input
                  id="video-url"
                  type="url"
                  placeholder="https://vm.tiktok.com/... or https://www.tiktok.com/..."
                  value={videoUrl}
                  onChange={handleUrlChange}
                  className={`h-14 text-lg pr-12 ${
                    videoUrl && !isValidUrl
                      ? 'border-red-500 focus-visible:ring-red-500'
                      : videoUrl && isValidUrl
                      ? 'border-green-500 focus-visible:ring-green-500'
                      : ''
                  }`}
                  disabled={isDownloading}
                />
                {videoUrl && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {isValidUrl ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <AlertCircle className="text-red-500" size={20} />
                    )}
                  </div>
                )}
              </div>
              {videoUrl && !isValidUrl && (
                <p className="text-red-400 text-sm">
                  Please enter a valid TikTok URL (vm.tiktok.com or tiktok.com)
                </p>
              )}
            </div>

            <Button
              onClick={handleDownload}
              disabled={!isValidUrl || isDownloading}
              size="lg"
              className="w-full h-14 text-lg bg-tiktool-gradient hover:brightness-110 transition-all font-medium rounded-xl shadow-glow group"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="mr-2 group-hover:animate-bounce" size={20} />
                  Download Video
                </>
              )}
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-center">How it works</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="text-center">
                <div className="w-8 h-8 bg-tiktool-gradient rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">
                  1
                </div>
                <p>Paste your TikTok video URL</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-tiktool-gradient rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">
                  2
                </div>
                <p>Click the download button</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-tiktool-gradient rounded-full flex items-center justify-center mx-auto mb-2 text-black font-bold">
                  3
                </div>
                <p>Get your video file</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up opacity-0 animation-delay-500">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-2xl mb-2">🎬</div>
            <h3 className="font-semibold mb-2">High Quality</h3>
            <p className="text-sm text-gray-300">Download videos in the best possible quality</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Fast Download</h3>
            <p className="text-sm text-gray-300">Quick processing and download speeds</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-sm text-gray-300">Bypass TikTok's meta-data checks</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-2xl mb-2">💯</div>
            <h3 className="font-semibold mb-2">No ads</h3>
            <p className="text-sm text-gray-300">No hidden fees or ads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloader;
