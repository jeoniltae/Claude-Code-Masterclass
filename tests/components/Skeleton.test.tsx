import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

// component imports
import Skeleton from "@/components/Skeleton"

describe("Skeleton", () => {
  it("renders an accessible loading placeholder", () => {
    render(<Skeleton />)

    const skeleton = screen.getByRole("status", { name: /loading/i })
    expect(skeleton).toBeInTheDocument()
    expect(skeleton).toHaveAttribute("aria-busy", "true")
  })
})
