import {
    formatDate,
    parse
} from '../index';
QUnit.test("formatDate", function (assert) {
    assert.ok(formatDate(new Date("2016/01/01 00:00:00"), "yyyyMMdd") == '20160101')
    assert.ok(formatDate(new Date("2016/01/01"), "yyyyMMdd") == '20160101')
    assert.ok(formatDate(new Date("2016/01/01 00:00:00"), "yyyy-MM-dd") == '2016-01-01')
});

QUnit.test('parse', function (assert) {
    assert.ok(parse('2014-1-1').getTime() == new Date('2014/01/01').getTime())
    assert.ok(parse('20140101').getTime() == new Date('2014/01/01').getTime())
    assert.ok(parse('2014年01月01日', 'yyyy年MM月dd日').getTime() == new Date('2014/01/01').getTime())
});