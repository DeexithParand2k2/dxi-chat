//global variables
var dxiUserTextColor;
var dxiUserBorderColor;
//variable declaration for bot chat
var dxiBotTextColor;
var dxiBotBorderColor;


// 1.
function dxiCreateMainInterface(dxiBackColor,dxiBoxColor){
    var bodyDiv = document.getElementsByTagName("body")[0];

    var styles = {
        "margin"           : "0px",
        "padding"          : "0px",
        "background-color" : dxiBackColor,
        "height"           : "auto",
        "width"            : "100vw",
        "padding"          : "20px",
        "box-sizing"       : "border-box",

        "display"          : "flex",
        "flex-direction"   : "column",

        "overflow-x"       : "hidden",
    };

    Object.assign(bodyDiv.style,styles);

    dxiCreateInputBox(dxiBoxColor);
}

// 2.
function dxiCreateInputBox(dxiBoxColor){

    //2a. marginDiv Clone
    var newDiv = document.createElement("div");

    var styles = {
        "height"   : "50px",
        "padding"  : "30px",
        "top"      : "0",
        "position" : "sticky",
        "background-color": "inherit",
    };

    Object.assign(newDiv.style,styles);

    var parent = document.getElementsByTagName("body")[0];
    parent.appendChild(newDiv);

    //2b. inside marginDiv styling the chatFoot clone
    var newSecondDiv = document.createElement("div");

    var stylesSecond = {
        "box-sizing"      : "border-box",
        "background-color": "transparent",
        "width"           : "100%",
        "height"          :  "auto",
        "border-radius"   :  "5px",
        "background-color": dxiBoxColor,
        "display"         : "flex",
        "justify-content"   : "space-between",
    };

    Object.assign(newSecondDiv.style,stylesSecond);

    var secondParent = newDiv;
    secondParent.appendChild(newSecondDiv);

    //2c. input box
    var inputDiv = document.createElement("input");
    inputDiv.setAttribute("type", "text");
    inputDiv.setAttribute("placeholder", "Hello World!");
    inputDiv.setAttribute("autocomplete", "off");
    inputDiv.setAttribute("spellcheck", "false");

    var stylesInput = {
        "outline"          : "none",
        "border"           : "none",
        "background-color" : "transparent",
        "border"           : "none",

        "font-family"      : "'Source Sans Pro', sans-serif",
        "font-weight"      : "bold",

        "caret-color"      : "red",

        "margin"           : "10px",
        "padding"          : "10px",
    };

    Object.assign(inputDiv.style,stylesInput);
    
    var thirdParent = newSecondDiv;
    thirdParent.appendChild(inputDiv);
}

//3. call these before calling the UserChat
function dxiUserChatInterface(textColor, borderColor){
    dxiUserTextColor = textColor;
    dxiUserBorderColor = borderColor;
}

function dxiBotChatInterface(textColor, borderColor){
    dxiBotTextColor = textColor;
    dxiBotBorderColor = borderColor;
}

//4. call these to create chat boxes
function dxiBotChat(botChat){
    var newDiv = document.createElement("div");

    var styles = {
        "block-size" : "fit-content",
        "box-sizing" : "border-box",
        "padding"    : "10px",
        "margin"     : "10px",

        "height"     : "auto",

        "width"      : "fit-content",

        "min-width"  : "30%",
        "max-width"  : "100%",

        "border"       : "1px solid "+ dxiBotBorderColor,
        "border-radius": "10px",

        "color"        : dxiBotTextColor,
        "font-family"  : "'Source Sans Pro', sans-serif",
        "font-weight"  : "bold",
    };

    Object.assign(newDiv.style,styles);
    newDiv.innerHTML = botChat;

    var parent = document.getElementsByTagName("body")[0];
    parent.appendChild(newDiv);
}

function dxiUserChat(userChat){
    var newDiv = document.createElement("div");

    var styles = {
        "align-self" : "flex-end",
        "block-size" : "fit-content",
        "box-sizing" : "border-box",
        "padding"    : "10px",
        "margin"     : "10px",

        "height"     : "auto",

        "width"      : "fit-content",

        "min-width"  : "30%",
        "max-width"  : "100%",

        "border"       : "1px solid "+dxiUserBorderColor,
        "border-radius": "10px",

        "color"        : dxiUserTextColor,
        "font-family"  : "'Source Sans Pro', sans-serif",
        "font-weight"  : "bold",
    };

    Object.assign(newDiv.style,styles);
    newDiv.innerHTML = userChat;

    var parent = document.getElementsByTagName("body")[0];
    parent.appendChild(newDiv);
}
