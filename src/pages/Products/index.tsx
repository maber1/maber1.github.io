import React, {useEffect, useRef, useState} from 'react';
import CardsList from "src/components/CardsList/CardsList";
import Button from "src/components/Button";
import {Modal} from "src/components/Modal/Modal";
import {ProductForm} from "src/components/Forms";
import {useDispatch, useSelector} from "react-redux";
import {loadMoreProducts, selectProducts} from "src/store/productsSlice";

const Products = () => {
    const dispatch = useDispatch();
    const itemsContainer = useRef<HTMLDivElement>(null);
    const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);
    const productsStore = useSelector(selectProducts);

    const handleModalAdd = (): void => {
        setIsOpenAdd(!isOpenAdd);
    }

    useEffect(() => {
        dispatch(loadMoreProducts());
    }, [])

    useEffect(() => {
        const lastItem = itemsContainer.current.children[itemsContainer.current.children.length - 1];
        const infinityObserver = new IntersectionObserver(
            ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    dispatch(loadMoreProducts());
                }
            }, {rootMargin: '100px 0px 0px'});

        if (lastItem) {
            infinityObserver.observe(lastItem);
        }

    }, [productsStore]);

    return (
        <>
            <Button label='Добавить товар' onClick={handleModalAdd} />
            <CardsList cardsRef={itemsContainer} products={productsStore}/>
            <Modal isOpen={isOpenAdd} onClose={handleModalAdd}>
                <ProductForm onClose={handleModalAdd}/>
            </Modal>
        </>
    );
};

export default Products;