import person from "../../assets/images/jana_photo.jpeg";
import "./introduction.css";
// import InformationSummary from "./InformationSummary";

// Information summary data
// const informationSummaryData = [
//   {
//     id: 1,
//     title: "Experience",
//     description: "15 Y.",
//   },
//   {
//     id: 2,
//     title: "Projects Completed",
//     description: "250+",
//   },
//   {
//     id: 3,
//     title: "Happy Clients",
//     description: "58",
//   },
// ];

const Introduction = () => {
  return (
      <div
          className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
          id="introduction">
          <div className="w-full flex flex-col justify-center max-lg:text-center lg:justify-center lg:h-[636px]">
              <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500 my-auto">
                  <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
                      Hello, I’m
                      <span className="text-nowrap shrink-0 inline-block w-full font-bold">
                          Jana Emad
                      </span>
                  </p>
                  <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
                      I'm a{" "}
                      <span className="bg-highlight font-bold">
                          Software Engineer Student
                      </span>{" "}
                      and{" "}
                      <span className="bg-highlight font-bold">
                          {" "}
                          Backend Developer
                      </span>{" "}
                      based in Alexandria, Egypt, pursuing a Computer and
                      Communication Engineering degree at Alexandria University
                      with a 3.78 CGPA. I love coding and creating innovative
                      solutions and eager to apply my skills in real-world
                      projects.
                  </p>
                  <p className="text-center lg:text-start">
                      <a
                          className="btn-primary btn btn-xs xxs:btn-lg text-white font-bold"
                          href="mailto:es-janaah.emad2027@alexu.edu.eg?subject=Portfolio Inquiry&body=Hello Jana,%0A%0AI saw your portfolio and I'd like to connect.">
                          Say Hello!
                      </a>
                  </p>
              </div>
          </div>
          <div
              className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative flex items-center`}>
              <img
                  className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
                  src={person}
                  alt="person"
              />
          </div>
      </div>
  );
};

export default Introduction;
