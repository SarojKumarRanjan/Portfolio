

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    
      
     
        <div >
          <MailboxIcon className="text-purple-600 w-10 h-10 " />
          <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-600 mb-12">
            Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.
          </p>
          <form className="space-y-4">
            <Input className="w-full p-3 border-2 rounded-md" placeholder="Your Name" type="text" />
            <Input className="w-full p-3 border-2 rounded-md" placeholder="Your email address" type="email" />
            <Textarea className="w-full p-3 border-2 rounded-md h-32" placeholder="Your Message" />
            <div className="flex space-x-4">
              
              <Button className="w-full py-3 px-8 rounded-md text-white hover:bg-slate-700 shadow-lg" varient="secondary">
                Submit
              </Button>
            </div>
          </form>
        </div>
        
      
  )
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  )
}
