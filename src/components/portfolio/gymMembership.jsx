import card3 from "../../assets/images/portfolio-images/card-3.png";

const GymMembership = () => {
    return (
        <div id="gymMembership" className="content py-12">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                        <img
                            src={card3}
                            alt="Gym Membership"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="section-title">
                            Gym Membership Management System
                        </p>
                        <p className="text-gray-600 mt-4">
                            A Java-based gym membership management application
                            is the backend system for a gym management app, and
                            I built it all using just Java. It handles all the
                            important behind-the-scenes work, like signing up
                            new members, managing different membership plans,
                            and letting people schedule classes. It can also
                            track attendance to see who showed up. It’s a
                            complete project that shows how to run all the main
                            functions of a gym using only Java.
                        </p>
                        <div className="mt-6">
                            <h4 className="font-semibold">Tech stack</h4>
                            <p className="text-gray-500 text-sm">
                                Java 
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">
                                GitHub Repository:
                            </h4>
                            <p className="text-gray-500 text-sm">
                                <a
                                    href="https://github.com/JanaEmad04/GymManagmentSystem.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    https://github.com/JanaEmad04/GymManagmentSystem.git
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymMembership;
