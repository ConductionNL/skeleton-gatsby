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
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        excludeOptions: {
          separator: "."
        },
        crumbLabelUpdates: [
          {
            pathname: "/products/[id]",
            crumbLabel: "Product"
          }
        ]
      }
    }
  ]
};
