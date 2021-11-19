// 'AAABBCEBALDSLLLLL'
// 3A2BCEBALDS5L

const getCount = (str) => {
    let arr = '';
    var count = 0;
    for (i = 0; i < str.length; i++) {

        if (str[i] == str[i + 1]) {
            count++;
        } else {
            if (count != 0) {
                arr += count + 1;
                arr += str[i];
            } else {
                arr += str[i];
            }
            count = 0;
        }
    }
    console.log(arr);
}
getCount('AAABBCEBALDSLLLLL');


