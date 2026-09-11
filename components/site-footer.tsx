import { studio } from '@/lib/studio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold text-foreground">Beauty Studio Emmi</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Салон красоты. Волосы, ногти, макияж, брови и ресницы.
          </p>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">Контакты</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>{studio.address}</li>
            <li>
              <a href={studio.phoneHref} className="hover:text-accent">
                {studio.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${studio.email}`} className="hover:text-accent">
                {studio.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-luxe text-muted-foreground">Запись</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>
              <a href={studio.bookingUrl} className="hover:text-accent">
                Онлайн-запись
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Beauty Studio Emmi. Все права защищены.</p>
          <p>С любовью к красоте</p>
        </div>
      </div>
    </footer>
  )
}
