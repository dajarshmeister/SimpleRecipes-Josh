# Gatsby Setup

## Folder Structure

1.  src
    - assets
      - images
    - components
    - pages
    - scss

## Installing SCSS support

1. https://www.gatsbyjs.com/docs/how-to/styling/sass/

## Bootstrap

1. npm install bootstrap
2. create src/scss/main.scss
3. create src/scss/vendors/\_bootstrap.scss
4. https://getbootstrap.com/docs/5.1/customize/sass/ use this site to copy and paste the template. You can replace "../node_modules/" with "~" as it means the same thing
5. Import your other partials into this file that effect bootstrap
6. Import bootstrap into "gatsby-browser.js"

## Naming conventions

1.  pages should be lowercased to match slug
2.  components should be sentence cased.

## Gatsby Web Fonts

1.  https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=web%20fonts
2.  Fonts need to be placed in the extend area of the tailwind config

## Layout Module

1.  In the components folder create a "Layout.js" This file accepts children prop.
2.  Create a Header.js and Footer.js to wrap site and import it into Layout.js

## Images

1.  Create folder "src/assets/images"
2.  Install [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
3.  Use StaticImage if images are used exactly the same and don't change. If the image is dynamic or being imported through props use GatsbyImage

## Active styles for current page

1.  use activeClassName prop and pass it a class value

## Sticky Footer

All the wrapper elements on the page, html, wrapper etc need to be display flex with 100% height. The footer element can then user margin top auto to have it float to the bottom
