import React from "react";
import { fireEvent, getByRole, render } from "@testing-library/react";
import ToDoItem from "./ToDoItem";

describe("<ToDoItem />", () => {
  it("should render elements correctly", () => {
    const mockToggle = jest.fn();
    const { getByText, getByRole } = render(
      <ToDoItem id="1" task="Test Task" done={true} handleToggle={mockToggle} />
    );
    const checkbox = getByRole("checkbox");
    expect(getByText("Test Task")).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it("should call handleToggle with the task id", () => {
    const mockToggle = jest.fn();
    const { getByRole } = render(
      <ToDoItem id="1" task="Test Task" done={true} handleToggle={mockToggle} />
    );
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalled();
  });
});
