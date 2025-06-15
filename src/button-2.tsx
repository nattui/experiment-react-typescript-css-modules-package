import { type ComponentProps } from "react"
import styles from "./button-2.module.css"

export interface Button2Props extends ComponentProps<"button"> {}

export function Button2(props: Button2Props) {
  const { className = "", ...rest } = props

  return <button className={`${styles.button} ${className}`.trim()} {...rest} />
}
