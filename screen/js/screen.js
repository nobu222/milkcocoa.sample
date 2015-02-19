var milkcocoa = new MilkCocoa("https://io-oi6aqv4vb.mlkcca.com");

milkcocoa.dataStore("selectChannel").on('push', function(data) {
    console.log(data);
});
milkcocoa.dataStore("leftArrow").on('push', function(data) {
    console.log(data);
});
milkcocoa.dataStore("rightArrow").on('push', function(data) {
    console.log(data);
});

