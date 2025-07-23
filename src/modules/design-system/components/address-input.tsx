/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from 'react'

import { FormControl, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'

interface AddressInputFieldProps {
  field: {
    value: string | undefined
    onChange: (value: string) => void
  }
  uniqueId: string
}

const AddressInputField: React.FC<AddressInputFieldProps> = ({ field, uniqueId }) => {
  const [address, setAddress] = useState(field.value || '')

  useEffect(() => {
    const initAutocomplete = () => {
      const input = document.getElementById(uniqueId) as HTMLInputElement | null
      if (!input || !window.google) return

      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: ['us', 'ca'] },
        fields: ['formatted_address', 'address_components'],
      })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (place && place.formatted_address) {
          setAddress(place.formatted_address)
          field.onChange(place.formatted_address)
        }
      })
    }

    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        initAutocomplete()
        return
      }
      const script = document.createElement('script')
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZtBDpGzAhGKF8FZuMDwFrdaMG8ad-frc&libraries=places'
      script.async = true
      script.defer = true
      script.onload = initAutocomplete
      document.body.appendChild(script)
    }

    loadGoogleMapsScript()
  }, [field, uniqueId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
    field.onChange(e.target.value)
  }

  return (
    <FormItem className="mt-4 w-full">
      <FormLabel>Address</FormLabel>
      <FormControl>
        <Input id={uniqueId} placeholder="Enter address" value={address} onChange={handleChange} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default AddressInputField
