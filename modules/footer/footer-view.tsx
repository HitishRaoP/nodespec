'use client'

import { Container } from "@/components/ui/container"
import { Separator } from "@/components/ui/separator"
import { Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type FooterLink = {
  href: string
  label: string
  icon?: any
  hoverColor?: string
}

const COMPANY_INFO = {
  name: "NodeSpec",
  tagline: "Made remotely with 💙 and passion",
  logo: {
    src: "/nodespec.png",
    alt: "NodeSpec Logo",
    width: 60,
    height: 60
  }
} as const

const FOOTER_SECTIONS = {
  templatePages: {
    title: "Template Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" }
    ] as FooterLink[]
  },
  product: {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/integrations", label: "Integrations" },
      { href: "/changelog", label: "Changelog" },
      { href: "/support", label: "Support" }
    ] as FooterLink[]
  },
  social: {
    title: "Social",
    links: [
      { href: "#", label: "Twitter (X)", icon: Twitter, hoverColor: "hover:text-blue-400" },
      { href: "#", label: "Instagram", icon: Instagram, hoverColor: "hover:text-pink-400" },
      { href: "#", label: "LinkedIn", icon: Youtube, hoverColor: "hover:text-red-400" },
    ] as FooterLink[]
  }
} as const

const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" }
] as const

const FooterSection = ({
  title,
  links,
  isSocial = false
}: {
  title: string
  links: FooterLink[]
  isSocial?: boolean
}) => (
  <nav className="space-y-3" role="navigation" aria-label={title}>
    <h3 className="font-semibold text-lg">
      {title}
    </h3>
    <ul className="flex flex-col gap-4">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
                flex items-center gap-2
                transition-colors duration-200 hover:opacity-80
                ${link.hoverColor || "hover:text-blue-500"}
                ${isSocial ? "text-base" : "text-sm"}
              `}
              aria-label={link.label}
            >
              {link.icon && <link.icon size={17} aria-hidden="true" />}
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t">
      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1 space-y-6">
            <Link
              href="/"
              className="inline-block"
              aria-label={`${COMPANY_INFO.name} homepage`}
            >
              <Image
                src={COMPANY_INFO.logo.src}
                alt={COMPANY_INFO.logo.alt}
                width={COMPANY_INFO.logo.width}
                height={COMPANY_INFO.logo.height}
                className="transition-transform hover:scale-105"
                priority
              />
            </Link>

            <div className="space-y-4">
              <Separator className="bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
              <p className="font-medium leading-relaxed">
                {COMPANY_INFO.tagline}
                <br />
                <span>- {COMPANY_INFO.name}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
            <FooterSection
              title={FOOTER_SECTIONS.templatePages.title}
              links={FOOTER_SECTIONS.templatePages.links}
            />
            <FooterSection
              title={FOOTER_SECTIONS.product.title}
              links={FOOTER_SECTIONS.product.links}
            />
            <FooterSection
              title={FOOTER_SECTIONS.social.title}
              links={FOOTER_SECTIONS.social.links}
              isSocial
            />
          </div>
        </div>

        <Separator className="my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <nav className="flex items-center gap-4" role="navigation" aria-label="Legal links">
            {LEGAL_LINKS.map((link, index) => (
              <div key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
                {index < LEGAL_LINKS.length - 1 && (
                  <span aria-hidden="true">|</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
