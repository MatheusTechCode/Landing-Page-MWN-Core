"use client"

import { Clock, XCircle, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Longas Filas de Espera",
    description: "Clientes frustrados esperando para fazer pedidos enquanto garcons correm de um lado para o outro.",
    stat: "15 min",
    statLabel: "tempo medio de espera"
  },
  {
    icon: XCircle,
    title: "Erros nos Pedidos",
    description: "Anotacoes confusas levam a pratos errados, desperdicio de ingredientes e clientes insatisfeitos.",
    stat: "23%",
    statLabel: "taxa de erro comum"
  },
  {
    icon: Users,
    title: "Equipe Sobrecarregada",
    description: "Garcons e cozinheiros trabalhando no limite, impactando a qualidade do servico e bem-estar.",
    stat: "2x",
    statLabel: "mais estresse"
  },
  {
    icon: TrendingDown,
    title: "Lucros Estagnados",
    description: "Ineficiencias operacionais drenam recursos e impedem o crescimento do seu negocio.",
    stat: "40%",
    statLabel: "margem perdida"
  }
]

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E17]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Os Desafios que Todo Restaurante Enfrenta
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Processos manuais antiquados estao custando caro ao seu negocio. 
            E hora de modernizar e deixar a tecnologia trabalhar por voce.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-red-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-2xl font-bold text-red-400">{problem.stat}</p>
                <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-2">
            <span className="text-red-400 font-semibold">Nao deixe</span> esses problemas afetarem seu negocio.
          </p>
          <p className="text-gray-500">
            A solucao esta a apenas uma rolagem de distancia.
          </p>
        </div>
      </div>
    </section>
  )
}
