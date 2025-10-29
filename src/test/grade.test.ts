import { getGrade } from "test/grade";

test("점수가 90 이상이면 A", () => {
  expect(getGrade(95)).toBe("A");
});

test("점수가 70 미만이면 F", () => {
  expect(getGrade(60)).toBe("F");
});
