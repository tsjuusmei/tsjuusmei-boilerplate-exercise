# Next.js boilerplate

This is Yummygum's [Next.js](https://www.nextjs.org) boilerplate.

## About
Next.js is a framework for React that will make React apps very fast. It contains Pre-Rendering, Static Exporting and much more features. Have a quick look on [the features list](https://nextjs.org/#features) to have an better overview.

This boilerplate makes it easier to get up and running for every new project.

## Features
The boilerplate provides a lot of features out of the box. Here's an overview of the included tools and components.

### Tools
- [x] **Next.js** - Minimalistic framework for server-rendered React applications.
- [x] **Sass/Scss** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
- [x] **ESLint** - The pluggable linting utility.
- [x] **Stylelint** - The linting utility for css.
- [x] **Storybook** - A tool for developing UI components in isolation
- [x] **Commitizen** - Formatting commit messages with versioning
- [x] **Prettier** - Formatting code
- [ ] **Formik** - https://jaredpalmer.com/formik/
- [ ] **Grid** - *Updated* Grid with CSS Grid
- [ ] **Cypress** - End to end testing

## Optimization
- [x] Sass aliases (e.g. `@import '@styles/pages/home';`)

### Components
#### Atoms
- [x] Button
- [x] Version
- [x] Icons
- [x] Input
- [x] Textarea
- [x] Select
- [ ] Checkbox
- [ ] Radio
- [ ] Toggle (switch)

#### Molecules
- [x] Modal

#### Organisms
-

## Requirements
This boilerplate recommends a node version of `12.16.0` or higher.

## Setup
```
npm i
```
or
```
yarn
```

## Use
### Aliases
There are webpack aliases that allow easy imports. In JavaScript files you can just use them like for example:
```
import Foo from '@components/Foo'
```

<!-- In SCSS you use them like: `@import '~Styles/Foo'`. -->

## Commit
To commit use the underneath script, this will open up the commitizen CLI options.
```
npm run commit
```


## Releasing
To release a new version you have to use
```
npm run release
```
