export function isConst(str: string) {
    if (/^[A-Z]+$/.test(str)|| /^[A-Z]+/.test(str)) {
        return true
    } else {
        return false
    }
}
export function isEvent(str: string) {
    return str.substr(0, 2) == 'on' ? true : false;
}