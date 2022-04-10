import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ToDoForm from './ToDoForm';

describe('<ToDoForm />', () => {
    const mockSubmit = jest.fn();
    it('render elements correctly', () => {
        const { getByRole } = render(<ToDoForm addTask={mockSubmit}/>);
        const form = getByRole('textbox');
        const button = getByRole('button');
        expect(form).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it('should call addTask when text is submitted through the textbox', () => {
        const { getByRole } = render(<ToDoForm addTask={mockSubmit}/>);
        const form = getByRole('textbox');
        fireEvent.submit(form);
        expect(mockSubmit).toHaveBeenCalled();
    })

})