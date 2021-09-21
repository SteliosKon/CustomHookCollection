import { useState } from 'react'

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue))
  }

  return [value, toggleValue]
}

// How to use
// const [value, toggleValue] = useToggle(false)
