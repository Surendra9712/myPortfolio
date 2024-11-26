import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Avatar } from '@/components/ui/avatar'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            <div className="flex gap-5">
              <Avatar src={'/Surendra.png'}/>
            </div>
          </Link>
        </div>

        {/*<ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">*/}
        {/*  <li className="transition-colors hover:text-foreground">*/}
        {/*    <Link href="/posts">Posts</Link>*/}
        {/*  </li>*/}
        {/*  <li className="transition-colors hover:text-foreground">*/}
        {/*    <Link href="/projects">Projects</Link>*/}
        {/*  </li>*/}
        {/*  <li className="transition-colors hover:text-foreground">*/}
        {/*    <Link href="/contact">Contact</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
