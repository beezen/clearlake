const path = require('path');
const digo = require('digo');
const fs = require('fs');
/**
 * 清理仓库
 */
exports.clean = () => {
    let dir = digo.parseArgs()[1] || 'dist';
    digo.cleanDir(path.resolve(process.cwd(), dir));
    digo.info(`清理${dir}完成`);
}

/**
 * 分支合并提交
 * @example digo merge '提交描述'
 */
exports.merge = () => {
    const message = digo.parseArgs()[1] || "优化";
    const branch = (/\/([^\/]*)$/.exec(digo.readFileIf(".git/HEAD").toString()) || ["", ""])[1].trim() || "master";
    const master = "master";
    if (master !== branch) {
        digo.info(`{bright:(0/3)上传 ${branch} 分支}`, {});
        digo.exec(`git add -A && git commit -m "${message}"`, {
            slient: true
        });
        digo.exec(`git pull origin ${branch}`, {
            slient: true
        });
        digo.exec(`git push origin ${branch}:${branch}`, {
            slient: true
        });
        digo.info(`{bright:(1/3)合并 ${branch} 分支到 ${master} 分支}`, {});
        digo.exec(`git checkout ${master}`, {
            slient: true
        });
        digo.exec(`git pull origin ${master}`, {
            slient: true
        });
        digo.exec(`git merge ${branch}`, {
            slient: true
        });
        digo.info(`{bright:(2/3)上传 ${master} 分支}`, {});
        digo.exec(`git add -A && git commit -m "${message}"`, {
            slient: true
        });
        digo.exec(`git push origin ${master}`, {
            slient: true
        });
        digo.exec(`git checkout ${branch}`, {
            slient: true
        });
        digo.exec("git reset --hard", {
            slient: true
        });
        digo.info("{bright:(3/3)提交完成}", {});
    } else {
        digo.info(`{bright:(0/1)上传 ${master} 分支}`, {});
        digo.exec(`git add -A && git commit -m "${message}"`, {
            slient: true
        });
        digo.exec(`git pull`, {
            slient: true
        });
        digo.exec(`git push origin ${master}`, {
            slient: true
        });
        digo.info("{bright:(1/1)提交完成}", {});
    }
}

/**
 * 创建新组件
 */
exports.new = () => {
    const data = digo.parseArgs();
    if (!data[1]) {
        digo.info("用法: digo new <组件名> [组件显示名] [组件描述]\n  如: digo new query 字符串查询 用于处理url上的参数");
        digo.report = false;
        return;
    }
    data.moduleName = data[1]; // 模块名
    data.name = data.name || digo.getFileName(data.moduleName, false); // 文件名
    data.nameLower = data.name.toLowerCase(); // 小写名
    data.namePascal = data.name.charAt(0).toUpperCase() + data.name.slice(1); // 首字母大写名

    data.displayName = data[2] || data.name; // 显示名
    data.description = data[3] || data.displayName; // 显示描述

    data.author = data.author || digo.exec("git config user.name", {
        slient: true
    }).output.join("").trim();
    data.email = data.email || digo.exec("git config user.email", {
        slient: true
    }).output.join("").trim();
    data.version = "0.0.1";
    data.date = digo.formatDate(new Date(), "yyyy/MM/dd");

    data.tpl = `@tpl/@module`; // 通用模板
    data.dir = `components/${data.moduleName}`;
    createModule(data);
}

/**
 * 创建模块
 * @param data 创建包的基本数据
 */
function createModule(data) {
    fs.readdir(`${data.tpl}`, function (err, files) {
        fs.mkdirSync(data.dir);
        files.forEach(e => {
            if (/\.md$/.test(e)) {
                fs.readFile(`${data.tpl}/${e}`, function (err, fileData) {
                    let curData = fileData.toString();
                    curData = `# ${data.displayName}\n## ${data.description}`;
                    fs.writeFileSync(`${data.dir}/${e}`, curData);
                });
            }
            if (/\.json$/.test(e)) {
                fs.readFile(`${data.tpl}/${e}`, function (err, fileData) {
                    let curData = fileData.toString().replace(/\_name/, data.nameLower).replace(/\_version/, data.version).replace(/\_main/, `./index.tsx`).replace(/\_author/, data.author);
                    fs.writeFileSync(`${data.dir}/${e}`, curData);
                });
            }
            if (/\.tsx$/.test(e)) {
                fs.readFile(`${data.tpl}/${e}`, function (err, fileData) {
                    let curData = fileData.toString();
                    fs.writeFileSync(`${data.dir}/index.tsx`, curData);
                });
            }
        });
    });
}

/**
 * 生成组件列表
 */
exports.createComponentsList = () => {
    let result = "";
    fs.readdirSync(path.resolve(process.cwd(), 'components')).filter(e => {
        return path.parse(e).ext == "" && !/^\./.test(path.parse(e).name);
    }).forEach((e) => {
        result += `export * from './${e}';\n`;
    });
    fs.writeFileSync(path.resolve(process.cwd(), 'components/index.tsx'), result);
}

/**
 * 复制组件列表文件
 */
exports.copyComponentsList = () => {
    let result = fs.readFileSync(path.resolve(process.cwd(), 'components/index.tsx'));
    fs.writeFileSync(path.resolve(process.cwd(), 'lib/index.js'), result);
}

/**
 * 生成单元测试模板
 */
exports.newtest = () => {
    const data = digo.parseArgs();
    if (!data[1]) {
        digo.info("用法: digo newtest <组件名>\n  如: digo newtest query");
        digo.report = false;
        return;
    }
    data.moduleName = data[1]; // 模块名
    data.tpl = `@tpl/@_tests_`; // 通用单元测试模板
    data.dir = `components/${data.moduleName}/_tests_`;
    digo.copyDir(data.tpl, data.dir);
}