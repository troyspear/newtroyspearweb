'use client'

export default function MobileHeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden md:hidden" aria-hidden="true">
      <div className="absolute inset-0 animate-gradient-shift bg-[length:200%_200%] bg-gradient-to-br from-accent/20 via-accent/5 to-accent/15 dark:from-accent/25 dark:via-accent/8 dark:to-accent/10" />
      <div className="absolute top-[10%] left-[15%] w-48 h-48 rounded-full bg-accent/10 dark:bg-accent/15 blur-3xl animate-gradient-shift" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-accent/8 dark:bg-accent/12 blur-3xl animate-gradient-shift [animation-delay:3s]" />
      <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-page/80" />
    </div>
  )
}
