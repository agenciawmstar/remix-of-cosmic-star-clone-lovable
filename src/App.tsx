import { Toaster as Sonner } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Privacidade = lazy(() => import("./pages/Privacidade"));

const App = () => (
  <>
    <Sonner />
    <SpeedInsights />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacidade" element={<Suspense fallback={null}><Privacidade /></Suspense>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
