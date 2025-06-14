import type { ComponentProps } from "react"

export interface TestProps extends ComponentProps<"div"> {}

export default function Test({ ...props }: TestProps) {
  console.log("Test")

  return <div {...props}>Test</div>
}
