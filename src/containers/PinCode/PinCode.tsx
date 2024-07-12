import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../app/store';
import {deleteLastInput, setColor, setHiddenPassword, setInput, setMessage} from './pinCodeSlice';

const Keyboard = () => {
    const dispatch = useDispatch();
    const password = useSelector((state: RootState) => state.password);
    const hiddenPassword = useSelector((state: RootState) => state.hiddenPassword);
    const input = useSelector((state: RootState) => state.input);
    const message = useSelector((state: RootState) => state.message);
    const color = useSelector((state: RootState) => state.color);

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
                dispatch(setMessage('Access Granted'));
            } else {
                dispatch(setColor('#ff0000'));
                dispatch(setMessage('Access Denied'));
            }
        }
    };

    return (
        <div style={{backgroundColor: color}}>
            <p>{hiddenPassword}</p>
            <button onClick={() => handleInput('1')}>1</button>
            <button onClick={() => handleInput('2')}>2</button>
            <button onClick={() => handleInput('3')}>3</button>
            <button onClick={() => handleInput('4')}>4</button>
            <button onClick={() => handleInput('5')}>5</button>
            <button onClick={() => handleInput('6')}>6</button>
            <button onClick={() => handleInput('7')}>7</button>
            <button onClick={() => handleInput('8')}>8</button>
            <button onClick={() => handleInput('9')}>9</button>
            <button onClick={() => handleDelete()}>{'<'}</button>
            <button onClick={() => handleInput('0')}>0</button>
            <button onClick={() => handleEnter()}>Enter</button>
            <p>{message}</p>
        </div>
    );
};

export default Keyboard;
