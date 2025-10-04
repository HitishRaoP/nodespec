'use client'


import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Twitter, Youtube, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const Footer = ()=> {
  return (
    <footer className="w-full bg-gradient-to-br from-[#05061e] to-[#0c1636] text-zinc-200 md:px-5 flex flex-col items-center py-10 max-lg:px-0 ">

      <div className=" w-full max-w-6xl flex lg:flex-row lg:gap-x-15 md:flex-col items-start max-md:flex-col max-md:px-10 gap-y-10">

        <div className="flex flex-col gap-3 min-w-[350px]">
            <Link href="/" className='mr-10'>
               <Image src="/nodespec.png" alt="Logo" width={60} height={60} />
            </Link>
          <div className="flex flex-col gap-3 gap-y-5">

            <div className="flex justify-between">
                <div className="w-[45%]">
                    <Separator className="bg-gradient-to-r from-transparent via-[#3b455f] to-transparent"/>
                </div>
            </div>

            <div className='text-[#818083] text-[16px] font-bold '>
                Made remotely with  💙  and passion<br />
                <span>- NodeSpec.</span>
            </div>

          </div>
          <div className="mt-4 flex gap-x-2 border-2 p-2 rounded-lg items-center w-full">
            <Input
              type="email"
              placeholder="Enter Your Email..."
              className="rounded-l-md border-none text-[#939499] focus:outline-[#035189] focus:outline-1"
              style={{backgroundColor:'transparent'}}
            />
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 font-bold"
            >
              Subscribe Us
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-row flex-1 justify-start gap-36 max-sm:gap-10">
          <div>
            <div className="font-bold mb-2 text-[18px]">Template Pages</div>
            <div className="flex flex-col gap-2 text-[16px]">
              <Link href="/" className="hover:text-blue-400 transition-all text-gray-500 ">Home</Link>
              <Link href="/about" className="hover:text-blue-400 transition-all text-gray-500">About</Link>
              <Link href="/portfolio" className="hover:text-blue-400 transition-all text-gray-500">Portfolio</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-all text-gray-500">Contact</Link>
              <Link href="/faq" className="hover:text-blue-400 transition-all text-gray-500">FAQ</Link>
            </div>
          </div>

         <div>
            <div className="font-bold mb-2 text-[18px]">Product</div>
            <div className="flex flex-col gap-2 text-[16px]">
              <Link href="/features" className="hover:text-blue-400 transition-all text-gray-500 ">Features</Link>
              <Link href="/pricing" className="hover:text-blue-400 transition-all text-gray-500">Pricing</Link>
              <Link href="/integrations" className="hover:text-blue-400 transition-all text-gray-500">Integrations</Link>
              <Link href="/changelog" className="hover:text-blue-400 transition-all text-gray-500">Changelog</Link>
              <Link href="/support" className="hover:text-blue-400 transition-all text-gray-500">Support</Link>
            </div>
          </div>


          <div>
            <div className="font-semibold mb-2 text-[18px]">Social</div>
            <div className="flex flex-col gap-2 text-[16px]">
              <Link href="#" className="flex items-center gap-2 hover:text-blue-400 text-gray-500"> <Twitter size={17} /> Twitter (X)</Link>
              <Link href="#" className="flex items-center gap-2 hover:text-pink-400 text-gray-500"> <Instagram size={17} /> Instagram</Link>
              <Link href="#" className="flex items-center gap-2 hover:text-red-400 text-gray-500"> <Youtube size={17} /> Youtube</Link>
              <Link href="#" className="flex items-center gap-2 hover:text-cyan-400 text-gray-500"> <Star size={17} /> Framer</Link>
            </div>
          </div>

        </div>

      </div>

      <Separator className="my-8 bg-gradient-to-r from-transparent via-[#3b455f] to-transparent" />

      <div className="w-full max-w-6xl m-auto flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 gap-3">
        <span>&copy; 2025 NodSpec. All rights reserved.</span>
        <div className="flex gap-3">
          <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          <span>|</span>
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
