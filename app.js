let myFriends = ['Sage', 'William', 'John', 'Noah', 'Chad']

let Btn = document.createElement("Button");
let BtnText = document.createTextNode("Sing!");
Btn.appendChild(BtnText);
document.body.appendChild(Btn);

Btn.addEventListener('click', function () {
    for (let i = 0; i < myFriends.length; i++) {

        let div = document.createElement("div");
        div.className = "friend";

        let h3 = document.createElement("h3");
        h3.textContent = myFriends[i];
        div.appendChild(h3);
        document.body.appendChild(div);

        for (let j = 99; j > 0; j--) {
            let p = document.createElement("p");
            if (j > 2) {
                p.textContent = (j + " lines of code in the file, " + j + " lines of code; " + myFriends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
            } else if (j == 2) {
                p.textContent = (j + " lines of code in the file, " + j + " lines of code; " + myFriends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
            } else if (j == 1) {
                p.textContent = (j + " line of code in the file, " + j + " line of code; " + myFriends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
            };
            div.appendChild(p);
        };
    };
});
