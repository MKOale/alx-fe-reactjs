import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import AddTodoForm from "../components/AddTodoForm";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems.length).toBeGreaterThan(0);
  });

  test("adds a new todo", () => {
    render(
      <>
        <AddTodoForm />
        <TodoList />
      </>
    );

    const input = screen.getByPlaceholderText(/add new todo/i);
    const addButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getAllByRole("listitem")[0];

    fireEvent.click(todoItem);

    expect(todoItem.className).toMatch(/completed/); // adjust if your toggle class is different
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getAllByRole("listitem")[0];
    const deleteButton = screen.getAllByText(/delete/i)[0];

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
