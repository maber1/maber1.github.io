import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import React from 'react';
import IconToCart from "../../icons/icon_addcart.svg";

const meta: Meta<typeof Button> = {
    title: 'Shop/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        label: 'Тест кнопка',
        disabled: false,
        fullWidth: false,
        lineCenter: false,
    },
    render: ({...args}) => (
        <Button
            label={args.label}
            disabled={args.disabled}
            icon={<IconToCart/>}
            lineCenter={args.lineCenter}
            fullWidth={args.fullWidth}
        />
    )
};