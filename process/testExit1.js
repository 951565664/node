console.log('testExit1');
console.log(`This process is pid ${process.pid}`);
console.log(`This platform is ${process.platform}`);
console.log(`Current directory: ${process.cwd()}`);
console.log(`The parent process is pid ${process.ppid}`);

if (process.getegid && process.setegid) {
    console.log(`Current gid: ${process.getegid()}`);
    try {
      process.setegid(501);
      console.log(`New gid: ${process.getegid()}`);
    } catch (err) {
      console.log(`Failed to set gid: ${err}`);
    }
  }
process.kill(process.pid);

process.on('exit',(code)=>{
    console.log('ada');
});
process.exit(1)
console.log('testExit1+');