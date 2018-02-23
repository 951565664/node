/**
 * @author GP
 * @description 修改版本号，和自动写changeLog
 * @version 1.0.0
 */
const { argv } = process;
const path = require('path')
const fs = require('fs')
const beautify = require('js-beautify').js_beautify

const config = require('./package.json')

const writeVersion = () => new Promise((resolve, reject) => {
    const numbers = config.version.split('.')
    numbers[2] = Number(numbers[2]) + 1
    config.version = numbers.join('.')

    fs.writeFile(path.join(__dirname, 'package.json'), beautify(JSON.stringify(config), { indent_size: 2 }), (err) => {
        if (err) {
            reject()
        }
        resolve()
    })
})
const writeChageLogFile = () => new Promise((resolve, reject) => {
    let commitM = '';
    if (argv.indexOf('-m') == '-1') {
        reject()
    } else {
        resolve()
    }
}).then(() => {
    let date = new Date();
    let commitM = '';
    commitM += '\n' + '### ' + config.version;
    commitM += '\n' + ' ' + `\`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\``;
    return commitM;
}).then((commitM) => {
    for (let i = argv.indexOf('-m') + 1; i < argv.length; i++) {
        commitM += `\n-\t${argv[i]}`;
    }
    return commitM;
}).then((commitM) => {
    // fs.appendFileSync('changeLog.md', commitM);
    fs.writeFileSync('changeLog.md', commitM);
}).catch(err => {
    console.log('Error: please write -m\n');
    console.log('What you say?\nDon\'t want to write -m?\nAll Right,Maybe you can open ChangeLog.md,then write title,then write version,then write date,then write...Oh!I forget to save...\n');
    console.log('Are you kidding me? You\'re wasting your time, You\'re wasting your life,! Why not try to automatically writing files with Geng Peng\'s awesome method Which use -m like git commit\n');
    console.log('OK!Let\'s try it\n');
})

const start = async () => {
    await writeChageLogFile();
    await writeVersion();
}

start();