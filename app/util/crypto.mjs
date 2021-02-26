function ceaserEncrypt(str){
   var nStr="";
    var i;
   for(i=0; i<str.length; i++)
   {
      nStr += nextChar(str.charAt(i));
   }
   return nStr;

} 

function ceaserDecrypt(str){
    var nStr="";
    var i;
    for(i=0; i<str.length; i++)
    {
        nStr += prevChar(str.charAt(i));
    }
    return nStr;
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}


export {ceaserEncrypt, ceaserDecrypt}
