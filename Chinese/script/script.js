var categories = [];
var classList = {};
var type = "";

var versionList = [
    "2.9.0",
    "2.10.0beta"
];
var version = versionList[0];


var baseUrl = location.protocol + "//" + location.host + location.pathname;
var allClasses = [];
showVersion();

function init() {

    for (var key in classList) {
        for (var key1 in classList[key]){
            for (var i = 0 ; i < classList[key][key1].length; i++) {
                if (allClasses.indexOf(classList[key][key1][i]) > -1) {
                    continue;
                }
                allClasses.push({
                    "type" : key,
                    category : key1,
                    "categoryName" : classList[key][key1][i]
                });
            }
        }
    }
    // 填充DOM
    // for (var i = 0; i < categories.length; ++i) {
    //     var categoryName = categories[i];
    //     var packageLi = "<li><a class='list-item' title='" + categoryName + "' href='javascript:void(0)'>" + categoryName + "</a></li>";
    //     $("#packageGroup").append(packageLi);

    //     allClasses = allClasses.concat(classList[categoryName]);
    // }
    allClasses.sort(function(a,b) {
        return a.categoryName > b.categoryName ? 1 : -1
    });

    // 填充所有类
    for (i = 0; i < allClasses.length; i++) {
        var classItem = "<li><a href='javascript:void(0)' data-category='"+allClasses[i].category+"' data-type='" + allClasses[i].type + "'>" + allClasses[i].categoryName + "</a></li>";
        $("#allClassList").append(classItem);
    }

    // 解析pacakge
    var type = getType();
    var categoryName = getCategoryName();
    navToCategory(type, categoryName);
    showSelectedCategory(type, categoryName);

    // 解析class
    var fullClassName = getFullClassName();
    var type = 0;
    if (fullClassName.indexOf("_") == -1) {
        type = 0;
    } else {
        type = 1;
        fullClassName = "laya/" +version+ "/classes/" + fullClassName;
    }
    navToClass(fullClassName,"", type);
}

$("window").ready(function () {
    console.log("version :" + version);
    // init()
    loadVersionConfig(version);
});

function loadVersionConfig(version) {
    let versionConfigUrl = baseUrl.replace(/index.html/, "") + "version/" + version + ".json";
    
    $.ajax(
        {
            type: "get",
            async: true,
            url: versionConfigUrl,
            timeout: 1000,
            success: function (data) {
                console.log(data);
                categories = data.categories;
                classList = data.classList;
                var tit = "<div class='category-tab-tit clearfix'>";
                var box = "<div class='category-tag-box'>";
                var keys = null;
                var cName = "";
                for (var i = 0 ; i < categories.length;i++) {
                    cName = "";
                    if (i == 0) {
                        cName = " active"
                    }
                    
                    box += "<div class='part " + categories[i] + "_part" + cName + "'><div class='packageCon'><div class='nav-content'><div class='part-01'><ul class='packageGroup'>"
                    if (classList.hasOwnProperty(categories[i])) {
                        
                        keys = Object.keys(classList[categories[i]]);
                        for (var j = 0 ; j < keys.length;j++) {
                            box += "<li><a class='list-item' title='" + keys[j] + "' href='javascript:void(0)' data-tit='" + categories[i] + "'>" + keys[j] + "</a></li>"
                        }
                    }
                    
                    box += "</ul></div></div></div></div>";
                    tit += "<span class='" + categories[i] + "_part" + cName + "' data-tit='" + categories[i] + "' data-categoryName='"+ keys[0] +"'>" + categories[i] + "</span>";
                }
                tit += "</div>";
                $(".category-tab").html (tit+box);
                init();
                // allClasses = allClasses.concat(classList[categoryName]);
            },
            error: function (error) {
                console.log(error.text);
                // 如果不是本地打开，return
                if (location.protocol.indexOf('file') == -1) {
                    return;
                }
                // 获取本地资源出错
                // 可能得情况: 1) 没有使用本地服务器 2)直接打开并别没有关闭浏览器的安全限制
                if (typeof language !== 'undefined' && language == 'en') {
                    alert('Please turn off browser security restrictions or use local server access!');
                } else {
                    alert('请关闭浏览器的安全限制或使用本地服务器访问！');
                }
            }
        });
}

