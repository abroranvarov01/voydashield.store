import { MatrixBackground } from "@/components/matrix-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Monthly security reports",
        "Cloud security monitoring",
        "Basic compliance tools",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 250 endpoints",
        "Advanced AI threat detection",
        "24/7 priority support",
        "Real-time security dashboard",
        "Advanced threat intelligence",
        "Compliance automation",
        "Incident response support",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "Dedicated security team",
        "Custom integrations",
        "Advanced threat hunting",
        "White-glove onboarding",
        "SLA guarantees",
        "Custom compliance reporting",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const addons = [
    { name: "Advanced Threat Intelligence", price: "$199/mo" },
    { name: "Penetration Testing (Quarterly)", price: "$2,499/quarter" },
    { name: "Security Training Platform", price: "$99/mo" },
    { name: "Dark Web Monitoring", price: "$149/mo" },
    { name: "Additional Support Hours", price: "$150/hour" },
  ]

  return (
    <main className="relative min-h-screen">
      <MatrixBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your organization's security needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`glow-border p-8 rounded-lg backdrop-blur-sm relative ${
                  plan.popular ? "bg-card/60 border-2 border-primary" : "bg-card/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-bold flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-foreground/60 mb-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-border"
                      : "bg-card border border-primary/50 hover:bg-primary/10"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Optional Add-ons</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="glow-border p-4 rounded-lg bg-card/40 backdrop-blur-sm flex items-center justify-between"
                >
                  <span className="text-sm font-semibold">{addon.name}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers.",
                },
                {
                  q: "Is there a setup fee?",
                  a: "No setup fees for Starter and Professional plans. Enterprise plans include white-glove onboarding at no additional cost.",
                },
                {
                  q: "What happens after the free trial?",
                  a: "Your card will be charged automatically unless you cancel before the trial ends. No commitments required.",
                },
              ].map((faq, i) => (
                <div key={i} className="glow-border p-6 rounded-lg bg-card/40 backdrop-blur-sm">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-foreground/80 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glow-border p-12 rounded-lg bg-card/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Our security experts can help you find the perfect plan for your organization's needs.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
