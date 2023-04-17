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
      {/* <p className="category-summary">{summary}</p> */}
      {/* <p className="category-summary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ad odio
        facilis at harum? Odio aliquam voluptatum unde voluptatibus pariatur,
        sint, architecto tenetur vero a eos quidem est eligendi non.
      </p> */}
      {children}
    </li>
  );
};

export default SkillCard;
