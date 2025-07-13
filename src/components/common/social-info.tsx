import Link from "next/link";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {personalInfo} from "@/src/lib/data";

export default function SocialInfo() {
    return (
        <div className="flex justify-center lg:justify-start space-x-8">
            <Link
                target="_blank"
                href={personalInfo.socialLinks.github}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="GitHub"
            >
                <GitHubLogoIcon className="h-7 w-7"/>
            </Link>
            <Link
                target="_blank"
                href={personalInfo.socialLinks.linkedin}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
            >
                <LinkedInLogoIcon className="h-7 w-7"/>
            </Link>
            <Link
                target="_blank"
                href={personalInfo.socialLinks.mail}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="Email"
            >
                <EnvelopeClosedIcon className="h-7 w-7"/>
            </Link>
        </div>
    )
}