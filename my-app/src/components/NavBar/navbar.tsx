import NavbarLeft from "@/components/NavBar/navbarLeft";
import NavbarRight from "@/components/NavBar/navbarRight";
import NavbarMiddle from "@/components/NavBar/navbarMiddle";

export default function NavBar() {
    return (
        <div className="h-12 flex flex-row w-full bg-indigo-500 border-b-1 overflow-y-hidden">
            <NavbarMiddle/>
            <NavbarRight/>
        </div>
    )
    }