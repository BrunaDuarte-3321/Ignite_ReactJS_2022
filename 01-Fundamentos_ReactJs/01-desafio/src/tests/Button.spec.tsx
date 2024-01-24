import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { defaultTheme } from "../styles/themes/default";

const TEXT_MOCK = "TEXT_MOCK";

describe("test button", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header   />
      </ThemeProvider>
    );
  });

  it("should render", () => {
     expect(1).toBe(1)
  });
});
