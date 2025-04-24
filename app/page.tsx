import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TrustSection from "@/components/trust-section"
import WaitlistSection from "@/components/waitlist-section"
import Footer from "@/components/footer"
import ConnectingElements from "@/components/connecting-elements"
import ParallaxScroll from "@/components/parallax-scroll"
import MiniCountdown from "@/components/mini-countdown"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global connecting elements */}
      <ConnectingElements />
      <ParallaxScroll />

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <WaitlistSection />
      <Footer />
      <MiniCountdown />
    </div>
  )
}
