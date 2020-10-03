var s = '';

console.log('segitiga simple 1');
for (var i = 0; i < 10; i++) {
    for ( var j = 0; j <= i; j++){
        s+='*';        
    }
    s+='\n';    
}
console.log(s);

console.log('segitiga simple 2');
s='';
for (var i = 10; i > 0; i--) {
    for ( var j = 0; j < i; j++){
        s+='*';        
    }
    s+='\n';    
}
console.log(s);


console.log('segitiga urut dari kanan');
s=''
for (var i = 0; i < 10; i++) {
    for ( var j = 0; j < 10; j++){
        if ( j < i ){
            s+=' ';    
        }else{
            s+='*';
        }
    }
    s+='\n';    
}
console.log(s);

console.log('segitiga setengah ketupat');
s = '';
for (var i = 0; i < 10; i++) {
    for ( var j = 0; j <= i; j++){
        s+='*';        
    }
    s+='\n';    
}
for (var i = 10; i >= 0; i--) {
    for ( var j = 0; j <= i; j++){
        s+='*';        
    }
    s+='\n';    
}
console.log(s);

s = '';
console.log('segitiga sama kaki');
var maxI = 9;
var maxJ = maxI*2;
var batas = 0;

for (var i = 1; i <= maxI; i++) {
    for ( var j = 1; j <= maxJ; j++){
        if ( j === 1){
            s+=' ';
        }
        if ( j >= (maxI-batas) && j <= (maxI+batas) ){
            s+='*';
        } else {
            s+=' ';
        }        
    }    
    s+='\n';
    batas++;    
}
console.log(s);


console.log('belah ketupat');
s = '';
// sisi atas
maxI = 9;
maxJ = maxI*2;
batas = 0;

for (var i = 1; i <= maxI; i++) {
    for ( var j = 1; j <= maxJ; j++){
        if ( j === 1){
            s+=' ';
        }
        if ( j >= (maxI-batas) && j <= (maxI+batas) ){
            s+='*';
        } else {
            s+=' ';
        }        
    }    
    s+='\n';
    batas++;    
}

// sisi bawah
maxI = 10;
maxJ = (maxI*2)-1;
batas = 0;

for (var i = 1; i <= maxI; i++) {
    for ( var j = 1; j <= maxJ; j++){
        
        if ( j >= (1+batas) && j <= (maxJ-batas) ){
            s+='*';
        } else {
            s+=' ';
        }        
    }    
    s+='\n';
    batas+=1;       
}
console.log(s);

s = '';
console.log('papan catur');

for (var i = 1; i <= 10; i++) {
    for ( var j = 1; j <= 10; j++){
        if ( i % 2 === 1){
            ( j % 2 === 1 ) ? s+='#' : s+=' ';            
        } else {
            if ( j % 2 === 1 ){
                s+=' ';
            } else {
                s+='#';
            }
        }
    }    
    s+='\n';
}
console.log(s);


console.log('\u0394'+' pascal');

function formatted_string(pad, user_str, pad_pos)
{
    if (typeof user_str === 'undefined') 
        return pad;
    if (pad_pos == 'l')
        return (pad + user_str).slice(-pad.length);
    else 
        return (user_str + pad).substring(0, pad.length);
}

s = '';
var coef = 1, space, i, j;
var rows = prompt('Masukkan jumlah baris:');

for ( i = 0; i < rows; i++ ){
    for ( space = 1; space <= rows - i; space++ ){
        s += '  ';
    }
    for ( j = 0; j <= i; j++ ){
        if ( j === 0 || i === 0 )
            coef = 1;
        else
            coef = coef * (i - j + 1) / j;        
        s += formatted_string('    ', coef, 'l')
    }
    s += '\n';
}

console.log(s);


s = '';
maxI = 5;
maxJ = maxI*2;
batas = 0;
for (var i = 1; i <= maxI; i++) {
    for ( var j = 1; j <= maxJ; j++){        
        if ( j >= (maxI-batas) && j <= (maxI+batas) ){
            
            if ( ( j === maxI-batas ) || ( j === maxI+batas ) ){
                s+='1';
            } else if ( j > (maxI-batas) && j < (maxI+batas) ) {
                if ( i % 2 === 0) {
                    if ( j % 2 === 1) {
                        s+=' ';
                    } else {
                        s+= i-1;
                    }
                } else {
                    if ( j % 2 === 0) {
                        s+=' ';
                    } else if ( j === i ) {
                        s+='6';
                    } else {
                        s+= i-1;
                    }
                }
            }
            else {
                s+='2';
            }
        } else {
            s+=' ';
        }        
    }    
    s+='\n';
    batas++;    
}
console.log(s);