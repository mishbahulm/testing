var 
    jumlahAngkot = 10,
    nomorAngkot = 1;

console.log('while:');
while ( nomorAngkot <= jumlahAngkot ){

    // console.log('Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.');

    console.log(nomorAngkot + '\t' + Boolean(nomorAngkot <= jumlahAngkot)+ '\t' + 'Angkot No. ' + nomorAngkot + ' beroperasi dengan baik.');

    nomorAngkot+=1;
    
}