"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Coins, Lock, Zap, BarChart3, Globe } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-green-400" />,
    title: "AI-Powered Trading",
    description: "Advanced algorithms analyze market trends and execute trades with unprecedented accuracy.",
  },
  {
    icon: <Lock className="h-10 w-10 text-green-400" />,
    title: "Enhanced Security",
    description: "Military-grade encryption and blockchain technology ensure your assets remain secure.",
  },
  {
    icon: <Coins className="h-10 w-10 text-green-400" />,
    title: "Staking Rewards",
    description: "Earn passive income by staking your Invictus tokens with competitive APY rates.",
  },
  {
    icon: <Zap className="h-10 w-10 text-green-400" />,
    title: "Lightning Fast",
    description: "Experience near-instant transactions with minimal fees across the network.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-green-400" />,
    title: "Predictive Analytics",
    description: "Our AI models forecast market movements to help you make informed decisions.",
  },
  {
    icon: <Globe className="h-10 w-10 text-green-400" />,
    title: "Global Ecosystem",
    description: "Join a worldwide community of innovators shaping the future of finance.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="pt-10 pb-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Innovation</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invictus AI combines cutting-edge AI technology with blockchain to deliver a revolutionary crypto
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/80 backdrop-blur-sm border-green-500/20 hover:border-green-500/50 transition-all duration-300 h-full hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/40 hover:-translate-y-1 relative z-20">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connecting element to next section - adjusted positioning */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0"></div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-green-500/30 to-transparent z-10"></div>
      </div>
    </section>
  )
}
