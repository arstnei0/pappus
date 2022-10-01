import { spawn } from 'child_process';
import { resolve } from 'path';

const cwd  = process.cwd();

// Start api dev process
const api = spawn('pnpm', ['run', 'dev'], {
    cwd: resolve(cwd, 'packages/api'),
});
api.stdout.pipe(process.stdout);
api.stderr.pipe(process.stderr);

// Start web pages dev process
const web = spawn('pnpm', ['run', 'dev'], {
    cwd: resolve(cwd, 'packages/web'),
});
web.stdout.pipe(process.stdout);
web.stderr.pipe(process.stderr);