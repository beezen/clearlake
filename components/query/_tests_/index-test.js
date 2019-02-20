import {
    getQuery,
    appendQuery,
    formatQuery
} from "../index";

QUnit.test("query", function (assert) {
    assert.ok(getQuery("foo", "index.html?foo=1") == "1")
});
QUnit.test("appendQuery", function (assert) {
    assert.ok(appendQuery("index.html#/abc", "from=link") == "index.html?from=link#/abc")
});
QUnit.test("formatQuery", function (assert) {
    assert.ok(formatQuery({
        a: "2",
        c: "4"
    }) == "a=2&c=4")
});