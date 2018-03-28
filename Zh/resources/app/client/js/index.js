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

    Dom.Video = {};
    Dom.VideoCtrl = {};
    // for(let i=1; i<=6; i++)
    Room.Index.video_io("1");
    Room.Index.video_io("2");
    Room.Index.video_io("3");
    Room.Index.video_io("4");
    Room.Index.video_io("5");
    Room.Index.video_io("6");

};

Room.Index.video_io = (id)=>{

    Dom.Video[id] = new Media("#Video"+id+" video");
    //Dom.Video.loop(true);
    Dom.VideoCtrl[id] = "VideoCtrl"+id;

    Dom.Video[id].end(function(v){
        ws.emit({to:"Guide", key:Dom.VideoCtrl+"MediaEnd"});
        Room.Index.ppt_back(id);
    });

    // if(Dom.Video.ifLoop){
    //     Dom.Video.loopEnd(function(i){
    //         ws.emit({to:"Guide", key:Dom.VideoCtrl+"MediaLoop", val:i});
    //     });
    // }else{
    //     Dom.Video.end(function(v){
    //         ws.emit({to:"Guide", key:Dom.VideoCtrl+"MediaEnd"});
    //         Room.Index.back();
    //     });
    // }

    ws.on("MediaStop_"+id, function(json){
        Dom.Video[id].stop();
    });

    ws.on("MediaPlay_"+id, function(json){
        if(json.val) Dom.Video[id].volume(json.val);
        if(json.time || json.time===0) Dom.Video[id].time(json.time);
        if(cc.id!="Video"+id) Room.Index.ppt(id);
        else Dom.Video[id].play();
    });

    ws.on("MediaEnd_"+id, function(json){
        Room.Index.ppt_back(id);
    }.bind(this));

    ws.on("MediaTime_"+id, function(json){
        if(json) Dom.Video[id].time(json.val);
    }.bind(this));

    ws.on("MediaLength_"+id, function(json){
        console.log(Dom.Video[id]);
        ws.emit({to:"Guide", key:Dom.VideoCtrl[id]+"MediaLength", val:Dom.Video[id].len()})
    });

    ws.on("MediaVol_"+id, function(json){
        console.log("声音调节", json.val);
        if(json) Dom.Video[id].volume(json.val);
    });
};
Room.Index.video_stop = ()=>{
    Dom.Video["1"].stop(0);
    Dom.Video["2"].stop(0);
    Dom.Video["3"].stop(0);
    Dom.Video["4"].stop(0);
    Dom.Video["5"].stop(0);
    Dom.Video["6"].stop(0);
};

Room.Index.ppt = (id)=>{
    Dom._unable.show();
    Room.Index.video_stop();
    let Start = "Video"+id;
    cc.ppt(["Index", Start] , (after)=>{
        Dom["Video"+id].play(0);
        cc.m["Index"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000, ()=>{
            Dom._unable.hide();
        });
    })
};

Room.Index.ppt_back = (id)=>{
    Dom._unable.show();
    cc.ppt([cc.id, "Index"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 500, display:"none"});
        cc.m["Index"].show().velocity({ opacity: [1,0] }, 500, ()=>{
            Dom.Video[id].stop(0);
            Dom._unable.hide();
            //after.come();
        });
    });
};