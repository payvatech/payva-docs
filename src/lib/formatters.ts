import { format, parseISO } from 'date-fns'

export const splitAndCapitalize = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1') // Add a space before all uppercase letters.
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter of the string.
    .trim() // Remove trailing spaces, if any.
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const capitalizeWords = (str: string) => {
  return str
    .toLowerCase() // Convert the whole string to lowercase
    .split(' ') // Split string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ') // Rejoin the array into a single string
}

export const capitalizeWordsWithUnderscore = (str: string) => {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .replace(/_/g, ' ') // Replace all underscores with spaces to separate words
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase()) // Capitalize the first letter of each word
}

export const uppercaseWithUnderscore = (str: string) => {
  return str
    .replace(/_/g, ' ') // Replace underscores with spaces
    .toUpperCase() // Convert everything to uppercase
}

export const convertToKebabCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[\W_]+/gu, '-') // Replace all non-word chars and underscores with hyphen.
    .replace(/^\-+|\-+$/g, '') // Remove leading and trailing hyphens.
}

export const formatDate = (date: string, includeTime: boolean = false) => {
  const formatString = includeTime ? 'MMM d, yyyy h:mm a' : 'MMM d, yyyy'
  return format(parseISO(date), formatString)
}

export const formatAmount = (amount: number | undefined) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount || 0)
