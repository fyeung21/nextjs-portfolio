import SkillsContainer from "@/components/SkillsContainer";
import aboutInfo from "../../../public/about";
import AboutMe from "@/components/AboutMe";
import skillsList from "../../../public/skillsList";

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
      <SkillsContainer skillsList={skillsList} />
    </section>
  );
}
