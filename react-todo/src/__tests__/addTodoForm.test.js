import { render, screen, fireEvent } from "@testing-library/react"
import addTodoForm from '../components/addTodoForm'
test('task addition', () => {
    render(<addTodoForm></addTodoForm>)
    const addTask=jest.fn()
  fireEvent.click(screen.getAllByText('add task'))
    expect(addTask).toHaveBeenCalledTimes(1)
  })
  