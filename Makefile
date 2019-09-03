install:
	npm install

test:
	npm test

start:
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .