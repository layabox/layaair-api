<?php
/*LAYA服务器参数*/
$laya_server_name = $_SERVER['SERVER_NAME'];
$laya_server = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
//official.layabox.com
$laya_data = $laya_server . "official.layabox.com";
$version = "?v=laya_20170727";
if (gethostbyname($_SERVER['SERVER_NAME']) == "49.51.9.179") {
    $laya_server_ip = md5(gethostbyname($_SERVER['SERVER_NAME']));
} else {
    $laya_server_ip = "";
}
$language = $_GET['language'];
if ($language !== "zh" && $language !== "en") {
    if ($laya_server_ip == "2ad3a2ae3de46790d168e044c19be03d") {
        $language = "en";
        $language_name = "English";
        $lang_param = "?language=" . $language;
        $lang_andparam = "language=" . $language . "&";
    } else {
        $language = "zh";
        $language_name = "Chinese";
        $lang_param = "";
        $lang_andparam = "";
    }
} else {
    if ($language == "zh") {
        $lang_param = "";
        $lang_andparam = "";
    } elseif ($language == "en") {
        $lang_param = "?language=" . $language;
        $lang_andparam = "language=" . $language . "&";
    }
}
if (isset($tr_url)) {
    $text_data = [];
    $num = 0;
    $tr_url = json_decode(file_get_contents($tr_url), true);
    foreach ($tr_url as $K => $V) {
        $text_data[$num] = $V[$language];
        $num++;
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE,Chrome=1;"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <meta name="description"
          content="Layabox是免费开源的HTML5引擎解决方案，产品家族中包括LayaAir引擎、LayaFlash引擎、LayaOpen开放平台、LayaMarket SDK、LayaStore嵌入式游戏商店、LayaPlayer运行器。核心引擎LayaAir性能全球领先，支持2D、3D、VR开发，支持AS3、JavaScript、TypeScript三种开发语言、LayaAirIDE让项目开发更高效。"/>
    <meta name="keywords"
          content="HTML5游戏引擎,Layabox,官方网站, 免费开源,H5引擎,HTML5引擎,性能最高,3D,VR,AS3,JavaScript,TypeScript,开发语言,LayaFlash,LayaPlayer,LayaAir,LayaOpen,LayaMarket,LayaStore,游戏引擎，工具链"/>
    <meta name="author" content="ldc.layabox.com"/>
    <script type="text/javascript">
        var overseas = "<?php echo $laya_server_ip; ?>";
    </script>

    <title>
        LAYA_API
    </title>

    <!--CSS-->
    <link rel="shortcut icon" href="<?php echo $laya_data ?>/public/img/favicon.ico"/>
    <link rel="bookmark" href="<?php echo $laya_data ?>/public/img/favicon.ico"/>
    <link rel="stylesheet" type="text/css"
          href="<?php echo $laya_data ?>/public/css/bootstrap.css<?php echo $version; ?>"/>
    <link rel="stylesheet" type="text/css"
          href="<?php echo $laya_data ?>/public/css/bootstrap-theme.css<?php echo $version; ?>"/>
    <link rel="stylesheet" type="text/css"
          href="<?php echo $laya_data ?>/public/css/animate.min.css<?php echo $version; ?>"/>
    <!--CSS laya-->
    <link rel="stylesheet" type="text/css"
          href="<?php echo $laya_data ?>/public/css/LAYA_HF.css<?php echo $version; ?>"/>
    <!--CSS main-->
    <link rel="stylesheet" type="text/css"
          href="css/style.css<?php echo $version; ?>"/>
    <link rel="stylesheet" type="text/css"
          href="css/Layaapi.css<?php echo $version; ?>"/>
    <link rel="stylesheet" type="text/css" href="style.css<?php echo $version; ?>" media="screen"/>
    <link rel="stylesheet" type="text/css" href="print.css<?php echo $version; ?>" media="print"/>
    <link rel="stylesheet" type="text/css" href="syntaxHighlighter/shCoreDefault.css<?php echo $version; ?>"/>
    <?php if ($language == "en") { ?>
        <style>
            #laya_nav .container {
                width: 100%;
            }
        </style>
    <?php } ?>

    <!--JS-->
    <!--IE 兼容-->
    <!--[IF LTE IE 9]>
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/html5.min.js<?php echo $version; ?>"></script>
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/respond.min.js<?php echo $version; ?>"></script>
    <![ENDIF]-->
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/jquery.js<?php echo $version; ?>"></script>
    <!--[IF LTE IE 8]>
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/jquery.ie8.min.js<?php echo $version; ?>"></script>
    <![ENDIF]-->
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/bootstrap.js<?php echo $version; ?>"></script>
    <!--JS laya-->
    <script type="text/javascript" charset="utf-8"
            src="<?php echo $laya_data ?>/public/js/LAYA_HF.js<?php echo $version; ?>"></script>
    <!--JS main-->
    <script language="javascript" type="text/javascript" src="asdoc.js<?php echo $version; ?>"></script>
    <script language="javascript" type="text/javascript" src="help.js<?php echo $version; ?>"></script>
    <script language="javascript" type="text/javascript" src="cookies.js<?php echo $version; ?>"></script>

    <!--WOW-->
    <script type="text/javascript" charset="utf-8" src="<?php echo $laya_data ?>/public/js/wow.js<?php echo $version; ?>"></script>
    <script type="text/javascript">
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            new WOW().init();
        }
        //初始化页面
        $(window).ready(function () {
            laya_nav('layaair');
            onLR();
            api_resize();
        });
        $(window).resize(function () {
            onLR();
            api_resize();
        });
    </script>
