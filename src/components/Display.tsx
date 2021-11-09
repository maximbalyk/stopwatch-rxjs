import React from 'react';

interface Props {
  timerArray: Array<number | string>;
}

export const Display: React.FC<Props> = ({ timerArray }) => {
  return (
    <section className="d-flex justify-content-center display-3">
      <p>{timerArray[0]}</p>
      <span>:</span>
      <p>{timerArray[1]}</p>
      <span>:</span>
      <p>{timerArray[2]}</p>
    </section>
  );
};
