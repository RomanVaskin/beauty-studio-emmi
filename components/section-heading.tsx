export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'invert'
}) {
  const isCenter = align === 'center'
  const isInvert = tone === 'invert'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`flex items-center gap-3 text-[0.7rem] uppercase tracking-luxe ${
          isCenter ? 'justify-center' : ''
        } ${isInvert ? 'text-background/70' : 'text-accent'}`}
      >
        <span className={`h-px w-8 ${isInvert ? 'bg-background/50' : 'bg-accent'}`} />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance font-serif text-4xl font-medium leading-[1.05] md:text-5xl ${
          isInvert ? 'text-background' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed ${
            isInvert ? 'text-background/75' : 'text-muted-foreground'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
