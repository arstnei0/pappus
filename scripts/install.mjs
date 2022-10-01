import { execSync } from 'child_process';
import { resolve } from 'path';
import { stderr } from 'process';

const cwd  = process.cwd();

console.log('Start installing all packages...');

// // Install api depenencies
// const apiOut = execSync('npm i', {
//     cwd: resolve(cwd, 'packages/api'),
// });
// console.log(apiOut);

// Install web dependencies
const webOut = execSync('npm i', {
    cwd: resolve(cwd, 'packages/web'),
});
console.log(webOut.toString());