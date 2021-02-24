// Input: AAAABBCCCAA
// Output: A4 B2 C3 A2

var lengthOfChars = function(ip){
    let result = "";
    let ch = ip[0];
    let count = 0 ;
    for(let i = 1 ;i <ip.length;i++){
        let nextch = "";
        nextch = ip[i];
        console.log(`nextch ${nextch} ch: ${ch}`);
        if(ch != nextch){
            result += ch + count;
            console.log(`result : ${result}`);
            ch = nextch;
            count = 1;
        }
        else{
            count++;
        }
    }
    result += ch + count;
    console.log(`result : ${result}`);
}
lengthOfChars("AAAABBCCC");
