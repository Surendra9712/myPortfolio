export default function Education() {
    return (
        <div>
            <h3 className="title">Education</h3>
            <ul role="list" className="mt-8">
                <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
                    <div
                        className="absolute bottom-0 left-2 top-0 w-px bg-sky-800"></div>
                    <div
                        className="absolute left-0  h-4 w-4 rounded-full border-2 border-sky-300 bg-zinc-950"></div>
                    <div className="group shadow-lg p-4 rounded transition-all ease-in-out hover:bg-cyan-800">
                        <h3 className="mt-2 text-sm/6 font-semibold group-hover:text-white">Bachelor in Computer Engineering</h3>
                        <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                            2016-2020
                        </p>
                        <p className="card mt-0.5 text-sm/6 text-zinc-600 group-hover:text-white">I completed my Bachelor&#39;s degree in
                            Computer
                            Engineering from Pokhara University, where I learned the fundamentals of computing, software
                            development, and data management. My academic experience was complemented by hands-on
                            projects
                            that refined my coding and technical problem-solving abilities. With a strong foundation in
                            computer systems and a passion for innovation, I’m excited to continue building impactful
                            software solutions in the tech industry.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}