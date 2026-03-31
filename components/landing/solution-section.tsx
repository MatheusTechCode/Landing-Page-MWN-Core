"use client"

import { QrCode, Smartphone, ChefHat, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    icon: QrCode,
    title: "QR Code Inteligente",
    description: "Cardapio digital interativo acessado instantaneamente pelo celular do cliente. Sem app, sem espera.",
    color: "from-[#00D4FF] to-[#3B82F6]"
  },
  {
    icon: Smartphone,
    title: "Pedidos Digitais",
    description: "Clientes fazem pedidos diretamente do celular. Personalizam, adicionam observacoes e enviam para a cozinha.",
    color: "from-[#3B82F6] to-[#6366F1]"
  },
  {
    icon: ChefHat,
    title: "Cozinha Inteligente",
    description: "Painel em tempo real para a cozinha. Prioridades automaticas, status de preparo e comunicacao integrada.",
    color: "from-[#6366F1] to-[#8B5CF6]"
  },
  {
    icon: BarChart3,
    title: "Gestao Completa",
    description: "Dashboard com metricas em tempo real. Vendas, estoque, desempenho da equipe e insights acionaveis.",
    color: "from-[#8B5CF6] to-[#00D4FF]"
  }
]

export function SolutionSection() {
  return (
    <section id="solucao" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D4FF]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium mb-6">
            A Solucao
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            MWN CORE: Tecnologia que{" "}
            <span className="gradient-text">Transforma</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Uma plataforma completa que digitaliza toda a operacao do seu restaurante, 
            desde o momento em que o cliente senta ate o fechamento da conta.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Highlight */}
        <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-[#6366F1]/10 to-[#00D4FF]/10" />
          <div className="absolute inset-0 glass" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Tudo Integrado em Uma Unica Plataforma
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Do cardapio digital ao painel de gestao, cada componente trabalha em perfeita sincronia 
              para oferecer a melhor experiencia possivel.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold px-8 py-6 rounded-full text-lg hover:opacity-90 transition-all group"
            >
              <Link href="#features">
                Explorar Recursos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
