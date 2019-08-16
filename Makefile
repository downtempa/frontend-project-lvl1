install:
	npm install

test:
	npm test

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run