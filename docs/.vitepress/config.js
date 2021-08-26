module.exports = {
  lang: "en-US",
  title: "VS Code Dev Container for SAP HANA App development",
  description:
    "VS Code Dev Container for SAP HANA App development for Node.js 14.x",
  // base: "/vsc-sap-hana-mta-dev-env-node14x/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    repo: "draschke/vsc-sap-hana-mta-dev-env-node14x",
    docsDir: "docs",

    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      // { text: 'Home', link: '/', activeMatch: '^/$|^/guide/' },
      { text: "Home", link: "/" },
      // {
      //   text: "Exercises",
      //   link: "/config/basics",
      //   activeMatch: "^/config/",
      // },
      {
        text: "Release Notes",
        link: "https://github.com/draschke/vsc-sap-hana-mta-dev-env-node14x/releases",
      },
    ],

    // sidebar: {
    //   // '/guide/': getGuideSidebar(),
    //   "/config/": getConfigSidebar(),
    //   // '/': getGuideSidebar()
    // },
  },
};

// function getGuideSidebar() {
//   return [
//     {
//       text: "Introduction",
//       children: [{ text: "Motivation", link: "/" }],
//     },
//   ];
// }

// function getConfigSidebar() {
//   return [
//     {
//       text: "Exercises",
//       children: [{ text: "Basics", link: "/config/basics" }],
//     },
//     {
//       text: "Exercises: App dev on SAP BTP",
//       children: [
//         {
//           text: "Run a CAP Application on Kyma",
//           link: "/config/App-dev-on-SAP-BTP/Run-a-CAP-Application-on-Kyma"
//         }
//         // { text: 'Homepage', link: '/config/homepage' }
//       ],
//     },
//     {
//       text: "Exercises: SAP-Tech-Bytes",
//       children: [
//         {
//           text: "Using GitHub Actions to Deploy Continuously to Kyma K8s Cluster",
//           link: "/config/SAP-Tech-Bytes/Using-GitHub-Actions-to-Deploy-Continuously-to-Kyma-K8s-Cluster"
//         }
//       ],
//     },

//     {
//       text: "Exercises: Blogs-SAP-Com",
//       children: [
//         {
//           text: "Build SAP Overview Page using SAP HANA Cloud with VS Code",
//           link: "/config/Blogs-SAP-Com/Build-SAP-Overview-Page-using-SAP-HANA-Cloud-with-VS-Code"
//         }
//       ],
//     },
//   ];
// }
