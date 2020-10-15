module.exports = function check(str, bracketsConfig) {
    if (str == undefined || str == '' || str.length % 2 != 0) return false;

    const bracketPairs = [];
    bracketsConfig.forEach(element => {
        bracketPairs.push(element.join('')); 
    });

    let strLength = str.length;
    while (true) {
        for (let i = 0; i < bracketPairs.length; i++) {
            str = str.replace(bracketPairs[i], '');
        }
    
        if (str.length == 0) { return true;
        } else if (strLength == str.length) return false;
    
        strLength = str.length;
    }
}
