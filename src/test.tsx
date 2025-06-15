"use client"

import type { ComponentProps } from "react"
import styled from "styled-components"

export interface TestProps extends ComponentProps<"button"> {}

export function Test(props: TestProps) {
  console.log("Test")

  return <Button {...props}>Test</Button>
}

const Button = styled.button`
  background-color: hotpink;
  border-radius: 4px;
  font-size: 14px;
  padding: 4px 16px;

  &:hover {
    background-color: red;
  }
`
