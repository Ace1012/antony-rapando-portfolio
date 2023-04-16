interface IMatrixFilterProps {
  elementId: string;
  duration?: number;
}

const MatrixFilter = ({ elementId, duration }: IMatrixFilterProps) => {
  return (
    <svg
      style={{
        height: 0,
        width: 0,
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
              values="1,0.1;1,0"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="1"
              begin={`${elementId}.mouseenter`}
            />
            <animate
              attributeName="baseFrequency"
              values="1,1;1,0.1"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="1"
              begin={`${elementId}.mouseenter`}
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="static2" scale="0">
            <animate
              attributeName="scale"
              values="0;40;0"
              dur={duration ? `${duration}ms` : "6000ms"}
              repeatCount="1"
              begin={`${elementId}.mouseenter`}
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
};

export default MatrixFilter;
