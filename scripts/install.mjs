import { spawn } from 'child_process';
import { resolve } from 'path';

const cwd  = process.cwd();

// Install api depenencies
const api = spawn('npm', ['i'], {
    cwd: resolve(cwd, 'packages/api'),
});
api.stdout.pipe(process.stdout);
api.stderr.pipe(process.stderr);

// Install web dependencies
const web = spawn('npm', ['i'], {
    cwd: resolve(cwd, 'packages/web'),
});
web.stdout.pipe(process.stdout);
web.stderr.pipe(process.stderr);