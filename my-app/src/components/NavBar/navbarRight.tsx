
export default function NavbarRight() {



    return (
        <div className="flex basis-1/4  items-center justify-center">
            <div className="hidden xl:block space-x-5  transition-transform duration-1000">
                <button className="border-2 border-gray-300 transition-colors duration-300 rounded-2xl px-5 py-2 hover:bg-gray-200 hover:border-black">Sign in</button>
                <button className="border-2 border-gray-300 transition-colors duration-300 rounded-2xl px-5 py-2 hover:bg-gray-200 hover:border-black"> Sign up</button>
            </div>
            <div className="xl:hidden flex">
                <img src="/Components/NavBar/user.png" alt="user" className="w-6 h-6"/>
                {/* Add more icons here */}
            </div>
        </div>
    )
}