import React from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    icon?: React.ReactNode,
    fullWidth?: boolean,
    lineCenter?: boolean,
}