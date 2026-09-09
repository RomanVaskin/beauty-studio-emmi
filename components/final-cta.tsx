import { studio } from '@/lib/studio-data'

export function FinalCta() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-6 py-16 text-center md:rounded-[2.5rem] md:px-8 md:py-24">
          <p className="mx-auto flex items-center justify-center gap-3 text-[0.7rem] uppercase tracking-luxe text-primary-foreground/70">
            <span className="h-px w-8 bg-primary-foreground/50" />
            Запись открыта
            <span className="h-px w-8 bg-primary-foreground/50" />
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.05] text-primary-foreground md:text-6xl">
            Подарите себе день красоты в Emmi
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty text-primary-foreground/75">
            Выберите мастера и удобное время онлайн за одну минуту — остальное мы возьмём на себя.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={studio.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Записаться онлайн
            </a>
            <a
              href={studio.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
