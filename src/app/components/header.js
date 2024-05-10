'use client'
import PopoverHeader from "./PopoverHeader"
import { motion } from "framer-motion"
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function header() {
    return <>
        <header className="bg-indigo-300 border-b-2 border-indigo-400 shadow-lg p-2">

          <nav className="flex justify-between items-center w-[92%] m-auto">
            <div>
              <Link href='/'>
                <AcademicCapIcon className="h-10 w-10 text-black-500" />
              </Link>
            </div>
            <div>
              <ul className="hidden sm:flex items-center gap-[4vw]">
                <li className="hover:text-gray-500 cursor-pointer">
                  1
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  22
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  333
                </li>
                <li className="hover:text-gray-500 cursor-pointer">
                  4444
                </li>
              </ul>
            </div>

            <div className='flex grow items-center justify-end sm:hidden'>

            <PopoverHeader />
            

            </div>

            <div className="hidden sm:block">
              <motion.button className="bg-fuchsia-300 text-white px-5 py-2 rounded-3xl border-2 border-fuchsia-500"
              whileTap={{scale: 0.9}}
              whileHover={{scale:1.1, backgroundColor: 'rgb(217 70 239)', color: 'black'}}
              transition={{bounceDamping: 10, bounceStiffness: 600}}
              >Sign In
              </motion.button>
            </div>

          </nav>
        </header>
    </>
}

