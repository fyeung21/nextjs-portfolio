export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <section>
        <img />
        <h2>My Project: {slug}</h2>
      </section>
    </div>
  );
}
