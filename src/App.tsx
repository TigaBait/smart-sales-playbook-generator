
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SalesPlaybook from "./pages/SalesPlaybook";
import AIAutomation from "./pages/AIAutomation";
import WhyUs from "./pages/WhyUs";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Helmet>
          <title>Smart Sales Process | Sales Playbooks & AI Automation</title>
          <meta name="description" content="Custom sales playbooks and AI automation solutions for founders, solopreneurs, and small businesses." />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services/sales-playbook" element={<SalesPlaybook />} />
              <Route path="/services/ai-automation" element={<AIAutomation />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
