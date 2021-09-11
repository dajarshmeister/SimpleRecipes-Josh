import React from "react"
import Footer from "./Footer"
import Navbar from "./header/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
