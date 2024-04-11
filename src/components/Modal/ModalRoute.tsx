import React, {FC} from 'react';
import {Modal} from "src/components/Modal/Modal";
import {useSearchParams} from 'react-router-dom';
import {AuthForm, ProductForm} from "src/components/Forms";

const GET_MODAL_KEY: string = 'modal';
const MODAL_ELEMENT_KEYS: { key: string, element: React.ReactNode }[] = [
    {
        key: 'addProduct',
        element: <ProductForm/>
    }
];

interface ModalRouteCallbacks {
    close: () => void;
    open: (value: string) => void;
}

interface ModalRouteValue {
    visible: boolean;
    key: string;
}

type ModalRouteType = [ModalRouteValue, ModalRouteCallbacks];

const useModalRoute = (): ModalRouteType => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyFound = MODAL_ELEMENT_KEYS.filter(e => e.key === searchParams.get(GET_MODAL_KEY)).length > 0;
    const value = {
        visible: keyFound ? searchParams.has(GET_MODAL_KEY) : false,
        key: searchParams.get(GET_MODAL_KEY),
    };
    const callbacks = {
        close: () => {
            searchParams.delete(GET_MODAL_KEY);
            setSearchParams(searchParams);
        },
        open: (key: string) => {
            searchParams.append(GET_MODAL_KEY, key);
            setSearchParams(searchParams);
        },
    };

    return [value, callbacks];
};

export const ModalRoute: FC = () => {
    const [{visible, key}, {close}] = useModalRoute();
    const element = MODAL_ELEMENT_KEYS.filter(el => el.key === key)[0]?.element;

    return (
        <Modal isOpen={visible} onClose={close}>
            {element}
        </Modal>
    );
};