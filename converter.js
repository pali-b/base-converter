// convert to binary and hex.


function convertToBinary(num) {
    let binary = "";
    while(num>0){
        if(num % 2 === 0) {
            binary= "0"+binary;
        }else{
            binary= "1"+binary;
        }
        num=Math.floor(num/2);
    }
    return binary;
}

function convertToHexadecimal(num) {
    let hexadecimal = "";
    while(num>0){
        let remainder = num%16;
        switch(remainder){
            case 10:
            hexadecimal = "A" + hexadecimal;
            break;
            case 11:
            hexadecimal = "B" + hexadecimal;
            break;
            case 12:
            hexadecimal = "C" + hexadecimal;
            break;
            case 13:
            hexadecimal = "D" + hexadecimal;
            break;
            case 14:
            hexadecimal = "E" + hexadecimal;
            break;
            case 15:
            hexadecimal = "F" + hexadecimal;
            break;
            default:
                hexadecimal = remainder + hexadecimal;
        }       
        num=Math.floor(num/16);
    }
    return hexadecimal;
}

module.exports ={
    convertToBinary,
    convertToHexadecimal,
}

