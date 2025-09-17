import { PixelBackground } from "@/components/pixel-background"
import { LinkCard } from "@/components/link-card"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import {
  FolderKanban,
  Github,
  Linkedin,
  Instagram,
  DollarSign,
} from "lucide-react"

export default function HomePage() {
  const links = [
    {
      title: "PORTFÓLIO",
      description: "Conheça meus projetos e trabalhos desenvolvidos",
      url: "#", // Substitua pela URL do seu portfólio
      icon: <FolderKanban className="w-6 h-6" />,
      gradient: true,
    },
    {
      title: "GITHUB",
      description: "Veja meu código e contribuições open source",
      url: "#", // Substitua pela URL do seu GitHub
      icon: <Github className="w-6 h-6" />,
    },
    {
      title: "LINKEDIN",
      description: "Conecte-se comigo profissionalmente",
      url: "#", // Substitua pela URL do seu LinkedIn
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      title: "INSTAGRAM",
      description: "Acompanhe meu dia a dia e bastidores",
      url: "#", // Substitua pela URL do seu Instagram
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      title: "ORÇAMENTOS",
      description: "Solicite um orçamento para seu projeto",
      url: "#", // Substitua pela URL do seu site de orçamentos
      icon: <DollarSign className="w-6 h-6" />,
    },
  ]

  return (
    <main className="min-h-screen relative">
      <PixelBackground />
      <ThemeToggle />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4">
              <Image
                src="/JHON SILVA GRADIENTE ESCURO.png"
                alt="Meu Hub"
                width={256}
                height={256}
                className="mx-auto block dark:hidden w-48 md:w-64"
                priority
              />

              <Image
                src="/JHON SILVA PRINCIPAL.png"
                alt="Meu Hub"
                width={256}
                height={256}
                className="mx-auto hidden dark:block w-48 md:w-64"
                priority
              />
            </h1>

            <p className="font-exo2 text-lg font-semibold text-muted-foreground leading-relaxed max-w-md mx-auto">
              {"Soluções Digitais Personalizadas Para a Sua Empresa"}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={link.icon}
                gradient={link.gradient}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-border/50">
            <p className="font-exo2 text-sm text-muted-foreground">
              {"© 2025 Jhon Sites. Todos os direitos reservados"}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
