export type SkillsCategory = {
  id: number;
  title: string;
  skills: string[];
};

export type SkillsContainerProps = {
  skillsList: SkillsCategory[];
};

export default function SkillsContainer({ skillsList }: SkillsContainerProps) {
  return (
    <section>
      <h2>skills list</h2>
      {skillsList.length !== 0 ? (
        <article>
          {skillsList.map((skillsCategory) => (
            <article>
              <h4 key={skillsCategory.id}>{skillsCategory.title}</h4>
              <ul>
                {skillsCategory.skills.map((item, id) => (
                  <li key={id}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </article>
      ) : null}
    </section>
  );
}
