---
layout: post
title: "VS Code 配置Python "
date: 2017-04-25 
description: "VS Code,Python，Visual Studio"
tag: 工作
---   




## Visual Studio Code



　Microsoft在2015年4月30日Build 开发者大会上正式宣布了 Visual Studio Code 项目：一个运行于 `Mac OS X`、`Windows`和 `Linux` 之上的，针对于编写现代 Web 和云应用的跨平台源代码编辑器。        
    看到`Visual Studio Code`还是蛮激动的，界面也很好看，非常轻量级，搭配各种插件的话，就可以重现Visual Studio的强大功能。` 微软` 这两年来不断开放的姿态，越来越让我们看到微软的情怀和未来。Visual Studio Code的定位应该还是Editor，一个全功能的Editor，通过Editor反推微软的SDK，.NET(开源，跨平台)等产品铺路。                 


##  VS Code 配置Python            

   
** 1. 进入VS Code官网，下载软件**     

- 官网: [https://code.visualstudio.com/Download#](https://code.visualstudio.com/Download#)       

Python也要在本地下载安装好，我现在安装的是` python 3.5.2` ，配置好环境变量.

** 2.安装VS Code的Python插件，选择安装次数最多的那个**       
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/vscode/1.jpg" width="800" height="500" alt="photos"/>


** 3.安装其他插件**    
&emsp;**3.1 配置flake8**      
&emsp;安装flake8之后写代码的时候编辑器就会提示哪里出错，代码格式不规范也会提示.             
`1.`打开命令行「windows：cmd」
`2.`输入 `pip install flake8`.
`3.`安装flake8成功后，打开VScode，文件->首选项->用户设置，在settings.json文件中输入"python.linting.flake8Enabled": true
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/vscode/2.jpg" width="750" height="250" alt="photos"/>
&emsp;**3.2 配置yapf**        
&emsp;安装yapf之后在VScode中按`Alt+Shift+F`即可自动格式化代码        
`1.`打开命令行
`2.`输入 `pip install yapf`.
`3.`安装yapf成功后，打开VScode，文件->首选项->用户设置，在settings.json文件中输入"python.formatting.provider": "yapf"

&emsp;**3.3软件自带插件，直接在软件中安装**        
&emsp;`1` **vscode-icons**：可以使VScode左侧的资源管理器根据文件类型显示图标        
&emsp;&emsp;Enable the extension：
Go to File > Preferences > File Icon Theme > VSCode Icons.        
&emsp;`2` **markdown**：Markdown 编辑器     
&emsp;`3` **Guides**：缩进辅助线. Guides is simply an extension that add various indentation guide lines         
&emsp;`4` **Git History**：Git 历史         
&emsp;`5` **Settings Sync**：用户配置同步        
&emsp;`6` **View in Browser**：Extension for vscode to view a html file in a browser.`Ctrl + F1`         


**4.设置快捷键**          
&emsp;文件->首选项->键盘快捷方式，将需要的修改的快捷键的整个大括号里面的内容复制到右边keybindings.json文件中，然后修改“key”的值为你需要的快捷键即可。我这边只修改了复制一行和删除一行的快捷键。      

<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/vscode/4.jpg" width="700" height="180" alt="photos"/>



## 总结




&emsp;好了，接下来就可以愉快的敲代码了O(∩_∩)O哈哈~             


&emsp;到这边VScode就可以编辑python代码了，新建一个文件夹，用VSCode打开该文件夹，并在其中新建一个test.py文件来做测试。编辑完代码按F5即可运行。初次运行会让你选环境，选择python即可。默认按F5后需要再按一次F5程序才会运行，如果要按F5马上运行需要将launch.json文件的 `"stopOnEntry": true`,改为` "stopOnEntry": false`。          

<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/vscode/5.jpg" width="800" height="500" alt="photos"/>

&emsp;有什么需要补充或者哪里有错误的欢迎大家指出(｡・`ω´･)        


           
----------
>  哥们儿，我们内蒙喝酒有个规矩。我先介绍一下今天桌上的几个朋友，然后咱们先喝一圈。 喝完之后你能说出来他们的名字，就是你认我们这些朋友，我们自己喝一杯。 要是你说不出来名字，就是情谊还没到，你自己喝一杯。准备好没？ 先从你旁边的噶拉仓巴拉丹扎木苏日丹开始，再往下是乌勒吉德勒格列日图愣...


<br>


