import ComponentProps from '@/types/component'

export default interface ButtonProps extends ComponentProps {
  onClick?: () => void
  icon?: React.ReactNode
  screenReaderText?: string
  active?: boolean
}