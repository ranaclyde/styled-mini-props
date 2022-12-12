export const mappedCssProperty = {
  m: "margin",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  mb: "margin-bottom",
  p: "padding",
  pl: "padding-left",
  pr: "padding-right",
  pt: "padding-top",
  pb: "padding-bottom",
  w: "width",
  h: "height",
  bgColor: "background-color",
  bg: "background",
  maxW: "max-width",
  minW: "min-width"
};

// Método para convertir palabras de camel a snake case
export const camelToSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// Mapea las propiedas css reducidas en las correctas, utilizando snake case
export const cleanedCssProperty = (property) => {
  return mappedCssProperty[property] || camelToSnakeCase(property);
};
