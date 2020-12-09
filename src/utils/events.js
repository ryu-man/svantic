export function register(node, events) {
    const eventKeys = Object.keys(events);
    eventKeys.forEach((key) => node.addEventListener(key, events[key]));
    return () => {
        eventKeys.forEach((key) => node.removeEventListener(key, events[key]));
    };
}
