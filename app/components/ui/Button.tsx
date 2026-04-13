import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react' 

type RoundedSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
type ButtonVariant = 'filled' | 'outlined' | 'soft' | 'ghosted' | 'disabled'

// 2. Interface mein icon prop add karein
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  rounded?: RoundedSize
  href?: string
  icon?: LucideIcon // <--- Naya prop icon ke liye
  iconSize?: number // <--- Icon size control karne ke liye
  children: React.ReactNode
  className?: string
}

const roundedClasses: Record<RoundedSize, string> = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
}

export default function Button({
  variant = 'filled',
  rounded = 'lg',
  href,
  icon: Icon, // 3. Icon ko destructure karein
  iconSize = 18,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  
  const baseClasses = 'relative px-4 py-3 font-medium transition-all duration-500 inline-flex items-center justify-center border border-1.5 overflow-hidden z-0 flex-row gap-2 whitespace-nowrap'
  
  const roundedClass = roundedClasses[rounded]
  const isDisabled = variant === 'disabled' || disabled
  const cursorClass = isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer active:scale-95 group'

  let variantClasses = ''
  let overlayColor = '' 
  let textColorHover = '' 

  switch (variant) {
    case 'filled':
      variantClasses = 'bg-custom-dark-blue text-custom-white border-transparent shadow-sm'
      overlayColor = 'bg-custom-coral'
      textColorHover = 'group-hover:text-white'
      break

    case 'outlined':
      variantClasses = 'bg-transparent border-custom-coral text-custom-charcoal'
      overlayColor = 'bg-custom-coral'
      textColorHover = 'group-hover:text-white'
      break

    case 'soft':
      variantClasses = 'bg-white border-gray-200 text-black'
      overlayColor = 'bg-custom-charcoal'
      textColorHover = 'group-hover:text-white'
      break

    case 'disabled':
      variantClasses = 'bg-gray-100 border-gray-200 text-gray-400'
      break
  }

  const animationOverlay = !isDisabled && (
    <span className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
      <span className={`w-0 h-full ${overlayColor} transition-all duration-500 ease-in-out group-hover:w-full`}></span>
    </span>
  )

  const allClasses = `${baseClasses} ${cursorClass} ${roundedClass} ${variantClasses} ${className}`.trim()

  const content = (
    <>
      {animationOverlay}
      <span className={`relative z-10 transition-colors duration-500 flex items-center justify-center gap-2 ${textColorHover}`}>
        {/* 4. Icon render logic yahan add ki hai */}
        {Icon && <Icon size={iconSize} className="shrink-0" />}
        {children}
      </span>
    </>
  )

  if (href && !isDisabled) {
    return (
      <Link href={href} className={allClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={allClasses} disabled={isDisabled} {...props}>
      {content}
    </button>
  )
}