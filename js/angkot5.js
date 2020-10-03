var 
    jumlahAngkot = 10,
    angkotBeroperasi = 6;
    
for ( var nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++ ){
    if ( nomorAngkot === 8 || nomorAngkot === 10 || nomorAngkot === 5 ) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang lembur.');    
    } else if ( nomorAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.');
    }
    else {
        console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi.');
    }
}