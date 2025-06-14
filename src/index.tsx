import type { ComponentProps } from "react"
import "./index.css"

export interface TestProps extends ComponentProps<"div"> {}

export default function Test({ ...props }: TestProps) {
  console.log("Test")

  return (
    <div className="test" {...props}>
      Test
    </div>
  )
}
