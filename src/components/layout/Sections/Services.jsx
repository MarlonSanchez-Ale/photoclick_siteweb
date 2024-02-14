//import React from 'react'
import {
    RiCameraFill,
    RiCameraLensFill,
    RiMicFill,
    RiPlayMiniFill
} from "react-icons/ri";

export default function Services() {
    return (
        <section className="bg-gray-100 p-10">
            <div className="flex flex-col items-center justify-center my-10 gap-8 p-5">
                <h1 className="title text-center">
                    Our service
                </h1>
                <div className="flex sm:flex-col md:flex-row gap-10">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <RiCameraFill size={50} />
                        <span className="text-center text-xl font-photoclick">Photo Studio</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <RiPlayMiniFill size={50} />
                        <span className="text-center text-xl font-photoclick">Video</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <RiCameraLensFill size={50} />
                        <span className="text-center text-xl font-photoclick">Animation</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <RiMicFill size={50} />
                        <span className="text-center text-xl font-photoclick">Audio</span>
                    </div>
                </div>
            </div>
        </section>

    )
}
