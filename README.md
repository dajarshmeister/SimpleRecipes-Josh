## Folder Structure

1.  src
    - assets
      - images
    - components
    - pages
    - styles

## Gatsby Web Fonts

1.  https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/?=web%20fonts
2.  Fonts need to be placed in the extend area of the tailwind config

## Tailwind CSS

1.  https://tailwindcss.com/docs/guides/gatsby
2.  https://v1.tailwindcss.com/course/setting-up-tailwind-and-postcss

## Layout Module

1.  In the components folder create a "Layout.js" This file accepts children prop.
2.  Create a Header.js and Footer.js to wrap site and import it into Layout.js

## Container styling

1.  https://github.com/tailwindlabs/tailwindcss/issues/1102

## Images

1.  Create folder "src/assets/images"
2.  Install [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
3.  Use StaticImage if images are used exactly the same and don't change. If the image is dynamic or being imported through props use GatsbyImage
