// Общий ответ
export interface IResponse<T> {
    ok: boolean,
    status: number,
    data: T,
}

export interface IUser {
    id: string,
    name?: string,
    email: string,
    signUpDate: Date
}

// Тип данных при ошибке
export interface IDataErrorResponse {
    errors: {
        name: string,
        stack: string,
        message: string,
        extensions: {
            code: string,
        },
    }[];
}

// Тип данных авторизации при успешном ответе
export interface IAuthSuccessResponse {
    token: string,
    profile: IProfile,
}

export type TypeAuthResponse = IResponse<IAuthSuccessResponse | IDataErrorResponse>;

// Тип данных профиля
export interface IProfile {
    id: string,
    name: string,
    email: string,
    signUpDate: Date,
}

export type TypeProfileResponse = IResponse<IProfile | IDataErrorResponse>;

// Тип данных категории
export interface ICategories {
    data: ICategory[],
    pagination: IPagination,
    sorting: ISorting,
}

export interface ICategory {
    id: string,
    name: string,
    photo?: string,
    createdAt: Date,
    updatedAt: Date,
}

export type TypeCategoryResponse = IResponse<ICategory | IDataErrorResponse>;


export interface IProducts {
    data: IProduct[],
    pagination: IPagination,
    sorting: ISorting,
}

export interface IProduct {
    id: string,
    name: string,
    photo?: string,
    desc?: string,
    createdAt: Date,
    updatedAt: Date,
    oldPrice?: number,
    price: number,
    category: ICategory,
}

export type TypeProductsResponse = IResponse<IProducts | IDataErrorResponse>;
export type TypeProductResponse = IResponse<IProduct | IDataErrorResponse>;

export interface IOrder {
    id: string;
    products: IOrderProduct[];
    user: IUser;
    status: IOrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface IOrderProduct {
    _id: string;
    product: IProduct;
    quantity: number;
}

export enum IOrderStatus {
    PendingConfirmation = 'pending_confirmation',
    Processing = 'processing',
    Packaging = 'packaging',
    WaitingForDelivery = 'waiting_for_delivery',
    InTransit = 'in_transit',
    Delivered = 'delivered',
    ReturnRequested = 'return_requested',
    OrderCancelled = 'order_cancelled',
}

export type TypeOrderResponse = IResponse<IOrder | IDataErrorResponse>;

export interface IPagination {
    pageSize?: number,
    pageNumber?: number,
    total?: number,
}

export interface ISorting {
    type: 'ASC' | 'DESC',
    field: 'id' | 'name' | 'createdAt' | 'updatedAt',
}