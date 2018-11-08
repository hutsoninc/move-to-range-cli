#!/usr/bin/env node
'use strict';
const meow = require('meow');
const moveToRange = require('move-to-range');

const cli = meow(`
	Usage
	  $ move-to-range <int>-<int> <file-type>
	Options
      --destination, -d  Destination for dirs
	Example
	  $ move-to-range 1-5,7,9-10 .txt
`, {
    flags: {
        destination: {
            type: 'string',
            default: '',
            alias: 'd'
        }
    }
});

const input = cli.input;

if (input.length === 0) {
    console.error('No args provided');
    process.exit(1);
}

if (input.length === 1) {
    console.error('No file type provided');
    process.exit(1);
}

moveToRange(input[0], input[1], cli.flags)