import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TrustSection from "@/components/trust-section"
import WaitlistSection from "@/components/waitlist-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <WaitlistSection />
      <Footer />
    </div>
  )
}
