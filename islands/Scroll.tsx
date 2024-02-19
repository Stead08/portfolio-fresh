import { useRef, useEffect } from "preact/hooks"

export const Scroll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrollTo = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
  }
    useEffect(() => {
        scrollTo()
    }, [])
  return <div ref={ref} />
}

export default Scroll;