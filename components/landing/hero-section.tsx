"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0A0E17]">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/20 rounded-full blur-[120px]" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Comanda X"
                width={28}
                height={28}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-white">Comanda <span className="text-[#00D4FF]">X</span></p>
                <p className="text-xs text-gray-300">Sistema inteligente para restaurantes</p>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Revolucione seu</span>
              <br />
              <span className="gradient-text">Restaurante</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Sistema inteligente com QR Code interativo e Cozinha Inteligente. 
              Transforme a experiencia dos seus clientes e maximize sua eficiencia operacional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold px-8 py-6 rounded-full text-lg hover:opacity-90 transition-all group"
              >
                <Link href="#contato">
                  Solicitar Demonstracao
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white font-semibold px-8 py-6 rounded-full text-lg hover:bg-white/10 transition-all group"
              >
                <Link href="#features">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Como Funciona
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#00D4FF]">50%</p>
                <p className="text-sm text-gray-400 mt-1">Menos tempo de espera</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#00D4FF]">30%</p>
                <p className="text-sm text-gray-400 mt-1">Aumento no ticket</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-[#00D4FF]">99%</p>
                <p className="text-sm text-gray-400 mt-1">Precisao nos pedidos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/30 to-[#6366F1]/30 rounded-[3rem] blur-2xl" />
              
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-[#1A1F2E] rounded-[3rem] p-3 border border-white/10 shadow-2xl animate-float">
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                
                {/* Phone screen */}
                <div className="w-full h-full bg-gradient-to-b from-[#0F1419] to-[#0A0E17] rounded-[2.5rem] overflow-hidden relative">
                  {/* App Content */}
                  <div className="p-6 pt-12 flex flex-col h-full">
                    {/* App Header */}
                    <div className="flex justify-center mb-8">
                      <Image
                        src="/images/logo.jpeg"
                        alt="Comanda X"
                        width={80}
                        height={80}
                        className="rounded-xl"
                      />
                    </div>
                    
                    <h2 className="text-xl font-bold text-center text-white mb-2">
                      Bem-vindo ao Comanda <span className="text-[#00D4FF]">X</span>
                    </h2>
                    <p className="text-sm text-gray-400 text-center mb-8">
                      Faca login para continuar
                    </p>

                    {/* Login Form */}
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400">Usuario</label>
                        <div className="w-full h-12 bg-[#1A1F2E] rounded-xl border border-white/10 flex items-center px-4">
                          <span className="text-gray-500 text-sm">seu@email.com</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400">Senha</label>
                        <div className="w-full h-12 bg-[#1A1F2E] rounded-xl border border-white/10 flex items-center px-4">
                          <span className="text-gray-500 text-sm">••••••••</span>
                        </div>
                      </div>
                      
                      <button className="w-full h-12 bg-gradient-to-r from-[#00D4FF] to-[#6366F1] rounded-xl text-white font-semibold mt-6">
                        Entrar
                      </button>
                      
                      <p className="text-xs text-center text-gray-500 mt-4">
                        Esqueceu a senha?{" "}
                        <span className="text-[#00D4FF]">Recuperar</span>
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="w-32 h-1 bg-white/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-8 top-20 glass px-4 py-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#6366F1] rounded-lg flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">QR Code</p>
                    <p className="text-sm font-semibold text-white">Escaneado!</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-32 glass px-4 py-3 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#10B981] to-[#00D4FF] rounded-lg flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Pedido</p>
                    <p className="text-sm font-semibold text-white">Confirmado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
