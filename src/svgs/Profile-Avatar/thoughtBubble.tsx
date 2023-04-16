interface IThoughtBubbleProps {
  url: string;
  x: string | number;
  y: string | number;
  styles?: React.CSSProperties;
}

const ThoughtBubble = ({ url, x, y, styles }: IThoughtBubbleProps) => {
  return (
    <image
      className="thought-bubble"
      style={{
        ...styles,
        filter: "url(#overlaySvg-noise)",
      }}
      x={x}
      y={y}
      href={url}
    />
  );
};

export default ThoughtBubble;
