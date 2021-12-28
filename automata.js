let fs = require('fs');
let arg = process.argv;

string = fs.readFileSync(arg[2]);
string = string.toString();
substring = arg[3];
substring = substring.toString();

let firstString, secondString;

l = string.length;
m = substring.length;
alph = new Array();
for (let i = 0; i < m; i++) {
	alph[substring.charAt(i)] = 0;
}
for (let i = 0; i < l; i++) {
	alph[string.charAt(i)] = 0;
}
del = new Array(m + 1);
for (let j = 0; j <= m; j++) {
	del[j] = new Array();
}
for (let i in alph) {
	del[0][i] = 0;
}
for (let j = 0; j < m; j++) {
	prev = del[j][substring.charAt(j)];
	del[j][substring.charAt(j)] = j + 1;
	for (i in alph) {
		del[j + 1][i] = del[prev][i];
	}
}

let t = 0;
for (let i = 0; i < l; i++) {
	t = del[t][string.charAt(i)];
	if (t == m) {
		console.log(i - m + 1);
	}
}