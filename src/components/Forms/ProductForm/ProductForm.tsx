import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';
import {IProduct} from "src/types/productTypes";
import {useDispatch} from "react-redux";
import {addProduct, updateProduct} from "src/store/productsSlice";

type FormData = {
    name: string,
    description: string,
    price: string,
    image: string,
};

interface ProductFormProps {
    product?: IProduct,
    onClose?: () => void
}

export const ProductForm: React.FC<ProductFormProps> = ({product, onClose}) => {
    const dispatch = useDispatch();
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
        if (product) {
            dispatch(updateProduct({...product, ...data}));
        } else {
            dispatch(addProduct(data));
        }
        onClose();
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }

        if (product?.id) {
            //fetch
            reset({
                name: product.name,
                description: product.description,
                price: product.price.toString(),
                image: product.image
            });
        }
    }, [product, isSubmitSuccessful])

    return (
        <>
            <h2 style={{
                fontWeight: 'bold',
                fontSize: 18,
                marginBottom: '10px'
            }}>{product ? 'Редактирование товара' : 'Добавление товара'}</h2>
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
                    {product?.image && <div>
                        <img src={product.image} alt="" width={100}/>
                    </div>}
                    <input
                        type="text"
                        className={cn('input', errors.image && 'input__error')}
                        {...register('image', formOptions.image)} />
                    {errors.image && <p className='form__errors'>{errors.image.message}</p>}
                </div>

                <Button type="submit" label={product?.id ? 'Сохранить' : 'Создать'}/>
            </form>
        </>
    );
};