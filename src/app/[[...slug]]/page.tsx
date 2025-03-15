import '@/assets/css/main.css'
import { ClientOnly } from '@/app/[[...slug]]/client'

export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['about'] },
    { slug: ['projects'] },
    { slug: ['resume'] },
  ]
}

export default function Page() {
  return <ClientOnly /> // You'll update this later
}