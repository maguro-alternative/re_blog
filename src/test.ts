import * as fs from "fs";
import * as path from "path";

// 検索したいディレクトリ
var seekBaseDir = "./";
// 対象ファイルの拡張子
var extFilter = "tsx";

function extension(element: string) {
    var extName = path.extname(element);
    return extName === '.' + extFilter;
};

function seekDir(dirpath: string) {
    fs.readdir(dirpath, function (err, list) {
        if (list !== undefined) {
            list.filter(extension).forEach(function (value) {
                console.log(dirpath + "\\" + value);
            });

            list.forEach(function (value) {
                let nextDir: string = dirpath + "\\" + value;
                if (fs.statSync(nextDir).isDirectory()) {
                    seekDir(nextDir);
                }
            });
        }
    });
}
// 検索開始
seekDir(seekBaseDir);