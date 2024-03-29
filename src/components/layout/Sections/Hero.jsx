import {
    RiCheckboxBlankCircleFill,
    //RiPlayFill,
    //RiStarFill,
} from "react-icons/ri";
import SubTitle from "../../elements/Titles/SubTitle";

function Hero() {
    return (
        <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            {/*Information */}
            <div className="md:col-span-5 flex items-center justify-center">
                <div className="flex flex-col gap-8 sm:text-center md:text-start p-10">
                    <h1 className="title_dark">
                        PhotoClick{" "}
                        <span className="text-primary py-2 px-6 sm:mt-5 border-8 border-primary relative inline-block">
                            Studio
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                        </span>
                    </h1>
                    <SubTitle>
                        Welcome to PhotoClick, where the Art of Photography Transcends Time, Weaving a Tapestry of Unforgettable Moments.
                        Our Skilled Lensmiths Illuminate Your World, Expertly Capturing the Essence of Your Story, Creating Timeless
                        Portraits and Preserving Precious Memories.
                    </SubTitle>
                    <div className="flex flex-row gap-4 sm:justify-center md:justify-start">
                        <a href="#gallery" className="btn_primary text-center">
                            Portfolio
                        </a>
                        <a href="#contact" className="btn_second text-center">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="md:col-span-3 flex justify-center">
                {/* Content image */}
                <div className=" bg-gray-800">
                    <img
                        src="hero1.jpg"
                        className="img"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>

    )
}

export default Hero;