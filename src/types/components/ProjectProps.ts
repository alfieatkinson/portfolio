import React from 'react'
import ComponentProps from '@/types/components/ComponentProps'
import LinkProps from '@/types/LinkProps'

export default interface ProjectProps extends ComponentProps {
  slug?: string
  title: string
  featured?: boolean | false
  description: string | React.JSX.Element
  category: string
  techStacks: string[]
  otherTechStacks?: string[]
  links: LinkProps[]
}
