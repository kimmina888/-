function two(security_key, s) {
    let alphabetBoard = new Array(Array(), Array(), Array(), Array(), Array());
    let oddFlag = false;
    let playFair = new Array();
    let encPlayFair = new Array();
    let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    let encStr = "";

    for (let i = 0; i < s.length; i += 2) {
        let tmpArr = new Array(2);
        tmpArr[0] = s.charAt(i);
        try {
            if (s.charAt(i) == s.charAt(i + 1)) {
                tmpArr[1] = 'x';
                i--;
            } else {
                tmpArr[1] = s.charAt(i + 1);
            }
        } catch (error) {
            tmpArr[1] = 'x';
            oddFlag = true;
        }
        playFair.push(tmpArr);
    }
    for (let i = 0; i < playFair.length; i++) {

        let tmpArr = new Array(2);
        for (let j = 0; j < alphabetBoard.length; j++) //쌍자암호의 각각 위치체크
        {
            for (let k = 0; k < alphabetBoard[j].length; k++) {
                if (alphabetBoard[j][k] == playFair.get(i)[0]) {
                    x1 = j;
                    y1 = k;
                }
                if (alphabetBoard[j][k] == playFair.get(i)[1]) {
                    x2 = j;
                    y2 = k;
                }
            }
        }


        if (x1 == x2) //행이 같은경우
        {
            tmpArr[0] = alphabetBoard[x1][(y1 + 1) % 5];
            tmpArr[1] = alphabetBoard[x2][(y2 + 1) % 5];
        }
        else if (y1 == y2) //열이 같은 경우
        {
            tmpArr[0] = alphabetBoard[(x1 + 1) % 5][y1];
            tmpArr[1] = alphabetBoard[(x2 + 1) % 5][y2];
        }
        else //행, 열 모두 다른경우
        {
            tmpArr[0] = alphabetBoard[x2][y1];
            tmpArr[1] = alphabetBoard[x1][y2];
        }

        encPlayFair.push(tmpArr);

    }

    for (let i = 0; i < encPlayFair.length; i++) {
        encStr += encPlayFair[i][0] + "" + encPlayFair[i][1] + " ";
    }


    console.log(encStr);
}
two("coffee", "i want to drink coffee");