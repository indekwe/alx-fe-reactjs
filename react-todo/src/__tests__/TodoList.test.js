import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
test('render task list', () => {
  render(<TaskList></TaskList>)
  expect(screen.getAllByRole('list').toBeInTheDocument())
})
test('task remove', () => {
  render(<TaskList></TaskList>)
  const removeTask=jest.fn()
fireEvent.click(screen.getAllByText('remove'))
  expect(removeTask).toHaveBeenCalledTimes(1)
})
test('task addition', () => {
  render(<TaskForm></TaskForm>)
  const addTask=jest.fn()
fireEvent.click(screen.getAllByText('add task'))
  expect(addTask).toHaveBeenCalledTimes(1)
})

