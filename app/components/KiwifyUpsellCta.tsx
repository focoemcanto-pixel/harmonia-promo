'use client'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function KiwifyUpsellCta({ children, className = 'vip-cta' }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => document.getElementById('kiwify-upsell-trigger-HHr4eyM')?.click()}
    >
      {children}
    </button>
  )
}
