import * as fs from 'fs';
import * as path from "path";
import {dev} from './devOption'

var copy = require('recursive-copy');

//需要被复制的文件夹
const foldersName = ['data', 'resource']; 
const srcPath = path.resolve(__dirname, '..') + '\\' //获取资源路径

const buildPath = path.resolve(__dirname, '../../') + '\\' + dev.outputFolder;


export function copyResources() {
    for (const folderName of foldersName) {

        let from = srcPath + folderName;
        let dest = buildPath + '\\' + folderName;

        console.log('-----------------------');
        console.log(from);
        console.log(dest);
        console.log('-----------------------');

        copy(from, dest, { overwrite: true }, (error: any, results: any) => {
            if (error) {
                console.error('拷贝 : ' + error);
            } else {
                console.info('拷贝了 ' + results.length + ' 文件');
            }
        });

    }

}






