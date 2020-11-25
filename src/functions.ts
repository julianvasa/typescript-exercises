export  const sum = (num: number, num2: number): number => {
    return num + num2
}


export const sum2 = (num: number | string, num2: number | string): number => {
    typeof num == 'string' ? num = parseInt(num) : null
    typeof num2 == 'string' ? num2 = parseInt(num2) : null
    return num + num2
}
