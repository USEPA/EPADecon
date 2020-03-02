export const generator = function* (count: number) {
    for (let i = 0; i < count; i++) {
        yield i;
    }
}

export default generator;
