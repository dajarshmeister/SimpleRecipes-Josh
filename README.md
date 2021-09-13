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
4.  To apply classes to image itself use "imgClassName"

## Active styles for current page

1.  use activeClassName prop and pass it a class value

## Sticky Footer

All the wrapper elements on the page, html, wrapper etc need to be display flex with 100% height. The footer element can then user margin top auto to have it float to the bottom

## Loading Environment Variables

https://www.gatsbyjs.com/plugins/gatsby-source-contentful

1.  .env.development
2.  .env.production

## Creating Pages dynamically

https://www.gatsbyjs.com/docs/creating-and-modifying-pages/

## File System API

1.  Create a file within the pages folder and it must be named the same name that is in graphql but remove the word "all" from the name. This file will be used as the template to create new pages dynamically. Then you can choose which field you want gatsby to base the slug off of. For instance if you choose the title, gatsby will run a query behind the scenes for recipes and create pages for all recipes and base the slug off title.

## Headless CMS

1.  Make sure pages are set to have unique values

## Icons

1.  [React icons](https://react-icons.github.io/react-icons)

## Query Variables

Query variables allow you to pass in variables dynamically into your queries. We need this for create dynamic templates because when you make a query in your page for the data we need to pass in the title as a query variable to perform our second query. This is what brings in the rest of the page data.
