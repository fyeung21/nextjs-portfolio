import aboutData from '../../../public/about';

export default function About() {
  return (
    <section>
      <h2>{aboutData[0].heading}</h2>
      <article>
        <div>
          <img />
        </div>
        <div>
          <p>
            Location: <span>{aboutData[0].location}</span>
          </p>
          <section>{aboutData[0].bio}</section>
        </div>
      </article>
      <article>
        <h3>Skills</h3>
        <ul>
          <li>js</li>
          <li>php</li>
          <li>react</li>
        </ul>
      </article>
    </section>
  );
}
