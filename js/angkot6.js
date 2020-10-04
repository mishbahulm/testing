var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {   
    if ( penumpang.length == 0 ){
        penumpang.unshift(namaPenumpang);
        return penumpang;        
    } else {
        var bangkuKosong = -1;
        var sudahAda = false;
        penumpang.forEach( function(e, i){
            if ( e == namaPenumpang){
                bangkuKosong = i;
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // break;
                // return penumpang;
            } else if ( e == undefined ){                
                sudahAda = true;
                // penumpang[i] = namaPenumpang;
                // return penumpang;
                // break;
            }// else if ( i === penumpang.length - 1 ){
            //     penumpang.push(namaPenumpang);
            //     return penumpang;
            // }
        });
        
        if ( bangkuKosong > -1 ) {
            penumpang.splice(bangkuKosong, 1, namaPenumpang);            
        } else if ( sudahAda ) {
            console.log(namaPenumpang + ' sudah ada di dalam angkot\n');
            return penumpang;
        } else {
            penumpang.push(namaPenumpang);            
        }
        return penumpang;
    }
    
};

var hapusPenumpang = function(namaPenumpang, penumpang){
    if ( penumpang.length == 0 ){
        console.log('Angkot masih kosong!');
        return penumpang;
    } else {        
        penumpang.forEach( function(e, i){
            if ( e == namaPenumpang){
                penumpang[i] = undefined;                
            } else if ( i == penumpang.length - 1 ) {
                console.log(namaPenumpang + ' tidak ada di dalam Angkot!');                
            }
        });
        return penumpang;
    }
};