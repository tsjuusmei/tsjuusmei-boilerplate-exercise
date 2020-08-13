![Meta image](./public/img/misc/cover.jpg)

# Next.js boilerplate

This is Yummygum's [Next.js](https://www.nextjs.org) boilerplate. Next.js is a framework for React that will make React apps very fast. It contains Pre-Rendering, Static Exporting and much more features. Have a quick look on [the features list](https://nextjs.org/#features) to have an better overview.

This boilerplate makes it easier to get up and running for every new project.

## Codebase

### Technologies
We use [Next](https://www.nextjs.org/) (v9.5), in combination with [React](https://reactjs.org/) for the frontend. The styling is a mix of Sass Modules & 'regular' SCSS. To make sure our components are pixel-perfect, we use [Storybook](https://storybook.js.org/) to present different variations and check them in isolation, without all the noise.


### Folder structure

```sh
wml-website/
├── .storybook # Storybook-specific files
├── scripts    # Miscellaneous scripts during development
├── src        # Frontend code
├── public     # Public files used on the frontend
└── stories    # Miscellaneous Storybook files (e.g. Typography)
```

### Code Style
We've used linters for both JavaScript and (S)CSS, to make sure we write code in a consistent and well-formatted style. The settings can be found in `.eslintrc` & `.stylelintrc`. To use them, make sure you've added the right linter extensions to your preferred code editor.

### Miscellaneous packages
- Add during development

### Requirements
This project recommends a Node version of `12.16.0` or higher.

## Setup
Install the packages.
```sh
npm i
# or...
yarn
```

And then run the `dev` script.

```sh
npm run dev
# or...
yarn dev
```

This will open the project on `localhost:3000`.
