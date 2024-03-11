// var now = new Date();
//
// let clicks = readCookie("clicks");
// let message = createMessage("Количество кликов: " + readCookie("clicks"));
// document.body.append(message);
// let deletes = 0;
//
// function setCookie(resize) {
//     var expireDate = new Date();
//     expireDate.setDate(365 + expireDate.getDate());
//
//     document.cookie = "clicks=" + resize +
//         "; expires=" + expireDate.toGMTString() + ";";
//     let message = createMessage("Количество кликов: " + readCookie("clicks"));
//     if (deletes % 2 == 0){
//         document.body.lastChild.remove();
//         deletes++;
//     }
//     document.body.lastChild.replaceWith(message);
// }
//
// function get_cookie(cookie_name) {
//     var name_cookie = cookie_name+"=";
//     var spl = document.cookie.split(";");
//
//     for(var i=0; i<spl.length; i++) {
//         var c = spl[i];
//         while(c.charAt(0) == " ") {
//             c = c.substring(1, c.length);
//         }
//         if(c.indexOf(name_cookie) == 0) {
//             return c.substring(name_cookie.length, c.length);
//         }
//     }
//
//     return null;
// }
//
// function resetClicks(){
//     document.cookie = "clicks=0";
//     clicks = 0;
//     let message = createMessage("Количество кликов: " + readCookie("clicks"));
//     if (deletes % 2 == 0){
//         document.body.lastChild.remove();
//         deletes++;
//     }
//     document.body.lastChild.replaceWith(message);
//
// }
//
// function createMessage(html){
//     let message = document.createElement("div");
//     message.className = "node";
//     message.style.cssText = "position: fixed; color: #D2691E; font-size: 20px; font-weight: bold; background: #FFE4C4; border-radius: 5px; border: 2px solid black; padding: 2px";
//     message.style.left = "0px";
//     message.style.top = window.innerHeight-50 + "px";
//     message.innerHTML = html;
//     return message;
// }
//

if (null !== get_cookie("username")) {
    var username = get_cookie("username");
    document.write("<br>Привет, " + username + "!");
}

function setCookie(visits) {
    var expireDate = new Date();
    var today = new Date();
    expireDate.setDate(365 + expireDate.getDate());
    document.cookie = "visits=" + visits +
        "; expires=" + expireDate.toGMTString() + ";";
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
        "; expires=" + expireDate.toGMTString() + ";";
}

if ("1" === get_cookie("visits")) {
    setCookie(2)
    document.write("<br>Поздравляю с первым посещением моего сайта.");
} else if (null !== get_cookie("visits")) {
    var cookies = parseCookie();
    document.write("<br>Вы уже заходили " +
        cookies.visits++ + " раз(а)!");
    var username = get_cookie("username");
    document.write("<br>Последний визит: " + cookies.LastVisit + ".");
    setCookie(isNaN(cookies.visits) ? 1 : cookies.visits);
} else {
    document.write("<br>Представьтесь");
}

function set_cookie(name, value, expires_year, expires_month, expires_day, path, domain, secure) {
    var cookie_string = name + "=" + escape(value);

    if (expires_year) {
        var expires = new Date(expires_year, expires_month, expires_day);
        cookie_string += "; expires=" + expires.toGMTString();
    }

    if (path)
        cookie_string += "; path=" + escape(path);

    if (domain)
        cookie_string += "; domain=" + escape(domain);

    if (secure)
        cookie_string += "; secure";

    document.cookie = cookie_string;

}

function delete_cookie(cookie_name) {
    var cookie_date = new Date();
    cookie_date.setTime(cookie_date.getTime() - 1);
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}


function set_name() {
    var keyBox = document.search.key;
    var username = keyBox.value.trim();
    if ("" !== username) {
        var current_date = new Date;
        var cookie_year = current_date.getFullYear() + 1;
        var cookie_month = current_date.getMonth();
        var cookie_day = current_date.getDate();
        set_cookie("username", username, cookie_year, cookie_month, cookie_day);
        setCookie(1);
        document.location.reload();
    }
}

if (null !== get_cookie("username")) {
    var username = get_cookie("username");
    document.write("<br><a href=\"javascript:delete_cookie('username'); javascript:delete_cookie('visits'); document.location.reload( );\">Удалить cookies</a>");
}