import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="container max-w-6xl">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
