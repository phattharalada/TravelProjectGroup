document.addEventListener("DOMContentLoaded", () => {
    // Example: Add a hover animation on all section headings
    const sections = document.querySelectorAll("h2");
    sections.forEach((section) => {
        section.addEventListener("mouseover", () => {
            section.style.color = "#1e90ff";
            section.style.transition = "color 0.3s ease";
        });
        section.addEventListener("mouseout", () => {
            section.style.color = "";
        });
    });

    console.log("Website loaded successfully!");
});
// เพิ่ม Event Listener ให้ปุ่ม "จองเลย"
document.addEventListener("DOMContentLoaded", () => {
    // ค้นหาปุ่มทั้งหมดที่มีในหน้า
    const bookingButtons = document.querySelectorAll("button");

    // เพิ่ม Event Listener ให้ทุกปุ่ม
    bookingButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("จองสำเร็จ! ขอบคุณที่ใช้บริการ");
        });
    });
});

