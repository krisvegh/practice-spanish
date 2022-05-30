import { FC, useEffect, useState } from "react";

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
  const [predictedSolution, setPredictedSolution] = useState(
    solutions[0] || ""
  );

  useEffect(() => {
    const likely = solutions.find((solution) => solution.includes(input));
    if (likely && likely !== predictedSolution) {
      setPredictedSolution(likely);
    }
  }, [input, predictedSolution, solutions]);

  const getColor = (char: string, index: number): string => {
    if (char === " ") return "transparent";
    if (input[index] === undefined) return "grey";
    if (char === input[index]) return "#00e100";
    return "red";
  };

  const dots = predictedSolution.split("").map((letter, i) => {
    const color = getColor(letter, i);
    return color;
  });

  useEffect(() => {
    const unknowsCharIndex = dots.findIndex(
      (color) => color === "grey" || color === "red"
    );
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
