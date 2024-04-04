import React, {memo, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';

type FormData = {
    email: string,
    password: string,
};

const AuthForm: React.FC = memo(() => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm<FormData>();

    const requiredFieldText = '*обязательное поле';
    const formOptions = {
        email: {
            required: requiredFieldText,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный адрес электронной почты"
            }
        },
        password: {
            required: requiredFieldText,
        }
    }
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful])

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
                <label>Email:</label>
                <input
                    type="text"
                    className={cn('input', errors.email && 'input__error')}
                    {...register('email', formOptions.email)} />
                {errors.email && <p className='form__errors'>{errors.email.message}</p>}
            </div>

            <div className="form__group">
                <label>Пароль:</label>
                <input
                    type="password"
                    className={cn('input', errors.password && 'input__error')}
                    {...register('password', formOptions.password)} />
                {errors.password && <p className='form__errors'>{errors.password.message}</p>}
            </div>

            <Button type="submit" label='Авторизация' />
        </form>
    );
});

export default AuthForm;