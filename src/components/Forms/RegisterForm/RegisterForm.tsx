import React, {memo, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';

type FormData = {
    firstName: string,
    lastName: string,
    password: string,
    retryPassword: string,
    email: string,
};

const RegisterForm: React.FC = memo(() => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        watch,
        reset,
    } = useForm<FormData>();

    const requiredFieldText = '*обязательное поле';
    const formOptions = {
        firstName: { required: requiredFieldText },
        lastName: { required: requiredFieldText },
        email: {
            required: requiredFieldText,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный адрес электронной почты"
            }
        },
        password: {
            required: requiredFieldText,
            minLength: {
                value: 8,
                message: 'длина не менее 8 символов'
            }
        },
        retryPassword: {
            required: requiredFieldText,
            validate: (val: string) => {
                if (watch('password') != val) {
                    return "*Пароли не совпадают";
                }
            },
        }
    };
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
                <label>Имя:</label>
                <input
                    type="text"
                    className={cn('input', errors.firstName && 'input__error')}
                    {...register('firstName', formOptions.firstName)}
                />
                {errors.firstName && <p className='form__errors'>{errors.firstName.message}</p>}
            </div>

            <div className="form__group">
                <label>Фамилия:</label>
                <input
                    type="text"
                    className={cn('input', errors.lastName && 'input__error')}
                    {...register('lastName', formOptions.lastName)} />
                {errors.lastName && <p className='form__errors'>{errors.lastName.message}</p>}
            </div>

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

            <div className="form__group">
                <label>Пароль еще раз:</label>
                <input
                    type="password"
                    className={cn('input', errors.retryPassword && 'input__error')}
                    {...register('retryPassword', formOptions.retryPassword)} />
                {errors.retryPassword && <p className='form__errors'>{errors.retryPassword.message}</p>}
            </div>

            <Button type="submit" label='Регистрация'/>
        </form>
    );
});

export default RegisterForm;