import { render } from '@testing-library/react';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";
import { Task } from "../Tasks";

const setup = () => {
  const mockTask = {
    id: 1,
    text: 'Sample Task',
    done: false,
  };

  const mockDeleteContentTask = jest.fn();
  const mockHandleEditeTask = jest.fn();
  const mockHandleAccountFinished = jest.fn();

  const view = render(
    <ThemeProvider theme={defaultTheme}>
      <Task
        deleteContentTask={mockDeleteContentTask}
        handleAccountFinished={mockHandleAccountFinished}
        handleEditeTask={mockHandleEditeTask}
        task={mockTask}
      />
    </ThemeProvider>
  );

  return {
    ...view,
    mockTask,
    mockDeleteContentTask,
    mockHandleEditeTask,
    mockHandleAccountFinished,
  };
};

describe('Task Component', () => {
  it('renders task with default state', () => {
    const { getByText, container, mockHandleAccountFinished, findAllByRole } = setup();

  expect(getByText('Sample Task')).toBeDefined();

  const circleIcon = findAllByRole('img', {name: 'concluir'});
  expect(circleIcon).toBeDefined();

 /*  fireEvent.click(circleIcon!);
  expect(mockHandleAccountFinished).toHaveBeenCalledWith(1); */

  });

   
});
