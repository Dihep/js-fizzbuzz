const m = document.getElementById("container");
console.log(m);
for (i=1; i<=100; i++) {
    const newArt = document.createElement("article");
    m.append(newArt);
    let content = i;
    if ( (i%15)==0 ) {
        content = "fizzbuzz";
        console.log("15th");
    }
    else if (i%3==0) {
        content = "fizz";
        console.log("3th");
    }
    else if (i%5==0) {
        content = "buzz";
        console.log("5th");
    }
    newArt.append(content);
};