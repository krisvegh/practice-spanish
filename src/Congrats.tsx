import { Options } from 'canvas-confetti';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function getAnimationSettings(angle: number, originX: number): Options {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: ['#bb0000', '#31cd44', 'f7f60c'],
  };
}

interface CongratsProps {
  words: number;
  lifelines: number;
  onNewGame: () => void;
}

export default function Congrats({
  words,
  lifelines,
  onNewGame,
}: CongratsProps) {
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>();

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      const id = setInterval(nextTickAnimation, 16);
      setIntervalId(id);
      setTimeout(() => {
        clearInterval(id);
      }, 3000);
    }
  }, [nextTickAnimation, intervalId]);

  const pauseAnimation = useCallback(() => {
    intervalId && clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    intervalId && clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    startAnimation();
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'rgba(255, 255, 255, .8)',
          position: 'absolute',
        }}
      >
        <h2 className="congrats-title">Congratulations!</h2>
        <p className="congrats-description">
          {`You finished ${words} words with using only ${lifelines} lifelines.`}
        </p>
        <button onClick={onNewGame}>New Game</button>
      </div>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
