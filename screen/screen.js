var milkcocoa = new Milkcocoa("https://io-oi6aqv4vb.mlkcca.com");

var ContentSelect = (function () {

    var ContentSelect = function(arg) {

    };

    var prot = ContentSelect.prototype;
    prot.watch = function() {
        milkcocoa.dataStore('contents').on("push",function (data) {
            console.log("コンテンツ選択");
            this.selectContent(data);
        });

        milkcocoa.dataStore('pushRight').on('push', function(data) {
            console.log("右!!");
            this.action("right");
        });
        milkcocoa.dataStore('pushLeft').on('push', function(data) {
            console.log("左!!");
            this.action("left");
        });
    };
    prot.selectContent = function(data) {
        var content = data.value.content;

        elm = document.getElementById(content);
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true);
        elm.dispatchEvent( evt );

    };
    prot.action = function(direction){
        var dir = direction;

        elm = document.getElementById("screen");
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true);
        elm.dispatchEvent( evt );
    };
})();