import { parsePhoneNumberFromString } from 'libphonenumber-js'

export const formatPhoneNumber = (phoneNumber: string): string => {
  // Check if phone number has 11 digits and starts with a 1 (US number)
  const isUSPhoneNumber = phoneNumber.length === 11 && phoneNumber.startsWith('1')

  if (isUSPhoneNumber) {
    // Format the number as (XXX) XXX-XXXX
    return `+1 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`
  }

  // parse and format internationally
  const phoneNumberWithPrefix = phoneNumber.startsWith('+') ? phoneNumber : '+' + phoneNumber
  const phoneNumberParsed = parsePhoneNumberFromString(phoneNumberWithPrefix)

  // Return the original number if parsing fails
  if (!phoneNumberParsed) {
    return phoneNumber
  }

  return phoneNumberParsed.formatInternational()
}
