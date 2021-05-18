import { CardProps } from '.'

export const Card = ({ children, className }: CardProps) => (
  <div className={`rounded-2xl bg-white ${className}`}>{children}</div>
)
