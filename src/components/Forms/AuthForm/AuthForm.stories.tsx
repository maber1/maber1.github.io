import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import AuthForm from "./AuthForm";

const meta: Meta<typeof AuthForm> = {
    title: 'Shop/Forms/AuthForm',
    component: AuthForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Default: Story = {
    args: {
    },
    render: () => (<AuthForm />)
};