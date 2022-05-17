const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
    spec_dir: 'test',
    spec_files: ['**/*[sS]pec.js'],
    random: false,
    seed: null,
    stopSpecOnExpectationFailure: false
});

jasmine.execute();
