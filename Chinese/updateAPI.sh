# 2016年6月29日16:59:07
# 该文件只能在windows中的cygwin中运行。
# 
# Program:	生成LayaAir的API文档，并更新本网页。
# 			脚本运行时会在执行目录生成临时文件夹，结束时自动删除。
# 
# 你需要指定以下三个参数：

libPath="E:/Repository/libs/"
asDoc='/cygdrive/c/Program Files/Adobe/Adobe Flash Builder 4.7 (64 Bit)/sdks/4.6.0/bin/asdoc.exe';
apiWebsite='/cygdrive/e/Repository/api/';

"$asDoc" \
-doc-sources="${libPath}core/jsc" \
-doc-sources="${libPath}core/src" \
-doc-sources="${libPath}ani/src" \
-doc-sources="${libPath}filter/src" \
-doc-sources="${libPath}html/src" \
-doc-sources="${libPath}particle/src" \
-doc-sources="${libPath}plugins/tiledmap/src" \
-doc-sources="${libPath}plugins/device/src" \
-doc-sources="${libPath}ui/src" \
-doc-sources="${libPath}webGL/src " \
-doc-sources="${libPath}d3/src " \
-output="C:/Users/Survivor/Desktop/LayaAir API Documatation"
outputDir="/cygdrive/c/Users/Survivor/Desktop/LayaAir API Documatation"
test -d "${apiWebsite}laya" && rm -r "${apiWebsite}laya"

cp -r	"$outputDir/laya"			"${apiWebsite}laya"
cp		"$outputDir/Config.html"	"${apiWebsite}Config.html"
# cp		"./Laya.html"		"${apiWebsite}Laya.html"
cp		"$outputDir/Laya3D.html"	"${apiWebsite}Laya3D.html"
cp		"$outputDir/UIConfig.html"	"${apiWebsite}UIConfig.html"
cp		"$outputDir/XmlDom.html"	"${apiWebsite}XmlDom.html"