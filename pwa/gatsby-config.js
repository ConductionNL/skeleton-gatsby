require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/LayoutKiss.tsx`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        excludeOptions: {
          separator: ".",
        },
        crumbLabelUpdates: [
          {
            pathname: "/nieuws/[id]",
            crumbLabel: "Nieuws",
          },
        ],
      },
    },
  ],
};
