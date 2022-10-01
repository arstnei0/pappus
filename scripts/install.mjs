import { exec } from 'child_process';
import { resolve } from 'path';
import { stderr } from 'process';

const cwd  = process.cwd();

console.log('Start installing all packages...');

// Install api depenencies
exec('npm i', {
    cwd: resolve(cwd, 'packages/api'),
}, (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
});

// Install web dependencies
exec('npm i', {
    cwd: resolve(cwd, 'packages/web'),
}, (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
});