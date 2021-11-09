import React, { useEffect, useState } from 'react';
import {
  Subject, map, bufferCount, filter,
} from 'rxjs';
import { Buttons } from './Buttons';
import { Display } from './Display';

const Stopwatch: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [waitSubject] = useState<Subject<boolean>>(new Subject());

  const calculateTimer = (time: number): Array<number | string> => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);

    const hoursFormat = hours < 10 ? `0${hours}` : hours;
    const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

    return [
      hoursFormat,
      minutesFormat,
      secondsFormat,
    ];
  };

  const handleWaitClick = () => {
    const clickCount = 2;
    const clickDelay = 300;

    waitSubject.pipe(
      map(() => new Date().getTime()),
      bufferCount(clickCount, 1),
      filter((timestamps) => {
        return timestamps[0] > new Date().getTime() - clickDelay;
      }),
    ).subscribe(() => {
      clearInterval(intervalId);
      setRunning(!running);
    });
  };

  const emitWaitEvent = () => {
    waitSubject.next(true);
  };

  useEffect(() => {
    const timeArray: Array<number | string> = calculateTimer(timeInSeconds);

    handleWaitClick();

    setTimerArray(timeArray);
  }, [timeInSeconds]);

  const handleStartStopButton = () => {
    if (!running) {
      const interval: any = setInterval(() => {
        setTimeInSeconds((previousState) => previousState + 1);
      }, 1000);

      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      setTimeInSeconds(0);
    }

    setRunning(!running);
  };

  const handleResetButton = () => {
    if (running) {
      clearInterval(intervalId);
      setTimeInSeconds(0);
      const interval: any = setInterval(() => {
        setTimeInSeconds((previousState) => previousState + 1);
      }, 1000);

      setIntervalId(interval);
    }
  };

  return (
    <>
      <Display timerArray={timerArray} />
      <Buttons
        handleStartStopButton={handleStartStopButton}
        emitWaitEvent={emitWaitEvent}
        handleResetButton={handleResetButton}
      />
    </>
  );
};

export default Stopwatch;
