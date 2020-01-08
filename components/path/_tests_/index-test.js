import { isAbsolute, getDir, getExt, normalize, join, commonDir, relativePath } from "../index";

QUnit.test("isAbsolute", function (assert) {
    assert.ok(isAbsolute("/user/foo") == true)
    assert.ok(isAbsolute("/user/foo") == true) // => true
    assert.ok(isAbsolute("user/foo") == false)// => false
    assert.ok(isAbsolute("/") == true) // => true
    assert.ok(isAbsolute("") == false) // => false
});
QUnit.test("getDir", function (assert) {
    assert.ok(getDir("x/y/z") == "x/y")
    assert.ok(getDir("x/y") == "x")
});
QUnit.test("getExt", function (assert) {
    assert.ok(getExt("foo.js") == ".js")
    assert.ok(getExt("foo.min.js") == ".js")
    assert.ok(getExt("x/foo.js") == ".js")
    assert.ok(getExt("foo/index.") == ".")
    assert.ok(getExt(".gitignore") == "")
    assert.ok(getExt("foo/.gitignore") == "")
});
QUnit.test("normalize", function (assert) {
    assert.ok(normalize("x/y") == "x/y")
    assert.ok(normalize("x//y") == "x/y")
    assert.ok(normalize("x/y/./z") == "x/y/z")
    assert.ok(normalize("x/y/../z") == "x/z")
    assert.ok(normalize("x/y/.z") == "x/y/.z")
    assert.ok(normalize("../x/y") == "../x/y")
    assert.ok(normalize("../../x/y") == "../../x/y")
    assert.ok(normalize("./x/../../../y////z") == "../../y/z")
});
QUnit.test("join", function (assert) {
    assert.ok(join("x", "y") == "x/y")
    assert.ok(join("x/", "/y") == "x/y")
    assert.ok(join("x/", "../y") == "y")
    assert.ok(join("x/", "../y/") == "y/")
    assert.ok(join(".", "../..") == "../..")
});
QUnit.test("commonDir", function (assert) {
    assert.ok(commonDir("x/y/z", "x/y/f") == "x/y")
    assert.ok(commonDir("x/y/z", "y") == null)
    assert.ok(commonDir("x/y/z", "z") == null)
    assert.ok(commonDir("x/y/z", "y/z") == null)
    assert.ok(commonDir("x/y/z", "xx/y/z") == null)
    assert.ok(commonDir("x/y/z", "x/y/") == "x/y")
    assert.ok(commonDir("x/y/./z", "x/./y/z") == "x/y/z")
    assert.ok(commonDir("x/y/z", "x/y/../z") == "x")

});
QUnit.test("relativePath", function (assert) {
    assert.ok(relativePath("/x/y/z", "/x/f") == "../f")
    assert.ok(relativePath("/x/y/z", "/x/y/f") == "f")
    assert.ok(relativePath("/x/y/", "/x/y/z/f") == "z/f")
    assert.ok(relativePath("/x/y/z", "/x/y/z/f") == "z/f")
});