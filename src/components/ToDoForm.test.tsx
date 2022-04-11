import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ToDoForm from './ToDoForm';

describe('<ToDoForm />', () => {
    it('render elements correctly', () => {
        const mockSubmit = jest.fn();
        const { getByRole } = render(<ToDoForm addTask={mockSubmit}/>);
        const form = getByRole('textbox');
        const button = getByRole('button');
        expect(form).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it('should call addTask when text is submitted through the textbox', () => {
        const mockSubmit = jest.fn();
        const { getByRole } = render(<ToDoForm addTask={mockSubmit}/>);
        const form = getByRole('textbox');
        fireEvent.submit(form);
        expect(mockSubmit).toHaveBeenCalled();
    })

})