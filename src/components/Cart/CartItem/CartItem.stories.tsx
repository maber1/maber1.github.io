import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
    title: 'Shop/Cart/CartItem',
    component: CartItem,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
    args: {
        image: [
            '/images/laptop.jpg',
            '/images/laptop.jpg',
            '/images/laptop.jpg',
            '/images/laptop.jpg',
        ],
        name: '15.6" Ноутбук IRBIS NB260',
        description: 'Изящный и производительный ноутбук Irbis NB260 обеспечит легкое выполнение работы вне офиса и не даст вам заскучать в пути. Ведь этот черный ноутбук весом в 1.7 кг и габаритами 227x365.5x23.7 см не только легок и удобен в переноске, но и оснащен всем необходимым для уверенного серфинга и легких коммуникаций в Интернете. Широкий 15.6-дюймовый экран с качественной и высококонтрастной IPS-матрицей разрешением 1920x1080 пикселей обеспечит вам FullHD-качество для просмотра видеоконтента и фильмов. Двухъядерный процессор Intel Celeron, работающий на изменяемых частотах от 1.1 до 2.4 МГц, в тандеме с 4 Гб оперативной памятью LPDDR3 обеспечат Irbis NB260 возможность решать различный спектр задач с минимумом времени на раздумья и загрузку приложений. Легкий доступ в Интернет обеспечит Wi-Fi стандарта 4 (802.11n), а быстрая коммутация с периферийным и иным оборудованием будет обеспечена благодаря наличию Bluetooth 4.0, а также 2 разноформатных USB-разъемов и слота micro HDMI.',
        price: '18000'
    }
};