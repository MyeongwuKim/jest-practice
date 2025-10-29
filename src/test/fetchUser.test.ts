import { fetchUser } from "./fetchUser";

describe("fetchUser (비동기 패턴)", () => {
  test("사용자 정보를 정상적으로 반환해야 한다", async () => {
    const result = await fetchUser();
    expect(result).toEqual({ name: "Myeongwoo", age: 26 });
  });
});
