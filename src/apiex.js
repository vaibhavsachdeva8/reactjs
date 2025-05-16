export const api = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  return responce.json();
};
