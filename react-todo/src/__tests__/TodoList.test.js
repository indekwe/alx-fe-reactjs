import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'
test('render task list', () => {
  render(<TodoList></TodoList>)
  expect(screen.getAllByRole('list').toBeInTheDocument())
})


