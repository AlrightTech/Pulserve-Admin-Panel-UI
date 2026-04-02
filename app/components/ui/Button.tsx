import React from 'react'
import Link from 'next/link'

type RoundedSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
type ButtonVariant = 'filled' | 'outlined' | 'soft' | 'ghosted' | 'disabled'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  rounded?: RoundedSize
  href?: string
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
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  
  // FIXED: 'flex-row' aur 'gap-2' add kiya hai icon alignment ke liye
  const baseClasses = 'relative px-2 py-3 font-medium transition-all duration-500 inline-flex items-center justify-center border border-1.5 overflow-hidden z-0 flex-row gap-2'
  
  const roundedClass = roundedClasses[rounded]
  const isDisabled = variant === 'disabled' || disabled
  const cursorClass = isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer active:scale-95 group'

  let variantClasses = ''
  let overlayColor = '' 
  let textColorHover = '' 

  switch (variant) {
    case 'filled':
      // Dark Blue -> Coral animation
      variantClasses = 'bg-custom-dark-blue text-custom-white border-transparent shadow-sm'
      overlayColor = 'bg-custom-coral'
      textColorHover = 'group-hover:text-white'
      break

    case 'outlined':
      // White/Transparent -> Coral animation
      variantClasses = 'bg-transparent border-custom-coral text-custom-charcoal'
      overlayColor = 'bg-custom-coral'
      textColorHover = 'group-hover:text-white'
      break

    case 'soft':
      // White -> Dark Gray/Charcoal animation
      variantClasses = 'bg-white border-gray-200 text-black'
      overlayColor = 'bg-custom-charcoal'
      textColorHover = 'group-hover:text-white'
      break

    case 'disabled':
      variantClasses = 'bg-gray-100 border-gray-200 text-gray-400'
      break
  }

  // Animation Overlay Logic
  const animationOverlay = !isDisabled && (
    <span className="absolute inset-0 flex justify-center -z-10 pointer-events-none">
      <span className={`w-0 h-full ${overlayColor} transition-all duration-500 ease-in-out group-hover:w-full`}></span>
    </span>
  )

  const allClasses = `${baseClasses} ${cursorClass} ${roundedClass} ${variantClasses} ${className}`.trim()

  // FIXED: 'whitespace-nowrap' add kiya taake text aur icon hamesha ek line mein rahein
  const content = (
    <>
      {animationOverlay}
      <span className={`relative z-10 transition-colors duration-500 flex items-center justify-center gap-2 whitespace-nowrap ${textColorHover}`}>
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