# Kick off your SAP HANA App Development for XSA & CF by leverage VS Code Dev Container

## Prerequisites
- [Install this VS Code extensions at first](https://code.visualstudio.com/docs/remote/containers-tutorial#_install-the-extension)

#### XS Client for SAP HANA XSA
- [Download the XS_CLIENT00P_xxx-70001320 for Linux from SAP Download](https://launchpad.support.sap.com/#/softwarecenter/template/products/related/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=73554900100900001301&V=MAINT/SAP%20HANA%20PLATFORM%20EDITION%202.0)
- Drop the unzipped file on root
  ![XS_Client](https://github.com/draschke/vscode-sap-hana-dev-environment-for-cf-and-xs/blob/main/images/xs-client.png)
- Change the path in your .devcontainer\Dockerfile
  - (ENV XSCLI="/workspaces/cap-vscode-dev-container/XS_CLIENT00P_134-70001320)



## This VS Dev Container includes:
### OS
  - OS Debian
### CLIs
  - XS Client (XSA)
  - CF Client (Cloud Foundry)
  - HANA Client  

### VS Code Extensions
  - A lot of nice extensions
  
### NPMs for CAP Dev
  - @sap/cds-dk yo
  - @sap/generator-add-hdb-module
  - @sap/generator-base-mta-module
  - @sap/generator-cap-project
  - @sap/generator-fiori
  - @sap/generator-hdb-project
  - @sapui5/generator-sapui5-templates
  - hana-cli
  - typescript 


### Tutorials
## Microsoft - VS Code Dev Container
- [Remote development in Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
- [Developing inside Container](https://code.visualstudio.com/docs/remote/containers)

## By @htammen - Read this great blog 
- [Develop SAP CAP apps inside a VS Code Docker Container](https://blogs.sap.com/2020/02/20/develop-sap-cap-apps-inside-a-vs-code-docker-container/)

