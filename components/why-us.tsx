import { advantages, team } from '@/lib/studio-data'
import { SectionHeading } from './section-heading'

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Почему Emmi"
          title="Причины доверять нам красоту"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <div key={a.title} className="bg-card p-7 md:p-8">
              <span className="font-serif text-2xl text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
            Наша команда
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((m) => (
              <div key={m.name}>
                <div className="flex aspect-square items-center justify-center rounded-2xl bg-secondary">
                  <span className="font-serif text-3xl text-accent">{m.name.charAt(0)}</span>
                </div>
                <h4 className="mt-3 font-serif text-lg text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground">{m.role}</p>
                <p className="mt-0.5 text-xs text-accent">{m.reviews}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
