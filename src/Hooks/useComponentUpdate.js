import { useEffect, useRef } from 'react'

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}

// Same as componentDidUpdate
// Runs only on updates

// How to use

// const [count, setCount] = useState(10)
// useUpdateEffect(() => alert(count), [count])

// return (
//   <div>
//     <div>{count}</div>
//     <button onClick={() => setCount(c => c + 1)}>Increment</button>
//   </div>
// )
