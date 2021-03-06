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
5.  Static images you pass src prop
6.  Gatsby image pass image prop

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

Either option for creating pages isnt necesarrily better than one another its good to know both.

## File System API

Notes: Faster, less control

1.  Create a file within the pages folder and it must be named the same name that is in graphql but remove the word "all" from the name. This file will be used as the template to create new pages dynamically. Then you can choose which field you want gatsby to base the slug off of. For instance if you choose the title, gatsby will run a query behind the scenes for recipes and create pages for all recipes and base the slug off title.

## Gatsby Node API

Notes: More complicated, more control

1.  Create a template folder in src
2.  Create a file called gatsby-node.js
3.  Everytime you do something in gatsby node you have to restart server
4.  When you create a query you need to wrap it in parenthesis.
5.  First thing we do is execute a query and store the data we get back into a variable.
6.  Then we access the data and drill down to the specific property we want to iterate over.
7.  We perform a for each loop and the use the createPage action and pass it properties of path, component, and context. This will then generate pages for each of these items.
8.  We need to be able to access component path using
    - const path = require("path")

## Headless CMS

1.  Make sure pages are set to have unique values

## Icons

1.  [React icons](https://react-icons.github.io/react-icons)

## Query Variables

Query variables allow you to pass in variables dynamically into your queries. We need this for create dynamic templates because when you make a query in your page for the data we need to pass in the title as a query variable to perform our second query. This is what brings in the rest of the page data.

## Forms

1. Use Formspree

## SEO

1. Install [Gatsby plugin react helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet)
2. Create a component called SEO and pass it the appropriate prop values

## Webhooks

Imagine youre in a scenario where you make a content update in your headless cms. The build process wont trigger automatically, you will have to go into either netlify or your local app and redeploy with new content.

1. Go to build hooks in settings netlify, copy the value it gives you
2. Go to contentful and paste in the url into the webhooks section
3. Now when any changes are made a post request is sent to netlify to rebuild the app.
