import { serviceGroups } from '@/lib/studio-data'
import { SectionHeading } from './section-heading'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Направления"
          title="Всё для вашего образа"
          description="Четыре направления красоты в одной студии — от здоровья волос до безупречных деталей."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {serviceGroups.map((group, i) => (
            <a
              key={group.id}
              href="#prices"
              className={`group relative overflow-hidden rounded-3xl border border-border/60 ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className={`relative ${i === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={group.image || '/placeholder.svg'}
                  alt={group.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-2xl text-background md:text-3xl">{group.title}</h3>
                  <p className="mt-1 max-w-xs text-sm text-background/80">{group.subtitle}</p>
                </div>
                <span className="mb-1 shrink-0 text-sm text-background/90 transition-transform group-hover:translate-x-1">
                  Смотреть →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
