import { render, screen, fireEvent } from "@testing-library/react"
import TodoForm from '../components/TodoForm'
test('task addition', () => {
    render(<TodoForm></TodoForm>)
    const addTask=jest.fn()
  fireEvent.click(screen.getAllByText('add task'))
    expect(addTask).toHaveBeenCalledTimes(1)
  })
  