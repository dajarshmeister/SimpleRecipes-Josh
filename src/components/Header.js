import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {
  const links = [
    { name: "Home", url: "" },
    { name: "Recipes", url: "recipes" },
    { name: "Tags", url: "tags" },
    { name: "About", url: "about" },
  ]
  return (
    <nav className="flex items-center py-8">
      <StaticImage
        className="mr-10"
        src="../assets/images/logo.svg"
        alt="Simple Recipes"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="hidden md:flex items-center justify-between w-full">
        <ul className="flex">
          {links.map(link => {
            const { name, url } = link
            return (
              <li className="mr-8 last:mr-0">
                <Link
                  className="text-lg"
                  to={`/${url}`}
                  activeClassName={"text-primary"}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to="/contact" className="btn btn-primary ml-auto">
          Contact now
        </Link>
      </div>
    </nav>
  )
}

export default Header
