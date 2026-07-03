function SkillCard({ icon, image, name }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {image ? <img src={image} alt={name} /> : <i className={icon}></i>}
      </div>
      <h3 className="skill-name">{name}</h3>
    </div>
  );
}

export default SkillCard;
