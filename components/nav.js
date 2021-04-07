
export default function Nav({toggle, setToggle}) {

    return (
        <>
            <nav className="sticky top-0 z-40 relative bg-gray-50 flex justify-between items-center px-7 py-4 h-16">
                <div className="absolute inset-0 shadow-lg opacity-50"/>
                <div className="lg:hidden z-20" onClick={() => setToggle(!toggle)}>
                    {
                        !toggle ?
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>

                            :
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                    }
                </div>
                <ul className="hidden lg:flex text-xs font-extrabold tracking-widest space-x-9">
                    <li>MEN</li>
                    <li>WOMEN</li>
                </ul>
                <div className="absolute inset-0 flex justify-center">
                    <img className="w-28"
                         src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
                         alt=""
                    />
                </div>
                <ul className="flex text-xs font-extrabold tracking-widest items-center">
                    <div className="hidden lg:flex space-x-8">
                        <li>OUR MATERIALS</li>
                        <li>STORES</li>
                    </div>
                    <div className="flex items-center space-x-4 ml-4">
                        <div className="hidden lg:block">
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                        </div>
                        <div className="hidden lg:block">
                            <svg
                                className=" w-7 h-7"
                                xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <svg
                                className="w-7 h-7"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                    </div>
                </ul>
            </nav>
        </>
    )
}