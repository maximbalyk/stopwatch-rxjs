import React from 'react';

interface Props {
  handleStartStopButton: () => void;
  emitWaitEvent: () => void;
  handleResetButton: () => void;
}

export const Buttons: React.FC<Props> = ({
  handleStartStopButton,
  emitWaitEvent,
  handleResetButton,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        onClick={handleStartStopButton}
        className="btn btn-outline-dark"
      >
        Start/Stop
      </button>
      <button
        type="button"
        onClick={emitWaitEvent}
        className="btn btn-outline-dark mx-2"
      >
        Wait
      </button>
      <button
        type="button"
        onClick={handleResetButton}
        className="btn btn-outline-dark"
      >
        Reset
      </button>
    </div>
  );
};
