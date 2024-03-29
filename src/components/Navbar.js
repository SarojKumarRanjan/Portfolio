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

function Navbar() {
  const [variant, setVariant] = useState("home");

  const clickHandler = (clickedVariant) => {
    setVariant(clickedVariant);
  };

  return (
    <aside className="w-[270px] h-screen p-8  rounded-md  bg-stone-100 sticky ">
      <div
      
      className="flex items-center space-x-4 mb-8 w-full">
        <img
        className="rounded-full"
        src="https://iili.io/JhfDSdF.jpg"
        alt="img"
        height={80}
        width={60}
        />
        <div>
          <h2 className=" text-sm font-semibold">Saroj kumar Ranjan</h2>
          <p className=" text-sm text-gray-600">Developer</p>
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
            <Button
              className="w-full justify-start hover:shadow-lg"
              variant="ghost"
            >
              <Twitter height={16} />
              Twitter
            </Button>
          </li>
          <li>
            <Button
            
              className="w-full justify-start hover:shadow-lg"
              variant="ghost"
            >
              <Linkedin height={16} />
             <a href="https://www.linkedin.com/in/saroj-kumar-ranjan-3b82b2249/"> Linkedin </a>
            </Button>
          </li>
          <li>
            <Button
              className="w-full justify-start hover:shadow-lg"
              variant="ghost"
            >
              <Github height={16} />
              Github
            </Button>
          </li>
        </ul>
      </div>
      <Button className="w-full shadow-lg" variant="default">
        Read Resume
      </Button>
    </aside>
  );
}

export default Navbar;
