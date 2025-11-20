const baseClasses =
  'inline-flex items-center justify-center rounded-2xl font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#52BD94]'

const variantClasses = {
  primary: 'bg-[#52BD94] text-white hover:bg-[#3a9c79]',
  secondary: 'text-gray-600 hover:bg-[#52BD94] hover:text-white',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  ghost: 'text-gray-900 hover:text-[#52BD94]'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3 text-lg',
  none: ''
}

const Button = ({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const variantClass = variantClasses[variant] ?? variantClasses.primary
  const sizeClass = sizeClasses[size] ?? sizeClasses.md

  const classes = [baseClasses, variantClass, sizeClass, className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Button

