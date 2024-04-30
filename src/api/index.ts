import {IResponse} from './types';

const BASE_URL = 'http://19429ba06ff2.vps.myjino.ru/api';

export type IParams = Record<string, string | number | boolean | undefined | {}>;

export async function makeQuery<T extends IResponse<unknown>>(
    url: string,
    method: 'DELETE' | 'PATCH' | 'POST' | 'PUT' | 'GET' = 'GET',
    data: Record<string, unknown> = {},
    protectedRequest?: boolean,
    params: IParams = {},
    headers: Record<string, string> = {},
): Promise<T> {
    const token = localStorage.getItem('access_token');
    const isLeadingSlash = url[0] === '/';
    let _url = BASE_URL + (isLeadingSlash ? '' : '/') + url;
    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
        searchParams.append(key, JSON.stringify(params[key]));
    });

    _url += searchParams.toString() ? `?${searchParams.toString()}` : '';
    const _headers = new Headers({
        'Content-Type': 'application/json',
        ...headers,
    });

    if (protectedRequest && token) {
        _headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(_url, {
        method,
        headers: _headers,
        body: data ? JSON.stringify(data) : undefined,
    });

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    } as T;
}