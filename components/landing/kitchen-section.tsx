"use client"

import { Monitor, Timer, AlertCircle, CheckCircle2, ChefHat } from "lucide-react"

const kitchenFeatures = [
  {
    icon: Monitor,
    title: "Display Digital",
    description: "Tela dedicada para a cozinha com todos os pedidos em tempo real, organizados por prioridade."
  },
  {
    icon: Timer,
    title: "Tempo de Preparo",
    description: "Cada pedido mostra o tempo desde que foi feito. Alertas automaticos para evitar atrasos."
  },
  {
    icon: AlertCircle,
    title: "Prioridades Inteligentes",
    description: "O sistema reordena automaticamente baseado em tempo de espera e complexidade do prato."
  },
  {
    icon: CheckCircle2,
    title: "Confirmacao Simples",
    description: "Um toque para marcar como pronto. Notificacao instantanea para garcom e cliente."
  }
]

const orderStatuses = [
  { id: 1, table: "Mesa 12", items: ["1x Picanha", "2x Arroz"], time: "2 min", status: "preparing", priority: "high" },
  { id: 2, table: "Mesa 5", items: ["1x Salada Caesar", "1x Suco"], time: "5 min", status: "preparing", priority: "medium" },
  { id: 3, table: "Mesa 8", items: ["2x Hamburguer", "2x Batata"], time: "8 min", status: "waiting", priority: "low" },
]

export function KitchenSection() {
  return (
    <section id="cozinha" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#6366F1]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-medium mb-6">
              Diferencial Exclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Cozinha{" "}
              <span className="gradient-text">Inteligente</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              O coracao do seu restaurante merece tecnologia de ponta. 
              Nosso sistema de cozinha inteligente elimina erros, reduz estresse 
              e aumenta drasticamente a produtividade da sua equipe.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {kitchenFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Kitchen Display Mockup */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 rounded-3xl blur-2xl" />
            
            {/* Display Frame */}
            <div className="relative bg-[#0F1419] rounded-3xl p-4 border border-white/10 shadow-2xl">
              {/* Display Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">MWN Kitchen</h3>
                    <p className="text-xs text-gray-500">Painel da Cozinha</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-500">Online</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-[#1A1F2E] rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-[#00D4FF]">12</p>
                  <p className="text-xs text-gray-500">Em preparo</p>
                </div>
                <div className="bg-[#1A1F2E] rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-yellow-500">5</p>
                  <p className="text-xs text-gray-500">Aguardando</p>
                </div>
                <div className="bg-[#1A1F2E] rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-green-500">28</p>
                  <p className="text-xs text-gray-500">Entregues</p>
                </div>
              </div>

              {/* Orders List */}
              <div className="space-y-3">
                {orderStatuses.map((order) => (
                  <div
                    key={order.id}
                    className={`p-4 rounded-xl border ${
                      order.priority === "high"
                        ? "bg-red-500/10 border-red-500/30"
                        : order.priority === "medium"
                        ? "bg-yellow-500/10 border-yellow-500/30"
                        : "bg-[#1A1F2E] border-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-sm font-semibold text-white">{order.table}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          order.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : order.priority === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}>
                          {order.priority === "high" ? "Urgente" : order.priority === "medium" ? "Normal" : "Baixa"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Timer className="w-3 h-3" />
                        <span className="text-xs">{order.time}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {order.items.join(" • ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="w-full py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl text-white font-semibold text-sm">
                  Ver Todos os Pedidos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
