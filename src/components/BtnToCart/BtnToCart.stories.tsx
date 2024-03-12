import type { Meta, StoryObj } from '@storybook/react';
import BtnToCart from './BtnToCart';
import React from "react";

const meta: Meta<typeof BtnToCart> = {
    title: 'Shop/Buttons/Button to cart',
    component: BtnToCart,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BtnToCart>;

export const Default: Story = {
    args: {
        counter: 0,
        disabled: false,
        label: 'в корзину'
    },
    render: ({...args}) => (
        <BtnToCart {...args}/>
    )
};