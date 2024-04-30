import React, {memo, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';
import {useLocation, useNavigate} from "react-router-dom";
import {auth, fetchProfile, selectToken} from "src/store/userSlice";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {useTranslation} from "react-i18next";

type FormData = {
    email: string,
    password: string,
    commandId?: string
};

export const AuthForm: React.FC = memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setFocus,
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
        const {email, password} = data;
        dispatch(auth({email, password}));
        reset();
    };

    useEffect(() => {
        setFocus('email')
    }, [])

    useEffect(() => {
        if (token) {
            dispatch(fetchProfile());
            navigate(location.state?.from || '/');
        }
    }, [token]);

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}
              style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
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

            <Button type="submit" label='Авторизация'/>
        </form>
    );
});