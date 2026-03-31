"use client"

import { 
  QrCode, 
  Smartphone, 
  CreditCard, 
  Bell, 
  LayoutDashboard,
  Users,
  Package,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Clock
} from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "QR Code por Mesa",
    description: "Cada mesa tem seu QR Code unico. Clientes escaneiam e acessam o cardapio instantaneamente."
  },
  {
    icon: Smartphone,
    title: "Cardapio Interativo",
    description: "Fotos de alta qualidade, descricoes detalhadas, filtros por categoria e busca inteligente."
  },
  {
    icon: CreditCard,
    title: "Pagamento Integrado",
    description: "PIX, cartoes e carteiras digitais. Divisao de conta automatica entre clientes."
  },
  {
    icon: Bell,
    title: "Notificacoes em Tempo Real",
    description: "Clientes sabem exatamente quando o pedido esta pronto. Sem gritos, sem confusao."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Completo",
    description: "Visao geral do restaurante em tempo real. Mesas, pedidos, faturamento e muito mais."
  },
  {
    icon: Users,
    title: "Gestao de Equipe",
    description: "Controle de turnos, performance individual e distribuicao inteligente de tarefas."
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description: "Alerta de itens em baixa, sugestoes de reposicao e historico de consumo."
  },
  {
    icon: TrendingUp,
    title: "Relatorios Detalhados",
    description: "Graficos e insights sobre vendas, pratos populares e horarios de pico."
  },
  {
    icon: Shield,
    title: "Seguranca Maxima",
    description: "Dados criptografados, backups automaticos e conformidade com LGPD."
  },
  {
    icon: Zap,
    title: "Performance Ultra-rapida",
    description: "Sistema otimizado para funcionar mesmo com conexao instavel."
  },
  {
    icon: Globe,
    title: "Multi-idioma",
    description: "Cardapio traduzido automaticamente para turistas internacionais."
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe tecnica sempre disponivel para resolver qualquer problema."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0E17]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-medium mb-6">
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Tudo que Voce Precisa em{" "}
            <span className="gradient-text">Uma So Plataforma</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Cada funcionalidade foi pensada para resolver problemas reais do dia a dia 
            de quem opera um restaurante.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#6366F1]/20 flex items-center justify-center mb-4 group-hover:from-[#00D4FF]/30 group-hover:to-[#6366F1]/30 transition-colors">
                <feature.icon className="w-6 h-6 text-[#00D4FF]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
