#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const {render} = require('ink');
const meow = require('meow');

// const ui = importJsx('./ui');
const BorderedBlink = importJsx('./bordered-blink');

const cli = meow(`
	Usage
	  $ ink-310

	Options
		--name  Your name

	Examples
	  $ ink-310 --name=Jane
	  Hello, Jane
`);

render(React.createElement(BorderedBlink, cli.flags));
