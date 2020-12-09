export function css(node, style) {
    const stylesheet = node.style;
    Object.entries(style).forEach((elem) => {
        stylesheet[elem[0]] = elem[1];
    });
}
