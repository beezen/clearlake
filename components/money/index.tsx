/**
 * 特殊符号分割金额数字
 * @param value 金额
 * @param precision 精度
 * @param separator 分隔符。
 * @example 
 formatMoney("12345.12345", 2) // 12,345.12
 formatMoney("12345.12345", 0) // 12,345
 formatMoney("12345", 2,"@") // 12@345.00
 */
export function formatMoney(value: number | string, precision = 2, separator = ",") {
    if (value) {
        let strNum = value.toString();
        let match = strNum.match(/^(\d+)(\.\d+)?$/);
        if (match) {
            let integer = match[1];
            let fraction = match[2] ? match[2] : "";
            if (precision != 0) {
                if (fraction.indexOf('.') > -1) {
                    fraction = fraction.slice(1);
                }
                let fractionStr = [];
                for (let i = 0; i < precision; i++) {
                    fractionStr.push(fraction[i] ? fraction[i] : '0');
                }
                fraction = '.' + fractionStr.join("");
            } else {
                fraction = "";
            }
            let source = integer.split('');
            let target = [];
            for (let i = 0; i < source.length; i++) {
                let index = (source.length - 1) - i;
                let item = source[index];

                target.push(item);
                if (((i + 1) % 3) == 0 && i != (source.length - 1)) {
                    target.push(separator);
                }
            }
            integer = target.reverse().join('');
            return integer + fraction;
        }
    }
    return value;
};

/**
 * 格式化货币为中文大写格式（如壹佰贰拾元）。
 * @param value 要格式化的货币值。最大不能超过 9 亿。
 * @return 返回格式化后的字符串。
 * @example formatCurrencyToChinese(10000000) // "壹仟万元"
 */
export function formatCurrencyToChinese(value: any) {
    const digits = "零壹贰叁肆伍陆柒捌玖";
    const units0 = "元万亿";
    const units1 = ["", "拾", "佰", "仟"];
    const neg = value < 0;
    if (neg) value = -value;
    if (value < 0.005) return "零元";
    let t = Math.round(value * 100) % 100;
    let s = t ? (t >= 10 ? digits.charAt(Math.floor(t / 10)) + "角" : "") + (t % 10 ? digits.charAt(t % 10) + "分" : "") : "";
    t = Math.floor(value);
    for (let i = 0; i < units0.length && t > 0; i++) {
        let p = "";
        for (let j = 0; j < units1.length && t > 0; j++) {
            p = digits.charAt(t % 10) + units1[j] + p;
            t = Math.floor(t / 10);
        }
        s = (p.replace(/(零.)*零$/, "") || "零") + units0.charAt(i) + s;
    }
    return (neg ? "负" : "") + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零");
};