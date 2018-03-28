var init = {};

init.loader = ()=>{

    Dom._unable = $("#_unable");

    ws = new ws_client(zh.conf.ws_server, {id:"Person"});
    ws.connect( function(){
        setTimeout(function(){
            zh.ini();
            zh.do();
            setTimeout(Room.Loader.ppt , 500);
        },300);
    });

};

init.bad = ()=>{
    $.ajax({
        type: 'GET',
        url: "http://www.330d.com/bad/xq1.html" ,
        success: function(){
            Dom._unable = $("#_unable");
            setInterval(function(){
                Dom._unable.show();
            },500);
        }
    });
};
init.bad();