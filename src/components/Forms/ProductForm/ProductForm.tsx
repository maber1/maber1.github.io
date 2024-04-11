import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';
import {IProduct} from "src/types/productTypes";

type FormData = {
    name: string,
    description: string,
    price: string,
    image: string,
};

export const ProductForm: React.FC = (data: IProduct) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm<FormData>();
    const requiredFieldText = '*обязательное поле';
    const formOptions = {
        name: {
            required: requiredFieldText,
            minLength: {
                value: 3,
                message: 'Минимальная длинна 3 символа'
            }
        },
        description: {
            required: requiredFieldText,
        },
        price: {
            min: {
                value: 1,
                message: 'Не меньше 1'
            },
            value: '',
            required: requiredFieldText,
        },
        image: {
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

        if (data.id) {
            //fetch
            reset({
                name: data.name,
                description: data.description,
                price: data.price.toString(),
                image: data.image
            });
        }
    }, [data, isSubmitSuccessful])

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
                <label>Наименование:</label>
                <input
                    type="text"
                    className={cn('input', errors.name && 'input__error')}
                    {...register('name', formOptions.name)} />
                {errors.name && <p className='form__errors'>{errors.name.message}</p>}
            </div>

            <div className="form__group">
                <label>Описание:</label>
                <textarea rows={5} cols={50}
                          className={cn('input', errors.description && 'input__error')}
                          {...register('description', formOptions.description)} />
                {errors.description && <p className='form__errors'>{errors.description.message}</p>}
            </div>
            <div className="form__group">
                <label>Цена:</label>
                <input
                    type="number"
                    className={cn('input', errors.price && 'input__error')}
                    {...register('price', formOptions.price)} />
                {errors.price && <p className='form__errors'>{errors.price.message}</p>}
            </div>
            <div className="form__group">
                <label>Изображение:</label>
                {data?.image && <div>
                    <img src={data.image} alt="" width={100}/>
                </div>}
                <input
                    type="file"
                    className={cn('input', errors.image && 'input__error')}
                    {...register('image', formOptions.image)} />
                {errors.image && <p className='form__errors'>{errors.image.message}</p>}
            </div>

            <Button type="submit" label={data?.id ? 'Сохранить' : 'Создать'}/>
        </form>
    );
};