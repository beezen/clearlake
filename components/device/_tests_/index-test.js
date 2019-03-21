import { device } from "../index";

QUnit.test("device", function (assert) {
    assert.ok(device.ios() == false)
    assert.ok(device.android() == false)
    assert.ok(device.windows() == false)
    assert.ok(device.iOS() == false)
    assert.ok(device.weixin() == false)
});