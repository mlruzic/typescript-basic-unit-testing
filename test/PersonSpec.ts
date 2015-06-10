import Person = require('../src/Person');

describe('Person tests', function(){
    it('Should have default name', function(){
        var p = new Person();
        expect(p.name).toBe('Kokolo');
    });

    it('Should have given name', function(){
        var p = new Person('Stefek');
        expect(p.name).toBe('Stefek');
    });
});
