import Roles from "./Roles";

const rolesData = [
    {
        id: 1,
        title: "Software Engineering",
        description:
            "I apply core computer science principles and my knowledge of Data Structures and Algorithms to build robust, efficient, and scalable software solutions in C, Java and Python.",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "I develop server-side logic and manage core functionalities for applications, as demonstrated in my Java-based 'Connect Hub' social app and the C-based banking system.",
    },
];

const Profession = () => {
    return (
        <div
            className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
            id="services">
            <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
                <p className="section-title max-md:text-center">What I do?</p>
                <div className="mt-6 text-[14px]">
                    <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
                        As a Computer and Communication Engineering student, I
                        specialize in software engineering and backend
                        development. My expertise lies in building robust
                        applications using languages like C/C++ , Java , and
                        Python , all grounded in a strong understanding of Data
                        Structures and Algorithms.
                    </p>
                    <p className="text-xs sm:text-lg font-normal text-gray-400">
                        My approach combines a solid theoretical foundation with
                        hands-on experience developing diverse solutions,
                        including a financial bank system , a social media
                        application, and an autonomous ground robot. I am eager
                        to learn and contribute to new and challenging projects.
                    </p>
                </div>
                <a
                    href="#!"
                    className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5">
                    Say Hello!
                </a>
            </div>
            <div className="">
                {rolesData.map((role, index) => (
                    <Roles role={role} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Profession;
