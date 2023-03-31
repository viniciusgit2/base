export default function calculadora(){
    return {soma,sub,mult,div}
 function soma(num1, num2) {
    return num1 + num2
}
 function sub(num1, num2) {
    return num1 - num2
}
 function mult(num1, num2) {
    return num1 * num2
}
 function div(num1, num2) {
    if (num2 == 0)
        return ('nao é possivel')


    return num1 / num2
}
}