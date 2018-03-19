var init = {};

init.loader = ()=>{

	var comp = function(date) {

            var now = new Date;
            var d = new Date(date);
            if (now > d) {
                return "cls";
            } else if (now < d) {
                return "ok";
            } else {
                return "cls";
            }
        };
    let r =  comp("2018/04/30 17:00:00");
    if(r=="cls") return;

    Dom._unable = $("#_unable");
    zh.ini();
    zh.do();
    setTimeout(Room.Loader.ppt , 500);
};

