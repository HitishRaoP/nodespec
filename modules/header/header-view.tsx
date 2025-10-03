import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetHeader, SheetTrigger, SheetFooter } from "@/components/ui/sheet"

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
                <Link href="/" className='mr-2 sm:mr-4 md:mr-10'>
                    <Image src="/nodespec.png" alt="Logo" width={60} height={60} />
                </Link>

                <nav className='hidden md:flex items-center justify-start gap-10'>
                    {HEADER_NAV_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href} className='font-light bg-gradient-to-tr from-muted-foreground to-foreground bg-clip-text text-transparent'>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className='hidden md:block'>
                    <Button>
                        Get In Touch
                    </Button>
                </div>

                <Sheet>
                    <SheetTrigger asChild className='md:hidden'>
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="md:hidden"
                    >
                        <SheetHeader>
                            <SheetTitle>
                                <Link href="/" className='text-lg'>
                                    Nodespec
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <nav className='flex flex-col gap-2'>
                            {HEADER_NAV_ITEMS.map((item) => (
                                <Link key={item.href} href={item.href} className='py-4 text-lg'>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                        <SheetFooter>
                            <Button className='w-full' size={'lg'}>Get In Touch</Button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
