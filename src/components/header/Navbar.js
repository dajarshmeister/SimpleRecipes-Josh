import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Navbar = () => {
  const links = [
    { name: "Home", url: "" },
    { name: "Recipes", url: "recipes" },
    { name: "Tags", url: "tags" },
    { name: "About", url: "about" },
  ]
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <StaticImage
            src="../../assets/images/logo.svg"
            placeholder="tracedSVG"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(link => {
              const { name, url } = link
              return (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to={`/${url}`}
                    activeClassName={"active"}
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
