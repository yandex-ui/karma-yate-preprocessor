describe('yate', function() {
    it('should compile yate template', function() {
        expect(yr.run('main', {})).to.be.eql('Hello World!');
    });

    it('should compile yate template with mode', function() {
        expect(yr.run('main', {}, "test")).to.be.eql('Hello World From Mode!');
    });
});
