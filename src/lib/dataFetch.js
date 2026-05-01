export default dataFetch = async () => {
  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = res.json();
};
