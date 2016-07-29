//var foot = {
//    kick: function () {
//        this.yelp = "Ouch!";
//
//        setImmediate(function () {
//            console.log(this.yelp);
//        }.bind(this));
//    }
//};
//setImmediate = function(callback){
//    callback();
//}
//foot.kick();


var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();