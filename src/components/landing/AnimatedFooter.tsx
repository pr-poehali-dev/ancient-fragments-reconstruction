import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import Icon from "@/components/ui/icon"

export default function AnimatedFooter() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setName("")
    setPhone("")
  }

  return (
    <footer id="contact" className="relative bg-black border-t border-gray-800/50">
      {/* Contact Form Section */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Обсудим ваш проект</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Оставьте заявку — перезвоним в течение 2 часов и ответим на все вопросы.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-4"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              required
            />
            <div className="flex gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш телефон"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
              <AnimatedButton type="submit" className="bg-white text-black hover:bg-gray-100">
                <ArrowRight className="h-5 w-5" />
              </AnimatedButton>
            </div>
            {submitted && (
              <p className="text-green-400 text-center mt-4">Заявка принята! Мы свяжемся с вами в ближайшее время.</p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                СтройГрупп
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Строительная компания полного цикла. Жилые и коммерческие объекты под ключ с гарантией качества и соблюдением сроков.
            </p>

            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { icon: "ShieldCheck", label: "Гарантия" },
                { icon: "Award", label: "СРО" },
                { icon: "Clock", label: "В срок" },
              ].map(({ icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-gray-700 transition-colors">
                    <Icon name={icon} size={20} className="text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Услуги</h4>
              <ul className="space-y-4">
                {[
                  "Жилое строительство",
                  "Коммерческое строительство",
                  "Ремонт и реконструкция",
                  "Проектирование",
                  "Инженерные системы",
                  "Благоустройство",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center sm:justify-start group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>info@stroygrupp.ru</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>+7 (495) 000-00-00</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 justify-center sm:justify-start">
                  <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Москва, Россия</span>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    Оставить заявку
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} СтройГрупп. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Условия сотрудничества
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
