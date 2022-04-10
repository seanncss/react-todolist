import React from 'react'
import { fireEvent, getByRole, render } from '@testing-library/react';
import ToDoItem from './ToDoItem';

describe('<ToDoItem />', () => {
    const id = 1;
    const task = 'Test Task';
    const done = true;
    const mockToggle = jest.fn()

  it('should render elements correctly', () => {
    const { getByText, getByRole } = render(<ToDoItem key={id} id={id} task={task} done={done} handleToggle={mockToggle}/>);
    const checkbox = getByRole('checkbox');
    expect(getByText('Test Task')).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('should call handleToggle with the task id', () => {
    const { getByRole } = render(<ToDoItem ToDoItem={ToDoItem} handleToggle={mockToggle}/>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalled();
  })
});