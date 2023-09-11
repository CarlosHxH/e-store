'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Image from "next/image";

const links = [
  {text:"Home",href:"/home"},
  {text:"About",href:"/about"},
  {text:"Services",href:"/services"},
  {text:"Privacy",href:"/privacy"},
]

const Item = ({children})=>(<span className='text-gray'>{children}</span>)
export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded className='py-2'>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image width={100} height={100} alt="React Logo" className="mr-3 h-6 sm:h-9" src="/vercel.svg"/>
        <Item className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-commerce</Item>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}>
          <Dropdown.Header>
            <Dropdown.Item className="block text-sm">Admin</Dropdown.Item>
            <Item className="block truncate text-sm font-medium">admin@admin.com</Item>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        {links.map(({text,href},i) =><Navbar.Link key={i} href={href}>{text}</Navbar.Link>)}
        <Navbar.Link href="/navbars">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}



/*
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
*/