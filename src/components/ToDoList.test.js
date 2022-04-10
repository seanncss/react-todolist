import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import ToDoList from './ToDoList';

describe('<ToDoList />', () => {
    const toDoList = [{
        "id": 1,
        "task": "Test Task",
        "done": false
    }]

    const mockToggle = jest.fn()

  it('should render text correctly', () => {
    const { getByText } = render(<ToDoList toDoList={toDoList} handleToggle={mockToggle}/>);
    expect(getByText('Test Task')).toBeInTheDocument()
  })

  it('should call the function correctly', () => {
    const { getByRole } = render(<ToDoList toDoList={toDoList} handleToggle={mockToggle}/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox)
    expect(mockToggle).toBeCalled()
  })
});