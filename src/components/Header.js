import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {
  const links = ["Home", "Recipes", "Tags", "About"]
  return (
    <nav className="flex items-center py-8">
      <StaticImage
        className="navbar__brand"
        src="../assets/images/logo.svg"
        alt="A dinosaur"
      />
      <ul className="flex">
        {links.map(link => (
          <li className="mr-8 last:mr-0">
            <Link className="navbar__link" to={`/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <a href="#" className="btn btn-primary ml-auto">
        Contact now
      </a>
    </nav>
  )
}

export default Header
