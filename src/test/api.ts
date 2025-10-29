export async function getData(fetchFn = fetch) {
  const res = await fetch("https://example.com/api/data");
  return res.json();
}
