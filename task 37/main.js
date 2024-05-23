"use strict";
function make_shirt(size = `large`, text = `i llove typescript.`) {
    console.log(`creating ${size} shirt with the messages:${text}`);
}
make_shirt();
make_shirt(`medium`);
make_shirt(`small`, `i love python`);
