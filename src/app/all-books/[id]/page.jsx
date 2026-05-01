async function SpecificBookDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = await res.json();

  const item = data.find((f) => f.id === parseInt(id));
  console.log(item);

  return <div>SpecificBookDetailsPage</div>;
}

export default SpecificBookDetailsPage;
