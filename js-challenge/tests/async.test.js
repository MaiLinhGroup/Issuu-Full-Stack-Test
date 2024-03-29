const expect = require('chai').expect;
const answers = require('../src/async');

describe('async behavior', function() {

    it('you should understand how to use promises to handle asynchronicity', function(done) {
        let flag = false;
        let finished = 0;
        const total = 2;

        function finish(done) {
            if (++finished === total) { done(); }
        }

        expect(answers.async(true)).to.be.a('promise');

        answers.async(true).then(function(result) {
            flag = result;
            expect(flag).to.eql(true);
            finish(done);
        });

        answers.async('success').then(function(result) {
            flag = result;
            expect(flag).to.eql('success');
            finish(done);
        });

        expect(flag).to.eql(false);
    });

    it('you should be able to receive data from the server and manipulate it', function(done) {
        // NOTE: The webpack dev server is already configured to return the JSON at this url, all you need
        // to do is get it from the server and manipulate it to return the correct result.
        const url = '/data/testdata.json';

        expect(answers.manipulateRemoteData(url)).to.be.a('promise');

        answers.manipulateRemoteData(url).then(function(result) {
            expect(result).to.have.length(5);
            expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
            done();
        });
    });
});
