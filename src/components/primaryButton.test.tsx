import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PrimaryButton } from "./primaryButton";

test("버튼 클릭 시 유저 이름이 표시된다", async () => {
  render(<PrimaryButton />);

  // 버튼 클릭
  await userEvent.click(screen.getByText("유저 불러오기"));

  // Mock 응답 결과가 렌더링되는지 확인
  const username = await screen.findByTestId("username");
  expect(username).toHaveTextContent(/^김철수$/);
});
