function askMyName() {
    const name = prompt("Please enter your name");
    // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
 
    if (name != null) {
       document.getElementById("stater").innerHTML = "My name is " + name;
       //alert(name);
    }
 }
 
 function helloWorld() {
    const h1message = document.getElementById("stater").innerHTML; // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + ' เลิกกับพี่ได้ดีทุกคน');
 }