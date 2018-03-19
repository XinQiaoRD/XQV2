Room.Loader = {};
Room.Loader.ppt = ()=>{
    let Start = "Index";
    cc.ppt(["Loader", Start] , (after)=>{
        cc.m["Loader"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000);
    })
};

// Index
Room.Index = {};
Room.Index.dom = ()=>{

    Dom.Video1 = new Media("#Video1 video");
    Dom.Video1.end(function(v){
        Room.Index.ppt_back();
    });

    Dom.Video2 = new Media("#Video2 video");
    Dom.Video2.end(function(v){
        Room.Index.ppt_back();
    });

    Dom.Video3 = new Media("#Video3 video");
    Dom.Video3.end(function(v){
        Room.Index.ppt_back();
    });

    Dom.Video4 = new Media("#Video4 video");
    Dom.Video4.end(function(v){
        Room.Index.ppt_back();
    });

    Dom.Video5 = new Media("#Video5 video");
    Dom.Video5.end(function(v){
        Room.Index.ppt_back();
    });

    Dom.Video6 = new Media("#Video6 video");
    Dom.Video6.end(function(v){
        Room.Index.ppt_back();
    });

    $$("#Index .btn1").click(()=>{
        Room.Index.ppt(1);
    });
    $$("#Index .btn2").click(()=>{
        Room.Index.ppt(2);
    });
    $$("#Index .btn3").click(()=>{
        Room.Index.ppt(3);
    });
    $$("#Index .btn4").click(()=>{
        Room.Index.ppt(4);
    });
    $$("#Index .btn5").click(()=>{
        Room.Index.ppt(5);
    });
    $$("#Index .btn6").click(()=>{
        Room.Index.ppt(6);
    });

};

Room.Index.ppt = (id)=>{
    let Start = "Video"+id;
    cc.ppt(["Index", Start] , (after)=>{
        Dom["Video"+id].play(0);
        cc.m["Index"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000);
    })
};

Room.Index.ppt_back = ()=>{
    cc.ppt([cc.id, "Index"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m["Index"].show().velocity({ opacity: [1,0] }, 1000);
    })
};