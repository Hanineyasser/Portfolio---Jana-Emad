import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
    { id: 1, name: "Home", url: "introduction" },
    { id: 2, name: "About", url: "profile" },
    { id: 3, name: "Process", url: "work-process" },
    { id: 4, name: "Portfolio", url: "portfolio" },
    { id: 5, name: "Services", url: "services" },
];

const handleMenuClick = () => {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
};

// build menu dynamically using react-router navigation + react-scroll
const menu = (goToSection) =>
    navItems.map((item) => (
        <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
            <button
                onClick={() => {
                    handleMenuClick();
                    goToSection(item.url.toLowerCase());
                }}
                className={`hover:text-picto-primary px-5 py-3 mx-1`}>
                {item.name}
            </button>
        </li>
    ));

const NavBar = () => {
    const [position, setPosition] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (sectionId) => {
        if (location.pathname === "/") {
            scroller.scrollTo(sectionId, {
                smooth: true,
                duration: 900,
                offset: -140,
            });
        } else {
            navigate("/", { state: { scrollTo: sectionId } });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 ${
                position > 50
                    ? "bg-soft-white border-b border-gray-300"
                    : "bg-white border-white"
            } z-50 transition-all duration-1000 font-sans`} // Added font-sans for better font
        >
            <div className="navbar flex justify-between mx-auto content">
                <div className="flex items-center justify-between">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black font-sans`}>
                            {menu(goToSection)}
                        </ul>
                    </div>

                    <button
                        onClick={() => {
                            handleMenuClick();
                            goToSection("introduction");
                        }}
                        className="flex items-center border-0 lg:max-xxl:ps-5 font-sans"
                        aria-label="Go to Home">
                        {/* <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" /> */}
                        <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold italic">
                            Jana
                        </p>
                    </button>
                </div>

                <div className="lg:flex items-center">
                    <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0 font-sans">
                        {menu(goToSection)}
                    </ul>
                    <p className="">
                        <button
                            className="btn btn-sm xs:btn-md sm:btn-lg btn-primary font-sans"
                            onClick={() => {
                                handleMenuClick();
                                goToSection("contact");
                            }}>
                            Contact
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
