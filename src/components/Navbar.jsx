import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        // justify-between is used to space the items inside the flex container
        // It places the first item (logo) on the left and the last item (D for desktop menu) on the right
        // The space between the two elements is maximized
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src="/logo.png" className="w-8 h-8" alt="" />
                <span>lamalog</span>
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div className="cursor-pointer text-2xl" onClick={()=>setOpen(prev=>!prev)}>
                    {open? "X" : "☰"}
                </div>
                {/* MOBILE LINK LIST */}
                {/* items-center: Centers the children horizontally, justify-center: Centers the children vertically */}
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    menu
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex">D</div>
        </div>
    )
}

export default Navbar