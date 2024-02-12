import { css } from 'styled-components';
import { createMediaQueries } from './css-media-queries/create-media-queries';
import { cssHovProperties } from './css-media-queries/css-hov-properties';
import { breakpoints as breakpointsDefault } from './breakpoints';

// Breakpoints
let breakpoints = { ...breakpointsDefault };

export function setBreakpoints(newBreakpoints) {
  breakpoints = { ...breakpoints, ...newBreakpoints };
}

// For css properties
const responsiveProps = css(({ children, theme, ...cssProps }) => ({
  ...createMediaQueries(cssProps, breakpoints),
}));

// For css pseudo-classes
const hovProps = css(({ children, theme, ...cssProps }) => ({
  ...cssHovProperties(cssProps),
}));

export { responsiveProps, hovProps };
