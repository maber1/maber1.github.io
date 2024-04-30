import React, {useRef, useState} from 'react';
import CardsList from "src/components/CardsList/CardsList";
import Button from "src/components/Button";
import {Modal} from "src/components/Modal/Modal";
import {ProductForm} from "src/components/Forms";
import {selectProducts} from "src/store/productsSlice";
import {useAppSelector} from "src/hooks";

const Products = () => {
    const itemsContainer = useRef<HTMLDivElement>(null);
    const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
    const productsStore = useAppSelector(selectProducts);

    const handleModalAdd = (): void => {
        setIsOpenAdd(!isOpenAdd);
    }

    return (
        <>
            <Button label='Добавить товар' onClick={handleModalAdd}/>
            <CardsList cardsRef={itemsContainer} products={productsStore.data}/>
            <Modal isOpen={isOpenAdd} onClose={handleModalAdd}>
                <ProductForm onClose={handleModalAdd}/>
            </Modal>
        </>
    );
};

export default Products;