"use client"

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17] to-[#0F1419]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00D4FF]/10 to-[#6366F1]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-medium mb-6">
              Pronto para Comecar?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Transforme Seu Restaurante{" "}
              <span className="gradient-text">Hoje Mesmo</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Agende uma demonstracao gratuita e descubra como a MWN CORE pode 
              revolucionar a operacao do seu restaurante. Sem compromisso.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a href="tel:+5511999999999" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="text-white font-medium">(11) 99999-9999</p>
                </div>
              </a>
              <a href="mailto:contato@mwncore.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center group-hover:bg-[#6366F1]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#6366F1]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">contato@mwncore.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localizacao</p>
                  <p className="text-white font-medium">Sao Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold px-8 py-6 rounded-full text-lg hover:opacity-90 transition-all group"
              >
                <Link href="https://wa.me/5511999999999" target="_blank">
                  Agendar Demonstracao
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white font-semibold px-8 py-6 rounded-full text-lg hover:bg-white/10 transition-all"
              >
                <Link href="mailto:contato@mwncore.com">
                  Enviar Email
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/20 to-[#6366F1]/20 rounded-3xl blur-2xl" />
            
            {/* Card */}
            <div className="relative bg-[#0F1419] rounded-3xl p-8 border border-white/10">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/logo.jpeg"
                  alt="MWN CORE"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>

              <h3 className="text-xl font-semibold text-center text-white mb-6">
                Solicite uma Demonstracao
              </h3>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[#1A1F2E] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-[#1A1F2E] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 bg-[#1A1F2E] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome do Restaurante</label>
                  <input
                    type="text"
                    placeholder="Nome do seu restaurante"
                    className="w-full px-4 py-3 bg-[#1A1F2E] border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D4FF]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Quantas mesas?</label>
                  <select className="w-full px-4 py-3 bg-[#1A1F2E] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00D4FF]/50 transition-colors">
                    <option value="">Selecione</option>
                    <option value="1-10">1-10 mesas</option>
                    <option value="11-30">11-30 mesas</option>
                    <option value="31-50">31-50 mesas</option>
                    <option value="50+">Mais de 50 mesas</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold rounded-xl hover:opacity-90 transition-all mt-6"
                >
                  Solicitar Demonstracao Gratuita
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Ao enviar, voce concorda com nossa Politica de Privacidade
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
