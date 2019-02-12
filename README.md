# clearlake

一个程序员必备的工具函数库。

## 介绍

```js
import { formatDate, parse } from 'clearlake'

formatDate(new Date("2016/01/01 00:00:00"), "yyyyMMdd") // "20160101"
parse("2014-1-1") // new Date("2014/1/1")
```