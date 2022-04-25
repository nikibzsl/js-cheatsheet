/* 

    const, let, var szavakkal hozunk létre változókat

    az = bal oldalán szerepel a változó neve
        jobb oldalán az ehhez tartozó érték


    a primitívek a következők: szöveg/string, szám, boolean (true/false), undefined, null



*/

let aString = "this is a string"; // ` (backtick-el több soros komment) MINDIG idézőjelbe rakjuk a stringet 

let aNumber = 1; // ` a számokat nem szabad idézőjelbe rakni 

let aBoolean = false; //` nem szabad idézőjelbe tenni

let anUndefined = undefined; //` nem szabad ""

let aNull = null; //` nem szabad ""

let notANumber = NaN;  //` Nan = not a number, nincs "". minden olyan művelet eredménye, ami nem szám.

console.log (typeof aString);

console.log (typeof anUndefined);

console.log (typeof aNull);

console.log (typeof notANumber);

console.log (aFunction1());

function aFunction1() {

    // ez a függvény belseje

    // a fv mindenképp returnöl ha lefuttatjuk, ha nem adjuk meg mit, akkor undefined-t ad vissza

    return "a function"

}


const aFunction2 = function () {

    // ez is egy fv. majdnem ugyanolyan mintha a függvény neve lenne??? explain better you piece of shit of a teacher

    return "this is another function"
}

console.log (aFunction2()); // minden vátlzoóba mentett dologhoz csak akkor férünk hozzá amik utána jönnek

    if (true) {
    
    //ha teljesül a feltétel
    }
    
    else{
  
    // ha nem teljesül

    }
  
    

console.log("0" == 0);

console.log("0" === 0);

//** ha kapcsos {} között: az ciklus, for ciklussal tudunk rajta végigmenni */

const arr = [34, 15, 88, 2]; // ez egy tömb, ami [] az TÖMB

for (let index = 0; index < arr.length; index++) {
    
    console.log(arr[index]);

}

for (const item of arr) {
    
    console.log(item)
}
