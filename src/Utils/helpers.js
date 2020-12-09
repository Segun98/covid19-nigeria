export const Commas = (num) => {
    if (!num) {
        return 0
    }
    let x = parseInt(num)
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}