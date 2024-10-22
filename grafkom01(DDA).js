// Soal 
let A = [2,1] ;
let B = [7,4] ;

// mendeklarasikan x1 x2 y1 dan y2 
let X1 = A[0] ; //2
let Y1 = A[1] ; //1
let X2 = B[0] ; //7
let Y2 = B[1] ; //4


// mencari nilai delta x dan delta y 
//dx adalah delta x 
// dy adalah delta y 
let dx = X2 - X1 ; //5
let dy = Y2 - Y1 ; //3


//jika nilai dy > dx maka nilai step dy 
//jika nilai dx > dy maka nilai step dx 
let step ; //5
if (dy>dx) {
    step = dy ;
} else {
    step = dx ;
}


// nilai increment 
let xInc = dx/step ; //1
let yInc = dy/step ; //0.6


// menjalankan iterasi untuk menghitung semua titik
let X = [] ; //menyimpan semua data
let Y = [] ; //menyimpan semua data


let x = X1 ; //untuk menentukan nilai tiap tabel //2
let y = Y1 ; //untuk menentukan nilai tiap tabel  //1


for (let i = 0; i <= step; i++) {
    X.push(Math.round(x)); // menyimpan hasil pembulatan koordinat x
    Y.push(Math.round(y)); // menyimpan hasil pembulatan koordinat y
    x = x + xInc; // update nilai x  
    y = y + yInc; // update nilai y 
} 



for (let i = 0; i <= step; i++) {
    console.log("Koordinat (x , y) = ", X[i] + ' , ' + Y[i]) ; 
} 