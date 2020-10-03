var ulang = true;

while ( ulang ){
    alert('Tebak angka dari 1 - 10\nKamu punya 3 kesempatan');

    var life = 3;
    var angkaRandom = Math.floor(Math.random() * 10) + 1;
    console.log(angkaRandom);

    while ( true ){
        
        var player = prompt('Masukkan angka tebakan:');
        console.log(player);
                
        if ( player < 1 || player > 10 ) {
            hasil = 'SALAH';
        }
        else if ( player == angkaRandom ) {
            hasil = 'BENAR';
        }
        else if ( player < angkaRandom ) {
            hasil = 'RENDAH';
            life--;
        }
        else { // player > angkaRandom
            hasil = 'TINGGI';
            life--;
        }
        console.log(hasil);

        if ( hasil == 'SALAH' ){
            msg = 'Angka diluar 1-10';
        }
        else if ( hasil == 'BENAR' ){
            msg = 'Anda BENAR!\nAngka yang dicari adalah : '+angkaRandom;
            alert(msg);
            break;
        }
        else if (life == 0 ){
            msg = 'Kesempatan habis\nAngka yang dicari adalah : '+angkaRandom;
            alert(msg);
            break;
        }
        else {
            msg = 'Terlalu '+hasil+'! \nMasih ada '+life+' kesempatan lagi.';            
        }

        alert(msg);
    }

    ulang = confirm('Mau mengulang permainan?');
}

alert('Terimakasih');