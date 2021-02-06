import React, { FC } from 'react';

type Props = {
  boxColor: string;
  typedColor: string;
};

const Box: FC<Props> = ({ boxColor, typedColor }) => {
  return (
    <div
      className="box color-box"
      style={{
        backgroundColor: boxColor ? boxColor : 'transparent',
      }}
    >
      {boxColor && (
        <div className="notification has-text-centered">
          <strong>{boxColor.toLowerCase()}</strong>
        </div>
      )}
      {typedColor !== '' && !boxColor && (
        <div className="notification has-text-centered">
          <strong>Invalid color</strong>
        </div>
      )}
    </div>
  );
};

export default Box;
