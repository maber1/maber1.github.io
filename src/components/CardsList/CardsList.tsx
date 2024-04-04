import React, {FC} from 'react';
import "./CardsList.scss";
import {Card} from "../Card/Card";
import {IProduct} from "src/types/productTypes";

interface IProducts {
    products: IProduct[],
    cardsRef?: React.RefObject<HTMLDivElement>,
}

const CardsList: FC<IProducts> = ({products, cardsRef}) => {

    return (
        <div className="cards" ref={cardsRef}>
            {
                products.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))
            }
        </div>
    )
};

export default CardsList;