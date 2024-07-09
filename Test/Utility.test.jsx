import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, beforeAll, expectTypeOf } from 'vitest'
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

describe("API Testing", () => {
  let response = null;
  let body = null;
  const NETWORK_TIME_OUT = 20000;
  test("Dog API Testing", () => {
    beforeAll(async () => {
      response = await fetch("https://dog.ceo/api/breeds/image/random")
      body = await response.json()
      expect(body.status).toBe("success")
    }, NETWORK_TIME_OUT)
  })
})


