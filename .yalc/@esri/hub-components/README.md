# Hub Components

> **NOTE**: This library is under active development. We strive to maintain a stable API, but may introduce breaking changes.

Web components for embedding ArcGIS Hub capabilities into websites and custom applications.

These components can added to any website or application regardless of framework. There are currently a few components with more being added over time to allow people to easily embed most parts of ArcGIS Hub into their sites.

## Example

You will be able to add Hub components to your website:

```html
<arcgis-hub-content-gallery query="water" layout="grid" sortOrder="desc" limit="4"> </arcgis-hub-content-gallery>
```

## Prerequisites

Node and Npm versions in this package are managed via `package.json` using Volta. Please ensure you have this installed

- [volta](https://volta.sh/):
  - OSX: `curl https://get.volta.sh | bash`
  - Windows: [link](https://docs.volta.sh/guide/getting-started)


## Explore the components

To quickly get started exploring the components you can clone this repository:

`git clone https://github.com/Esri/hub-components.git`

Then change directory and install dependencies:

```bash
> cd hub-components
> npm install --legacy-peer-deps
```

**Note:** We currently have an issue with peer dependencies and semantic release. The short term solution is to just pass the `--legacy-peer-deps` as above when running `npm i`.

Then build the components:

`npm run build`

And finally run storybook:

`npm run storybook`

This will give you live-reload of both the stories and the components. To start storybook with live-reload of the stories but not the components:

`npm run storybook.run`

## Using these components

You can use these components similar to other embeds like YouTube using a script tag, or you can integrate within your web application.

## Translations

Component translations are lazy-loaded when the component loads, specifically with requests to `https://<asset-root-url>/locales/<component-name>.i18n.<language>.json`. Therefore, to use these components in your application, you will need to copy the translation files found in `/dist/hub-components/locales` of this module to a publicly accessible application path.

### Script Tag

Add this code in the head of your `index.html`. Then you can use the element anywhere in your template, JSX, HTML, etc.

```hbs
<link rel='stylesheet' type='text/css' href='https://unpkg.com/@esri/calcite-components@1.0.0-next.292/dist/calcite/calcite.css' />
<script type='module' src='https://unpkg.com/@esri/hub-components@2.4.0/dist/hub-components/hub-components.esm.js'></script>
```

### In a custom application

- Run `npm install hub-components --save`
- Add an import to the npm packages `import hub-components;`
- Then you can use the element anywhere in your template, JSX, html etc

### React App

To use Hub components in a React application, see [Stencil.js docs on React](https://stenciljs.com/docs/react)

### Ember App

To use Hub components in an Ember application, use [ember-cli-stencil](https://github.com/alexlafroscia/ember-cli-stencil)

- Run `ember install ember-cli-stencil ember-auto-import`
- Run `npm install @esri/hub-components --save`

Read [Development Notes](doc/develop.md) for more information.

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](CONTRIBUTING.md).

### Recommended Extensions

To assist you in your development, we have recommended certain extensions for VScode. On editor load, you should see a pop up in the bottom right that will direct you to the download point.

If you have another useful extension that you'd like to recommend, add an entry to the `recommendations` array in `extensions.json` (hint: hitting `cmd+i` while in the array will bring up a list of all your installed extensions). Submit a PR with your changes through the normal process.

### License

Copyright &copy; 2022 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
