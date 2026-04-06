import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"
import AnimatedButton from "./AnimatedButton"

const categories = ["Все", "Жилые", "Коммерческие", "Реконструкция"]

const objects = [
  {
    title: "ЖК «Северный квартал»",
    category: "Жилые",
    area: "12 500 м²",
    year: "2024",
    description: "Малоэтажный жилой комплекс из 4 корпусов с подземной парковкой и благоустроенной территорией.",
    tags: ["Монолит", "Энергоэффективность A+", "Сдан в срок"],
    color: "from-blue-500/20 to-blue-600/5",
    icon: "Building",
  },
  {
    title: "БЦ «Технопарк»",
    category: "Коммерческие",
    area: "8 200 м²",
    year: "2023",
    description: "Современный бизнес-центр класса B+ с открытой планировкой, конференц-залами и системой «умный офис».",
    tags: ["Стальной каркас", "Умные системы", "LEED сертификат"],
    color: "from-purple-500/20 to-purple-600/5",
    icon: "Briefcase",
  },
  {
    title: "Коттеджный посёлок «Лесной»",
    category: "Жилые",
    area: "35 домов",
    year: "2024",
    description: "35 индивидуальных домов площадью 150–280 м² с отделкой под ключ, инженерными сетями и дорогами.",
    tags: ["Под ключ", "Газ и вода", "Охраняемая территория"],
    color: "from-green-500/20 to-green-600/5",
    icon: "Home",
  },
  {
    title: "Завод «МеталлПром»",
    category: "Коммерческие",
    area: "22 000 м²",
    year: "2023",
    description: "Производственный корпус с мостовыми кранами, административным блоком и складским комплексом.",
    tags: ["Промышленный", "Краны до 50т", "Пожарная безопасность"],
    color: "from-orange-500/20 to-orange-600/5",
    icon: "Factory",
  },
  {
    title: "Торговый центр «Панорама»",
    category: "Реконструкция",
    area: "6 800 м²",
    year: "2022",
    description: "Полная реконструкция советского здания под современный ТЦ с заменой инженерных систем и фасада.",
    tags: ["Реконструкция", "Новый фасад", "+40% площади"],
    color: "from-cyan-500/20 to-cyan-600/5",
    icon: "ShoppingBag",
  },
  {
    title: "Детский сад «Радуга»",
    category: "Коммерческие",
    area: "2 400 м²",
    year: "2022",
    description: "Детский сад на 180 мест с игровыми зонами, бассейном и озеленённой территорией. Госконтракт.",
    tags: ["Госконтракт", "Бассейн", "Сдан досрочно"],
    color: "from-pink-500/20 to-pink-600/5",
    icon: "Star",
  },
]

export default function Objects() {
  const [activeCategory, setActiveCategory] = useState("Все")

  const filtered = activeCategory === "Все" ? objects : objects.filter((o) => o.category === activeCategory)

  return (
    <section id="objects" className="py-24 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Наши объекты</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Более 200 реализованных проектов — жилые дома, коммерческие здания и масштабные реконструкции.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${obj.color} border border-gray-800/50 rounded-3xl p-6 hover:border-gray-700/50 transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-blue-400">
                  <Icon name={obj.icon} size={24} />
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">{obj.year}</div>
                  <div className="text-sm font-medium text-gray-300">{obj.area}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {obj.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{obj.description}</p>

              <div className="flex flex-wrap gap-2">
                {obj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full border border-gray-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <AnimatedButton className="bg-white text-black hover:bg-gray-100">
              Обсудить ваш объект
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
