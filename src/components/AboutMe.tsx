export default function AboutMe({
  image,
  imageAltText,
  location,
  bio,
}: {
  image: string;
  imageAltText: string;
  location: string;
  bio: string;
}) {
  return (
    <article>
      <div>
        <img src={image} alt={imageAltText} />
      </div>
      <div>
        <p>
          Location: <span>{location}</span>
        </p>
        <section>{bio}</section>
      </div>
    </article>
  );
}
