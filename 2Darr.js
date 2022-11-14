var arr1 = [["g", "a"], ["fgh", "b"], ["asd", "c"]];
console.log(arr1);
for (var i = 0; i < arr1.length; i++) {
    // console.log("hai");
    for (var j = 0; j < arr1[i].length; j++) {
        //console.log(arr1.length);
        //console.log(arr1[i].length);
        console.log(i, j);
        console.log(arr1[i][j]);
    }
}
