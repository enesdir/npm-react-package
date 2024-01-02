# 📦 React • Typescript • Package Starter

A slightly opinionated starter kit for developing React and/or TypeScript packages. It comes with a several pre-configured tools, so you could focus on coding instead of configuring a project for the nth time. From building to releasing a package, this starter kit has you covered.

<p align="center">
  <a href="https://github.com/enesdir/npm-react-package/blob/master/LICENSE.md">
    <img alt="licence-badge" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue" />
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/enesdir/npm-react-package"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/enesdir/npm-react-package"/>
  <a href="https://github.com/enesdir/npm-react-package/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enesdir/npm-react-package?color=blue"/>
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://vitejs.dev/">
    <img alt="Vite" src="https://img.shields.io/static/v1?color=blue&label=Vitest&message=JS&?style=plastic&logo=Vite">
  </a>
  <a target="_blank" href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly-badge" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" />
  </a>
</p>

<details>
<summary>Table of Contents</summary>

- [📦 React • Typescript • Package Starter](#-react--typescript--package-starter)
  - [Features](#features)
  - [Built With](#built-with)
    - [Dev Dependencies](#dev-dependencies)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Commands](#commands)
  - [License](#license)

</details>

## Features

This project setup will include following features.

- ⚡ Blazing fast dev server and build
- 🚓 [Test & Publish via Github Actions][github-actions-url] CI/CD workflows for your package. Run tests on every commit plus integrate with Github Releases to automate publishing package to NPM and Storybook to Github Pages.
- 🧙‍♂️ Developer experience improved with ESLint, Prettier and Husky
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit

## Built With

[![Vitest][Vitest]][Vitest-url] [![React][React.js]][React-url]

### Dev Dependencies

| Package                                        | Description                                                                                                                                                                             |
| ---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Typescript][TS-url]                           | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.                                                                                                         |
| [tsup][tsup-url]                               | The simplest and fastest way to bundle your TypeScript libraries. Used to bundle package as ESM and CJS modules. Supports TypeScript, Code Splitting, PostCSS, and more out of the box. |
| [Vitest][Vitest-url]                           | A testing framework for JavaScript. Preconfigured to work with TypeScript and JSX.                                                                                                      |
| [Storybook][Storybook-url]                     | Storybook is a frontend workshop for building UI components and pages in isolation.                                                                                                     |
| [Husky][Husky-url]                             | Git hook management                                                                                                                                                                     |
| [Conventional Commit][Conventional-Commit-url] | A specification for adding human and machine readable meaning to commit messages.                                                                                                       |
| [Commitlint][Commitlint-url]                   | Lint commit messages                                                                                                                                                                    |
| [Commitizen][Commitizen-url]                   | Using a standardized set of rules to write commits, makes commits easier to read, and enforces writing descriptive commits.                                                             |
| [Lint Staged][Lint-Staged-url]                 | Run linters against staged git files and don't let 💩 slip into your code base!                                                                                                         |
| [ESLint][ESLint-url]                           | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.                                                                                                   |
| [Prettier][Prettier-url]                       | An opinionated code formatter                                                                                                                                                           |

## Installation & Usage

### Prerequisites

- node >=18.4.0
- npm >=9.x.x

### Install

Create the project using this link [Create a new repository](https://github.com/new?template_name=npm-react-package&template_owner=enesdir)

clone your project

```bash
git clone https://github.com/[YOUR-ACCOUNT-NAME]/[YOUR-PROJECT-NAME].git
```

Access the project directory.

```bash
cd [YOUR-PROJECT-NAME]
```

Install dependencies.

```bash
npm install
```

Serve with hot reload at <http://localhost:6006>.

```bash
npm run storybook
```

### Commands

| Command               | Description                                     |
| --------------------- | :---------------------------------------------- |
| `npm run dev`         | Starts the server in dev mode                   |
| `npm run lint`        | Runs ESLint on the project                      |
| `npm run lint-staged` | Runs Prettier on only staged (changed) files    |
| `npm run type-check`  | Runs TSC                                        |
| `npm run build`       | Runs build production bundle to 'dist' directly |

## License

This project uses MIT license: [License](https://github.com/enesdir/npm-react-package/blob/master/LICENSE.md)

<!-- MARKDOWN LINKS & IMAGES -->

[Vitest]: https://img.shields.io/badge/vitest-646CFF?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TS-url]: https://www.typescriptlang.org/
[Husky-url]: https://typicode.github.io/husky/
[Conventional-Commit-url]: https://www.conventionalcommits.org/
[Commitlint-url]: https://commitlint.js.org/#/
[ESLint-url]: https://eslint.org/
[Prettier-url]: https://prettier.io/
[Commitizen-url]: https://commitizen-tools.github.io/commitizen/
[Lint-Staged-url]: https://github.com/okonet/lint-staged#readme
[Storybook-url]: https://storybook.js.org/
[tsup-url]: https://github.com/egoist/tsup
[github-actions-url]: https://docs.github.com/en/actions
