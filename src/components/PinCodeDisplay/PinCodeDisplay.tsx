import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import "./PinCodeDisplay.css";

const PinCodeDisplay = () => {
  const hiddenPassword = useSelector((state: RootState) => state.hiddenPassword);
  const color = useSelector((state: RootState) => state.color);
  const message = useSelector((state: RootState) => state.message);

  return (
    <div className="PinCodeDisplay">
      <p className="PinCodeDisplay-password">{hiddenPassword}</p>
      <p className="PinCodeDisplay-message" style={{color: color}}>{message}</p>
    </div>
  );
};

export default PinCodeDisplay;