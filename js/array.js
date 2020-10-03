var angka = ['0', '1', '2'];
//tambah element di akhir
angka.push('3', '4', '5');
console.log(angka.join('-'));
//hapus element terakhir
angka.pop();
console.log(angka.join('-'));
//tambah element di awal
angka.unshift('M');
console.log(angka.join('-'));
//hapus element pertama
angka.shift();
console.log(angka.join('-'));