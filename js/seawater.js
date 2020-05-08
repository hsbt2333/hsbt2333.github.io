var id = 1;
var min = 1;
var max = 5;
var i = 0;

function start(){
    $("#start").click();
}

function click1(title,content,method) {
    var divid = "click"+id+"";
    if($("#"+divid+"").length>0){
        $("#"+divid+"").remove();
    }
    var html =  "<div class='modal fade bd-example-modal-sm' data-backdrop='static' id='"+divid+"' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>"+
                "<div class='modal-dialog modal-sm modal-dialog-centered' role='document'>"+
                "<div class='modal-content'>"+
                "<div class='modal-header'>"+
                "<h5 class='modal-title'><strong>"+title+"</strong></h5>"+
                "</div>"+
                "<div class='modal-body'>"+
                "<div class='text-center'>"+
                "<p>"+
                "<svg class='bi bi-exclamation-triangle-fill text-danger' width='2em' height='2em' viewBox='0 0 20 20' fill='currentColor'>"+
                "<path fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z' clip-rule='evenodd'/>"+
                "</svg>"+
                "<strong>"+content+"</strong></p>"+
                "</div>"+
                "</div>"+
                "<div class='modal-footer'>"+
                "<button type='button' class='btn btn-primary' data-dismiss='modal' onclick='"+method+"' id='zhengren3'>确认</button>"+
                "</div>"+
                "</div>"+
                "</div>"+
                "</div>";
    $("body").append(html);
    $("#"+divid+"").modal("toggle");
    // {
    //     backdrop: false,
    //     keyboard: false,
    // }
    id++;
}

function modal1(value){
    if(value == ""){value = $("#zhu").val()}
    if(value != "" && value == "我是猪"){
        click1("提示","早说就行了嘛!","method1()");
    }else{
        click1("错误","快输\"我是猪\"","start()");
    }
    $("#zhu").val("");
}
function method1(){
    click1("提示","再输一遍我是猪!","method2()");
}
function method2(){
    click1("提示","我是猪!","method3()");
}
function method3(){
    click1("提示","最后一次!","method4()");
}
function method4(){
    click1("提示","如果你很快的点过去,不看的话!","method5()");
}
function method5(){
    click1("提示","我就要你踩我空间的!哼!","method6()");
}
function method6(){
    window.open("https://user.qzone.qq.com/809318068");
    click1("提示","从前有座山!","method7()");
}
function method7(){
    click1("提示","山里有个庙!","method8()");
}
function method8(){
    click1("提示","庙里有个老和尚在讲故事","method9()");
}

function method9(){
    click1("提示","哎呀累了！数绵羊哄我睡觉","method10()");
}
function method10(){
    i++
    if(i >= min && i <= max){
        click1("提示",i+" 只绵羊","method10()");
    }else{
        click1("提示","哎呀我困了，这次就饶过你吧，下次注意哦!","method11()");
    }
    
}

function method11(){
    click1("提示","最后问个问题，我是不是大好人！","method12()");
}

function method12(){
    $("#staticBackdropLabel").html("<strong>请输入</strong>")
    $("#q").text("我是不是大好人？");
    $("#zhu").val("是");
    $("#tijiao").attr("onclick","method13()");
    $("#staticBackdrop").modal("toggle");
}

function method13() {
    var value1 = $("#zhu").val();
    if(value1 == "" || value1 != "是"){
        click1("提示","呵呵","method12()");
    }else{
        window.location.reload();
    }
    
}





