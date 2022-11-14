var i, j, k;
j = 0;
k = 1;
var s = 0;
console.log(j + "\n" + k);
for (i = 0; i < 5; i++) {
    s = k + j;
    console.log(s);
    j = k;
    k = s;
}
