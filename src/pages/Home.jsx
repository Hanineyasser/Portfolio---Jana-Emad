import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
// import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const scrollTo =
            location?.state?.scrollTo ||
            (location.hash ? location.hash.replace("#", "") : null);
        if (scrollTo) {
            setTimeout(() => {
                scroller.scrollTo(scrollTo, {
                    smooth: true,
                    duration: 900,
                    offset: -140,
                });
            }, 80);
        }
    }, [location]);

    return (
        <div className="relative">
            <div className="introduction-profile-background">
                <div className="content">
                    <Introduction />
                    <Profile />
                </div>
            </div>
            <div className="bg-soft-white pt-30">
                <WorkProcess />
            </div>
            <Portfolio />
            <div className="bg-gray-900">
                <WorkTogether />
            </div>
            {/* <div className="blog-background">
        <Blog />
      </div> */}
            <div className="bg-soft-white">
                <Profession />
            </div>
            {/* <HappyClients /> */}
            {/* <Testimonial /> */}
            <Contact />
        </div>
    );
};

export default Home;
