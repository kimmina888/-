"use strict";
function one(security_key, s){
    let result = "";
    let Alp = new String("abcdefghijklmnopqrstuvwxyz");
    s.trim();
    let sk = (security_key.trim())+Alp;
    sk = (new Set(sk));
    console.log(sk);

    for(let i = 0; i < s.length; i++){
        // console.log("오류");
        result += Alp.indexOf(s.charAt(i));
    }

    console.log("오류");
    // document.body.container.row.card.card_body.pswText = result;
    console.log("오류"); 
    console.log(result);
}
one("coffee","i drink a coffee");


