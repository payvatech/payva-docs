import { Inter, Mulish } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const mulish = Mulish({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['900'],
  variable: '--font-mulish',
})

export { inter, mulish }
