interface Param{
    num1: number, 
    num2?: number, 
    num3?: number
}

function addition(num1: number, num2: number, num3?: number):number{
    if(num3){
        return num1 + num2 +num3;    
    }
    return num1 + num2
}

function addition1(num1: number= 4, num2: number= 6, num3?: number):number{
    if(num3){
        return num1 + num2 +num3;    
    }
    return num1 + num2
}

function sum( param: Param):number{
    const {num1 = 5, num2 = 10, num3} = param
    if(num3){
        return num1 + num2 +num3;    
    }
    return num1 + num2
}

function subtraction(num1: number, num2: number, num3?: number):number{
    if(num3){
        return num1 + num2 +num3;    
    }
    return num1 + num2
}

console.log('The addition of three numbers',addition(10,22,35))
console.log('The addition of two numbers',addition(145,77))
console.log('The addition of two numbers involving Undefined',addition1(undefined,22))
console.log('The addition of two numbers involving two Undefined',addition1(undefined,undefined,22))
console.log('The addition of two numbers involving interface',sum({num1: 2}))
console.log('The subtraction of two numbers',subtraction(12,4,56))