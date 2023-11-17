/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 * 
 * Ví dụ: 
 * calcFactorial(4)
 * 
 * Output:
 * 24
 *  
 * */ 

function calcFactorial(num) {
    if (num < 0) {
        return "Không thể tính giai thừa của số âm";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i; 
        }
        return factorial;
    }
}
console.log(calcFactorial(4));