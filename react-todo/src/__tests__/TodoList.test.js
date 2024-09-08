import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
test('render task list', () => {
  render(<TodoList></TodoList>)
  expect(screen.getAllByRole('list').toBeInTheDocument())
})
test('task remove', () => {
  render(<TodoList></TodoList>)
  const removeTask=jest.fn()
fireEvent.click(screen.getAllByText('remove'))
  expect(removeTask).toHaveBeenCalledTimes(1)
})
test('task addition', () => {
  render(<TodoForm></TodoForm>)
  const addTask=jest.fn()
fireEvent.click(screen.getAllByText('add task'))
  expect(addTask).toHaveBeenCalledTimes(1)
})

