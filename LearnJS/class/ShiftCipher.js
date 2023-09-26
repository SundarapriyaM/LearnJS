class ShiftCipher {
   constructor (shift) {
    this.shift = shift;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   } 

   encrypt (text) {
    text = text.toLowerCase();
    let enc=''
    for(let i=0; i<text.length;i++){
        if(text.charCodeAt(i) >=97 && text.charCodeAt(i)<=122){
            let ind = (this.alphabet.indexOf(text[i]) + this.shift) % 26;
            enc = enc + this.alphabet[ind].toUpperCase();
        } else {
            enc = enc + text[i];
        }
        ;
    }
    return enc;
   }

   decrypt (text) {
    text = text.toLowerCase();
    let decrp = '';
    for(let i=0; i<text.length;i++){
        if(text[i].charCodeAt() >=97 && text[i].charCodeAt()<=122){
            let ind = (this.alphabet.indexOf(text[i]) - this.shift) % 26;
            if (ind <0){
                ind+=26;
            }
            decrp = decrp + this.alphabet[ind].toLowerCase();
        } else {
            decrp = decrp + text[i];
        }
        
    }
    return decrp;
   }
   
}

const s1 = new ShiftCipher(27);
console.log(s1.encrypt('Hello'));
console.log(s1.decrypt('IFMMP'));

/*
const alphabet = [];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}
*/ 

const cipher = new ShiftCipher(2);
const encrp = cipher.encrypt('I love to code!');
console.log(encrp);
const decrp = cipher.decrypt(encrp);
console.log(decrp);
