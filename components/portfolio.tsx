import { SectionHeading } from './section-heading'

const works = [
  { src: '/images/work-balayage.png', label: 'Сложное окрашивание', tall: true },
  { src: '/images/work-makeup.png', label: 'Вечерний макияж', tall: false },
  { src: '/images/work-nails.png', label: 'Маникюр с покрытием', tall: false },
  { src: '/images/work-curls.png', label: 'Вечерняя укладка', tall: true },
  { src: '/images/work-brows.png', label: 'Архитектура бровей', tall: false },
  { src: '/images/detail.png', label: 'Уход и материалы', tall: false },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Наши работы" title="Результат говорит сам за себя" />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {works.map((w) => (
            <figure
              key={w.label}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border/60"
            >
              <img
                src={w.src || '/placeholder.svg'}
                alt={w.label}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  w.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-5 text-sm text-background opacity-0 transition-opacity group-hover:opacity-100">
                {w.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
