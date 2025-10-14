import connectImg from "../../assets/images/connectHub2.png";

const ConnectHub = () => {
    return (
        <div id="connectHub" className="content py-12">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                        <img
                            src={connectImg}
                            alt="Connect Hub"
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="section-title">Connect Hub</p>
                        <p className="text-gray-600 mt-4">
                            Connect Hub is a social media app I made for desktop
                            computers, and I built the whole thing using Java. I
                            used Java Swing to create the user interface you see
                            and click on. All the behind-the-scenes work, like
                            managing user data and posts, is also handled by
                            Java. You can create an account, customize your
                            profile, share posts with text and pictures, and
                            even add friends. It’s a complete project that shows
                            how to build both the front-end and back-end of an
                            application using just one language.
                        </p>
                        <div className="mt-6">
                            <h4 className="font-semibold">Tech stack</h4>
                            <p className="text-gray-500 text-sm">
                                Java • Java Swing
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold">
                                GitHub Repository:
                            </h4>
                            <p className="text-gray-500 text-sm">
                                <a
                                    href="https://github.com/habibarezq/ConnectHub.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    https://github.com/habibarezq/ConnectHub.git
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectHub;
