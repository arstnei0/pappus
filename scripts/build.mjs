import { spawn, execSync } from 'child_process';
import { resolve } from 'path';

const cwd  = process.cwd();

// // Start api build process
// const api = spawn('npm', ['run', 'build'], {
//     cwd: resolve(cwd, 'packages/api'),
// });
// api.stdout.pipe(process.stdout);
// api.stderr.pipe(process.stderr);

// // Start web pages build process
// const web = spawn('npm', ['run', 'build'], {
//     cwd: resolve(cwd, 'packages/web'),
// });
// web.stdout.pipe(process.stdout);
// web.stderr.pipe(process.stderr);

const apiOut = execSync('npm run build', {
    cwd: resolve(cwd, 'packages/api'),
});
console.log(apiOut.toString());

const webOut = execSync('npm run build', {
    cwd: resolve(cwd, 'packages/web'),
});
console.log(webOut.toString());