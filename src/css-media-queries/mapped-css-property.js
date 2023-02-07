import { allCssProperties } from './all-css-properties';

// Atajos
const shortcutProperties = {
  m: 'margin',
  ml: 'margin-left',
  mr: 'margin-right',
  mt: 'margin-top',
  mb: 'margin-bottom',
  p: 'padding',
  pl: 'padding-left',
  pr: 'padding-right',
  pt: 'padding-top',
  pb: 'padding-bottom',
  w: 'width',
  h: 'height',
  bgColor: 'background-color',
  bg: 'background',
  maxW: 'max-width',
  minW: 'min-width',
};

const propsWithShortcuts = { ...allCssProperties, ...shortcutProperties };

// Filtra y mapea las propiedas css reducidas en las correctas, utilizando snake case
export const cleanedCssProperties = (properties) => {
  const cssKeys = Object.keys(properties);

  return cssKeys.reduce((cssTotal, cssElement) => {
    if (propsWithShortcuts[cssElement]) {
      cssTotal.push({
        property: propsWithShortcuts[cssElement],
        values: properties[cssElement],
      })
    }

    return cssTotal;
  }, [])
};

// Mapea y transforma las propiedades hov de CSS
export const cleanedCssHovProperties = (properties) => {
  return Object.keys(properties).reduce((total, key) => {
    if (propsWithShortcuts[key]) {
      total = {
        ...total,
        [propsWithShortcuts[key]]: properties[key],
      };
    }
    
    return total;
  }, {});
};
