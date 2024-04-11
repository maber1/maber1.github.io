import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {RegisterForm} from "./RegisterForm";

const meta: Meta<typeof RegisterForm> = {
    title: 'Shop/Forms/RegisterForm',
    component: RegisterForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
    args: {
    },
    render: () => (<RegisterForm />)
};