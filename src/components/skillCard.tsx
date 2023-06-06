import FuzzyFilter from "../svgs/custom-filters/fuzzyFilter";

interface ISkillCardProps {
  style?: React.CSSProperties;
  category: string;
  children: JSX.Element[];
}

const dur = 600;

const SkillCard = ({ category, children, style }: ISkillCardProps) => {
  const elementId = category.replaceAll(/[-\s]/gi, "");

  return (
    <li
      id={elementId}
      style={{
        filter: `url(#${elementId}-noise)`,
        ...style,
      }}
      className="skill-card"
    >
      <FuzzyFilter elementId={elementId} duration={dur} />
      <header>
        <span className="title" style={{
          color: "#f87f5c"
        }}>{category}</span>
      </header>
      {children}
    </li>
  );
};

export default SkillCard;
