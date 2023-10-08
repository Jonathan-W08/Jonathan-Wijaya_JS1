// Penggunaan if, else, dan nested if
var iq = 130;

if (iq >= 130) {
  console.log("IQ Anda Very Superior");
} 
else if (iq >= 120) {
  console.log("IQ Anda Superior");
} 
else if (iq >= 110) {
    console.log("IQ Anda High Average");
} 
else if (iq >= 90) {
  console.log("IQ Anda Average");
} 
else if (iq >= 80) {
    console.log("IQ Anda Low Average");
} 
else if (iq >= 70) {
    console.log("IQ Anda Borderline");
} 
else {
  console.log("IQ Anda Intellectual Disability");
}









// Penggunaan switch case
var tahun = "2023";

switch (tahun) {
  case "2023":
    console.log("Tahun ini adalah tahun 2023");
    break;
  case "2024":
    console.log("Tahun ini adalah tahun 2024");
    break;
  default:
    console.log("Tahun ini bukan tahun 2023 atau 2024");
}







// Penggunaan for statement
for (var i = 1; i <= 10; i++) {
  console.log("Urutan ke-" + i);
}










// Penggunaan while
var urutan = 1;
while (urutan <= 10) {
  console.log("urutan Ke: " + urutan);
  urutan++;
}







// Penggunaan do while
var detik = 1;
do {
  console.log("Detik: " + detik);
  detik++;
} while (detik <= 10);






// Penggunaan function
function kali(a, b) {
    return a * b;
  }
  var hasilkali = kali(25, 25);
  
  function bagi(a, b) {
    return a / b;
  }
  var hasilbagi = bagi(1000, 25);
  
  function tambah(a, b) {
    return a + b;
  }

  var hasil = tambah(hasilkali, hasilbagi);
  console.log("Hasil perjumlahan: " + hasil);
  