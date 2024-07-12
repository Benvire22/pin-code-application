import { useDispatch, useSelector } from 'react-redux';
import { deleteLastInput, setColor, setHiddenPassword, setInput, setMessage } from './pinCodeSlice';
import { RootState } from '../../app/store';
import PinCodeDisplay from '../../components/PinCodeDisplay/PinCodeDisplay';
import Buttons from '../../components/Buttons/Buttons';
import Button from '../../components/Buttons/Button/Button';
import './PinCode.css';

const PinCode = () => {
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.password);
  const input = useSelector((state: RootState) => state.input);

  const handleInput = (value: string) => {
    dispatch(setInput(value));
    dispatch(setHiddenPassword());
  };

  const handleDelete = () => {
    dispatch(deleteLastInput());
    dispatch(setHiddenPassword());
  };

  const handleEnter = () => {
    if (input.length === 4) {
      if (input === password) {
        dispatch(setColor('#00ff00'));
        dispatch(setMessage('Access Granted!'));
      } else {
        dispatch(setColor('#ff0000'));
        dispatch(setMessage('Access Denied!'));
      }
    }
  };

  return (
    <div className="PinCode">
      <PinCodeDisplay />
      <div className="PinCode-body">
        <Buttons handleClick={handleInput}/>
        <Button onClick={() => handleDelete()}>{'<'}</Button>
        <Button onClick={() => handleInput('0')}>0</Button>
        <Button onClick={() => handleEnter()}>E</Button>
      </div>
    </div>
  );
};

export default PinCode;
