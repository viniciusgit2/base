
import { expect,it } from 'chai';
import calc, { sub } from '../calculadora-basica/main';
import { describe } from 'mocha';
describe(`smoke-tests`,function(){
    it (`should the calc lib`,function(){
        expect(calc).to.exist

    }
    )
    it (`should exist the method sum`,function(){
        expect(calc.sub).to.exist

    }
    )
}
)
