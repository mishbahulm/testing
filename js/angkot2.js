var 
    jumlahAngkot = 10,
    angkotBeroperasi = 8,
    nomorAngkot = 1;

while ( nomorAngkot <= angkotBeroperasi ){
    console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.');
    nomorAngkot++;
}

for ( ; nomorAngkot <= jumlahAngkot; nomorAngkot++ ){
    console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi.');
}