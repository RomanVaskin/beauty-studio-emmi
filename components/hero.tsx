import { studio } from '@/lib/studio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-3 text-[0.7rem] uppercase tracking-luxe text-accent">
            <span className="h-px w-8 bg-accent" />
            Салон красоты · {studio.city}
          </p>
          <h1 className="text-balance font-serif text-[2.7rem] font-medium leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Ваша красота — в надёжных руках Emmi
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {studio.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={studio.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Записаться онлайн
            </a>
            <a
              href="#prices"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Услуги и цены
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { v: '15+', l: 'лет заботы о клиентах' },
              { v: '800+', l: 'отзывов о мастерах' },
              { v: '4', l: 'направления красоты' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl text-foreground md:text-4xl">{s.v}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]">
            <img
              src="/images/hero.png"
              alt="Модель с ухоженными блестящими волосами в студии Emmi"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-2 hidden rounded-2xl border border-border/60 bg-card/90 px-6 py-4 backdrop-blur-sm sm:block md:-left-8">
            <p className="font-serif text-lg text-foreground">Волосы · Ногти</p>
            <p className="text-sm text-muted-foreground">Макияж · Брови и ресницы</p>
          </div>
        </div>
      </div>
    </section>
  )
}
