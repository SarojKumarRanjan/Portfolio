"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  CodeSquare,
  PencilRuler,
  NotebookText,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

import { Button } from "@/components/ui/button";
//import { ModeToggle } from "./modebutton";

function Navbar() {
  const [variant, setVariant] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const clickHandler = (clickedVariant) => {
    setVariant(clickedVariant);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <aside className="hidden md:block w-[270px] h-screen p-8 rounded-md bg-stone-100 sticky">
        <div className="flex items-center space-x-4 mb-8 w-full">
          <img
            className="rounded-full"
            src="https://iili.io/JhfDSdF.jpg"
            alt="img"
            height={80}
            width={60}
          />
          <div>
            <h2 className="text-sm font-semibold">Saroj kumar Ranjan</h2>
            <p className="text-sm text-gray-600">Developer</p>
          </div>
        </div>
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <Button
                  onClick={() => clickHandler("home")}
                  className="w-full justify-start hover:shadow-lg"
                  variant={variant === "home" ? "secondary" : "ghost"}
                >
                  <Home height={16} />
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button
                  onClick={() => clickHandler("about")}
                  className="w-full justify-start hover:shadow-lg"
                  variant={variant === "about" ? "secondary" : "ghost"}
                >
                  <PencilRuler height={16} />
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <Button
                  onClick={() => clickHandler("projects")}
                  className="w-full justify-start hover:shadow-lg"
                  variant={variant === "projects" ? "secondary" : "ghost"}
                >
                  <CodeSquare height={16} />
                  Projects
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/article">
                <Button
                  onClick={() => clickHandler("article")}
                  className="w-full justify-start hover:shadow-lg"
                  variant={variant === "article" ? "secondary" : "ghost"}
                >
                  <NotebookText height={16} />
                  Articles
                </Button>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <Button
                  onClick={() => clickHandler("contact")}
                  className="w-full justify-start hover:shadow-lg"
                  variant={variant === "contact" ? "secondary" : "ghost"}
                >
                  <Mail height={16} />
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mb-8">
          <h3 className="text-m font-bold mb-2 pl-6">Socials</h3>
          <ul className="space-y-2">
            <li>
              <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
                <Twitter height={16} />
                <Link href="https://twitter.com/SarojRanjan02">Twitter</Link>
              </Button>
            </li>
            <li>
              <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
                <Linkedin height={16} />
                <a href="https://www.linkedin.com/in/saroj-kumar-ranjan-3b82b2249/"> Linkedin </a>
              </Button>
            </li>
            <li>
              <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
                <Github height={16} />
                <Link href="https://github.com/SarojKumarRanjan">Github</Link>
              </Button>
            </li>
          </ul>
        </div>
        <Button className="w-full shadow-lg" variant="default">
          Read Resume
        </Button>
      </aside>

      {/* Mobile Navbar */}
      <aside className="md:hidden fixed top-0 left-0 w-full p-2 bg-stone-100 z-50">
        <div className="flex items-center justify-between m-2">
          <button className="text-3xl focus:outline-none" onClick={toggleNav}>
            &#9776;
          </button>
         
          <img
            className="rounded-full"
            src="https://iili.io/JhfDSdF.jpg"
            alt="img"
            height={40}
            width={40}
          />
        </div>
        <div
  className={`bg-gray-200 p-4 fixed top-20 left-0 w-48 h-screen z-50 transform transition-transform ${showNav ? "translate-x-0" : "-translate-x-full"}`}
>
 
  
  <nav className="mb-8">
    <ul className="space-y-2">
      <li>
        <Link href="/">
          <Button
            onClick={() => clickHandler("home")}
            className="w-full justify-start hover:shadow-lg"
            variant={variant === "home" ? "secondary" : "ghost"}
          >
            <Home height={16} />
            Home
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <Button
            onClick={() => clickHandler("about")}
            className="w-full justify-start hover:shadow-lg"
            variant={variant === "about" ? "secondary" : "ghost"}
          >
            <PencilRuler height={16} />
            About
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <Button
            onClick={() => clickHandler("projects")}
            className="w-full justify-start hover:shadow-lg"
            variant={variant === "projects" ? "secondary" : "ghost"}
          >
            <CodeSquare height={16} />
            Projects
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/article">
          <Button
            onClick={() => clickHandler("article")}
            className="w-full justify-start hover:shadow-lg"
            variant={variant === "article" ? "secondary" : "ghost"}
          >
            <NotebookText height={16} />
            Articles
          </Button>
        </Link>
      </li>
      <li>
        <Link href="contact">
          <Button
            onClick={() => clickHandler("contact")}
            className="w-full justify-start hover:shadow-lg"
            variant={variant === "contact" ? "secondary" : "ghost"}
          >
            <Mail height={16} />
            Contact
          </Button>
        </Link>
      </li>
    </ul>
  </nav>
  <div className="mb-8">
    <h3 className="text-sm font-bold mb-2">Socials</h3>
    <ul className="space-y-2">
      <li>
        <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
          <Twitter height={16} />
          <Link href="https://twitter.com/SarojRanjan02">Twitter</Link>
        </Button>
      </li>
      <li>
        <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
          <Linkedin height={16} />
          <a href="https://www.linkedin.com/in/saroj-kumar-ranjan-3b82b2249/"> Linkedin </a>
        </Button>
      </li>
      <li>
        <Button className="w-full justify-start hover:shadow-lg" variant="ghost">
          <Github height={16} />
          <Link href="https://github.com/SarojKumarRanjan">Github</Link>
        </Button>
      </li>
    </ul>
  </div>
  <Button className="w-full shadow-lg" variant="default">
    Read Resume
  </Button>
</div>

      </aside>
    </>
  );
}

export default Navbar;
