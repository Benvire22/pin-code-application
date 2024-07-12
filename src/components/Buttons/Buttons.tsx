import React from 'react';
import Button from './Button/Button';

interface Props {
  handleClick: (button: string) => void;
}

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const Buttons: React.FC<Props> = ({handleClick}) => {
  return (
    <>
      {buttons.map(button => (
        <Button key={button} onClick={() => handleClick(button)}>{button}</Button>
      ))}
    </>
  );
};

export default Buttons;