import { studio } from '@/lib/studio-data'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]">
            <img
              src="/images/about.png"
              alt="Интерьер студии красоты Emmi в тёплых бежевых тонах"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 max-w-xl lg:order-2">
          <p className="mb-6 flex items-center gap-3 text-[0.7rem] uppercase tracking-luxe text-accent">
            <span className="h-px w-8 bg-accent" />
            О студии
          </p>
          <h2 className="text-balance font-serif text-4xl font-medium leading-[1.05] text-foreground md:text-5xl">
            Место, где о вас заботятся по-настоящему
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Beauty Studio Emmi — уютная студия красоты в самом сердце Солнечногорска. Уже много
              лет мы помогаем тысячам женщин чувствовать себя увереннее и красивее.
            </p>
            <p>
              Мы бережно относимся к вашим волосам и коже, используем профессиональные материалы
              и подбираем образ индивидуально. Здесь не торопят — вам дают время расслабиться и
              довериться мастеру.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-serif text-2xl text-foreground">Уют</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Тёплая атмосфера и внимание к каждой детали
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-foreground">Забота</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Индивидуальный подход к каждой гостье
              </p>
            </div>
          </div>

          <a
            href={studio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Записаться в студию
          </a>
        </div>
      </div>
    </section>
  )
}
