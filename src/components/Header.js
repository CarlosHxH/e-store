import { Navbar } from "flowbite-react";
import Image from "next/image";

const links = [
  {text:"Home",href:"/home"},
  {text:"About",href:"/about"},
  {text:"Services",href:"/services"},
  {text:"Privacy",href:"/privacy"},
]

export default function Header() {
  return(
  <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite.com/">
      <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8 sm:h-12" alt="icon" width={100} height={100}/>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-gray">
        Flowbite
      </span>
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      {links.map(({text,href},i) =>
        <Navbar.Link key={i} href={href}>{text}</Navbar.Link>
      )}
    </Navbar.Collapse>
  </Navbar>
  )
}