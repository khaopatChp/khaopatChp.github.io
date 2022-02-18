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
    alert(h1message + ' ชีวิตตอนนี้คือเหนื่อยมากๆ แต่ไม่อยากได้กำลังใจนะ อยากได้เงิน');
 }

 function calAge(){
   const age = prompt("Please enter your year of birth");
   let now = Number(2022-age)
   if(now>=0)
   {
   alert('ยินดีด้วย นายอยู่ในประเทศนี้มา ' + now + ' ปีแล้ว');
   }
   else{
      alert('ใส่ปีเกิดมาสักดีๆสาว');
   }
 }

 function loadProfile(){
    const name = "Chonticha";
    const province = "Loei";
    document.getElementById("my-name").innerHTML = name;
    document.getElementById("my-province").innerHTML = province;

 }