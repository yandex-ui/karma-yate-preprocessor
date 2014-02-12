describe('yate', function() {
    it('should compile yate template', function() {
        expect(yr.run('main', {})).to.be.eql('Hello World!');
    });
});
