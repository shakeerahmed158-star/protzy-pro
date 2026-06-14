import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/hero-section";
import StatsStrip from "../components/home/stats-strip";
import CategoriesSection from "../components/home/categories-section";
import BrandSlider from "../components/home/brand-slider";
import HotDeals from "../components/home/HotDeals";
import HowItWorks from "../components/home/how-it-works";
import Testimonials from "../components/home/testimonials";
import Blogs from "../components/home/Blogs";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/cta-section";
import Footer from "../components/home/footer";
import SEOSection from "../components/home/SEOSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f9ff] text-black">

      <Navbar />

      <HeroSection />

      <StatsStrip />

      <CategoriesSection />

      <BrandSlider />

      <HotDeals />

      <HowItWorks />

      <Testimonials />

      <Blogs />

      <FAQ />

      <CTASection />

      <SEOSection />

      <Footer />

    </main>
  );
}