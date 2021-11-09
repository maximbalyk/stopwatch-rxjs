import React from 'react';

interface Props {
  startStopButton: () => void;
  delayEvent: () => void;
  resetButton: () => void;
}

export const Buttons: React.FC<Props> = ({
  startStopButton,
  delayEvent,
  resetButton,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        onClick={startStopButton}
        className="btn btn-outline-dark"
      >
        Start/Stop
      </button>
      <button
        type="button"
        onClick={delayEvent}
        className="btn btn-outline-dark mx-2"
      >
        Wait
      </button>
      <button
        type="button"
        onClick={resetButton}
        className="btn btn-outline-dark"
      >
        Reset
      </button>
    </div>
  );
};
