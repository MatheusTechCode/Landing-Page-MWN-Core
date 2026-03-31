"use client"

import { QrCode, Smartphone, Send, ChefHat, Bell, CreditCard } from "lucide-react"

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Escaneia o QR Code",
    description: "Cliente chega na mesa e escaneia o QR Code com o celular. Sem baixar app.",
    color: "from-[#00D4FF] to-[#3B82F6]"
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Navega no Cardapio",
    description: "Cardapio digital completo com fotos, precos e descricoes. Filtros e busca.",
    color: "from-[#3B82F6] to-[#6366F1]"
  },
  {
    icon: Send,
    number: "03",
    title: "Faz o Pedido",
    description: "Seleciona os itens, personaliza e envia direto para a cozinha.",
    color: "from-[#6366F1] to-[#8B5CF6]"
  },
  {
    icon: ChefHat,
    number: "04",
    title: "Cozinha Recebe",
    description: "Pedido aparece no painel da cozinha com prioridade automatica.",
    color: "from-[#8B5CF6] to-[#A855F7]"
  },
  {
    icon: Bell,
    number: "05",
    title: "Cliente e Notificado",
    description: "Quando pronto, cliente recebe notificacao no celular.",
    color: "from-[#A855F7] to-[#00D4FF]"
  },
  {
    icon: CreditCard,
    number: "06",
    title: "Pagamento Facil",
    description: "Paga pelo celular com PIX, cartao ou divide com amigos.",
    color: "from-[#00D4FF] to-[#00D4FF]"
  }
]

export function TimelineSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E17]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366F1]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium mb-6">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Simples para o Cliente,{" "}
            <span className="gradient-text">Poderoso para Voce</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Uma jornada fluida do momento em que o cliente senta ate o pagamento. 
            Tudo automatizado, tudo integrado.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D4FF] via-[#6366F1] to-[#00D4FF]" />

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector dot - Desktop */}
                <div className="hidden lg:block absolute -top-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A0E17] rounded-full border-2 border-[#00D4FF] group-hover:scale-125 transition-transform" style={{ top: '88px' }} />

                {/* Card */}
                <div className="p-8 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 h-full">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-white/10">{step.number}</span>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
