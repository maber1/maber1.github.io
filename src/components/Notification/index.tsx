import React, {FC, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {clearError, selectAppError} from "src/store/appSlice";
import {useTranslation} from "react-i18next";

export const Notification: FC = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectAppError)?.code;
    const [showError, setShowError] = useState(false);
    const {t} = useTranslation();

    useEffect(() => {
        let close: NodeJS.Timeout;

        if (error) {
            setShowError(true);
            close = setTimeout(() => {
                dispatch(clearError());
                setShowError(false);
            }, 3000);
        }
        return () => clearTimeout(close);
    }, [error]);

    return showError && createPortal(
        <div style={{position: 'absolute', top: '20px', left: '50%', zIndex: 3, background: '#fff'}}>
            <span className='error'>{t(`error.${error}`)}</span>
        </div>
        , document.body
    )
}