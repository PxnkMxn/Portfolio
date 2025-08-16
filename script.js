// ค้นหาปุ่มที่เราสร้างไว้ใน HTML แล้วเก็บไว้ในตัวแปร
const greetingButton = document.querySelector("#welcome-button");
const bioText = document.querySelector("#bio"); // <-- เพิ่มบรรทัดนี้ขึ้นมา 

// เก็บข้อความเดิมไว้ในตัวแปร
const originalBioText = bioText.textContent;

// สร้างตัวแปรสำหรับเช็ค "สถานะ"
let isToggled = false; // เริ่มต้นคือยังไม่ได้สลับข้อความ

// รอฟังเหตุการณ์ 'click' ที่ปุ่ม
greetingButton.addEventListener('click', function() {

    // ใช้ if...else เพื่อเช็คสถานะ แล้วทำงานต่างกัน
    if (isToggled === false) { // ถ้ายังไม่ได้สลับ (เป็น false)
        // เมื่อมีการคลิกเกิดขึ้น ให้เปลี่ยนข้อความของ bioText
        bioText.textContent = "ขอบคุณที่ทักทายครับ! ตอนนี้คุณได้เห็นพลังของ JavaScript ในการเปลี่ยนแปลงหน้าเว็บแล้ว! 🎉"
        greetingButton.textContent = "แสดงข้อความเดิม"; // เปลี่ยนข้อความบนปุ่ม
        isToggled = true; // สลับสถานะเป็น true
    } else {
        // ถ้าสลับไปแล้ว (เป็น true)
        bioText.textContent = originalBioText; // เปลี่ยนกลับเป็นข้อความดั้งเดิม
        greetingButton.textContent = "ทักทายฉันสิ!"; // เปลี่ยนข้อความบนปุ่มกลับ
        isToggled = false; // สลับสถานะเป็น false
    }
});

// ========== โค้ดใหม่สำหรับปุ่มแสดง/ซ่อนทักษะ ==========

// เลือก Element ที่เราจะใช้งาน
const toggleButton = document.querySelector("#toggle-skills-button");
const skillsSection = document.querySelector("#skills-section");

// รอฟังเหตุการณ์ 'click' ที่ปุ่มใหม่
toggleButton.addEventListener('click', function() {
    // เมื่อคลิก ให้สลับคลาส 'hidden' บน skillsSection
    skillsSection.classList.toggle('hidden');
    
});