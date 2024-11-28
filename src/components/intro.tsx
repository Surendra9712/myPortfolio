import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Intro() {
    return (
        <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
            <div className='mt-2 flex-1 md:mt-0 flex flex-col gap-4'>
                <p className='text-3xl'>Hey, <strong>I&#39;m Surendra.</strong></p>
                <div
                    className="w-48 mt-4 text-center py-1 text-white
                    [background:linear-gradient(45deg,#1287A5,theme(colors.slate.800)_90%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,#019031,_theme(colors.slate.600/.48))_border-box] border-8 border-transparent animate-border">
                    Frontend Developer
                </div>
                <p className='font-light text-muted-foreground'>
                    I&#39;m a Frontend Developer. I&#39;m
                    passionate about learning new technologies and sharing knowledge with
                    others.
                </p>
                <div>
                    <Button variant="outline" shade={'success'}>Download CV</Button>
                </div>
            </div>
            <div className='relative'>
            <Image
                className='flex-1  grayscale'
                src={'/logo/Surendra.png'}
                alt='Surendra Rawal'
                width={175}
                height={175}
            />
                <div className="absolute w-full h-full border-8 border-cyan-800 right-4 top-4 -z-10"></div>
            </div>
        </section>
    )
}
