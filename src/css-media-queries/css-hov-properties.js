import { cleanedCssProperty } from "./mapped-css-property";

const allowHovProps = ["_hover", "_focus"];

const getHov = (hov) => `&:${hov.substring(1)}`;

// Mapea y transforma las propiedades de CSS
const transformCssHovProperty = (cssHov) => {
  return Object.keys(cssHov).reduce((total, key) => {
    total = {
      ...total,
      [cleanedCssProperty(key)]: cssHov[key]
    };
    return total;
  }, {});
};

export const cssHovProperties = (css) => {
  // Obtengo unicamente los efectos permitidos
  const hovPropsAllowed = Object.entries(css).filter(([key]) =>
    allowHovProps.includes(key)
  );

  const cssHovProps = hovPropsAllowed.reduce((total, item) => {
    const [key, value] = item;

    const cssProps = transformCssHovProperty(value);

    total[getHov(key)] = {
      ...total[getHov(key)],
      ...cssProps
    };

    return total;
  }, {});

  return {
    ...cssHovProps
  };
};
