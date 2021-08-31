let ogprefix = "og: http://ogp.me/ns#";
let title = "VS Code Dev Container for SAP HANA App development for Node.js 14x";
let description = "VS Code Dev Container for SAP HANA App development (XSA and CF)";
let color = "#f42525";
let author = "Dirk Raschke";
let email = "draschke@googlemail.com";

module.exports = {
  lang: "en-US",
  title: "VS Code Dev Container for SAP HANA App development for Node.js 14x",
  description:
    "VS Code Dev Container for SAP HANA App development for Node.js 14.x",
  base: "/vsc-sap-hana-mta-dev-env-node14x/",
  head: [
    // ["link", { rel: "icon", href: `/assets/favicon.ico` }],
    ["meta", { name: "theme-color", content: color }],
    ["meta", { prefix: ogprefix, property: "og:title", content: title }],
    ["meta", { prefix: ogprefix, property: "og:type", content: "article" }],
    ["meta", { prefix: ogprefix, property: "og:url", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/" }],
    ["meta", { prefix: ogprefix, property: "og:description", content: description }],
    ["meta", { prefix: ogprefix, property: "og:article:author", content: author }],
    ["meta", { prefix: ogprefix, property: "og:site_name", content: title }],
    ["meta", { prefix: ogprefix, property: "og:locale", content: "en_US" }],
    ["meta", { prefix: ogprefix, property: "og:locale:alternate", content: "en_GB" }],
    // means there are 3 images on this page, the first image is 300x300, the middle one has unspecified dimensions, and the last one is 1000px tall.
    // 1 1200X627
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/hiddensee_1200_627.jpg" }],    
    ["meta", { prefix: ogprefix, property: "og:image:width", content: "1200" }],
    ["meta", { prefix: ogprefix, property: "og:image:height", content: "627" }],    
    // 2 600x314
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/hiddensee_600_314.jpg" }],
    ["meta", { prefix: ogprefix, property: "og:image:width", content: "600" }],
    ["meta", { prefix: ogprefix, property: "og:image:height", content: "314" }],  
    // 3 unspecified
    ["meta", { prefix: ogprefix, property: "og:image", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/hiddensee_1200_627.jpg" }],    
    ["meta", { prefix: ogprefix, property: "og:image:alt", content: title }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:description", content: description }],
    ["meta", { name: "twitter:creator", content: author }],
    ["meta", { name: "twitter:site", content: email }],
    ["meta", { name: "twitter:image:alt", content: title }],
    ["meta", { name: "twitter:image", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/hiddensee_1200_627.jpg" }],
    ["meta", { name: "description", content: description }],
    ["meta", { name: "keywords", content: "SAP HANA XSA exercises, SAP HANA XSA tutorial, SAP HANA XSA Application Architect, SAP HANA BTP, SAPUI5, SAP Fiori, DevOps, Docker, Kubernetes, K8s, Kyma, JavaScript, Node.js" }],
    ["meta", { name: "author", content: author }],
    // name: "image" => heroImage: /path_600_314.jpg
    // ["meta", { name: "image", content: "https://draschke.github.io/vsc-sap-hana-mta-dev-env-node14x/hiddensee_1200_627.jpg" }],
    ["meta", { name: "google-site-verification", content: "fIcc0ZHuxODrjX67vMWV1Bm0JM-eGz04Fm4Fy6jAez0" }],
    // ["meta", { name: "", content: "yes" }],
    // ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    // ["link", { rel: "apple-touch-icon", href: `/assets/apple-touch-icon.png` }],
    // ["link", { rel: "mask-icon", href: "/assets/safari-pinned-tab.svg", color: color }],
    // ["meta", { name: "msapplication-TileImage", content: "/assets/mstile-150x150.png" }],
    // ["meta", { name: "msapplication-TileColor", content: color }],
],  
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
