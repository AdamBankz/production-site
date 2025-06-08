import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Use Vite's import.meta.glob to import all pages
const modules = import.meta.glob('./pages/*.tsx');

type RouteConfig = {
  path: string;
  Component: React.ComponentType;
};

export default function AppRoutes() {
  const [routes, setRoutes] = React.useState<RouteConfig[]>([]);

  React.useEffect(() => {
    // Load all modules and build routes array
    Promise.all(
      Object.entries(modules).map(async ([filePath, resolver]) => {
        const mod = await resolver();
        // Extract filename like 'Home' from './pages/Home.tsx'
        const fileName = filePath.match(/\.\/pages\/(.*)\.tsx$/)![1];
        // Define path: 'Home' -> '/', others lowercase, e.g. 'SomePage' -> '/somepage'
        const path = fileName.toLowerCase() === 'home' ? '/' : `/${fileName.toLowerCase()}`;

        return {
          path,
          Component: mod.default,
        };
      })
    ).then(setRoutes);
  }, []);

  if (routes.length === 0) return <div>Loading...</div>;

  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
