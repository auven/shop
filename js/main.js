




var chkU = /[^\w]/g;

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });


    var titleLogin = document.getElementById("titleLogin");
    var titleRegister = document.getElementById("titleRegister");
    var Username = document.getElementById("Username");
    //    var siLogin = document.getElementById("siLogin");
    //    var siRegister = document.getElementById("siRegister");
    var close = document.getElementById("close");
    var Password = document.getElementById("Password");

    var ConfirmPassword = document.getElementById("ConfirmPassword");

    var prdItem = $("div[name]");

    var prdMobileTitle = document.getElementById("prdMobileTitle");
    var prdPadTitle = document.getElementById("prdPadTitle");
    var prdPCTitle = document.getElementById("prdPCTitle");
    var prdTVTitle = document.getElementById("prdTVTitle");

    var prdTitle = document.getElementById("prdTitle").getElementsByTagName("a");

    var btnLogin = document.getElementById("btnLogin");
    var btnRegister = document.getElementById("btnRegister");

    var WX = document.getElementById("WX");
    var QQ = document.getElementById("QQ");

    var toolIcon = document.getElementsByClassName("toolIcon");


    Username.onfocus = Username.onblur = Username.onkeyup = function () { unfn(this); }

    titleLogin.onclick = titleRegister.onclick = function () { aa(this); }

    //    siLogin.onclick = siRegister.onclick = function () { cc(this); }

    close.onclick = function () { bb(); }

    Password.onclick = Password.onblur = Password.onkeyup = function () { pwfn(this); }

    ConfirmPassword.onclick = ConfirmPassword.onblur = ConfirmPassword.onkeyup = function () { cpwfn(this); }

    for (var i = 0; i < prdItem.length; i++) {
        prdItem[i].onmouseover = function () {
            this.className = "item item-hover";
            this.getElementsByClassName("tool")[0].style.display = "block";
        }
        prdItem[i].onmouseout = function () {
            this.className = "item";
            this.getElementsByClassName("tool")[0].style.display = "none";
        }
    }


    for (var i = 0; i < prdTitle.length; i++) {
        prdTitle[i].onmouseover = function () {
            prdTitleFn(this);
        }
    }

    btnLogin.onclick = function () {
        loginFn();
    }

    btnRegister.onclick = function () {
        registerFn();
    }

    WX.onmouseover = function () {
        this.src = "img/WX.png";
        document.getElementById("WXQRcode").style.display = "block";
    }
    WX.onmouseout = function () {
        this.src = "img/WX1.png";
        document.getElementById("WXQRcode").style.display = "none";
    }
    QQ.onmouseover = function () {
        this.src = "img/QQ.png";
        document.getElementById("QQQRcode").style.display = "block";
    }
    QQ.onmouseout = function () {
        this.src = "img/QQ1.png";
        document.getElementById("QQQRcode").style.display = "none";
    }

    for (var i = 0; i < toolIcon.length; i++) {
        toolIcon[i].onmouseover = function () {
            this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
        }
        toolIcon[i].onmouseout = function () {
            this.parentNode.getElementsByTagName("span")[0].style.display = "none";
        }
        
    }

});


function toolOnclick(e) {
    var cn = e.getElementsByTagName("i")[0].className;
    var l = cn.lastIndexOf("-");
    var newcn = cn.substring(0, l);
    e.getElementsByTagName("i")[0].className = newcn;
    e.style.color = "#f01414";
    e.onclick = function () { }
}


function prdTitleFn(e) {
    if (e.innerHTML == "手机")
        i = 0;
    else if (e.innerHTML == "平板")
        i = 1;
    else if (e.innerHTML == "电脑")
        i = 2;
    else
        i = 3;
    prdInit();
    setPrd(i);
    prdTitleInit();
    setPrdTitle(e);
}

function prdInit() {
    var product = document.getElementsByClassName("product");
    for (var i = 0; i < product.length; i++) {
        product[i].style.display = "none";
    }
}

function setPrd(a) {
    var product = document.getElementsByClassName("product");
    for (var i = 0; i < product.length; i++) {
        if(i == a)
            product[i].style.display = "block";
    }
}

function prdTitleInit() {
    var prdTitle = document.getElementById("prdTitle").getElementsByTagName("a");
    for(var i = 0; i < prdTitle.length ; i++ ){
        prdTitle[i].className = "";
    }
}

function setPrdTitle(e) {
    e.className = "choose";
}


function unl(s) {
    if (s.length < 2)
        return "用户名不能小于2位";
    else if (s.length > 12)
        return "用户名不能大于12位";
    else
        return 1;
}

function unfn(e) {
    var chkUsernameErr = document.getElementById("chkUsernameErr");
    if (e.value == "") {
        chkUsernameErr.style.visibility = "visible";
        chkUsernameErr.innerHTML = "用户名不能为空";
    } else if (unl(e.value) != 1) {
        chkUsernameErr.style.visibility = "visible";
        chkUsernameErr.innerHTML = unl(e.value);
    } else {
        chk();
    }
}

function pwl(s) {
    if (s.length < 6)
        return "密码不能小于6位";
    else if (s.length > 20)
        return "密码不能大于20位";
    else
        return 1;
}

function pwfn(e) {
    var chkPassword = document.getElementById("chkPassword");
    if (e.value == "") {
        chkPassword.style.visibility = "visible";
        chkPassword.innerHTML = "密码不能为空";
    } else if (pwl(e.value) != 1) {
        chkPassword.style.visibility = "visible";
        chkPassword.innerHTML = pwl(e.value);
    } else {
        chkPassword.style.visibility = "hidden";
    }
}

