"use strict";
function one(security_key, s){
    let result = "";
    console.log("오류");
    let Alp = new String("abcdefghijklmnopqrstuvwxyz");
    console.log("오류");
    s.trim();
    console.log("오류");
    let sk = new String(new Set(security_key.trim()+Alp));
    
    for(let i = 0; i < s.length; i++){
        // console.log("오류");
        result += sk.charAt(Alp.indexOf(s.charAt(i)));
    }

    console.log("오류");
    // document.body.container.row.card.card_body.pswText = result;
    console.log("오류"); 
    console.log(result);
}
one("coffee","i drink a coffee");


