const numeralMap = new Map();
numeralMap.set(1000, 'M');
numeralMap.set(900, 'CM');
numeralMap.set(500, 'D');
numeralMap.set(400, 'CD');
numeralMap.set(100, 'C');
numeralMap.set(90, 'XC');
numeralMap.set(50, 'L');
numeralMap.set(40, 'XL');
numeralMap.set(10, 'X');
numeralMap.set(9, 'IX');
numeralMap.set(5, 'V');
numeralMap.set(4, 'IV');
numeralMap.set(1, 'I');

export const numeralConvert = (num: number): string => {
    let result: string = '';
    for (const [key, value] of numeralMap) {
        while (num >= key) {
            result += value;
            num -= key;
        }
    }
    return result;
}

export const numeralToNum = (numeral: string): number => {
    let result: number = 0;
    for (const [key, value] of numeralMap) {
        while (numeral.startsWith(value)) {
            result += key;
            numeral = numeral.replace(value, '');
        }
    }
    return result;
}





