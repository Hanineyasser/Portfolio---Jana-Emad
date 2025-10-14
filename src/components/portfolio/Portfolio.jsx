import Projects from "./Projects";
import connectImg from "../../assets/images/connectHub2.png";
// import card1 from "../../assets/images/portfolio-images/card-1.png";
// import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
    {
        id: 1,
        image: connectImg,
        category: "Backend Development",
        title: "Connect Hub",
        description:
            "Created a social media application leveraging Java to manage user interaction, networking, and backend services.",
        link: "/projects/connect-hub",
    },
    {
        id: 2,
        image: card3,
        category: "Backend Development",
        title: "Gym membership management system",
        description:
            "Developed a comprehensive gym membership management system using Java, enabling efficient user registration and class scheduling.",
        link: "/projects/gym-membership",
    },
];

const Portfolio = () => {
    return (
        <div
            className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
            id="portfolio">
            <div className="xl:mb-17.5 mb-5">
                <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
                    <p className="section-title ">Portfolio</p>
                    {/* <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p> */}
                    <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
                        Here is a selection of my projects, showcasing my
                        ability to apply software engineering principles to
                        build robust and functional applications.
                    </p>
                </div>
            </div>
            <div className="mx-auto flex justify-center">
                <div className="flex justify-center flex-wrap gap-6 md:gap-10">
                    {projectData.map((data, index) => (
                        <Projects data={data} key={index} />
                    ))}
                </div>
            </div>
            {/* <div className="text-center">
              <a
                  href="#!"
                  className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold">
                  More Project
              </a>
          </div> */}
        </div>
    );
};

export default Portfolio;
