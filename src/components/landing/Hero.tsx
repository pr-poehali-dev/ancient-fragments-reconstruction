import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

export default function Hero() {
  const stats = [
    { value: 200, suffix: "+", label: "Сданных объектов" },
    { value: 15, suffix: " лет", label: "На рынке" },
    { value: 98, suffix: "%", label: "Довольных клиентов" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ filter: "brightness(0.9) contrast(1.1)" }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momotionmp4%20%282%29-js5jkz69E4tKFmKGf85Nu5y4Suf4GI.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span>Строительная компания полного цикла</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">СТРОИМ</span>
                <span className="block text-white mb-2">С ГАРАНТИЕЙ</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{ textShadow: "0 0 40px rgba(147, 51, 234, 0.5)" }}
                >
                  Качества
                </span>
                <span className="block text-gray-300">И В СРОК</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                СтройГрупп — надёжный партнёр в жилом и коммерческом строительстве. Берём проекты под ключ: от проектирования до сдачи объекта. Работаем честно, соблюдаем сроки и не выходим за рамки бюджета.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#contact">
                <AnimatedButton variant="slim" className="bg-white text-black hover:bg-gray-100">
                  <span className="flex items-center">
                    Получить консультацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="ShieldCheck" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Гарантия</p>
                    <p className="text-xs text-gray-400">5 лет на работы</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="BadgeCheck" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Лицензия СРО</p>
                    <p className="text-xs text-gray-400">Все допуски</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="Clock" size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Точно в срок</p>
                    <p className="text-xs text-gray-400">Штраф за просрочку</p>
                  </div>
                </div>
              </div>

              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
