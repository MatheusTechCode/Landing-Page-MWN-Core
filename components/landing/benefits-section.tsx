"use client"

import { TrendingUp, Clock, Smile, DollarSign, Users, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "50% Menos Tempo de Espera",
    description: "Pedidos vao direto para a cozinha. Sem intermediarios, sem erros de comunicacao.",
    highlight: "-50%"
  },
  {
    icon: TrendingUp,
    title: "30% Mais Vendas",
    description: "Cardapio visual e sugestoes inteligentes aumentam o ticket medio naturalmente.",
    highlight: "+30%"
  },
  {
    icon: Smile,
    title: "Clientes Mais Satisfeitos",
    description: "Experiencia moderna e sem friccao gera avaliacoes positivas e fidelizacao.",
    highlight: "5 estrelas"
  },
  {
    icon: DollarSign,
    title: "Reducao de Custos",
    description: "Menos garcons necessarios, menos erros, menos desperdicio de ingredientes.",
    highlight: "-25%"
  },
  {
    icon: Users,
    title: "Equipe Mais Produtiva",
    description: "Colaboradores focam no atendimento de qualidade, nao em tarefas repetitivas.",
    highlight: "2x"
  },
  {
    icon: BarChart3,
    title: "Decisoes Baseadas em Dados",
    description: "Relatorios detalhados para entender seu negocio e tomar decisoes estrategicas.",
    highlight: "Insights"
  }
]

export function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#00D4FF]/10 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Resultados Reais para{" "}
            <span className="gradient-text">Seu Negocio</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Nossos clientes ja estao colhendo os frutos da transformacao digital. 
            Veja o que voce pode esperar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-green-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-6 right-6">
                <span className="text-2xl font-bold gradient-text">
                  {benefit.highlight}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-green-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 pr-16">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
