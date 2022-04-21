"use strict";
function one(security_key, s){
    let result = new String();
    console("오류");
    let Alp = new String("abcdefghijklmnopqrstuvwxyz");
    console("오류");
    s.trim();
    console("오류");
    let sk = new String(new Set(security_key.trim()+Alp));
    
    for(let i = 0; i < s.length; i++){
        console("오류");
        result += sk.charAt(Alp.indexOf(s.charAt(i)));
    }
    console("오류");
    document.body.getElementById('pwsText') = result;
    console("오류");
}

