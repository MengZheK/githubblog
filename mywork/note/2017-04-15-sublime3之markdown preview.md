---
layout: post
title: "sublime3之markdown preview"
date: 2017-04-15 
description: "sublime3之markdown preview"
tag: 博客 
---   

# 2017.04.15

## 探索

本人电脑是windows8

### 探索it's all text

暂时未深挖it's all text，但基本功能还是会了。

### 绑定的最佳编辑器

- 选择了近来一直在使用的sublime text3,因为平日记笔记、教程、日记都是在上面编辑的。
- sublime text3中安装Markdown Editing和Markdown Preview 插件后，可使markdown编辑环境呈高亮显示及预览功能，而且还能够在换行时自动缩进、自动补齐等。

## 配置markdown preview

遇到点儿问题，在配置latex的时候，我想要的只是markdown中latex格式在html中打开时ok就行，但是我找的教程，都是真针对.tex文件的配置，而且还要安装两个安装程序，比较麻烦，现在也没搞定。

莫名其妙友可以用了，反正安装了以上一个推荐的软件后是没法用的，但是之前可能在preview中添加了：

    {
        // "浏览markdown的浏览器的路径"
        "browser" : "D:/program Files (x86)/Mozilla Firefox/firefox.exe",
        /*
            Enable or not mathjax support.
        */
        "enable_mathjax": true,
        /*
        Enable or not highlight.js support for syntax highlighting.
        */
        "enable_highlight": true,
}

之后因为没有重启的缘故，所以一直使用不了吧，现在能用了真好。对了，记住mathlex这个软件，可能以后会采用，用来写公式呢。

- [最新最全latex在sublime上的配置步骤全解](http://blog.csdn.net/yywan1314520/article/details/50640286)
- [sublime text 3 编辑器 perl支持](http://blog.csdn.net/g_spider/article/details/42784713) 

- [ sublime学习2：优秀的文本化编辑思想大碰撞（Markdown、LaTeX、MathJax）](http://blog.csdn.net/albert_8/article/details/50698362)

- [使用 Markdown + MathJax 在博客里插入数学公式](http://blog.csdn.net/kamidox/article/details/48380239)
- [Sublime for Markdown](http://blog.csdn.net/u014015972/article/details/50468584)

### 预览

在安装好markdown preview 插件后。

打开 Preferences->Key Bindings->User，粘贴以下内容：

    { "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"}  }

打开Package Settings->Markdown Preview->Settings-User，粘贴以下内容：

    {
        // "浏览markdown的浏览器的路径"
        "browser" : "D:/program Files (x86)/Mozilla Firefox/firefox.exe"
    }

这样就可以使用alt+m快捷键打开网页预览了。

也可以使用ctrl + shift + p(windows下快捷键)调出命令面板，输入mdp->previvew in Browser->markdown执行。

### 插入图片或链接

在安装好markdownediting插件后。

在Preference->Packages Settings->MarkdownEditing->keyBingding-Default中有：

    // inline image insertion
    { "keys": ["super+shift+k"], "command": "reference_new_inline_image", "context":
        [
            { "key": "selector", "operator": "equal", "operand": "text.html.markdown", "match_all": true }
        ]
    },
    // run paste as link command on selected text
    { "keys": ["ctrl+super+v"], "command": "reference_new_inline_link", "context":
        [
            { "key": "selector", "operator": "equal", "operand": "text.html.markdown", "match_all": true }
        ]
    },

根据提示，可使用：

    - shift + Win + k 插入图片
    - ctrl + Win + v 插入链接

### 设置mathjax支持

打开Preferences ->Package Settings->Markdown Preview->Setting User中增加如下代码：

    [
        {
            /*
            Enable or not mathjax support.
            */
            "enable_mathjax": true,
            /*
            Enable or not highlight.js support for syntax highlighting.
            */
            "enable_highlight": true,
        }
    ]
