

var times = 0;
var times_movebutton = 0;
var original;
var current_position_left = 0;
var current_position_right = 0;

function processFormData(){
    var account_content = document.getElementById("name");
    var ac = account_content.value;
    var password_content = document.getElementById("password");
    var pass = password_content.value;
    
    if (times < 1){
        original = password_content.value;
        alert("歐，你的帳號是" + ac +"，你覺得我不會外流?");
        alert("恩，還有密碼，那就麻煩你再輸入一次吧");
        
    }
    else if (times == 1){
        alert("歐，你的帳號是" + ac +" ; 密碼是" + pass + "，你還是覺得我不會外流?");
        if (pass !== original){
            alert("阿怎麼跟你第一次輸的不一樣");
        }
        alert("真感謝你");
    }
    else if (times > 1){
        alert("不用再輸入了，我會替你保管好的");
    }
    times += 1;
    document.getElementById("form").reset(); 
}

function movebutton(){
    var me = document.getElementById("test")
    if (times_movebutton <= 5){
        current_position_left = Math.random() * (50 + 50) - 50;
        current_position_right = Math.random() * (50 + 50) - 50;
        me.style.left = current_position_left + "px";
        me.style.top = current_position_right + "px";
    }
    else if (times_movebutton == 6){
        alert("夠了歐，我不想聽!")
    }
    else if (times_movebutton == 7){
        alert("好啦，有想說的你就說嘛")
    }
    else{
        var textbox_content = document.getElementById("textarea");
        var box = textbox_content.value;
        alert("已收到您的");
        alert(box);
        alert("意見");
    }
    
    times_movebutton += 1;
}


document.write("你看不到我");
