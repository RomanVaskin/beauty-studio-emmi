import { reviews } from '@/lib/studio-data'
import { SectionHeading } from './section-heading'

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят наши гостьи"
          description="Более 800 отзывов о мастерах студии в системе онлайн-записи."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="flex flex-col rounded-3xl border border-border/60 bg-card p-7 md:p-9"
            >
              <div className="mb-4 flex gap-1 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg leading-none">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="flex-1 text-pretty font-serif text-xl leading-snug text-foreground">
                «{r.text}»
              </blockquote>
              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <span className="block text-sm font-medium text-foreground">{r.author}</span>
                <span className="block text-xs text-muted-foreground">{r.service}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
