import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from "../index"

import { useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [mobileNav, setMobileNav] = useState(false)

  const toggleNav = () => {
    setMobileNav(!mobileNav)
  }

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    }
  ]
  return (
    <>
      <header className='py-5 shadow bg-emerald-700 text-[#fdfdfd]'>
        <Container>
          <nav className='flex justify-between items-center'>
            <div className='mr-4'>
              <Link to="/" className='flex items-center gap-2'>
                <Logo />
                <h1 className='text-xl'>Awesome Blogs</h1>
              </Link>
            </div>
            <ul className='hidden  md:flex ml-auto'>
              {navItems.map((item, index) =>
                item.active ? (
                  <li key={index}>
                    <button
                      className='inline-block px-6 py-2 duration-200 hover:text-emerald-900 rounded-md cursor-pointer'
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {
                authStatus && (
                  <li className=''>
                    <LogoutBtn />
                  </li>
                )
              }
            </ul>

            <button className='flex md:hidden' onClick={toggleNav}>
              {mobileNav ? <X /> : <Menu />}
            </button>
          </nav>

        </Container>
      </header>
      {/* Navbar for Mobile */}
      {mobileNav && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden">
          <nav
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs   bg-emerald-800 shadow-2xl "
            role="navigation"
            aria-label="Main"
          >
            <div className="flex items-center justify-end p-4">
              <button
                onClick={() => setMobileNav(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item, index) => (
                item.active ? (
                  <li key={index}>
                  <Link
                    to={item.slug}
                    className="flex rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-emerald-700 hover:text-white transition-colors"
                    onClick={() => setMobileNav(false)}
                  >
                    {item.name}
                  </Link>
                </li>
                ): null
              ))}
              {
                authStatus && (
                  <li className=''>
                    <LogoutBtn />
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header