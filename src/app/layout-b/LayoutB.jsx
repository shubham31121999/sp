export default function LayoutB({ hero }) {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-semibold">{hero.title}</h1>
      <p>{hero.description[0]}</p>
    </section>
  );
}
