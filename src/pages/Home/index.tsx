import React from 'react';
import {useAppDispatch, useAppSelector} from "src/hooks";
import {fetchProducts, loadMoreProducts, selectPagination, selectProducts} from "src/store/productsSlice";
import CardsList from "src/components/CardsList/CardsList";
import Button from "src/components/Button";

const Home = () => {
    const dispatch = useAppDispatch();
    const productsStore = useAppSelector(selectProducts);
    const pagination = useAppSelector(selectPagination);

    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, []);

    const handleLoadMore = () => {
        dispatch(loadMoreProducts());
        dispatch(fetchProducts());
    };

    return (
        <>
            <CardsList products={productsStore.data}/>
            {productsStore.data.length < pagination.total && (
                <Button label='Загрузить еще' style={{margin: '30px auto'}} onClick={handleLoadMore} />
            )}
        </>
    );
};

export default Home;