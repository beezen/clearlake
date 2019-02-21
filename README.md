# clearlake

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/clearlake
[npm-image]: https://img.shields.io/npm/v/clearlake.svg
[downloads-image]: https://img.shields.io/npm/dm/clearlake.svg

一个程序员必备的工具函数库。

## 方法

### 时间格式化

```js
import { formatDate, parse, addDay} from 'clearlake'

// 格式化时间显示
formatDate(new Date("2016/01/01 00:00:00"), "yyyyMMdd") // "20160101"

// 解析字符串为日期对象
parse("2014-1-1") // new Date("2014/1/1")

// 计算日期添加指定天数后的新日期
addDay("2014/1/1",2) // new Date("2014/1/3")
```

### 查询字符串

```js
import { getQuery, appendQuery, formatQuery} from 'clearlake'

// 查询参数
getQuery("foo", "index.html?foo=1") // "1"

// 添加参数
appendQuery("index.html#/abc", "from=link") // "index.html?from=link#/abc"

// 格式化对象为查询字符串
formatQuery({ a: "2", c: "4" }) // "a=2&c=4"
```

## 了解更多

- [Api 参考文档](https://beezend.github.io/clearlake/site/index.html)