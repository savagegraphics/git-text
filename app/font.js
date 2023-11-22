import { Magra, Sniglet } from 'next/font/google';

export const magra = Magra({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-magra',
})

export const sniglet = Sniglet({
    weight: ['400', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sniglet',
})