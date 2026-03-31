"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Proprietario, Restaurante Villa Italiana",
    content: "O MWN CORE transformou completamente nossa operacao. Reduzimos o tempo de espera em 60% e nossos clientes amam a praticidade. O melhor investimento que fizemos.",
    rating: 5,
    avatar: "CS"
  },
  {
    name: "Ana Beatriz Santos",
    role: "Gerente, Hamburgueria The Best",
    content: "A cozinha inteligente e um diferencial absurdo. Nossos cozinheiros trabalham muito mais tranquilos e os erros praticamente zeraram. Recomendo demais!",
    rating: 5,
    avatar: "AB"
  },
  {
    name: "Roberto Mendes",
    role: "CEO, Rede Sabor & Arte",
    content: "Implementamos em 15 unidades e o resultado foi impressionante. Os relatorios nos deram insights que nunca tinhamos. O suporte e excepcional.",
    rating: 5,
    avatar: "RM"
  },
  {
    name: "Juliana Costa",
    role: "Dona, Cafe & Bistr o JC",
    content: "Comecei com o plano Starter e ja vi resultado no primeiro mes. Meus clientes adoram escanear o QR e fazer o pedido sem pressa. Super intuitivo!",
    rating: 5,
    avatar: "JC"
  }
]

export function TestimonialsSection() {
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
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            O Que Nossos Clientes{" "}
            <span className="gradient-text">Dizem</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Mais de 500 restaurantes ja confiam na MWN CORE. Veja o que eles tem a dizer.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-[#00D4FF]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#6366F1] flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
