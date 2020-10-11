export function convertToUnit (str: string | number | null | undefined, unit = 'px'): string | undefined {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(str as number)) {
    return String(str)
  } else {
    return `${Number(str)}${unit}`
  }
}