//import React from 'react'

export default function About() {
    return (
        <section className="min-h-[90vh] grid grid-cols-1 gap-5 xl:grid-cols-8 bg-pc_gray_white">

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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only
                        five centuries
                    </p>
                    <button className="btn_primary">
                        Learn more
                    </button>
                </div>
            </div>

        </section>
    )
}
