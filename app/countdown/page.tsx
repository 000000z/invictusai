import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import InteractiveBackground from "@/components/interactive-background"
import ConnectingElements from "@/components/connecting-elements"

export default function CountdownPage() {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col">
      {/* Background elements */}
      <InteractiveBackground />
      <ConnectingElements />

      {/* Static glow effect */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[100px] z-0"></div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center py-32 px-4 relative z-10">
        <div className="max-w-3xl w-full bg-black/60 backdrop-blur-md border border-green-500/20 rounded-xl p-8 md:p-12">
          <CountdownTimer />

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#waitlist">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold w-full">
                Join Waitlist
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 w-full"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
