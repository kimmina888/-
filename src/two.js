function two(security_key, s){
    let result = "";
    let Alp = new Array(Array(), Array(), Array(), Array(), Array());
    security_key.trim();
    let securityKey = new Set(security_key);
    let sString = s.trim();
    console.log(sk);
    let z = 0;
    for(let i = 0; i < 5; i++){
        for(let j =0; k < 5; j++){
            if(Alp.includes(securityKey[z])){

            }else{
                Alp.push(securityKey[z]);
            }

        }
    }
    for(let c = 'a'; c <= 'z'; c++){
        if(Alp.includes(c)){

        }else{
            Alp.push(c);
        }
    }
    for(let i =0; i < sString.length - 1; i++){
        if(sString[i] == sString[i+1]){
            sString[i+1] = 'x';
        }
    }
    if(sString.length % 2 == 1){
        sString.push('x');
    }
    for(let i =0; i < sString.length; i+=2){
        for(let x = 0; x < 5; x++){
            for(let y = 0; y < 5; y++){
               
            }
        }
    }
}
