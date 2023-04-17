import { useRef } from "react";
import assets from "../assets/assets";

interface ISkillProps {
  className?: string;
  name: string;
  src: string;
  alt: string;
}

const Skill = ({ className, name, src, alt }: ISkillProps) => {
  const skillContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={skillContainerRef} className="skill-container">
      <span
        style={{
          // textTransform: "uppercase",
          fontSize: "1.25rem",
        }}
      >
        {name}
      </span>
      <img
        className={`skill ${className ?? ""}`}
        title="HTML"
        {...{ src, alt }}
      />
    </div>
  );
};

export default Skill;
