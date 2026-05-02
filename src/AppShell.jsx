import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SiteFooter from "./components/layout/SiteFooter";
import ScrollTopButton from "./components/layout/ScrollTopButton";
import SiteNavbar from "./components/layout/SiteNavbar";
import RouteScrollReset from "./components/ui/RouteScrollReset";
import HomePage from "./pages/HomePageV2";
import AboutPage from "./pages/AboutPageV2";
import ApplyJobPage from "./pages/ApplyJobPageV2";
import BlogArticlePage from "./pages/BlogArticlePageV2";
import BlogPage from "./pages/BlogPageV2";
import CareersPage from "./pages/CareersPageV2";
import ContactPage from "./pages/ContactPageV2";
import FaqPage from "./pages/FaqPageV2";
import FireSafetyPage from "./pages/FireSafetyPageV2";
import PrivacyPage from "./pages/PrivacyPageV2";
import SitemapPage from "./pages/SitemapPageV2";
import TeamPage from "./pages/TeamPageV2";
import TechnologyPage from "./pages/TechnologyPageV2";
import TermsPage from "./pages/TermsPageV2";
import ServicesPage from "./pages/ServicesPageV2";

function AppShell() {
  return (
    <BrowserRouter>
      <RouteScrollReset />
      <ToastContainer autoClose={3000} position="top-right" theme="colored" />

      <div className="min-h-screen">
        <SiteNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/About Us" element={<AboutPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/LetsConnect" element={<ContactPage />} />

          <Route path="/careers" element={<CareersPage />} />
          <Route path="/workwithus" element={<CareersPage />} />
          <Route path="/apply/:id" element={<ApplyJobPage />} />

          <Route path="/faq" element={<FaqPage />} />
          <Route path="/fire-safety" element={<FireSafetyPage />} />
          <Route path="/fire" element={<FireSafetyPage />} />

          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/Privacy" element={<PrivacyPage />} />

          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/termsofservices" element={<TermsPage />} />

          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/Sitemap" element={<SitemapPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/Blog" element={<Navigate to="/blog" replace />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <SiteFooter />
        <ScrollTopButton />
      </div>
    </BrowserRouter>
  );
}

export default AppShell;
