import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {generateRandomProducts} from "src/components/helpers";
import CardsList from "src/components/CardsList/CardsList";
import Button from "src/components/Button";
import {Modal} from "src/components/Modal/Modal";
import {ProductForm} from "src/components/Forms";

const Products = () => {
    const [products, setProducts] = useState(generateRandomProducts(12));
    const itemsContainer = useRef<HTMLDivElement>(null);
    const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false);

    const handleShowModalAdd = (): void => {
        setIsOpenAdd(true);
    }

    useEffect(() => {
        const lastItem = itemsContainer.current.children[itemsContainer.current.children.length - 1];
        const infinityObserver = new IntersectionObserver(
            ([entry], observer) => {
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                    setProducts(prevProducts => [...prevProducts, ...generateRandomProducts(12)]);
                }
            }, {rootMargin: '100px 0px 0px'});

        if (lastItem) {
            infinityObserver.observe(lastItem);
        }

    }, [products]);

    return (
        <>
            <Button label='Добавить товар' onClick={handleShowModalAdd} />
            <CardsList cardsRef={itemsContainer} products={products}/>
            <Modal isOpen={isOpenAdd} onClose={setIsOpenAdd}>
                <ProductForm />
            </Modal>
        </>
    );
};

export default Products;