function findStringInString(str1, str2) {
    if (str1.includes(str2)) {
        return str1.search(str2);
    } else {
        return false;
    }

}