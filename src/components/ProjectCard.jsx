export default function ProjectCard({
  title,
  description,
  tech,
  source,
  link,
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{tech.join(" • ")}</small>
      <div style={{ display: "flex", gap: "10px" }}>
        <a href={source} target="_blank">
          Source Code →
        </a>
        {link && (
          <a href={link} target="_blank">
            link
          </a>
        )}
      </div>
    </div>
  );
}
