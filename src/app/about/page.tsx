import aboutInfo from '../../../public/about';

export default function About() {
  return (
    <section>
      <h2>{aboutInfo[0].heading}</h2>
      <article>
        <div>
          <img />
        </div>
        <div>
          <p>
            Location: <span>{aboutInfo[0].location}</span>
          </p>
          <section>{aboutInfo[0].bio}</section>
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
