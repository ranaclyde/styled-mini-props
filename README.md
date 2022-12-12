# styled-mini-props
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
import styled, { css } from "styled-components";
import { createMediaQueries, cssHovProperties } from "styled-mini-props";

// For css properties
const responsiveProps = css(({ children, theme, ...cssProps }) => ({
  ...createMediaQueries(cssProps)
}));

// For css pseudo-classes
const hovProps = css(({ children, theme, ...cssProps }) => ({
  ...cssHovProperties(cssProps)
}));

// Example component
const Text = styled.p`
  font-family: Nunito;
  font-weight: normal;
  font-size: 14px;
  color: black;
  margin: 0;
  ${responsiveProps}
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
      fontSize={{ base: "12px", lg: "27px" }}
    >Hello World</Text>
  )
}
```

## Breakpoints

They can be declared in two ways:

1. **Array**

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

2. **Object**: is the declarative form of the previous one

Example:
```jsx
<Text fontSize={{ base: "12px", lg: "27px" }}>
  Hello World
</Text>
```

The sizes are:

|Breakpoint      |Size                           |
|----------------|-------------------------------|
|base            |0em                            |
|sm              |30em                           |
|md              |48em                           |
|lg              |62em                           |
|xl              |80em                           |
|2xl             |96em                           |


## To Do

- Pass the code to TypeScript
- Add tests
- Add react and storybook