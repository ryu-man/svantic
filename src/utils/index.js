export function css(node, style) {
    const stylesheet = node.style;
    Object.entries(style).forEach((elem) => {
        stylesheet[elem[0]] = elem[1];
    });
}
export function register(node, events) {
    const eventTypes = Object.keys(events);
    eventTypes.forEach((key) => node.addEventListener(key, events[key]));
    return () => {
        eventTypes.forEach((key) => node.removeEventListener(key, events[key]));
    };
}
export function classNames(...args) {
    return args.filter((o) => o).map(o => {
        if (Array.isArray(o)) {
            const [arg1, arg2] = o
            if (arg1) {
                if (typeof arg1 === typeof true) {
                    return arg2
                }
                return `${arg1} ${arg2}`
            } else {
                return ''
            }
        }
        return o
    }).join(' ');
}
