import TwitterAssets from "@/components/twitter-assets"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ConnectingElements from "@/components/connecting-elements"

export default function TwitterAssetsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ConnectingElements />

      {/* Static glow effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] z-0"></div>

      <Navbar />

      <main className="relative z-10 py-32">
        <TwitterAssets />
      </main>

      <Footer />
    </div>
  )
}
