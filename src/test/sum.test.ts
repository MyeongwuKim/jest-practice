import { sum } from "./sum";

describe("덧셈 테스트", () => {
  test("1 + 2 = 3 이어야 한다", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("3 + 3 = 6 이어야 한다", () => {
    expect(sum(3, 3)).toBe(6);
  });
});
