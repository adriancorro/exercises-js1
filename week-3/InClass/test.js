function abracaFunction(yourFunc) {
    console.log( "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!" );
    const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
    ];
    const abracaOutput = yourFunc(abracaArray);
    return abracaOutput;
    }

 function n (o){ 
    let a =  xx.map( 
        function  (c){
           let k = c.toUpperCase(); 
            return k;
        }
    );

    return a;
}
abracaFunction(n);


const mentors = [" Daniel ", " iRriNa ", "Gordon", "ashFeigh ", "    sFFFF  "];


function tidy(namef) {
    
     let fgfg =  namef.trim().toLowerCase()  ;  
    // console.log (` xcc  ${fgfg} ` );
     return fgfg;
   }
 
let f = [];

for (let i = 0; i < mentors.length; i++) {
    const tidy_mentor = tidy(mentors[i]); 
    f.push(tidy_mentor);
    }

    console.log (` sin callback  ${f} ` );
    console.log(`con callback:  ${mentors.map(tidy)} `);  //función se llama callback cuando se pasa como parámetro a otra función
    console.log (`forma trifasifica  ${mentors.map((name) => name.trim().toLowerCase())}   `);



