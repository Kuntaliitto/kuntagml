const fs = require('fs');
const path = require('path');

const commitList = [];
let commit = {};

for(let line of fs.readFileSync(path.resolve(__dirname, 'log.txt'), { encoding: 'utf-8' }).split('\n')) {
	const commitMatch = line.match(/^commit ([0-9a-f]+)/);
	const xsdMatch = line.match(/^    ([.0-9]+) (.*)/);

	if(commitMatch) {
		commit = { hash: commitMatch[1], files: [] };
		commitList.push(commit);
	}

	if(xsdMatch) {
		let name = xsdMatch[2];

		if(name == 'vesihuoltolaki') name = 'ymparisto/vesihuoltolaki';
		if(name == 'kantakartta/kantakartta') name = 'kantakartta';

		commit.files.push({ version: xsdMatch[1], name: name });
	}
}

while(commitList.length) {
	commit = commitList.pop();
	process.stdout.write('git checkout ' + commit.hash + '\n');

	for(let spec of commit.files) {
		const base = path.basename(spec.name);

		process.stdout.write('mkdir -p ../gml/' + spec.name + '/' + spec.version + '\n');

		if(base == 'kantakartta') {
			process.stdout.write('ln -f ../gml/' + spec.name + '/*.xsd ../gml/' + spec.name + '/' + spec.version + '/'  + '\n');
		} else {
			process.stdout.write('ln -f ../gml/' + spec.name + '.xsd ../gml/' + spec.name + '/' + spec.version + '/' + base + '.xsd' + '\n');
		}

		if(base == 'maa_ainesluvat') {
			process.stdout.write('ln -f ../gml/' + spec.name + '.xsd ../gml/' + spec.name + '/' + spec.version + '/maaAinesluvat.xsd' + '\n');
		}

		if(base == 'ympariston_tila_ja_seuranta') {
			process.stdout.write('ln -f ../gml/' + spec.name + '.xsd ../gml/' + spec.name + '/' + spec.version + '/ymparistonTilaJaSeuranta.xsd' + '\n');
		}

		if(base == 'pilaantuneet_maa_alueet') {
			process.stdout.write('ln -f ../gml/' + spec.name + '.xsd ../gml/' + spec.name + '/' + spec.version + '/pilaantuneetmaaalueet.xsd' + '\n');
		}
	}
}

process.stdout.write('git checkout master' + '\n');
