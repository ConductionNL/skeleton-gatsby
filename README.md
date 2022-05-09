# Skeleton Application

This skeleton application is designed for rapid application testing and prototype development on the NL Design System. It provides a basic skeleton application with full NL Design system functionality to expand upon, viewed locally, and deployed to an online environment, viewed locally, and deployed to an online environment for demonstration purposes. The main benefits are:

- Development and (online) demonstration of prototypes without maintaining a server.
- An out-of-the-box basic application that doesn't require configuration or setup and can be extended immediately.

## Getting started

Clone the repo to contribute to this project or fork this project. Forking will be needed when deploying your version.

## Spinning up your local environment

The Skeleton application is a end-to-end application and consists of a Gatsby-based front-end and the back-end from [Conduction](https://github.com/ConductionNL/commonground-gateway).

Running this repository locally has these prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

With both installed, first:

- spin up the [front-end of the application](./doc/frontend.md).
- spin up the [backend](./doc/backend.md)

Clone your new repository to your local machine to start developing. Open the terminal, and navigate to the folder containing your repository.

## Developing on the Skeleton Application

This is a in-depth guide [here](./doc/developing_skeleton.md).

## API calls (to be added)

In the `/src/apiService` folder.

## Publishing your prototype to the internet (Gatsby only)

The Gatsby version of the skeleton application has built support for GitHub pages. You can turn your application into a static website and publish it as a GitHub page. The skeleton repository comes with a build GitHub action for publishing itself as a GitHub page. You can have your prototype automatically published to the internet on a code push.

For this to work, you will need to do activate GitHub-pages on your repository, go to your repository settings, click on pages, select `gh-pages` as a source, and press on save (if you do not see a `gh-pages` branch yet you can create one by pushing to main).

After clicking on save, you can wait for GitHub to publish your project and provide you with a link you can share for your demo. Keep in mind that all pushes to main and development will result in updates to your online demo environment from this point on.
