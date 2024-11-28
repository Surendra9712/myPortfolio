"use client"
import Intro from '@/components/intro'
import 'keen-slider/keen-slider.min.css'
import Skill from "@/components/skill";

export default function Home() {
    return (
        <section className='pb-24 pt-40'>
            <div className='container max-w-3xl'>
                <Intro/>
                <Skill/>
            </div>
        </section>
    )
}
