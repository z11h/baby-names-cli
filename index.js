'use strict';

const meow = require('meow');
const babyNames = require('baby-names');

let cli = meow([
      'Examples',
      '  $ baby-names',
      '  Mia',
      '',
      '  $ baby-names --all',
      '  Abigail',
      '  Alexander',
      '  ...',
      '',
      'Options',
      '  --all , -a  Get all names instead of a random name'
    ], {
      alias: {
        a: 'all'
      });

    console.log(cli.flags.all ? babyNames.all.join('\n') : babyNames.random());
