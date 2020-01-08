/**
 * 判断路径是否是绝对路径
 * @param path 路径
 * @return 布尔值
 */
export function isAbsolute(path: string) {
    if (process.platform == "win32") {
        return /^(\w\:|\\|\/)/i.test(path)
    } else {
        return path[0] == '/'
    }
}

/**
 * 获取路径所在的文件夹路径
 * @param path 路径
 * @return 文件夹路径
 */
export function getDir(path: string) {
    let p = path.match(/.*\//)
    return p ? p[0].replace(/\/$/, "") : ""
}

/**
 * 获取路径中的扩展名
 * @param path 路径
 */
export function getExt(path: string) {
    let ext = path.match(/\w\.\w*$/)
    return ext ? ext[0].slice(1) : ""
}

/**
 * 格式化路径，去除路径多余的 /、./、../
 */
export function normalize(path: string) {
    let p = path.split("/");
    let result: any[] = [];
    for (let i = 0; i < p.length; i++) {
        if (p[i] == '.') {
        } else if (p[i] == '..') {
            if (result.length != 0 && result[result.length - 1] != '..') {
                result.pop()
            } else {
                result.push('..')
            }
        } else if (p[i] != "") {
            result.push(p[i])
        }
    }
    return result.join("/")
}

/**
 * 拼接两个路径
 * @param path1 
 * @param path2 
 */
export function join(path1: string, path2: string) {
    return normalize(normalize(path1) + "/" + normalize(path2)) + (path2[path2.length - 1] == "/" ? "/" : "")
}

/**
 * 计算两个路径的公共文件夹
 * @param path1 
 * @param path2 
 */
export function commonDir(path1: string, path2: string) {
    let p1 = normalize(path1).split("/");
    let p2 = normalize(path2).split("/");
    let result = [];
    for (let i = 0; i < p1.length; i++) {
        if (p1[i] == p2[i]) {
            result.push(p1[i])
        } else {
            if (result.length == 0) {
                return null;
            } else {
                return result.join("/");
            }
        }
    }
    return result.join("/");
}

/**
 * 计算 path2 相对于 path1 的相对路径
 * @param path1 
 * @param path2 
 */
export function relativePath(path1: string, path2: string) {
    let p1 = normalize(path1) + (path1[path1.length - 1] == "/" ? "/" : "");
    let p2 = normalize(path2) + (path2[path2.length - 1] == "/" ? "/" : "");
    let com = commonDir(p1, p2) || "";
    let left1 = p1.slice(com.length).split("/");
    let left2 = p2.slice(com.length).split("/");
    let result = [];
    if (left1.length == 1) {
        result.push(com.split("/")[com.split("/").length - 1]);
    } else {
        for (let i = 0; i < left1.length; i++) {
            if (left1[i] != "" && (left2[i] == "" || left2[i] === undefined)) {
                result.push("..")
            }
        }
    }
    for (let i = 0; i < left2.length; i++) {
        if (left2[i] != "") {
            result.push(left2[i])
        }
    }
    return result.join("/")
}