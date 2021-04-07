export default function MobileNav({toggle}) {

    return (
        <div className={`${toggle ? "" : "hidden"} mt-16 h-screen transition duration-700 lg:hidden absolute inset-0 flex flex-col bg-gray-50 z-30`}>
            <div className="">
                <div
                    className="py-4 px-8 border-b border-gray-300 w-full text-sm font-bold tracking-wider flex justify-between items-center">
                    <div>
                        MEN
                    </div>
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
                <div
                    className="py-4 px-8 border-b border-gray-300 w-full text-sm font-bold tracking-wider flex justify-between items-center">
                    <div>
                        WOMEN
                    </div>
                    <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </div>
                <div className="py-4 px-8 border-b border-gray-300 w-full text-sm font-bold tracking-wider">OUR
                    MATERIALS
                </div>
                <div
                    className="py-4 px-8 border-b border-gray-300 w-full text-sm font-bold tracking-wider">STORES
                </div>
                <div className="py-4 px-8 border-b border-gray-300 w-full">Account</div>
                <div className="py-4 px-8 border-b border-gray-300 w-full">Help</div>
            </div>
        </div>
    )
}