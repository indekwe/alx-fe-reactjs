test('task remove', () => {
    render(<TodoList></TodoList>)
    const removeTask=jest.fn()
  fireEvent.click(screen.getAllByText('remove'))
    expect(removeTask).toHaveBeenCalledTimes(1)
  })