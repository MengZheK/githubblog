---
layout: post
title: "sublime3之javascript运行配置"
date: 2017-04-02 
description: "sublime3之javascript运行配置"
tag: 博客 
---   

##Sublime Text怎么运行JavaScript Windows版

1.下载并安装node.js
如果无法正常安装，可通过命令行，以管理员身份进入安装：
	
	msiexec /package node-v7.8.0-x64.msi

2.打开sublime text，选择新建编译环境菜单(Build System ——> New Build System)

在弹出窗口替换如下内容：

	"cmd": ["D:/Program Files (x86)/nodejs/node.exe","$file"],#nodejs文件所在路径
	"selector":"*.js"

3.保存文件名为JavaScript。

4. 重新启动 Sublime Text 3. 勾选菜单 Tools --> Build System --> JavaScript

5. 可以使用 Ctrl + b 来执行JavaScript 程序

##参考

- [Sublime Text怎么运行JavaScript Windows版](http://jingyan.baidu.com/article/9f63fb919b5cf1c8400f0eb2.html)

- [win8下安装nodejs出现error 2503和2502的解决](http://jingyan.baidu.com/article/a3a3f811ee92268da2eb8af2.html)

