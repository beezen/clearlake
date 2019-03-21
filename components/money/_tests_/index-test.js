import { formatMoney, formatCurrencyToChinese } from "../index";

QUnit.test("formatMoney", function (assert) {
    assert.ok(formatMoney("12345", 2) == "12,345.00")
    assert.ok(formatMoney("12345.12345", 2) == "12,345.12")
    assert.ok(formatMoney("12345.12345", 0) == "12,345")
    assert.ok(formatMoney("12345.12345", 0, '@') == "12@345")
})

QUnit.test("formatCurrencyToChinese", function (assert) {
    // 零壹贰叁肆伍陆柒捌玖
    assert.ok(formatCurrencyToChinese(10) == "壹拾元", '10 => ' + formatCurrencyToChinese(10))
    assert.ok(formatCurrencyToChinese(12345) == "壹万贰仟叁佰肆拾伍元", '12345 => ' + formatCurrencyToChinese(12345))
})