## Kick off your SAP HANA App Dev Env for running Hana-Cli (XS & CF) by leverage VS Code Dev Container. Use this Dev Container (.devcontainer) for your projects if you want.
<br/><br/>

## Prerequisites
- [Install this VS Code Containers extension at first](https://code.visualstudio.com/docs/remote/containers-tutorial#_install-the-extension)

- XS Client for SAP HANA XSA (Only required for connecting a XSA platform)
  - [Download the XS_CLIENT00P_xxx-70001320 for Linux from SAP Download Center](https://launchpad.support.sap.com/#/softwarecenter/template/products/related/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=73554900100900001301&V=MAINT/SAP%20HANA%20PLATFORM%20EDITION%202.0)
  - Drop the unzipped file on root
    - ![XS_Client](https://github.com/draschke/vscode-sap-hana-dev-environment-for-cf-and-xs/blob/main/images/xs-client.png)
  - Change the path in your .devcontainer\Dockerfile
    - (ENV XSCLI="/workspaces/cap-vscode-dev-container/XS_CLIENT00P_134-70001320)
  <br/><br/>


## This VS Dev Container includes:
### OS
  - OS Debian
### CLIs
  - [XS Client (XSA)](https://launchpad.support.sap.com/#/softwarecenter/template/products/related/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=73554900100900001301&V=MAINT/SAP%20HANA%20PLATFORM%20EDITION%202.0)
  - [CF Client (Cloud Foundry)](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html#pkg-linux)
  - [HANA Client](https://www.npmjs.com/package/hana-cli)

### VS Code Extensions
  - A lot of nice extensions
  
### NPMs for CAP & Fiori Dev
  - [@sap/cds-dk yo](https://www.npmjs.com/package/@sap/cds-dk)
  - [@sap/generator-fiori](https://www.npmjs.com/package/@sap/generator-fiori)
    - @sap/generator-add-hdb-module
    - @sap/generator-base-mta-module
    - @sap/generator-cap-project
    - @sap/generator-hdb-project
    - [@sapui5/generator-sapui5-templates](https://www.npmjs.com/package/@sapui5/generator-sapui5-templates)
  - typescript 
<br/><br/>

## Tutorials
### Microsoft - VS Code Dev Container
- [Remote development in Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
- [Developing inside Container](https://code.visualstudio.com/docs/remote/containers)

### Nice blog about "SAP CAP VS Code dev container" written by @htammen
- [Develop SAP CAP apps inside a VS Code Docker Container](https://blogs.sap.com/2020/02/20/develop-sap-cap-apps-inside-a-vs-code-docker-container/)

### HANA CLI by @jung-thomas
- [SAP HANA Developer Command Line Interface](https://github.com/SAP-samples/hana-developer-cli-tool-example)
<br/><br/>

## Contributing

### You are welcome to contribute code in order to fix bugs or to implement new features!