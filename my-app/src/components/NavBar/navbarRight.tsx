import Link from 'next/link'
import Image from "next/image";
export default function NavbarRight() {



    return (
        <div
            className={
                "flex basis-1/4  items-center justify-center bg-white"
            }
        >
            <div
                className={
                    "hidden xl:block space-x-5  transition-transform duration-1000"
                }
            >
                <Link
                    href="/login?form=signin"
                >
                    <button
                        className={
                            "border-2 border-gray-300 transition-colors duration-300 rounded-2xl px-5 py-2 hover:bg-gray-200 hover:border-black"
                        }
                    >
                        Sign in
                    </button>
                </Link>
                <Link
                    href="/login?form=signup"
                >
                    <button
                        className={
                            "border-2 border-gray-300 transition-colors duration-300 rounded-2xl px-5 py-2 hover:bg-gray-200 hover:border-black"
                        }
                    >
                        Sign up
                    </button>
                </Link>
            </div>
            <div
                className={
                "xl:hidden flex"
                }
            >
                <Link
                    href="/login"
                >
                    <Image
                        width={24}
                        height={24}
                        src="/Components/NavBar/user.png"
                        alt="user"
                    />
                </Link>
            </div>
        </div>
    )
}