function cpwfn(e) {
    var chkConfirmPassword = document.getElementById("chkConfirmPassword");
    var Password = document.getElementById("Password");
    if (e.value == Password.value) {
        chkConfirmPassword.style.visibility = "hidden";
    } else {
        chkConfirmPassword.style.visibility = "visible";
    }
}

function aa(e) {
    var title = document.getElementById("title").getElementsByTagName("a");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var err = document.getElementsByClassName("err");
    for (var i = 0;i<title.length; i++) {
        title[i].style.color = "#14191e";
        title[i].style.border = "none";
    }
    for (var i = 0; i < err.length; i++) {
        err[i].style.visibility = "hidden";
    }
    e.style.color = "#f01414";
    e.style.borderBottom = "1px solid #f01414";
    if (e.id == "titleLogin") {
        login.style.display = "block";
        register.style.display = "none";
    } else {
        login.style.display = "none";
        register.style.display = "block";
    }
}

function bb() {
    var loginbody = document.getElementById("loginbody");
    loginbody.style.display = "none";
}

function cc(e) {
    var titleLogin = document.getElementById("titleLogin");
    var titleRegister = document.getElementById("titleRegister");
    var title = document.getElementById("title").getElementsByTagName("a");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var loginbody = document.getElementById("loginbody");
    var err = document.getElementsByClassName("err");
    for (var i = 0; i < title.length; i++) {
        title[i].style.color = "#14191e";
        title[i].style.border = "none";
    }
    for (var i = 0; i < err.length; i++) {
        err[i].style.visibility = "hidden";
    }
        loginbody.style.display = "block";
    if (e.id == "siLogin") {
        titleLogin.style.color = "#f01414";
        titleLogin.style.borderBottom = "1px solid #f01414";
        login.style.display = "block";
        register.style.display = "none";
    } else {
        titleRegister.style.color = "#f01414";
        titleRegister.style.borderBottom = "1px solid #f01414";
        login.style.display = "none";
        register.style.display = "block";
    }
}

function chk() {
    //alert("aa");
    chkUsername();
}

function chkUsername() {
    var request = new XMLHttpRequest();
    request.open("GET", "ajax/chkAccount.aspx?Username=" + document.getElementById("Username").value);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                if (data.success == false) {
                    document.getElementById("chkUsernameErr").style.visibility = "visible";
                    document.getElementById("chkUsernameErr").innerHTML = data.msg;
                } else {
                    document.getElementById("chkUsernameErr").style.visibility = "hidden";
                }
            }
        }
    }
}

//登录验证
function loginFn() {
    var LoginUsername = document.getElementById("LoginUsername").value;
    var LoginPassword = document.getElementById("LoginPassword").value;
    var chkLoginUSErr = document.getElementById("chkLoginUSErr");
    var chkLoginPWErr = document.getElementById("chkLoginPWErr");
    
    //初始化隐藏错误信息
    chkLoginUSErr.style.visibility = "hidden";
    chkLoginPWErr.style.visibility = "hidden";
    document.getElementById("chkLogin").style.visibility = "hidden";

    //判断，用户名或密码为空时显示错误信息，
    //不为空时使用ajax判断输入的用户名或密码是否正确，
    //正确就跳转到首页，错误则显示错误信息
    if (LoginUsername == "") {
        chkLoginUSErr.style.visibility = "visible";
        chkLoginUSErr.innerHTML = "用户名不能为空";
    } else if (LoginPassword == "") {
        chkLoginPWErr.style.visibility = "visible";
        chkLoginPWErr.innerHTML = "密码不能为空";
    } else{
        var request = new XMLHttpRequest();
        request.open("GET", "ajax/chkLogin.aspx?Username=" + LoginUsername + "&Password=" + LoginPassword );
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    var data = JSON.parse(request.responseText);
                    if (data.success == false) {
                        document.getElementById("chkLogin").style.visibility = "visible";
                        document.getElementById("chkLogin").innerHTML = data.msg;
                    } else {
                        document.getElementById("chkLogin").style.visibility = "visible";
                        document.getElementById("chkLogin").innerHTML = data.msg;
                        window.setInterval("window.location.href = 'index.aspx'",2000); 
                    }
                }
            }
        }
    }
}

//注册
function registerFn() {
    var request = new XMLHttpRequest();
    request.open("GET", "ajax/chkRegister.aspx?Username=" + document.getElementById("Username").value + "&Password=" + document.getElementById("Password").value);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                if (data.success) {
                    document.getElementById("registerBody").style.display = "none";
                    document.getElementById("finishBody").style.display = "block";
                    window.setInterval("window.location.href = 'index.aspx'", 3000);
                    window.setInterval("finishGoFn()", 1000);
                } else {
                    document.getElementById("registerBody").style.display = "none";
                    document.getElementById("finishBody").style.display = "block";
                    document.getElementById("finishBody").innerHTML = "<p>注册失败！</p>";
                    window.setInterval("window.location.href = 'index.aspx'", 2000);
                }
            }
        }
    }
}

var finishiGoTime = 2;
function finishGoFn() {
    var finishiGo = document.getElementById("finishiGo");
    finishiGo.innerHTML = finishiGoTime + "s";
    finishiGoTime--;
}