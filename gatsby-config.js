/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato, Dank Mono'],
          urls: ["/fonts/fonts.css"],
        }
      }
    },
    {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.DEPLOY_URL ? 'https://new-strapi01.herokuapp.com' : 'http://localhost:1337',
      queryLimit: 1000, // Default to 100
      contentTypes: [`courses`],
      //If using single types place them in this array.
      singleTypes: [`courses`],
      // Possibility to login with a strapi user, when content types are not publically available (optional).
      loginData: {
        identifier: "veereshkavalagi@gmail.com",
        password: "veeru7737",
      },
    },
  }
  ],
}
