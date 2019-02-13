function getYearsAgo(n) {
    const today = new Date().getTime();
    const years = n * 365 * 24 * 60 * 60 * 1000;
    return new Date((today - years));
}
export default {
    getYearsAgo
}