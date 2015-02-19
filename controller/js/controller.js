var milkcocoa = new Milkcocoa("https://io-oi6aqv4vb.mlkcca.com");

function clickChannel(ch){
    sendChannel(ch);
}

function clickLeftArrow() {
    var msg = "leftArrow";
    sendArrow(msg);
}

function clickRightArrow() {
    var msg = "rightArrow";
    sendArrow(msg);
}

function sendChannel (ch) {
    milkcocoa.dataStore("selectChannel").push({click: ch},function(){
        console.log("success!"+ch);
    });
}
function sendArrow(msg) {
    milkcocoa.dataStore(msg).push({click: msg},function(data){
        console.log("success!"+msg);
    });
}
