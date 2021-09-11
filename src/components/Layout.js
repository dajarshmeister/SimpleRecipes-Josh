import React from "react"
import Footer from "./Footer"
import Navbar from "./header/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
