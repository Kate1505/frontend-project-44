#!/usr/bin/env node

import nameUser from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const greetingUser = () => {
  nameUser();
};

greetingUser();
