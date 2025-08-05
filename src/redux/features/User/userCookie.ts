export function getCookie(strSearch: string): string {
    const arr = document.cookie.split(';');
    let newStr = '';
    for (const elem of arr) {
        if (elem.includes(strSearch)) {
            const str = elem.split('=');
            newStr = newStr + str[1].toString();
        }
    }
    return newStr;
}