// 显示指定分类对应的类列表
function navToCategory(type, packageName) {
    $("#classGroup").empty();
    packageName = decodeURIComponent(packageName);
    for (var i = 0; i < classList[type][packageName].length; ++i) {
        var className = classList[type][packageName][i];
        var classLi = "<li><a href='javascript:void(0)' data-category='" + packageName + "' data-type='"+ type+ "'>" + className + "</a></li>";
        $("#classGroup").append(classLi);
    }
    // $(".classbox").css("height", $(".classnav").height())
    hideExcludeClasses($("#classGroup li a"));
}


function navToClass(classFullName, memberName, flags) {
    document.title = classFullName;
    var classPath;
    if(flags === 0){
        var htmlName = "_" + classFullName.toLowerCase().replace(/\./g, "_") + "_.";
        var classPaths = classFullName.split('.');
        if(classPaths.length === 0){
            return;
        }
        var className = classPaths[classPaths.length - 1];
        htmlName += className.toLowerCase() ;
        var c = getUrlParam("category");
        if (c == "Enums" || c == "Interfaces") {
            htmlName = c.toLowerCase() + "." + htmlName;
        }
        classPath = baseUrl.replace(/index.html/, "") + "laya/" + version + "/classes/" + htmlName + ".html";
        scrollTo(0);
    }
    else if(flags === 1){

        if(classFullName.indexOf("classes.") !== -1){
            classFullName = classFullName.replace(/classes\./, "");
        }else if (classFullName.indexOf("enums.") !== -1 || classFullName.indexOf("interfaces.") !== -1) {
            var nameArr = classFullName.split("_");
            nameArr[nameArr.length - 2] = (nameArr[nameArr.length - 1]).replace(".","");
            classFullName = nameArr.join("_");
        }
        classPath = baseUrl.replace(/index.html/, "") + classFullName + ".html";
        if(memberName && memberName != ""){
            classPath += '#' + memberName;
        }
        else{
            scrollTo(0);
        }
    }

    

    $.ajax(
        {
            type: "get",
            async: true,
            url: classPath,
            timeout: 1000,
            success: function (data) {
                data = data.replace(/<link.*?>/g, '').// 删除css文件加载
                replace(/<script.*?<\/script>/gm, '').// 删除js文件加载
                replace(/\.\.\//g, "");

                $(".right-part").html(data);
                $(".titleTable").remove();

                createCodeTable();

                translate();
                removeNodeByClass("tsd-page-toolbar");//tsd-kind-method tsd-parent-kind-class tsd-is-inherited
                removeNodeByClass("tsd-is-inherited");
                removeNodeByClass("tsd-page-title");
                removeNodeByClass("tsd-sources");
                removeNodeByClass("tsd-navigation");
                //继承类和被继承类
                replaceClassHypelink(".tsd-hierarchy li a", 1);
                replaceClassHypelink(".tsd-index-list li a", 1);
                //这是属性的类型，点击会跳转
                replaceClassHypelink(".tsd-member-group a", 0);


                memberName || (memberName = location.hash.substr(1));
                if (memberName) {
                    setTimeout(
                        function () {
                            // 解析类成员锚链接
                            var memeberPosY = $('a[name="' + memberName + '"]')[0].scrollIntoView();
                        }.bind(this),
                        50);
                }
            },
            error: function (error) {
                console.log(error.text);
                // 如果不是本地打开，return
                if (location.protocol.indexOf('file') == -1) {
                    return;
                }
                // 获取本地资源出错
                // 可能得情况: 1) 没有使用本地服务器 2)直接打开并别没有关闭浏览器的安全限制
                if (typeof language !== 'undefined' && language == 'en') {
                    alert('Please turn off browser security restrictions or use local server access!');
                } else {
                    alert('请关闭浏览器的安全限制或使用本地服务器访问！');
                }
            }
        });
}

function createCodeTable() {
    var listings = $(".listing");
    var asPre, jsPre, tsPre;
    for (var i = 0; i < listings.length; i++) {
        var listing = listings[i];

        if (i % 3 == 2) {
            tsPre = $('<pre class="brush:as3"></pre>');
            tsPre.html(listing.firstChild.innerText);

            var codeCon = $('<div class="bs-example bs-example-tabs">');
            var codeTab = $('<div class="tab-content"></div>');
            var asPanel = $('<div role="tabpanel" class="tab-pane fade in active" aria-labelledby="as-tab"></div>');
            asPanel.attr("id", "as" + i);
            var jsPanel = $('<div role="tabpanel" class="tab-pane fade" aria-labelledby="js-tab"></div>');
            jsPanel.attr("id", "js" + i);
            var tsPanel = $('<div role="tabpanel" class="tab-pane fade" aria-labelledby="ts-tab"></div>');
            tsPanel.attr("id", "ts" + i);

            codeCon.append($(
                '<ul id="myTabs" class="nav nav-tabs" role="tablist">' +
                '<li role="presentation" class="active">' +
                '<a href="#as' + i + '" role="tab" id="as-tab' + i + '" data-toggle="tab" aria-controls="as' + i + '" aria-expanded="true">ActionScript</a>' +
                '</li>' +
                '<li role="presentation">' +
                '<a href="#js' + i + '" role="tab" id="js-tab' + i + '" data-toggle="tab" aria-controls="js' + i + '">JavaScript</a>' +
                '</li>' +
                '<li role="presentation">' +
                '<a href="#ts' + i + '" role="tab" id="ts-tab' + i + '" data-toggle="tab" aria-controls="ts' + i + '">TypeScript</a>' +
                '</li>' +
                '</ul>'));

            codeCon.append(codeTab);

            codeTab.append(asPanel);
            codeTab.append(jsPanel);
            codeTab.append(tsPanel);

            asPanel.append(asPre);
            jsPanel.append(jsPre);
            tsPanel.append(tsPre);

            $(listing.parentNode).append(codeCon);

            SyntaxHighlighter.highlight();

            $(".code .container div").css("whiteSpace", "nowrap");
        }
        else if (i % 2 == 1) {
            jsPre = $('<pre class="brush:js"></pre>');
            jsPre.html(listing.firstChild.innerText);
        }
        else {
            asPre = $('<pre class="brush:as3"></pre>');
            asPre.html(listing.firstChild.innerText);
        }

        listing.remove();
    }
}

function translate() {
    var headerTableRows = $(".classHeaderTable tbody tr");

    var innerText, newText;
    for (var i = headerTableRows.length - 1; i >= 0; i--) {
        innerText = headerTableRows[i].firstChild.innerText;
        switch (innerText) {
            case "Class":
                newText = "类";
                break;
            case "Implements":
                newText = "实现";
                break;
            case "Subclasses":
                newText = "子类";
                break;
            default:
                newText = "";
        }

        if (newText)
            headerTableRows[i].firstChild.innerText = newText;
    }

    // if(headerTableRows[3])
    // headerTableRows[3].firstChild.innerText = "子类"
}


function removeNodeByID(node){
    var cmd = '#' + node;
    var node = $(cmd);
    if(node){
        node.remove();
    }
}
function removeNodeByClass(node){
    var cmd = '.' + node;
    var node = $(cmd);
    if(node){
        if(node.length > 1){
            for(var i = 0; i < node.length; ++i){
                node[i].remove();
            }
        }
        else{
            node.remove();
        }
    }
    else{
    }
}
// 更改
function removePackageHypelink() {
    var hypelinkContainer = $(".classHeaderTableLabel")[0].parentNode;

    var innerText = hypelinkContainer.childNodes[1].innerText;

    hypelinkContainer.childNodes[1].remove();

    var newElement = document.createElement("p");
    newElement.innerText = innerText;

    hypelinkContainer.appendChild(newElement);
}

// 把ASDoc生成的页面跳转链接改成页内加载
// selector为JQuery的选择器
function replaceClassHypelink(selector, flags) {
    var elementList = $(selector);
    var element;
    for (var i = elementList.length - 1; i >= 0; i--) {
        element = elementList[i];
        if (!element.attributes.href)
            continue;
        if (element.attributes.href.nodeValue.charAt(0) != "#") {
            element.setAttribute("fullName", element.attributes.href.nodeValue.replace(".html", "").replace(/\//g, "."));
            // element.onclick = function (e) {
            //     e.preventDefault();
            //     var fullClassName = e.currentTarget.attributes.fullName.nodeValue;
            //     var parts = fullClassName.split("#");
            //     var className = "laya/classes/" + parts[0];
            //     scrollTo(0);
            //     //navToClass(parts[0], parts[1]);
            //     navToClass(className, parts[1], 1);

            //     var categoryName = getClassCategary(fullClassName);

            //     pushToHistory(categoryName, fullClassName);
            // };
            element.href = "javascript:void(0)";
        }
        else {
             /*element.setAttribute("anchor", element.attributes.href.nodeValue.substring(1));
             element.addEventListener('click', function(e)
            {
             	var anchor = e.target.attributes.anchor.nodeValue;
             	var anchorElem = $('a[name="' + anchor + '"]');
             	scrollTo(anchorElem.offset().top);
            });*/
        }

    }
}



// 选择包
$("body").on("click",".packageGroup a", function(e) {
    // 导航至指定包
    var categoryName = $(this).text();
    var type = $(this).data("tit");

    pushToHistory(type, categoryName, classList[type][categoryName][0]);

    navToCategory(type, categoryName);

    showSelectedCategory(type, categoryName);
}).on("click", "#classGroup a,#allClassList a", function(e) {
    // 选择；类
    // 导航至指定类
    // var categoryName = getCategoryName();
    var categoryName = $(this).data("category");
    var type = $(this).data("type");
    history.pushState(
        {}, "",
        baseUrl + "?version="+version+ "&type=" + type+"&category=" + categoryName  + "&class=" + e.target.innerText ) ;

    navToClass(e.target.innerText, "", 0);
    scrollTo(0);
}).on("click", ".tsd-hierarchy li a, .tsd-member-group a,.tsd-index-list li a", function(e) {
    e.preventDefault();
    var fullClassName = $(this).attr("fullName");
    var parts = fullClassName.split("#");
    var className = "laya/" +version+ "/classes/" + parts[0];
    var type = getUrlParam("type");
    scrollTo(0);
    //navToClass(parts[0], parts[1]);
    navToClass(className, parts[1], 1);

    var categoryName = getClassCategary(type, fullClassName);

    pushToHistory(type, categoryName, fullClassName);
});


// 缓动滑动到y
function scrollTo(y) {
    $("#ldc_content").animate(
        {
            scrollTop: y
        }, 0);
}

// 获取路径参数值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if(r != null){
        return decodeURIComponent(r[2]);
    }
    return null;//返回参数值
}

// 获取当前url的package参数
function getCategoryName() {
    var category = getUrlParam("category") || 'Core';
    return category;
}

// 获取当前url的type参数
function getType() {
    var category = getUrlParam("type") || categories[0];
    return category;
}

// 获取当前url的class参数
function getFullClassName() {
    var classValue = getUrlParam('class') || 'Laya';
    return classValue;
}

// 获取当前class
function getClassName() {
    var fullName = getFullClassName();
    var dotIndex = fullName.lastIndexOf(".");
    return fullName.substr(dotIndex + 1);
}

function isClass(fullName) {
    for (var i = categories.length - 1; i >= 0; i--) {
        var classes = classList[categories[i]];
        if (classes.indexOf(fullName) > -1)
            return true;
    }
    ;
    return false;
}

// 显示版本下拉列表
function showVersion() {
    // versionList
    var urlVersion = getUrlParam("version"); // 获取路径中的version
    if (urlVersion) {
        version = urlVersion;
    }
    var str = "";
    var isVersionExist = false;
    for (var i = 0; i < versionList.length; i++) {
        if (versionList[i] == version) {
            isVersionExist = true;
        }
        str += "<li data-value='" + versionList[i] + "'>" + versionList[i] + "</li>";
    }
    // 如果路径传入的version值，不存在版本列表中
    if (!isVersionExist) {
        version = versionList[0];
    }
    $(".select-selected span").html(version);
    $(".select-list").html(str);
}

classSearch.oninput = function (e) {
    var list = $("#classGroup li a");
    var searchFor = e.target.value.toLowerCase();

    if (searchFor == "")
        hideExcludeClasses(list);
    else
        searchHandler(list, searchFor);
}

searchAllClass.oninput = function (e) {
    searchHandler($("#allClassList li a"), e.target.value.toLowerCase());
}

function hideExcludeClasses(list) {
    for (var i = list.length - 1; i >= 0; i--) {
        var itemVal = list[i].innerText;
        var display;

        // if (excludeClassList["Core"].indexOf(itemVal) > -1)
        //     display = "none";
        // else
            display = "block";

        list[i].parentNode.style.display = display;
    }
}

// 符合的将显示 不符合的将隐藏
function searchHandler(list, value) {
    if (value.indexOf("laya.") == 0)
        value = value.substr(5);

    for (var i = list.length - 1; i >= 0; i--) {
        var itemVal = list[i].innerText;
        var display;

        if (itemVal.toLowerCase().indexOf(value) > -1)
            display = "block";
        else
            display = "none";

        list[i].parentNode.style.display = display;
    }
}

// 根据完全限定名称获取分类
function getClassCategary(type, classFullName) {
    classFullName = classFullName.split("#");
    for (var i = categories.length - 1; i >= 0; i--) {
        if (classList[categories[i]]) {
            for (var key in classList[categories[i]]) {
                if (classList[categories[i]][key].indexOf(classFullName[0]) > -1) {
                    return categories[i];
                }
            }
        }
        // if (classList[categories[i]].indexOf(classFullName) > -1)
        //     return categories[i];
    }
    ;
    return getUrlParam("category");
}

// 由于页面的切换无刷新 为了模拟前进后退 将切换的页面push到history中
function pushToHistory(type,packageName, className, search) {
    var url = baseUrl + "?version="+version+ "&type="+type+"&category=" + packageName + "&class=" + className ;

    if (search)
        url += "#" + search;

    history.pushState(
        {
            title: "",
            url: url
        }, "", url);
}

// 选中已选择的分类
function showSelectedCategory(type, categoryName) {
    $(".category-tab-tit ." + type + "_part").addClass("active").siblings().removeClass("active");
    $(".category-tag-box ." + type + "_part").addClass("active").siblings().removeClass("active");
    // $(".category-tab-tit span").removeClass("active");
    // $(".category-tab-tit span:data-tit=" + type).addClass("active");
    // var index = $(".category-tab-tit span").index($(".category-tab-tit span:data-tit=" + type).eq(0));
    // $(".category-tag-box .part").eq(index).addClass("active").removeClass("active");

    var categories = $(".category-tag-box ." + type + "_part .packageGroup li a");
    $(".packageGroup li").removeClass("swich");
    for (var i = categories.length - 1; i >= 0; i--) {
        if (categories[i].innerText == categoryName) {
            categories[i].setAttribute("class", "cur");
            categories[i].parentElement.setAttribute("class", "swich");
        }
        else
            categories[i].setAttribute("class", "list-item");
    };
}

// 用户执行前进或后退网页时 无刷跳转历史记录
window.onpopstate = function () {
    navToClass(getFullClassName(),"", 0);
}

category.style.display = "block";
classIndex.style.display = "none";

categoryRadio.onclick = function (e) {
    category.style.display = "block";
    classIndex.style.display = "none";
}

classIndexRadio.onclick = function (e) {
    category.style.display = "none";
    classIndex.style.display = "block";
}

resize();
window.onresize = resize;

function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    // $(".sider-content").height(h);
    $(".col-sm-9").height(h);
    // $(".classCon").height(h - 288);
    $(".col-sm-9").width(w - $(".col-md-2").width() - 45);
    $("#classIndex").height(h - 164);
}