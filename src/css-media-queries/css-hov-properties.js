import { cleanedCssHovProperties } from './mapped-css-property';

const allowHovProps = ['_hover', '_focus', '_link', '_active', '_visited'];

const getHov = (hov) => `&:${hov.substring(1)}`;

export const cssHovProperties = (css) => {
  // Obtengo unicamente los efectos permitidos
  const hovPropsAllowed = Object.entries(css).filter(([key]) =>
    allowHovProps.includes(key)
  );

  const cssHovProps = hovPropsAllowed.reduce((total, item) => {
    const [key, value] = item;

    const cssProps = cleanedCssHovProperties(value);

    total[getHov(key)] = {
      ...total[getHov(key)],
      ...cssProps,
    };

    return total;
  }, {});

  return {
    ...cssHovProps,
  };
};
