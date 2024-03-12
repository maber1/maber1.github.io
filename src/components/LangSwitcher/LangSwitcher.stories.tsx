import type { Meta, StoryObj } from '@storybook/react';
import '../../styles/index.scss'
import "../../translations"

import { LangSwitcher } from './LangSwitcher';
import React from "react";
import {useTranslation} from "react-i18next";
import Button from "../../components/Button";

const meta: Meta<typeof LangSwitcher> = {
    title: 'Shop/Switchers/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Default: Story = {};


export const TestChangeLanguage: Story = {
    render: () => {
        const { t } = useTranslation();

        return (
            <>
                <LangSwitcher />
                <Button label={t(`components.testComponent.buttonText`)} />
            </>

        );
    }
};