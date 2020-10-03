var item = prompt('masukkan makanan / minuman : \n (cnth: nasi, jus, burger, softdrink)');

switch ( item ) {
    case 'nasi':
    case 'jus':
        alert('makanan sehat');
        break;
    case 'burger':
    case 'softdrink':
        alert('makanan tidak sehat');
    default:
        alert('makanan salah');
        break;
}
