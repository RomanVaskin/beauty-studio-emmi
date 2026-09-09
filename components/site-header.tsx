'use client'

import { useEffect, useState } from 'react'
import { studio } from '@/lib/studio-data'

const nav = [
  { label: 'Услуги', href: '#services' },
  { label: 'Цены', href: '#prices' },
  { label: 'Работы', href: '#portfolio' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'О студии', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 lg:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]">
            Emmi
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-luxe text-muted-foreground sm:inline">
            Beauty Studio
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={studio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Записаться
          </a>
          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <span className="sr-only">Меню</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-foreground transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`h-px w-5 bg-foreground transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base text-foreground/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={studio.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                Записаться онлайн
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
