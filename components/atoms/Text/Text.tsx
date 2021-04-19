import clsx from 'clsx'
import React from 'react'

import { TextColorType, TextSizeType } from '.'

type Props = {
  children: React.ReactNode
  size?: TextSizeType
  className?: string
  color?: TextColorType
  bold?: boolean
}

export const Text = ({ children, color = 'default', className = '', size = 'medium', bold = false }: Props) => {
  const classProps: string = clsx('text', color, size, className, { bold })
  return <span className={classProps}>{children}</span>
}