</head>
<body data-spy="srcoll" data-target="#laya-siderbar">
<section id="laya_content">
    <div class="classnav">
        <div class="sider-content siderbarldc slider-nav" id="laya-siderbar">
            <div class="slider-body">
                <div>
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-primary active" id="categoryRadio">
                            <input type="radio" name="options" autocomplete="off" checked>分类</label>
                        <label class="btn btn-primary" id="classIndexRadio">
                            <input type="radio" name="options" autocomplete="off">类索引</label>
                    </div>
                    <!-- Tab panes -->
                    <div id="category">
                        <div class="slider-info">
                            <div class="part">
                                <div class="packageCon">
                                    <div class="nav-content">
                                        <div class="part-01">
                                            <ul id="packageGroup"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="classCon">
                                <div class="search">
                                    <input type="text" id="classSearch" class="form-control"/>
                                    <img id="sousuo1" src="images/search_icon.png"/>
                                </div>
                                <div class="classCon classCon01">
                                    <div class="nav-content">
                                        <div class="part-02">
                                            <ul id="classGroup"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="classIndex" class="tab-pane" role="tabpanel">
                        <div class="search" style="border-bottom:1px solid #E3E6E5;">
                            <input type="text" id="searchAllClass" class="form-control"/>
                            <img src="images/search_icon.png" id="sousuo2"/>
                        </div>
                        <div class="allclassesDiv">
                            <ul id="allClassList"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="classbox">
        <div id="ldc_content">
            <div class="row">
                <div class="content right-part"></div>
            </div>
        </div>
    </div>
</section>
<script type="text/javascript">
    $(".text-content img").addClass("img-responsive img-rounded");
    $(document).ready(function () {
        var docHeight = $(window).height();
        var docWidth = $(window).width();
        if (!history.pushState) {
            history.pushState = function (state, title, url) {
                location.hash = '?' + url;
            }
        }
        if (location.hash.indexOf('http') > 0) {
            $.get(location.hash.substr(2) + '&ajax=1', function (data) {
                $("#ldc_content").html(data);
                $('#ldc_content').scrollTop(0);
                if (typeof SyntaxHighlighter !== undefined) {
                    SyntaxHighlighter.setCode(data);
                }
            });
        }
        $('a').on('click', function () {
            var url = $(this).attr('href');
            if (url.indexOf('show') > 0) {
                var title = $(this).attr('title');
                $.get(url + '&ajax=1', function (data) {
                    $("#ldc_content").html(data);
                    $('#ldc_content').scrollTop(0);
                    if (typeof SyntaxHighlighter !== undefined) {
                        SyntaxHighlighter.setCode(data);
                    }
                    var stateObject = {};
                    history.pushState(stateObject, title, url);
                    document.title = title;
                });
                return false;
            }
        });
        $(".list-item").click(function () {
            $(".list-item").each(function () {
                $(this).removeClass("cur");
            });
            $(this).addClass("cur");

        });
        $(".dropdown-menu a").on('click', function () {
            $("#bs-example-navbar-collapse-1").removeClass('in');
        });
    });
</script>
<script type="text/javascript" src="script/script.js?v=7"></script>
<script id="js" type="text/javascript" src="syntaxHighlighter/shCore.js"></script>
<script id="js" type="text/javascript" src="syntaxHighlighter/shBrushJScript.js"></script>
<script id="js" type="text/javascript" src="syntaxHighlighter/shBrushAS3.js"></script>
<script type="text/javascript">
    SyntaxHighlighter.all();
    SyntaxHighlighter.defaults['toolbar'] = false;
    function api_resize() {
        $("section").css("height", $(window).height() - 90);
        $(".classnav").css("height", $(window).height() - 90);
        $("#laya-siderbar").css("height", $(window).height() - 92);
        $("#classGroup").css("height", $("#laya-siderbar").height() - 265);
        $("#allClassList").css("height", $("#laya-siderbar").height() - 99);
        $(".classbox").css("height", $(window).height() - 90);
        $(".classbox").css("width", $(window).width() - 393);
        $("#ldc_content").css("height", $(".classbox").height() - 24);
        if ($(window).width() <= 767) {
            $(".classnav").css("height", 460);
            $("#laya-siderbar").css("height", 460);
            $("#classGroup").css("height", 200);
            $("#allClassList").css("height", 370);
            $(".classbox").css("width", "100%");
            $("#ldc_content").css("height", $(window).height() - 105);
        }
    }
    $("#packageGroup li a").click(function () {
        $("#packageGroup li").removeClass("swich");
        $(this).parent("li").addClass("swich");
    });
</script>
</body>
</html>