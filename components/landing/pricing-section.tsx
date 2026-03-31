"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Para restaurantes pequenos que querem comecar",
    price: "297",
    period: "/mes",
    features: [
      "Ate 10 mesas",
      "QR Code personalizado",
      "Cardapio digital",
      "Pedidos via celular",
      "Painel basico",
      "Suporte por email"
    ],
    cta: "Comecar Agora",
    popular: false
  },
  {
    name: "Professional",
    description: "Para restaurantes em crescimento",
    price: "597",
    period: "/mes",
    features: [
      "Ate 30 mesas",
      "Tudo do Starter +",
      "Cozinha Inteligente",
      "Pagamento integrado",
      "Relatorios avancados",
      "Gestao de estoque",
      "Suporte prioritario"
    ],
    cta: "Escolher Professional",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Para redes e grandes operacoes",
    price: "Sob consulta",
    period: "",
    features: [
      "Mesas ilimitadas",
      "Tudo do Professional +",
      "Multi-unidades",
      "API personalizada",
      "Integracao ERP",
      "Gerente de conta dedicado",
      "SLA garantido"
    ],
    cta: "Falar com Vendas",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="precos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-medium mb-6">
            Precos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Planos que Cabem no{" "}
            <span className="gradient-text">Seu Orcamento</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Sem taxas ocultas, sem contratos longos. Cancele quando quiser. 
            Todos os planos incluem 14 dias de teste gratis.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#6366F1]/20 to-[#0F1419] border-[#6366F1]/50 scale-105"
                  : "bg-[#0F1419] border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Sob consulta" && (
                    <span className="text-2xl text-gray-400">R$</span>
                  )}
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#00D4FF]" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full py-6 rounded-xl font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:opacity-90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Link href="#contato">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Precisa de algo diferente? Entre em contato e criamos um plano personalizado.
        </p>
      </div>
    </section>
  )
}
