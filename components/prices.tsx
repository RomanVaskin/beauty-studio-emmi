'use client'

import { useState } from 'react'
import { serviceGroups, studio } from '@/lib/studio-data'
import { SectionHeading } from './section-heading'

export function Prices() {
  const [active, setActive] = useState(serviceGroups[0].id)
  const group = serviceGroups.find((g) => g.id === active) ?? serviceGroups[0]

  return (
    <section id="prices" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Прайс-лист"
          title="Прозрачные цены"
          description="Итоговая стоимость зависит от длины и густоты волос, сложности работы и выбранных материалов. Точную цену мастер подтвердит на консультации."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === g.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-background text-muted-foreground hover:text-foreground'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border/60 bg-card p-6 md:p-9">
            <p className="mb-6 text-sm text-muted-foreground">{group.subtitle}</p>
            <ul className="divide-y divide-border/70">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="text-[0.95rem] text-foreground">{item.name}</span>
                  <span className="shrink-0 border-b border-dotted border-transparent font-serif text-lg text-foreground">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden overflow-hidden rounded-3xl lg:block">
            <img
              src={group.image || '/placeholder.svg'}
              alt={group.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h3 className="font-serif text-3xl text-background">{group.title}</h3>
              <a
                href={studio.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Записаться на услугу
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
