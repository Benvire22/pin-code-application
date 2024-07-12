import React from 'react';
import "./Button.css";

interface Props extends React.PropsWithChildren {
  onClick: VoidFunction;
}

const Button: React.FC<Props> = ({onClick, children}) => {
  return <button className="Button" onClick={onClick}>{children}</button>;
};

export default Button;