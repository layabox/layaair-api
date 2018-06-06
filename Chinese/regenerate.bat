SET lib_path=E:\Mine\Project\git\laya\dawawa\layaair
SET as_doc="C:\Program Files (x86)\Adobe\Adobe Flash Builder 4.6\sdks\4.6.0\bin\asdoc.exe"
SET api_website_dir=E:\Mine\Project\git\laya\dawawa\layaair_Official\api
SET output_dir=E:\Mine\Project\git\laya\dawawa\layaair_Official\output\LayaAir-API-Documentation

%as_doc% ^
-doc-sources="%lib_path%\core\jsc" ^
-doc-sources="%lib_path%\core\src" ^
-doc-sources="%lib_path%\ani\src" ^
-doc-sources="%lib_path%\filter\src" ^
-doc-sources="%lib_path%\html\src" ^
-doc-sources="%lib_path%\particle\src" ^
-doc-sources="%lib_path%\plugins\tiledmap\src" ^
-doc-sources="%lib_path%\plugins\device\src" ^
-doc-sources="%lib_path%\ui\src" ^
-doc-sources="%lib_path%\webGL\src " ^
-doc-sources="%lib_path%\d3\src " ^
-output=%output_dir%

md %api_website_dir%\laya
xcopy %output_dir%\laya %api_website_dir%\laya /s /e /y
copy %output_dir%\Config.html %api_website_dir%\Config.html /y
copy %output_dir%\Laya3D.html %api_website_dir%\Laya3D.html /y
copy %output_dir%\UIConfig.html %api_website_dir%\UIConfig.html /y
copy %output_dir%\XmlDom.html %api_website_dir%\XmlDom.html /y