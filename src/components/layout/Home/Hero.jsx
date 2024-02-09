import {
    RiCheckboxBlankCircleFill,
    //RiPlayFill,
    //RiStarFill,
} from "react-icons/ri";

export default function Hero() {
    return (
        <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
            {/*Information */}
            <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
                <div className="flex flex-col gap-8">
                    <h1 className="title">
                        PhotoClick{" "}
                        <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block">
                            Studio
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-pc_gray_dark rounded-full box-content" />
                        </span>
                    </h1>
                    <p className="text-gray-500 text-2xl leading-[2.5rem]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button className="btn_primary">
                            Portfolio
                        </button>
                        <button className="btn_second">
                            Contact us
                        </button>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="md:col-span-3 flex items-center justify-center relative">
                {/* Content image */}
                <div>
                    <img
                        src="hero1.jpg"
                        className="w-[450px] h-[450px] md:w-[450px] md:h-[450px] object-cover xl:-mt-28"
                    />
                </div>
            </div>
        </section>
    )
}
