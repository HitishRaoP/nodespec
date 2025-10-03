import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"

export const HEADER_NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
        label: "FAQ",
        href: "/faq",
    }
]

export const Header = () => {
    return (
        <header className='py-4 border'>
            <div className='flex max-w-6xl mx-auto items-center justify-between'>
                <div className='flex items-center'>
                    <Link href="/" className='mr-10'>
                        <Image src="/nodespec.png" alt="Logo" width={60} height={60} />
                    </Link>
                    <Separator orientation='vertical' className='mr-10 h-8 bg-accent' />
                    <nav className='flex items-center justify-start gap-10'>
                        {HEADER_NAV_ITEMS.map((item) => (
                            <Link key={item.href} href={item.href} className='font-light bg-gradient-to-tr from-muted-foreground to-foreground bg-clip-text text-transparent'>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Button>
                    Get In Touch
                </Button>
            </div>
        </header>
    )
}
