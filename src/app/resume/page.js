/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LoDVrWFE5KJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 px-8 py-12 bg-white">
        <div className="flex flex-col items-center mb-10">
          <Avatar>
            <AvatarImage alt="John Doe" src="/placeholder.svg?height=100&width=100" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
          <p className="text-sm text-gray-600">Developer</p>
        </div>
        <nav className="mb-10">
          <ul className="space-y-2">
            <li>
              <HomeIcon className="text-gray-400" /> Home
            </li>
            <li>
              <UserIcon className="text-gray-400" /> About
            </li>
            <li>
              <FolderIcon className="text-gray-400" /> Projects
            </li>
            <li>
              <FileTextIcon className="text-gray-400" /> Articles
            </li>
            <li>
              <MailIcon className="text-gray-400" /> Contact
            </li>
          </ul>
        </nav>
        <div className="mb-10">
          <h3 className="mb-4 text-sm font-semibold text-gray-600">Socials</h3>
          <ul className="space-y-2">
            <li>
              <TwitterIcon className="text-gray-400" /> Twitter
            </li>
            <li>
              <LinkedinIcon className="text-gray-400" /> LinkedIn
            </li>
            <li>
              <YoutubeIcon className="text-gray-400" /> YouTube
            </li>
          </ul>
        </div>
        <Button className="w-full" variant="secondary">
          Read Resume
        </Button>
      </aside>
      <main className="flex-1 px-16 py-12">
        <section>
          <h1 className="text-4xl font-bold text-gray-800">Work History</h1>
          <p className="mt-4 text-lg text-gray-600">
            I'm a full-stack developer that loves building products and web apps that can impact millions of lives
          </p>
          <article className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800">2022 - Present</h2>
            <h3 className="mt-2 text-xl font-semibold text-blue-600">Amazon</h3>
            <p className="text-sm text-gray-500">Senior Software Engineer</p>
            <p className="mt-1 text-sm text-gray-600">Building the future of e-commerce</p>
            <ul className="mt-4 list-disc list-inside space-y-1 text-gray-600">
              <li>Developed a new feature that improves the shopping experience</li>
              <li>Implemented a recommendation algorithm to suggest products</li>
              <li>Enhanced the checkout process making it more intuitive and user-friendly</li>
              <li>Built a feature for tracking packages in real-time</li>
            </ul>
          </article>
          <article className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">2021 - 2022</h2>
            <h3 className="mt-2 text-xl font-semibold text-green-600">Google</h3>
            <p className="text-sm text-gray-500">Senior Software Engineer</p>
            <p className="mt-1 text-sm text-gray-600">Building the future of search</p>
            <ul className="mt-4 list-disc list-inside space-y-1 text-gray-600">
              <li>Improved the search algorithm to provide more relevant results</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  )
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}


function FolderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
