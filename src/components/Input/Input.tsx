import React, {FC} from 'react';
import cn from "clsx";
import './Input.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 type?: string,
}

const Input:FC<IInputProps> = ({type= 'text', ...props}) => {

    return (
        <input {...props} type={type} className={cn('input', props.className)}/>);
};

export default Input;