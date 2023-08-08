export const toCapitalize = (str: string): any => {
  let totalStr = ''

  str = str.trim()

  if (str.length === 0 || str === ' ') {
    return ''
  }

  if (str.split(' ').length === 1) {
    return str.split('')[0]?.toUpperCase() + str.slice(1)
  }

  for (let i = 0; i < str.split(' ').length; i++) {
    totalStr += str.split(' ')[i][0]?.toUpperCase() + str.split(' ')[i]?.slice(1) + ' '
  }

  return totalStr
}
