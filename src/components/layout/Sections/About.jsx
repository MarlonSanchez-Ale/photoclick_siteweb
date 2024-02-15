//import React from 'react'

export default function About() {
    return (
        <section id="about" className="min-h-[90vh] grid grid-cols-1 gap-5 xl:grid-cols-8 bg-pc_gray_white">

            {/* Image */}
            <div className="md:col-span-4 flex justify-center">
                {/* Content image */}
                <div className=" bg-gray-800">
                    <img
                        src="About.jpg"
                        className="img"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="md:col-span-4 flex items-center justify-center">
                <div className="flex flex-col gap-8 sm:text-center sm:items-center md:items-start md:text-start p-10">
                    <h1 className="title">About us</h1>
                    <p className="subtitle">
                        Embark on a Visual Odyssey: Where Every Click Resonates with Emotion and Every Frame Tells a Story.
                        Welcome to PhotoClick, where the Art of Photography Transcends Time, Weaving a Tapestry of Unforgettable
                        Moments. Our Skilled Lensmiths Illuminate Your World, Expertly Capturing the Essence of Your Story,
                        Creating Timeless Portraits and Preserving Precious Memories. Step into a Realm Where Every Detail Matters,
                        and Each Image Speaks a Thousand Words. PhotoClick - Where Photography is an Art, and Your Moments
                        Are Our Masterpieces.
                    </p>
                    <a href="#contact" className="btn_primary text-center w-48">
                        {`let's work together`}
                    </a>
                </div>
            </div>

        </section>
    )
}
