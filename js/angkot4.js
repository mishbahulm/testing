var 
    jumlahAngkot = 10,
    angkotBeroperasi = 6,
    angkotLembur = 7;
    
for ( var nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++ ){
    if ( nomorAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.');
    }  else if ( nomorAngkot === angkotLembur ) {
        console.log('Angkot No. ' + nomorAngkot + ' sedang lembur.');
    }
    else {
        console.log('Angkot No. ' + nomorAngkot + ' sedang tidak beroperasi.');
    }
}