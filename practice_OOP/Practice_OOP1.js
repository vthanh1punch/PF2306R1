/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // Phương thức tính diện tích
    calculateArea() {
        return this.length * this.width;
    }

    // Phương thức tính chu vi
    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }

    // Phương thức hiển thị thông tin
    showInfo() {
        console.log("Chiều dài: " + this.length);
        console.log("Chiều rộng: " + this.width);
        console.log("Diện tích: " + this.calculateArea());
        console.log("Chu vi: " + this.calculatePerimeter());
    }
}

// Tạo đối tượng hình chữ nhật
let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(7, 3);

// Hiển thị thông tin của đối tượng
console.log("Hình chữ nhật 1:");
rectangle1.showInfo();

console.log("\nHình chữ nhật 2:");
rectangle2.showInfo();
