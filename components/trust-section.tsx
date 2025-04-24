"use client"

import { motion } from "framer-motion"
import { Shield, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8 text-green-400" />,
    value: "50,000+",
    label: "Community Members",
  },
  {
    icon: <Shield className="h-8 w-8 text-green-400" />,
    value: "100%",
    label: "Secure Transactions",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-400" />,
    value: "24/7",
    label: "Market Monitoring",
  },
  {
    icon: <Award className="h-8 w-8 text-green-400" />,
    value: "5+",
    label: "Industry Awards",
  },
]

export default function TrustSection() {
  return (
    <section id="about" className="pt-10 pb-32 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Invictus</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built on a foundation of security, transparency, and innovation to ensure your confidence in our ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/80 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/40 hover:-translate-y-1 hover:border-green-500/50 relative z-20"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Audited & Secure</h3>
            <p className="text-gray-400 mb-6">
              Our smart contracts have undergone rigorous security audits by leading blockchain security firms to ensure
              the highest level of protection for your assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/80 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm">
                CertiK Audited
              </div>
              <div className="bg-black/80 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm">
                SlowMist Verified
              </div>
              <div className="bg-black/80 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm">
                PeckShield Approved
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <div className="aspect-video rounded-lg overflow-hidden border border-green-500/20 bg-black/80">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Security visualization"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-2">Enterprise-Grade Security</h4>
                    <p className="text-gray-300">
                      Our multi-layered security approach combines AI threat detection with blockchain immutability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Connecting element to next section - adjusted positioning */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-green-500/30 to-transparent z-10"></div>
    </section>
  )
}
