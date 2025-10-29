import { getData } from "./api";

describe("getData (MSW mock 서버)", () => {
  test("MSW가 가짜 응답을 반환한다", async () => {
    const data = await getData(); // 실제 fetch 호출

    expect(data).toEqual({
      id: 2,
      title: "MSW 테스트 데이터",
      completed: true,
    });
  });

  test("MSW 타입을 비교", async () => {
    const data = await getData(); // 실제 fetch 호출
    expect(data).toEqual({
      id: expect.any(Number), // 숫자 타입이면 통과
      title: expect.any(String), // 문자열 타입이면 통과
      completed: expect.any(Boolean), // 불리언 타입이면 통과
    });
  });
});
