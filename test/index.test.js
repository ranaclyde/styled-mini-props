import { describe, it, expect } from 'vitest';
import { createMediaQueries } from '../src/css-media-queries/create-media-queries';
import { breakpoints } from '../src/css-media-queries/breakpoints';
import { cssHovProperties } from '../src/css-media-queries/css-hov-properties';

describe('Test of the createMediaQueries and cssHovProperties methods', () => {
  it('Use the createMediaQueries method without breakpoints', async () => {
    const cssProps = {
      backgroundColor: 'black',
      fontSize: '14px',
      color: 'gray',
    };

    const cssGenerated = await createMediaQueries(cssProps, breakpoints);

    expect(cssGenerated).toMatchObject({
      'background-color': 'black',
      'font-size': '14px',
      color: 'gray',
    });
  });

  it('Use the createMediaQueries method with default breakpoints', async () => {
    const cssProps = {
      backgroundColor: 'black',
      fontSize: { base: '12px', md: '14px', lg: '16px' },
      color: 'gray',
    };

    const cssGenerated = await createMediaQueries(cssProps, breakpoints);

    expect(cssGenerated).toMatchObject({
      'background-color': 'black',
      'font-size': '12px',
      '@media screen and (min-width: 48em)': { 'font-size': '14px' },
      '@media screen and (min-width: 62em)': { 'font-size': '16px' },
      color: 'gray',
    });
  });

  it('Use the cssHovProperties method', async () => {
    const css = {
      _hover: {
        backgroundColor: 'black',
        color: 'white',
      },
    };

    const cssGenerated = cssHovProperties(css);

    expect(cssGenerated).toMatchObject({
      '&:hover': { 'background-color': 'black', color: 'white' },
    });
  });
});
