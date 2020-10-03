//fungsi deklarasi
function jumlahVolumeDuaKubus(a, b) { return a**3 + b**3; }

console.log( jumlahVolumeDuaKubus(8, 3) );
console.log( jumlahVolumeDuaKubus(7, 9) );

//fungsi argumen
var tambah = function (a,b){ return a+b; }

console.log(tambah(1,2));

//fungsi argumen dan rekursif
var faktorial = function(a){
    if (a === 0) {
        return 1
    }
    else {
        return a*faktorial(a-1);
    }
}

console.log(faktorial(100));