import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    title: "Заявка и консультация",
    description: "Вы оставляете заявку, мы связываемся в течение 2 часов. Обсуждаем задачу, выезжаем на объект, оцениваем объём работ.",
    icon: "Phone",
    gradient: "from-blue-500/20 to-blue-600/10",
    checks: ["Бесплатная консультация", "Выезд специалиста", "Без обязательств"],
  },
  {
    number: "02",
    title: "Смета и договор",
    description: "Составляем детальную смету без скрытых платежей. Фиксируем стоимость, сроки и ответственность в договоре.",
    icon: "FileText",
    gradient: "from-purple-500/20 to-purple-600/10",
    checks: ["Фиксированная цена", "Чёткие сроки", "Штраф за просрочку"],
  },
  {
    number: "03",
    title: "Строительство и сдача",
    description: "Ведём работы по графику, регулярно информируем вас о ходе. Сдаём объект с полным пакетом документов и гарантией.",
    icon: "HardHat",
    gradient: "from-green-500/20 to-green-600/10",
    checks: ["Еженедельные отчёты", "Контроль качества", "Гарантия 5 лет"],
  },
]

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Простой и прозрачный процесс — от первого звонка до ключей в руках.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${step.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group`}
            >
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name={step.icon} size={32} className="text-blue-400" />
                    </div>
                    <div className="space-y-2 px-4">
                      {step.checks.map((check) => (
                        <div key={check} className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-gray-300">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-600">{step.number}</div>
                  <div className="text-blue-400">
                    <Icon name={step.icon} size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
