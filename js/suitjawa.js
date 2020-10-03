var ulang = true;

while ( ulang ){
    // terima masukkan player
    var player = prompt('Pilih jari: (cth: semut, orang, gajah');

    // generate random number
    var nilai = Math.random();

    // convert into karakter jari
    var computer = 'gajah'; // nilai > 0.61
    if ( nilai < 0.34 ) {
        computer = 'semut';
    } else if ( nilai >= 0.34 && nilai <= 0.61 ) {
        computer = 'orang';
    }

    
    // rules of the game
    var hasil = '';
    if ( player === computer ) {
        hasil = 'SERI!';
    } else if ( player === 'semut') {
        ( computer === 'gajah' ) ? hasil = 'MENANG!' : hasil = 'KALAH!';
    } else if ( player === 'orang') {
        ( computer === 'gajah' ) ? hasil = 'KALAH!' : hasil = 'MENANG!';
    } else if ( player === 'gajah') {
        ( computer === 'semut' ) ? hasil = 'KALAH!': hasil = 'MENANG!';
    } else {
        hasil = 'salah memasukkan jari!';
    }

    console.log('player : '+player+' | nilai : '+nilai+' '+' | komputer :'+computer+' | hasil : '+hasil);

    alert('Anda memilih jari "'+player+'" dan Komputer memilih jari "'+computer+'".\nDalam permainan kali ini Anda "'+hasil+'"');

    ulang = confirm('Apakah Anda mau main lagi?');
}

alert('Terimakasih sudah bermain.');