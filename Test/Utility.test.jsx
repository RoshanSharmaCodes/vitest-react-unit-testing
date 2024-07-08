import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest'
import CompoOne from "../src/Component/CompoOne";
import App from "../src/App"


describe("HomePage Testing", () => {
  test("Checking For Heading", () => {
    render(<App />)
    const title = screen.getByText("Vite + React")
    expect(title).toBeInTheDocument()
  })
})


describe('Component Testing -> CompoOne', () => {
  test("Checking For Title", () => {
    render(<CompoOne title="Diwali Offer" />)
    const title = screen.getByText("Diwali Offer")
    expect(title).toBeInTheDocument()
  })
  test("Checking For  Empty Title", () => {
    render(<CompoOne />)
    const title = screen.getByText("Promo Offer")
    expect(title).toBeInTheDocument()
  })
  test("Checking for Counter", () => {
    render(<CompoOne />)
    let counterVal = screen.getByTestId('count');
    expect(counterVal).toHaveTextContent('Counter0');

    const incBtn = screen.getByText("Inc")
    const decBtn = screen.getByText("Dec")

    fireEvent.click(incBtn)
    counterVal = screen.getByTestId('count')
    expect(counterVal).toHaveTextContent('Counter1')

    fireEvent.click(decBtn)
    fireEvent.click(decBtn)
    counterVal = screen.getByTestId('count')
    expect(counterVal).toHaveTextContent('Counter-1')

  })
})


