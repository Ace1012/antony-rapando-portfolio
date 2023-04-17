interface IFuzzyFilterProps {
  elementId: string;
  duration?: number;
}

const FuzzyFilter = ({ elementId, duration }: IFuzzyFilterProps) => {
  return (
    <svg
      style={{
        position: "absolute",
        height: 0,
        width: 0,
        zIndex: -1,
      }}
    >
      <defs>
        <filter id={`${elementId}-noise`}>
          <feTurbulence
            baseFrequency="0.7,0.8"
            seed="0"
            type="fractalNoise"
            result="static"
          >
            <animate
              attributeName="baseFrequency"
              values="1,1;1,0.1"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="indefinite"
              begin={`${elementId}.mouseenter`}
            />
            <animate
              attributeName="seed"
              values="0;100"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="indefinite"
              begin={`${elementId}.mouseenter`}
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
            <animate
              attributeName="scale"
              values="5"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="indefinite"
              begin={`${elementId}.mouseenter`}
            />
            <animate
              attributeName="scale"
              values="0"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="indefinite"
              begin={`${elementId}.mouseleave`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
};

export default FuzzyFilter;
