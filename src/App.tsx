
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MobileBottomNav from "@/components/MobileBottomNav";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MobileBottomNav onFilterClick={location.pathname === '/catalog' ? () => {
        const event = new CustomEvent('openFilters');
        window.dispatchEvent(event);
      } : undefined} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;