import { cleanedCssProperties } from './mapped-css-property'

const getQueryBreakpoint = (point) => `@media screen and (min-width: ${point})`

export const createMediaQueries = (css, breakpoints) => {
  const breakpointArray = Object.values(breakpoints)
  const cssProperties = cleanedCssProperties(css)
  const cssKeyValuePairs = cssProperties.reduce((items, item) => {
    const { property, values } = item

    if (!values) {
      return items
    }

    if (typeof values === 'object') {
      if (Array.isArray(item.values)) {
        values.map((value, index) =>
          items.push({
            breakpoint: breakpointArray[index],
            [property]: value
          })
        )
      } else {
        const claves = Object.keys(values)

        claves.map((key) =>
          items.push({
            breakpoint: breakpoints[key],
            [property]: values[key]
          })
        )
      }
    } else {
      items.push({ breakpoint: 0, [property]: values })
    }

    return items
  }, [])

  const cssMediaQueries = cssKeyValuePairs.reduce((items, item) => {
    const { breakpoint, ...css } = item

    if (breakpoint) {
      items[getQueryBreakpoint(breakpoint)] = {
        ...items[getQueryBreakpoint(breakpoint)],
        ...css
      }
    } else {
      items = { ...items, ...css }
    }

    return items
  }, {})

  return {
    ...cssMediaQueries
  }
}
