import React, {FC} from 'react';
import "./CardsList.scss";
import {Card} from "../Card/Card";
import {IProduct} from "src/api/types";

interface IProducts {
    products: IProduct[],
    cardsRef?: React.RefObject<HTMLDivElement>,
}

const CardsList: FC<IProducts> = ({products, cardsRef}) => {

    return (
        <div className="cards" ref={cardsRef}>
            {
                products.map((item) => (
                    <Card key={item.id} product={item}/>
                ))
            }
        </div>
    )
};

export default CardsList;