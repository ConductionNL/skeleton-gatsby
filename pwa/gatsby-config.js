require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.tsx`)
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        excludeOptions: {
          separator: "."
        },
        crumbLabelUpdates: [
          {
            pathname: "/meldingen/formulier",
            crumbLabel: "Melding doen"
          },
          {
            pathname: "/meldingen/overzicht",
            crumbLabel: "Mijn meldingen"
          },
          {
            pathname: "/products/[id]",
            crumbLabel: "Product"
          },
          {
            pathname: "/nieuws/[id]",
            crumbLabel: "Nieuws"
          }
        ]
      }
    }
  ]
};
