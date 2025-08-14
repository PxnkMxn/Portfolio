// 1. ค้นหาปุ่มที่เราสร้างไว้ใน HTML แล้วเก็บไว้ในตัวแปร
const greetingButton = document.querySelector("#welcome-button");

// 2. สร้าง "หู" ขึ้นมาเพื่อรอฟังเหตุการณ์ 'click' ที่จะเกิดขึ้นบนปุ่มนี้
greetingButton.addEventListener('click', function() {

    // 3. เมื่อมีการคลิกเกิดขึ้น ให้ทำงานในนี้
    console.log("Button was clicked!"); // แสดงข้อความใน console เพื่อทดสอบ
    alert("ยินดีต้อนรับสู่ Portfolio ของผมครั้บ! 😊"); // แสดงกล่องข้อความแจ้งเตือน
    
});