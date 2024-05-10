import React, {memo, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Button from "../../Button";
import cn from "clsx";
import '../Forms.scss';
import {useAppDispatch} from "src/hooks";
import {IProduct} from "src/api/types";
import {addProduct, updateProduct} from "src/store/productsSlice";

type FormData = {
    name: string,
    desc: string,
    price: number,
    oldPrice?: number;
    photo: string,
    categoryId: string,
};

interface ProductFormProps {
    product?: IProduct,
    onClose?: () => void
}

export const ProductForm: React.FC<ProductFormProps> = memo(({product, onClose}) => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm<FormData>();
    const requiredFieldText = '*обязательное поле';
    const id = product?.id;
    const formOptions = {
        name: {
            required: requiredFieldText,
            minLength: {
                value: 3,
                message: 'Минимальная длинна 3 символа'
            }
        },
        desc: {
            required: requiredFieldText,
        },
        price: {
            min: {
                value: 1,
                message: 'Не меньше 1'
            },
            required: requiredFieldText,
        },
        oldPrice: {
            min: {
                value: 1,
                message: 'Не меньше 1'
            },
            required: requiredFieldText,
        },
        photo: {
            required: requiredFieldText,
        },
        categoryId: {
            required: requiredFieldText,
            minLength: {
                value: 3,
                message: 'Минимальная длинна 3 символа'
            }
        },
    }

    const onSubmit = (data: FormData) => {
        if (id) {
            dispatch(updateProduct({...data, id}));
        } else {
            dispatch(addProduct(data));
        }
        onClose();
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            // reset();
        }

        if (product?.id) {
            reset({
                name: product.name,
                photo: product?.photo,
                desc: product?.desc,
                oldPrice: product?.oldPrice,
                price: product.price,
                categoryId: product.category.id,
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
                              className={cn('input', errors.desc && 'input__error')}
                              {...register('desc', formOptions.desc)} />
                    {errors.desc && <p className='form__errors'>{errors.desc.message}</p>}
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
                    <label>Старая цена:</label>
                    <input
                        type="number"
                        className={cn('input', errors.oldPrice && 'input__error')}
                        {...register('oldPrice', formOptions.oldPrice)} />
                    {errors.oldPrice && <p className='form__errors'>{errors.oldPrice.message}</p>}
                </div>
                <div className="form__group">
                    <label>Изображение:</label>
                    {product?.photo && <div>
                        <img src={product.photo} alt="" width={100}/>
                    </div>}
                    <input
                        type="text"
                        className={cn('input', errors.photo && 'input__error')}
                        {...register('photo', formOptions.photo)} />
                    {errors.photo && <p className='form__errors'>{errors.photo.message}</p>}
                </div>
                <div className="form__group">
                    <label>Категория:</label>
                    <input
                        type="text"
                        value='662ca6777011ea8061076894'
                        className={cn('input', errors.categoryId && 'input__error')}
                        {...register('categoryId', formOptions.categoryId)} />
                    {errors.categoryId && <p className='form__errors'>{errors.categoryId.message}</p>}
                </div>

                <Button type="submit" label={product?.id ? 'Сохранить' : 'Создать'}/>
            </form>
        </>
    );
});