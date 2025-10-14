import person from "../../assets/images/jana_photo1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
    return (
        <div
            className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
            id="profile">
            <div className="flex max-md:flex-col justify-between items-center gap-6">
                {/* Profile image */}
                <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
                    <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
                        <img
                            className="bg-soft-white h-[120%] object-cover"
                            src={person}
                            alt=""
                        />
                    </div>
                    {/* Social media section */}
                    <div className="relative bottom-9">
                        <div className="flex justify-center">
                            <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-sm:w-full w-[33rem]">
                    <h2
                        className={`text-2xl xxs:text-3xl sm:text-4xl max-md:text-center font-semibold mb-8`}>
                        I am Software Engineer Student
                    </h2>
                    <div
                        className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}>
                        <p className={``}>
                            I am a Computer and Communication Engineering
                            student at Alexandria University, eager to learn and
                            contribute to new challenges. With a strong academic
                            foundation reflected in my 3.78 CGPA. My passion is
                            to apply my skills in software development to create
                            robust and innovative solutions using languages like
                            C/C++, Java, and Python.
                        </p>
                        <p className="mt-3">
                            My practical experience is demonstrated through a
                            variety of projects. I have developed a core bank
                            system using C, in addition to creating a social
                            media application named "Connect Hub" with Java, and
                            engineered a remote-controlled ground robot with
                            heat and distance sensors for autonomous navigation.
                        </p>
                    </div>
                    <div className="mt-8 flex max-md:justify-center">
                        <a
                            className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
                            // 1. Point href to the file in your public folder
                            href="/cv.janaemad.pdf"
                            // 2. Add the download attribute to trigger a download
                            //    You can suggest a new filename like this
                            download="Jana_Emad_CV.pdf">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
