import React, { useState } from 'react';
import { Button } from "@nextui-org/button";

interface TimerProps {
  interval: number; // Intervalo de actualización en milisegundos
}

const Timer: React.FC<TimerProps> = ({ interval }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null); // Almacenar el identificador del intervalo

  // Función para iniciar el cronómetro
  const startTimer = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + interval);
      }, interval);
      setTimerId(id);
    }
  };

  // Función para detener el cronómetro
  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  // Función para reiniciar el cronómetro
  const resetTimer = () => {
    setTimeElapsed(0);
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  // Función para formatear el tiempo transcurrido en horas, minutos y segundos
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center">
      <p className="text-2xl mb-4">{formatTime(timeElapsed)}</p>
      <div className="space-x-4">
        <Button color="primary" onClick={startTimer}>Comenzar</Button>
        <Button color="danger" onClick={stopTimer}>Detener</Button>
        <Button color="warning" onClick={resetTimer}>Resetear</Button>
      </div>
    </div>
  );
};

export default Timer;