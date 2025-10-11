import FooterRight from "@/components/Footer/footerRight";
import FooterMiddle from "@/components/Footer/footerMiddle";

export default function footer(){
    return (
        <footer className="w-full h-16 bg-gray-900 flex items-center justify-center text-white">
            <p className="text-sm w-1/3 text-center">
                Footer content goes here.
            </p>
            <FooterMiddle/>
            <FooterRight/>
        </footer>
    )
}