import readlineSync from 'readline-sync';

const greeting = () => {
	console.log('Welcome to the Brain Games!');
}

export default () => {
	greeting();
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
	return userName;
};