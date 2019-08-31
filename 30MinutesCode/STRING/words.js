/**
 * String.prototype.split()
 *
 * @param {*} str
 * @param {*} [pattern=/[^a-zA-Z-]+/]
 */
const words = (str, pattern = /[^a-zA-Z-]+/) => {
    str.split(pattern).filter(Boolean)
}