
import { expect,it } from 'chai';
import calculadora from './main';
import { describe } from 'mocha';
describe(`smoke-tests`,function(){
    it (`should the calc lib`,function(){
        expect(calculadora).to.exist

    }
    )
    it (`should exist the method soma`,function(){
        expect(calculadora.soma).to.exist
        expect(calculadora.soma).to.exist.to.be.a.function
        it('should return 2 when`soma(4,2),function` '
        , expect (calculadora.soma)(2,2)).to.be.equal(4)
    }
    )
    describe(`div`,function(){
        expect(calculadora.div).to.exist
        expect(calculadora.div).to.exist.to.be.a.function
        it('should return 2 when`div(4,2),function` '

          , expect (calculadora.div)(4,0)).to.be.equal(2)
    })
    it('should return `não é possivel divisao por zero`when divided by zero ',function(){
        expect (calculadora.div)(4,0).to.be.equal()
    
    
}
    )
    it (`should exist the method sub`,function(){
        expect(calculadora.sub).to.exist
        expect(calculadora.sub).to.exist.to.be.a.function
        it('should return 2 when`sub(4,2),function` '
        , expect (calculadora.sub)(2,2)).to.be.equal(2)

})
}
)

