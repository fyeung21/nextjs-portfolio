export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section className="hero-container">
          <p className="hero-text">
            "Hi there! My name is Fiona and I am a front-end web developer who takes great interest
            in learning how to write clear and efficient modular code. Please hover over and click
            on the thumbnails below to check out my projects!"
          </p>
        </section>
        <section className="projects-list">{'map list of projects here'}</section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
