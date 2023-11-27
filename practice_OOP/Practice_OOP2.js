/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
    constructor(ownerName, vehicleType, cylinderCapacity, value) {
        this.ownerName = ownerName;
        this.vehicleType = vehicleType;
        this.cylinderCapacity = cylinderCapacity;
        this.value = value;
    }

    calculateRegistrationTax() {
        let taxPercentage;
        if (this.cylinderCapacity < 100) {
            taxPercentage = 0.01;
        } else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
            taxPercentage = 0.03;
        } else {
            taxPercentage = 0.05;
        }

        return this.value * taxPercentage;
    }

    showInfo() {
        const registrationTax = this.calculateRegistrationTax();
        console.log("Tên chủ xe: " + this.ownerName);
        console.log("Loại xe: " + this.vehicleType);
        console.log("Dung tích xylanh: " + this.cylinderCapacity + "cc");
        console.log("Trị giá của xe: $" + this.value);
        console.log("Thuế phải nộp: $" + registrationTax);
    }
}


const vehicle1 = new Vehicle("Nobita", "Xe máy", 90, 1500);
const vehicle2 = new Vehicle("Suneo", "Xe hơi", 180, 25000);

console.log("Thông tin xe 1:");
vehicle1.showInfo();

console.log("\nThông tin xe 2:");
vehicle2.showInfo();
