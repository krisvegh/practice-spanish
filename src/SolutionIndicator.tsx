import zip from "lodash.zip";
import { FC, useEffect } from "react";

interface SolutionIndicatorProps {
  solutions: string[];
  input: string;
  firstUnknownIndex: (n: number) => void;
}

const SolutionIndicator: FC<SolutionIndicatorProps> = ({
  solutions,
  input,
  firstUnknownIndex,
}) => {
  const getColor = (chars: (string | undefined)[], index: number): string => {
    if (input[index] === undefined) return "grey";
    if (chars.includes(input[index])) return "#00e100";
    return "red";
  };

  const zippedSolutions = zip(...solutions.map((s) => s.split("")));

  const dots = zippedSolutions.map((chars, i) => {
    const color = getColor(chars, i);
    return color;
  });

  useEffect(() => {
    const unknowsCharIndex = dots.findIndex((color) => color !== "#00e100");
    firstUnknownIndex(unknowsCharIndex);
  }, [dots, firstUnknownIndex]);

  return (
    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
      {dots.map((color, i) => (
        <div
          key={i}
          className="solution-indicator"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default SolutionIndicator;
