// Promise를 반환하는 비동기 함수
export async function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Myeongwoo", age: 26 });
    }, 100);
  });
}
