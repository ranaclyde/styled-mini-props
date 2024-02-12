# styled-mini-props

![NPM Version](https://img.shields.io/npm/v/styled-mini-props)
![NPM License](https://img.shields.io/npm/l/styled-mini-props)

Small helper tool for styled components. Provides a minimalist solution for responsive properties and for hover and focus css pseudoclasses.

## Install

```bash
yarn add styled-mini-props -D
```

or

```bash
npm i styled-mini-props --save-dev
```

## Configuration

```js
// styled-component configuration file
import styled from 'styled-components';
import { responsiveProps, hovProps } from 'styled-mini-props';

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

## Breakpoints

They can be declared in two ways:

#### 1. **Array**

Example:

```jsx
<Text margin={['10px', null, '20px']}>
  Hello World
</Text>
```

In this way we declare the following breakpoints

- base: 10px
- sm: null (so it is still 10px)
- md: 20px (md and up)

#### 2. **Object**: is the declarative form of the previous one

Example:

```jsx
<Text fontSize={{ base: "12px", lg: "27px" }}>
  Hello World
</Text>
```

The sizes are:

| Breakpoint | Size  |
| ---------- | ----- |
| base       | 0em   |
| sm         | 30em  |
| md         | 48em  |
| lg         | 62em  |
| xl         | 80em  |
| 2xl        | 96em  |
| 3xl        | 107em |

## To Do

- Pass the code to TypeScript
- Allow breakpoints to be changed
