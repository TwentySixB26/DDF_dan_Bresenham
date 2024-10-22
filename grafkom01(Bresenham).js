// Soal 
let A = [7,7] ;
let B = [14,13] ;


// mendeklarasikan x1 x2 y1 dan y2 
let X1 = A[0] ; //7
let Y1 = A[1] ; //7
let X2 = B[0] ; //14
let Y2 = B[1] ; //13


// mencari nilai delta x dan delta y 
//dx adalah delta x 
// dy adalah delta y 
let dx = X2 - X1 ; //7
let dy = Y2 - Y1 ; //6


// mencari m 
let m = (Y2-Y1)/(X2-X1) ; // 0.85



//jika nilai dy > dx maka nilai step dy 
//jika nilai dx > dy maka nilai step dx 
let step ;  //7
if (dy>dx) {
    step = dy ; 
} else {
    step = dx ;
}



//lakukan iterasi 
let X = [] ; //menyimpan semua data
let Y = [] ; //menyimpan semua data
let y = Y1 ; //untuk menentukan nilai tiap tabel //7    
let x = X1 ; //untuk menentukan nilai tiap tabel  //7   


let d1 ; 
let d2 ;
let p ;


//jika 0<m<1
if (m<1 && m>0) {
    d1 = 2*dy ;  //12
    d2 = 2*(dx-dy) ;  //2
    p = d1-dx ;      //5   

    //lakukan iterasi dengan mengunakan looping 
    for (let i = 0; i <= step; i++) {
        X.push(Math.floor(x)) 
        x = x +1    
        //jika p>=0 
        if (p>=0) {
            Y.push(Math.floor(y)) ; 
            y = y + 1 ;  
            p = p - d2 ; 
        } 
        
        //jika p < 0 
        else  {
            Y.push(Math.floor(y)) ;
            y = y ; 
            p = p + d1 ; 
        } 
        console.log("Koordinat (x , y) = ", X[i] + ' , ' + Y[i]) ; 
    }
    
}
//jika m>1 
else {
    d1 = 2*dx ; 
    d2 = 2*(dx-dy) ; 
    p = d1-dy ;
    for (let i = 0; i <= step; i++) {
        
        Y.push(Math.floor(y)) ; 
        y = y + 1 ;  

        //jika p>=0 
        if (p>=0) {
            X.push(Math.floor.x) 
            x = x +1  
            p = p + d2 ; 
        }
        
        //jika p < 0 
        else  {
            X.push(Math.floor(x)) 
            x = x 
            p = p + d1 ; 
        } 
        console.log("Koordinat (x , y) = ", X[i] + ' , ' + Y[i]) ; 
    }
}



