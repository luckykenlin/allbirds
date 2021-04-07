import Head from 'next/head'
import Nav from "../components/nav";
import {useEffect, useState} from "react";
import MobileNav from "../components/mobile-nav";

export default function Home() {

    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);


    return (
        <div className="font-sane">
            <Head>
                <title>Rebuilding AllBirds</title>
            </Head>
            <main className={`relative antialiased bg-gray-50`}>
                <Nav
                    toggle={toggle}
                    setToggle={setToggle}
                />
                <MobileNav
                    toggle={toggle}
                />
                <div className="lg:container mx-auto flex flex-col lg:flex-row lg:py-16 py-4 lg:px-16">
                    <aside className="w-full lg:w-80 ">
                        <div className="w-full px-8 flex justify-between">
                            <div>
                                <div className="text-xxs font-semibold space-x-1.5">
                                    <a href="#" className="hover:underline underline lg:no-underline">Home</a>
                                    <span>/</span>
                                    <a href="#" className="hover:underline underline lg:no-underline">Men's Shoes</a>
                                    <span>/</span>
                                </div>
                                <h2 className="font-extrabold text-xl">Running Shoes</h2>
                            </div>
                            <div className="flex justify-center items-center lg:hidden transform rotate-90"
                                 onClick={() => setToggle1(!toggle1)}>
                                <svg
                                    className="w-6 h"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 bg-gray-200 bg-opacity-50 lg:bg-gray-50 lg:px-8">
                            <div className="px-8 lg:px-0  text-sm text-gray-900 py-3 lg:py-0 lg:space-y-3">
                                <div
                                    className="no-scrollbar flex lg:flex-col whitespace-nowrap overflow-x-auto items-center lg:items-start space-x-2 lg:space-x-0 lg:space-y-2">
                                    <a href="#" className="hover:underline font-bold text-sm">Running Shoes</a>
                                    <a href="#" className="hover:underline text-sm">Everyday Sneakers</a>
                                    <a href="#" className="hover:underline text-sm">High-Tops</a>
                                    <a href="#" className="hover:underline text-sm">Slip-ons</a>
                                    <a href="#" className="hover:underline text-sm">Beat Shoes</a>
                                    <a href="#" className="hover:underline text-sm">Weather Repelient Shoes</a>
                                </div>
                            </div>
                        </div>
                        <div className={`lg:block px-8 hidden`}>
                            <div className="border-b border-gray-300 lg:hidden">
                                <svg
                                    className="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </div>
                            <div className="mt-3 border-b border-gray-300 py-4">
                                <h3 className="font-bold">Filter By:</h3>
                            </div>
                            <div className="border-b border-gray-300 py-4 space-y-2">
                                <h3 className="font-bold text-md tracking-wider">MATERIAL</h3>
                                <div className="space-x-2">
                                    <input type="checkbox"
                                           className="rounded-sm p-2 text-gray-900 focus:ring-gray-800 focus:ring-1"/>
                                    <span className="text-sm ">Light & Breezy Tree</span>
                                </div>
                                <div className="space-x-2">
                                    <input type="checkbox"
                                           className="rounded-sm p-2 text-gray-900 focus:ring-gray-800 focus:ring-1"/>
                                    <span className="text-sm ">Soft & Cozy Wool</span>
                                </div>
                            </div>
                            <div className="py-4 space-y-2">
                                <h3 className="font-bold text-md tracking-wider">BEST FOR</h3>
                                <div className="space-x-2">
                                    <input type="checkbox"
                                           className="rounded-sm p-2 text-gray-900 focus:ring-gray-800 focus:ring-1"/>
                                    <span className="text-sm ">Running</span>
                                </div>
                                <div className="space-x-2">
                                    <input type="checkbox"
                                           className="rounded-sm p-2 text-gray-900 focus:ring-gray-800 focus:ring-1"/>
                                    <span className="text-sm ">Wet Weather</span>
                                </div>
                            </div>
                        </div>

                    </aside>
                    <div className="flex-1 px-8  lg:mt-0 mt-4">
                        <h2 className="font-extrabold text-xl">Men's Tree Dashers</h2>
                        <p className="text-sm">Our running shoe designed with breathable Tree material.</p>
                        <div className="shadow-2xl lg:shadow-none">
                            <div className="mt-4 relative flex space-x-4 ">
                                <div className="lg:w-1/2 w-full lg:hover:shadow-2xl">
                                    <a href="#" className="w-full">
                                        <div className="w-full">
                                            <img
                                                className="w-full"
                                                src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1"
                                                alt=""/>
                                        </div>
                                        <p className="text-sm font-bold mt-2 px-4">
                                            Men's tree Dashers
                                        </p>
                                        <p className="text-sm mt-2 px-4">
                                            Thunder (Dark Blue Upper / White Sole)
                                        </p>
                                    </a>
                                    <div className="mt-2 text-sm px-4">
                                        $125
                                    </div>
                                    <div className="px-4 mt-1 py-4 lg:hidden">
                                        <div className="flex w-full space-x-4 justify-between">
                                            <div
                                                className="transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                                                <div className="bg-gray-800 w-6 h-3"/>
                                                <div className="bg-white w-6 h-3"/>
                                            </div>
                                            <div
                                                className="transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                                                <div className="bg-gray-200 w-6 h-3"/>
                                                <div className="bg-gray-800 w-6 h-3"/>
                                            </div>
                                            <div
                                                className="transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                                                <div className="bg-gray-200 w-6 h-3"/>
                                                <div className="bg-gray-200 w-6 h-3"/>
                                            </div>
                                            <div
                                                className="transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                                                <div className="bg-gray-800 w-6 h-3"/>
                                                <div className="bg-gray-800 w-6 h-3"/>
                                            </div>
                                            <div
                                                className="transform -rotate-45 rounded-full overflow-hidden ring-2 ring-offset-1 ring-gray-300">
                                                <div className="bg-white w-6 h-3"/>
                                                <div className="bg-gray-800 w-6 h-3"/>
                                            </div>
                                            <div
                                                className="flex justify-center items-center rounded-full border-gray-800 w-6 h-6  ring-2 ring-offset-1 ring-gray-300">
                                                <svg
                                                    className="w-3 h-3"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 hidden lg:block">
                                    <img
                                        src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/3sTQsZ5y9PtRwoYSTtjDhm/c220320081350e1628b3c9fda723284b/TR_Male-PCT-2__1_.jpg"
                                        alt=""/>
                                </div>

                            </div>
                            <div className="border-t px-4 flex justify-between py-2 lg:hidden">
                                <div className="text-sm font-bold">Quick Add</div>
                                <div>
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-800 h-screen"/>
            </main>
        </div>
    )
}
