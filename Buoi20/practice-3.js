/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isPrimeNumber(4)
 * 
 * Output:
 * false
 *  
 * */ 

function isPrimeNumber(num) {
    if (num <= 1) {
        return false; 
    }

    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true; 
}


console.log(isPrimeNumber(4));