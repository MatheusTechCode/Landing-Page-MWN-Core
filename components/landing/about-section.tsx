"use client"

import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Missao",
    description: "Democratizar a tecnologia para restaurantes de todos os tamanhos, tornando a gestao mais simples e eficiente."
  },
  {
    icon: Eye,
    title: "Visao",
    description: "Ser a plataforma numero 1 em digitalizacao de restaurantes na America Latina ate 2027."
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Inovacao constante, foco no cliente, simplicidade radical e impacto positivo no setor de alimentacao."
  }
]

const stats = [
  { value: "500+", label: "Restaurantes" },
  { value: "2M+", label: "Pedidos/mes" },
  { value: "98%", label: "Satisfacao" },
  { value: "24/7", label: "Suporte" }
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E17]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium mb-6">
              Sobre Nos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Conheca a{" "}
              <span className="gradient-text">MWN CORE</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Somos uma startup brasileira apaixonada por resolver problemas reais do setor 
              de alimentacao. Nossa equipe combina expertise em tecnologia, design e operacoes 
              de restaurante para criar solucoes que realmente funcionam.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Fundada em 2024, a MWN CORE nasceu da frustracao com sistemas antiquados e 
              complexos. Acreditamos que tecnologia deve simplificar, nao complicar.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#6366F1]/20 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo & Stats */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/20 to-[#6366F1]/20 rounded-3xl blur-2xl" />
            
            {/* Card */}
            <div className="relative bg-[#0F1419] rounded-3xl p-8 border border-white/10">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/30 to-[#6366F1]/30 rounded-2xl blur-xl" />
                  <Image
                    src="/images/logo.jpeg"
                    alt="MWN CORE"
                    width={200}
                    height={200}
                    className="relative rounded-2xl"
                  />
                </div>
              </div>

              {/* Company Name */}
              <h3 className="text-3xl font-bold text-center text-white mb-2">
                MWN <span className="text-[#00D4FF]">CORE</span>
              </h3>
              <p className="text-center text-gray-400 mb-8">
                Tecnologia Inteligente para Restaurantes
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#1A1F2E] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
