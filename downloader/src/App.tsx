
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@downloader/components/ui/toaster";
import { Toaster as Sonner } from "@downloader/components/ui/sonner";
import { TooltipProvider } from "@downloader/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Downloader from "./pages/Downloader";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Analytics />
      <BrowserRouter basename="/downloader">
        <Routes>
          <Route path="/" element={<Downloader />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
