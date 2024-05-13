'use client'
import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconPointed } from "@heroicons/react/24/solid";


export default function MainContent() {
    return (
        <>
        <div 
        variants={{
        hidden: {opacity: 0},
        show: {opacity: 1}}}
        initial='hidden'
        animate='show'
        className='mx-6'>
            <Tab.Group manual>
                <Tab.List className='flex items-center gap-2 justify-between mx-2 my-2 sm:mx-6 sm:my-4'>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                        <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Easy</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white hover:bg-indigo-300">
                    <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Medium</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIcon className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                    <Tab className="rounded-md w-1/3 ui-selected:bg-indigo-400 ui-selected:text-white  hover:bg-indigo-300">
                    <div className='inline-flex items-center'>
                          <h2 className='tracking-widest text-xl'>Hard</h2>
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                          <StarIconPointed className="h-6 w-6 text-yellow-500 hidden transition hover:-translate-y-1 sm:block" />
                        </div>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className=' flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3'>
                            <Link href='easy/task' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <h2 className='p-2'>TaskToDoList</h2>
                                </div>
                                <p>Список задач</p>
                            </Link>
                            <Link href='easy/counter' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'>Counter</h2>
                                </div>
                                <p>Счетчик</p>
                            </Link>
                            <Link href='easy/calculator' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'>Calculator</h2>
                                </div>
                                <p>Калькулятор</p>
                            </Link>
                            <Link href='easy/image-slider' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <h2 className='p-2'>ImageSlider</h2>
                                </div>
                                <p>Слайдер картинок</p>
                            </Link>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                    <div className=' flex flex-col items-center justify-between sm:grid sm:grid-cols-3 sm:gap-3'>
                            <Link href='medium/test-animation' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'> 
                                  <h2 className='p-2'>TestAnimation</h2>
                                </div>
                                <p>Тестовая анимация</p>
                            </Link>
                            <Link href='' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'></h2>
                                </div>
                                <p></p>
                            </Link>
                            <Link href='' className='bg-sky-100 rounded-md h-[200px] flex flex-col items-center m-1 hover:border-2 hover:border-blue-300 w-full'>
                                <div className='bg-blue-200 w-full flex justify-center rounded-t-md'>
                                  <h2 className='p-2'></h2>
                                </div>
                                <p></p>
                            </Link>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <h3>Content3</h3>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
        
        </>
    )
}