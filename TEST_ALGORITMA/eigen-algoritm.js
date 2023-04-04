// ALGORITMA

// Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

//     1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

let sampleText = "NEGIE1";

function reverseText(text) {
  const textArray = text.split("");
  const char = textArray.filter((item) => isNaN(Number(item)));
  const num = textArray.filter((item) => !isNaN(Number(item)));
  return `1. NEGIE1 di reverse menjadi ` + char.reverse().join("") + num.join("");
}

console.log(reverseText(sampleText));

//     2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

// Contoh:

// const sentence = "Saya sangat senang mengerjakan soal algoritma"

// longest(sentence)
// mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma";

function longest(kalimat) {
  const kalimatArray = kalimat.split(" ");
  let hasilKalimat = "";
  for (let i = 0; i < kalimatArray.length; i++) {
    if (kalimatArray[i].length > hasilKalimat.length) {
      hasilKalimat = kalimatArray[i];
    }
  }

  return `2. ${hasilKalimat}: ${hasilKalimat.length} character`;
}

console.log(longest(sentence));

//     3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

// Contoh:

// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const OUTPUT = QUERY.map((q) => INPUT.filter((i) => i.includes(q)).length);

console.log("3. Jumlah kata dalam QUERY yang terdapat dalam INPUT:", OUTPUT);

//     4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

// Contoh:

// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12

// maka hasilnya adalah 15 - 12 = 3

function subtractDiagonal(matrix) {
  let length = matrix.length;
  if (length !== matrix[0].length) return `matrix must be square!`;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < length; i++) {
    sum1 += matrix[i][i];
    sum2 += matrix[i][length - 1 - i];
  }

  return `4. hasil matrix: ${sum1 - sum2}`;
}

const matrix1 = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(subtractDiagonal(matrix1));
