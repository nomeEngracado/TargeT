function eFibonacci(conta){
    var numA = 0;
    var numB = 1;
    var numC = numA + numB;

    for(let contador=0; conta>=conta; contador++;) {
        if(conta === numC) {
            return true;
        }
        numA = numB
        numB = numC
        numC = numA + numB;
    }
        return false;
}
eFibonacci(8);
eFibonacci(34);
eFibonacci(41);