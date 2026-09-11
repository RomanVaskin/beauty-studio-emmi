import { studio } from '@/lib/studio-data'
import { SectionHeading } from './section-heading'

export function Location() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Как нас найти"
          title="Адрес и контакты"
          description="Ждём вас в студии. Если не получилось записаться онлайн — напишите или позвоните, мы поможем подобрать удобное время."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-8">
              <p className="text-[0.7rem] uppercase tracking-luxe text-accent">Адрес</p>
              <p className="mt-3 font-serif text-2xl leading-snug text-foreground">
                {studio.address}
              </p>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-8">
              <p className="text-[0.7rem] uppercase tracking-luxe text-accent">Часы работы</p>
              <ul className="mt-4 space-y-3">
                {studio.hours.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-muted-foreground">{h.days}</span>
                    <span className="font-serif text-lg text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={studio.phoneHref}
                className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-center transition-colors hover:bg-secondary"
              >
                <span className="block text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                  Телефон
                </span>
                <span className="mt-1 block text-sm font-medium text-foreground">
                  {studio.phoneDisplay}
                </span>
              </a>
              <a
                href={`mailto:${studio.email}`}
                className="rounded-2xl border border-border/60 bg-card px-5 py-4 text-center transition-colors hover:bg-secondary"
              >
                <span className="block text-[0.7rem] uppercase tracking-luxe text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block text-sm font-medium text-foreground">
                  {studio.email}
                </span>
              </a>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-3xl border border-border/60 lg:min-h-full">
            <img
              src="/placeholder.svg"
              alt="Демонстрационная карта расположения студии"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
