"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  produto: [
    { label: "Recursos", href: "#features" },
    { label: "Cozinha Inteligente", href: "#cozinha" },
    { label: "Precos", href: "#precos" },
    { label: "Integrações", href: "#" }
  ],
  empresa: [
    { label: "Sobre Nos", href: "#sobre" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#contato" }
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Documentacao", href: "#" },
    { label: "Status do Sistema", href: "#" },
    { label: "API", href: "#" }
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "LGPD", href: "#" }
  ]
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" }
]

export function Footer() {
  return (
    <footer className="relative bg-[#0A0E17] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="MWN CORE"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">
                MWN <span className="text-[#00D4FF]">CORE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Revolucionando restaurantes com tecnologia inteligente. 
              QR Code interativo e Cozinha Inteligente para o seu negocio.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00D4FF]/20 hover:text-[#00D4FF] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MWN CORE. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Feito com dedicacao no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
