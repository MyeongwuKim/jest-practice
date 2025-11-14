// src/components/Hello.test.tsx
import { render, screen } from "@testing-library/react";
import Hello from "./hello";

test("Hello 컴포넌트가 정상 렌더링된다", () => {
  render(<Hello />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
