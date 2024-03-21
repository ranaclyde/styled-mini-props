<!-- Based on https://github.com/othneildrew/Best-README-Template -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

![NPM Version](https://img.shields.io/npm/v/styled-mini-props)
![NPM License](https://img.shields.io/npm/l/styled-mini-props)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ranaclyde/styled-mini-props">
    <img src="images/logo.svg" alt="Logo" width="150" height="auto">
  </a>

<h3 align="center">Styled Mini Props</h3>

  <p align="center">
    Small helper tool for styled components. Provides a minimalist solution for responsive properties and for hover and focus css pseudoclasses.
    <br />
    <br />
    <a href="https://codesandbox.io/p/sandbox/styled-mini-props-ygj7hy">View Demo</a>
    ·
    <a href="https://github.com/ranaclyde/styled-mini-props/issues">Report Bug</a>
    ·
    <a href="https://github.com/ranaclyde/styled-mini-props/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#breakpoints">Breakpoints</a></li>
    <li><a href="#css-shortcuts">Css Shortcuts</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You need to have version 5 or 6 of [styled-components](https://github.com/styled-components/styled-components) installed.

### Installation

- With yarn

  ```bash
  yarn add styled-mini-props -D
  ```

- Or npm

  ```bash
  npm i styled-mini-props --save-dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONFIGURATION -->

## Configuration

```js
// styled-component configuration file
import styled from 'styled-components';
import { responsiveProps, hovProps, setBreakpoints } from 'styled-mini-props';

// Optional
setBreakpoints({
  base: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px',
  '3xl': '1600px',
});

// Example component
// ${responsiveProps} or ${hovProps} or both
const Text = styled.p`
  font-family: Nunito;
  font-weight: normal;
  font-size: 14px;
  color: black;
  margin: 0;
  ${responsiveProps}
  ${hovProps}
`;
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

```jsx
// In the react component
import React from 'react';
import { Text } from './path/for/Text';

const helloWorld = () => {
  return (
    <Text
      color="red"
      margin={['10px', null, '20px']}
      fontSize={{ base: '12px', lg: '27px' }}
      _hover={{ color: 'blue' }}
    >
      Hello World
    </Text>
  );
};
```

> You can also use focus, active, link and visited in the same way as hover. At the moment it is not possible to use breakpoints within these pseudoclasses.

_For more examples, please view the [Demo](https://codesandbox.io/p/sandbox/styled-mini-props-ygj7hy)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BREAKPOINTS -->

## Breakpoints

### Usage

They can be declared in two ways:

- As an Array

  ```jsx
  <Text margin={['10px', null, '20px']}>Hello World</Text>
  ```

  In this way we declare the following breakpoints

  - base: 10px
  - sm: null (so it is still 10px)
  - md: 20px (md and up)

- As an Object: is the declarative form of the previous one
  ```jsx
  <Text fontSize={{ base: '12px', lg: '27px' }}>Hello World</Text>
  ```

### Breakpoint sizes

The default sizes are:

| Breakpoint | Size  |
| ---------- | ----- |
| base       | 0em   |
| sm         | 30em  |
| md         | 48em  |
| lg         | 62em  |
| xl         | 80em  |
| 2xl        | 96em  |
| 3xl        | 107em |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CSS SHORTCUTS -->

## CSS Shortcuts

Some css shortcuts have been added to facilitate coding

| Shortcut | Shortcut         |
| -------- | ---------------- |
| m        | margin           |
| ml       | margin-left      |
| mr       | margin-right     |
| mt       | margin-top       |
| mb       | margin-bottom    |
| my       | margin-block     |
| mx       | margin-inline    |
| p        | padding          |
| pl       | padding-left     |
| pr       | padding-right    |
| pt       | padding-top      |
| pb       | padding-bottom   |
| py       | padding-block    |
| px       | padding-inline   |
| bgColor  | background-color |
| bg       | background       |
| w        | width            |
| h        | height           |
| maxW     | max-width        |
| minW     | min-width        |
| maxH     | max-height       |
| minH     | min-height       |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Matias Sanhueza - manoloesanhueza@gmail.com
<br />

[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin
[linkedin-url]: https://www.linkedin.com/in/emanuel-sanhueza/
