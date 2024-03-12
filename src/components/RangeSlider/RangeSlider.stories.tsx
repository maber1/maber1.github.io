import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import RangeSlider from "../RangeSlider";

const meta: Meta<typeof RangeSlider> = {
    title: 'Shop/RangeSlider',
    component: RangeSlider,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
    args: {
        min: 10,
        max: 150,
        value: 30,
    },
    render: ({...args}) => (<RangeSlider min={args.min} max={args.max} value={args.value} />)
};