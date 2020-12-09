export function css(node, style) {
    const stylesheet = node.style;
    Object.entries(style).forEach((elem) => {
        stylesheet[elem[0]] = elem[1];
    });
}
export function register(node, events) {
    const eventKeys = Object.keys(events);
    eventKeys.forEach((key) => node.addEventListener(key, events[key]));
    return () => {
        eventKeys.forEach((key) => node.removeEventListener(key, events[key]));
    };
}
export function classNames(names) {
    return names.filter((o) => o).join(' ');
}
