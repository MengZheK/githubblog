---
layout: post
title: "My97DatePicker"
date: 2017-04-14 
description: "My97DatePicker"
tag: 博客 
---   

# 20170414

## 关键词：My97DatePicker如何使用？

都是官方的信息，但尝试了也没用。

## 关键词：My97DatePicker aspx

- 无意中发现[jQuery UI 实例 - 日期选择器（Datepicker）](http://www.runoob.com/jqueryui/example-datepicker.html),而且有演示实例，不错。

- [My97DatePicker日期插件的常用功能说明](http://jingyan.baidu.com/article/e6c8503c7244bae54f1a18c7.html)[^1]

- 继续github中查看该控件的使用情况。

```
    
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="gb2312" />
        <title></title>
    </head>
    <body>
        <input />
        <script>
            function $(el){
                return typeof el == 'string' ? document.getElementById(el) : el;
            }
            function $t(name, cot){
                cot = cot || document;
                return cot.getElementsByTagName(name);
            }
            
            //$t('input')[0].readOnly = false;
            $t('input')[0].readOnly = true;
            
        </script>       
    </body>
    </html>
```

终于找到原因了，原来是Chrome浏览器不支持该控件，但是，水利信息网的控件却能正常点击，为什么？

## 关键词My97DatePickerChrome下点击无反应

找到了以下解释：

- [My97DatePicker FF下正常 IE Chrome下点击无反应](http://www.caihaibo.cn/devpro/webfront/3813.html)

文中，在引用日期控件的时候要使用绝对路径。

但依然没有解决，不清楚问题的所在。

- 发现路径是另一个问题，如果我直接将MyDaPicker文件放置在与aspx同目录下，则可以使用，但是假如防灾../script下时，则无法使用。
