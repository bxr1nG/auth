import { exec } from "child_process";

import spawn from "cross-spawn";
import exit from "exit";

function normalize(args: Array<string>): Array<string> {
    return args.map((arg) => {
        Object.keys(process.env)
            .sort((x, y) => x.length - y.length)
            .forEach((key) => {
                const regex = new RegExp(`\\$${key}|%${key}%`, "ig");
                arg = arg.replace(regex, process.env[key] as string);
            });
        return arg;
    });
}

let args = process.argv.slice(2);
if (args.length === 1) {
    const [command] = normalize(args);
    const proc = exec(command as string, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${JSON.stringify(error, null, 2)}`);
            return;
        }
        process.stdout.write(stdout);
        process.stderr.write(stderr);
        exit(proc.exitCode as number);
    });
} else {
    args = normalize(args);
    const command = args.shift();
    const proc = spawn.sync(command as string, args, { stdio: "inherit" });
    exit(proc.status as number);
}
