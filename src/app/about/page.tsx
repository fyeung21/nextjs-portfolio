import aboutInfo from '../../../public/about';
import AboutMe from '@/components/about/aboutMe';

export default function About() {
  return (
    <section>
      <h2>{aboutInfo[0].heading}</h2>
      <AboutMe
        image={aboutInfo[0].img}
        imageAltText={aboutInfo[0].imgAltText}
        location={aboutInfo[0].location}
        bio={aboutInfo[0].bio}
      />
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
