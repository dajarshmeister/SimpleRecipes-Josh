import React from "react"
import Footer from "./Footer"
import Navbar from "./header/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
