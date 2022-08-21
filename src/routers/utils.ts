import { ROUTE } from "./routes";

type RouteType =
    | [ROUTE.HOME]
    | [ROUTE.TRENDS]
    | [ROUTE.FAVORITES]
    | [ROUTE.SETTINGS]
    | [ROUTE.MOVIE, { id: string }]
    | [ROUTE.SIGN_IN]
    | [ROUTE.SIGN_UP]
    | [ROUTE.NOT_FOUND];

export const createPath = (...args: RouteType) => {
    const [path, params] = args;

    if (typeof params === 'undefined') return path;

    return Object.entries(params).reduce((prev: string, [param, value]) => {
        return prev.replace(`:${param}`, '' + value);
    }, path);
};