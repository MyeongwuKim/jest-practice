import { divide } from "./devide";

describe("divide (예외 처리)", () => {
  test("정상적인 나눗셈", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("0으로 나누면 에러 발생", () => {
    // 함수 자체를 실행하지 않고, 람다로 감싸야 함 👇
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
