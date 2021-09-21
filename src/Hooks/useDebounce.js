import { useEffect } from 'react'
import useTimeout from './useTimeout'

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}

// Very usefull for search input fields
// eg Make a search API call after user stop typing
// Doesn't run on initial render

// How to use
//   const [count, setCount] = useState(10)
//   useDebounce(() => alert(count), 1000, [count])
