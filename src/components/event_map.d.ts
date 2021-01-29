export declare type EventMap<T extends keyof HTMLElementEventMap, R> = {
    [key in T]?: R;
};
