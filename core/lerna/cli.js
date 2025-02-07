#!/usr/bin/env node

"use strict";

/* eslint-disable import/no-dynamic-require, global-require */
const importLocal = require("import-local");

console.log("大王叫我来巡山", __filename);

if (importLocal(__filename)) {
  require("npmlog").info("cli", "using local version of lerna");
} else {
  require(".")(process.argv.slice(2));
}
