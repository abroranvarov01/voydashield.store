export function PartnersSection() {
  const partners = [
    "Microsoft Azure",
    "AWS Security",
    "Google Cloud",
    "IBM Security",
    "Cisco Systems",
    "Palo Alto Networks",
    "Fortinet",
    "CrowdStrike",
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strategic Partners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Collaborating with industry leaders to deliver the best security solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-8 border border-primary/30 rounded-lg bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all glow-border flex items-center justify-center hover:scale-105"
            >
              <span className="text-lg font-bold text-foreground text-center">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
