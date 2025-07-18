import NavbarRight from "@/components/NavBar/navbarRight";
import NavbarMiddle from "@/components/NavBar/navbarMiddle";

export default function NavBar() {
    return (
        <div className="h-12 flex flex-row w-full border-b border-b-gray-200 overflow-y-hidden">
            <NavbarMiddle/>
            <NavbarRight/>
        </div>
    )
}