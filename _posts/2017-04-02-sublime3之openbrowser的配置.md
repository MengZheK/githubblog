---
layout: post
title: "sublime3之openbrowser的配置"
date: 2017-04-02
description: "sublime3之openbrowser的配置"
tag: 博客 
---   

##先打开安装package的界面

- 1、通过"ctrl+shift+p"打开命令面板

- 2、输入"install package"打开安装插件面板

- 3、输入"view in browser"后通过鼠标左键单击或者回车键进行安装

- 4、察看SublimeText左下角状态栏了解是否安装成功

最后，就说下小觉现在所使用的方法：

- 1、在SublimeText下打开该路径：preference - 按键绑定-用户

- 2、在" ] "前输入以下代码：

	{ "keys": ["ctrl+shift+enter"], "command": "open_in_browser" }

1.首先，如何设置自己的默认浏览器？转载请注明出处：原文链接
打开Preferences -> Package Settings -> Side Bar -> settings-default,查看下面这句话
"default_browser": "", //one of this list: firefox, chrome, canary, chromium, opera, safari, ie

复制上面这句话。

打开Preferences -> Package Settings -> Side Bar -> settings-user，输入：
{
"default_browser": "这里写你想设置的默认浏览器，比如：chrome" //one of this list: firefox, chrome, canary, chromium, opera, safari, ie
}
command+s保存。至此，您已经设置好了默认浏览器。

不奏效！

##参考

- [ sublime text 3 用快捷键打开任意你想打开的默认浏览器（设置超级简单）](http://blog.csdn.net/hdfqq188816190/article/details/58593244)

- [快捷键让SublimeText在编文件快速在浏览器打开](http://blog.csdn.net/ranmudaofa/article/details/38457215)

- [sublime text 3 用快捷键打开任意你想打开的默认浏览器（设置超级简单）](http://blog.csdn.net/hdfqq188816190/article/details/58593244)