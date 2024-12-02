import {Angular, NextJS, React, Tailwind} from "@/lib/logo";
import Image from "next/image";
import {useKeenSlider} from "keen-slider/react";

export default function Skill() {
    const animation = {duration: 10000, easing: (t: number) => t}
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            renderMode: "performance",
            drag: false,
            slides: {perView: 1},
            created(s) {
                s.moveToIdx(5, true, animation)
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, animation)
            },
            breakpoints: {
                "(min-width:400px)": {
                    slides: {perView: 2}
                },
                "(min-width:500px)": {
                    slides: {perView: 3}
                },
                "(min-width:800px)": {
                    slides: {perView: 4}
                },

            }
        },
    )
    return (
        <div ref={sliderRef} className="keen-slider shadow-2xl">
            <div
                className="keen-slider__slide  border-y-4 border-fuchsia-500 flex items-center justify-center gap-2 py-4">
                <span className="w-8">{Angular}</span>
                <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-800 text-xl font-semibold">Angular</span>
            </div>
            <div
                className="keen-slider__slide border-y-4 border-cyan-600 flex items-center justify-center gap-2 py-4">
                <span className="w-10">{React}</span> <span className="text-xl font-semibold">React</span>
            </div>
            <div
                className="keen-slider__slide border-y-4 border-black flex items-center justify-center gap-2 py-4">{NextJS}</div>
            <div
                className="keen-slider__slide border-y-4 border-rose-600 flex justify-center items-center gap-2 py-4 text-xl font-semibold">
                <Image width="48" height="48" src='/logo/nestJsLogo.svg' alt="Nest JS logo"/> NestJS
            </div>
            <div
                className="keen-slider__slide border-y-4 border-sky-400 flex justify-center items-center py-4">{Tailwind}</div>
        </div>
    )
}