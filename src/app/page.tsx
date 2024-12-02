"use client"
import Intro from '@/components/intro'
import 'keen-slider/keen-slider.min.css'
import Skill from "@/components/skill";
import Education from "@/components/education";

export default function Home() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-4xl space-y-20'>
                <Intro/>
                <Skill/>
                <Education/>
            </div>
        </section>
    )
}
