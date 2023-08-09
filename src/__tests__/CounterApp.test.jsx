import {fireEvent, render, screen} from "@testing-library/react";
import CounterApp from "../CounterApp.jsx";

describe('Set of testing functions to Counter React App', () => {
  const value = 100
  test('Must be match with the snapshot', () => {
    const {container} = render(
        <CounterApp
            value={value}
        />
    )
    expect(container).toMatchSnapshot()
  })
  test('Must be Show the initial value={100}', () => {
    render(
        <CounterApp
            value={value}
        />
    )
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')
  })

  test('Must be increment the value in +1', () => {
    render(
        <CounterApp
            value={value}
        />
    )
    fireEvent.click(screen.getByRole('button', {name: 'btnAdd'}))
    expect(screen.getByText(101)).toBeTruthy()
  })
  test('Must be decremet the value in -1', () => {
    render(
        <CounterApp
            value={value}
        />
    )
    fireEvent.click(screen.getByRole('button', {name: 'btnRest'}))
    fireEvent.click(screen.getByRole('button', {name: 'btnRest'}))
    fireEvent.click(screen.getByRole('button', {name: 'btnRest'}))
    expect(screen.getByText(97)).toBeTruthy()
  })
  test('Must be reset the state for the prop value', () => {
    render(
        <CounterApp
            value={value}
        />
    )
    fireEvent.click(screen.getByRole('button', {name: 'btnReset'}))
    expect(screen.getByText(100)).toBeTruthy()
  })
})