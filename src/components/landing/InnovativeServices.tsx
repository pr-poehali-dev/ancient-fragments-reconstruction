import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import AnimatedButton from "./AnimatedButton"

const services = [
  {
    title: "Жилое строительство",
    description: "Строим частные дома, коттеджи и малоэтажные жилые комплексы. Работаем по индивидуальным проектам и типовым решениям.",
    mockup: "residential",
    icon: "Home",
  },
  {
    title: "Коммерческое строительство",
    description: "Возводим офисные здания, торговые центры, склады и производственные объекты с соблюдением всех норм.",
    mockup: "commercial",
    icon: "Building2",
  },
  {
    title: "Ремонт и реконструкция",
    description: "Капитальный ремонт, перепланировка и реконструкция зданий любой сложности под ключ.",
    mockup: "renovation",
    icon: "Wrench",
  },
  {
    title: "Проектирование",
    description: "Разрабатываем архитектурные и конструктивные проекты, согласовываем документацию в контролирующих органах.",
    mockup: "design",
    icon: "Ruler",
  },
  {
    title: "Благоустройство территории",
    description: "Ландшафтный дизайн, мощение, ограждения, парковки, детские и спортивные площадки.",
    mockup: "landscaping",
    icon: "Trees",
  },
  {
    title: "Инженерные системы",
    description: "Монтаж электрики, водоснабжения, канализации, отопления, вентиляции и кондиционирования.",
    mockup: "engineering",
    icon: "Zap",
  },
]

function ServiceMockup({ mockup }: { mockup: string }) {
  const colors: Record<string, string> = {
    residential: "from-blue-500/30 to-blue-600/10",
    commercial: "from-purple-500/30 to-purple-600/10",
    renovation: "from-orange-500/30 to-orange-600/10",
    design: "from-cyan-500/30 to-cyan-600/10",
    landscaping: "from-green-500/30 to-green-600/10",
    engineering: "from-yellow-500/30 to-yellow-600/10",
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${colors[mockup] || "from-gray-700 to-gray-800"} flex items-center justify-center`}>
      <div className="w-full max-w-[180px] space-y-3 p-4">
        <div className="bg-white/10 h-16 rounded-xl flex items-center justify-center">
          <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="bg-white/20 h-2 w-full rounded"></div>
          <div className="bg-white/20 h-2 w-3/4 rounded"></div>
          <div className="bg-white/20 h-2 w-1/2 rounded"></div>
        </div>
        <div className="flex space-x-2">
          <div className="bg-white/10 h-8 flex-1 rounded-lg"></div>
          <div className="bg-white/30 h-8 w-16 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default function InnovativeServices() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Чем мы занимаемся</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Полный спектр строительных услуг — от разработки проекта до сдачи объекта под ключ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Service List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(index)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  activeService === index
                    ? "bg-gray-800/80 border-blue-500/50"
                    : "bg-gray-900/30 border-gray-800/50 hover:border-gray-700/50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activeService === index ? "bg-blue-500/20 text-blue-400" : "bg-gray-800 text-gray-400"
                  }`}>
                    <Icon name={service.icon} size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${activeService === index ? "text-white" : "text-gray-300"}`}>
                      {service.title}
                    </h3>
                    {activeService === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-gray-400 text-sm mt-2 leading-relaxed"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mockup Preview */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-28"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
              <div className="aspect-video">
                <ServiceMockup mockup={services[activeService].mockup} />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Icon name={services[activeService].icon} size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{services[activeService].description}</p>
                <a href="#contact">
                  <AnimatedButton className="bg-white text-black hover:bg-gray-100 w-full">
                    Обсудить проект
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}