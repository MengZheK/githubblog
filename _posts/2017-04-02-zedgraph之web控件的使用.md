---
layout: post
title: "zedgraph之web控件的使用"
date: 2017-04-02 
description: "zedgraph之web控件的使用"
tag: 博客 
---   

##webforms入门

ASP.NET的webforms框架和winform有高度的相似性，但在不同页面的继承上需要仔细梳理。

###zedgraph控件的使用

google了许多关于zedgraph的教程，找到了一个example source，文件夹内格式如下：

	-App_Data
	- bin
	  - vssver2.scc
	  - ZedGraph.dll
	  - ZedGraph.dll.refresh
	  - ZedGraph.Web.dll
	  - ZedGraph.Web.dll.refresh
	- ZedGraphImages
	  - readme.txt
	  - Thumbs.db
	  - vssver2.scc
	- Default.aspx
	- Default.aspx.cs
	- OrderMonitoring.aspx
	- OrderMonitoring.aspx.cs
	- vssver2.scc
	- web.config

但我是在无法将Default.aspx文件夹内的控件代码内容植入到我的母版下。

走了无数坑，才发现，其实winform和webform有许多内容是想通的。

- 一个简单的入门例子 

  - 第一，在 bin文件夹中加入Zedgraph.dll 和Zedgraph.web.dll；

  - 第二，添加这两个dll的引用；

  - 第三，在网站下要创建一个空文件夹,名称为 'ZedGraphImages',这个文件夹名称是默认的,要修改这个文件夹名称,可以修改属性 RenderedImagePath，CacheDuration缓存的持续时间。ZedGraph会生成一图片存放在缓存的目录中，显示图片时，会生成一个img标签代替ZedGraphWeb标签，并在一个时间内，"欺骗"浏览器加载这张图片；

  - 第四，在 aspx文件中加入：<%@ Register TagPrefix="zgw" Namespace="ZedGraph.Web" Assembly="ZedGraph.Web" %>；在html中加入<zgw:ZedGraphWeb ID="ZedGraphWeb1" runat="server" Width="300" Height="130" RenderMode="ImageTag"></zgw:ZedGraphWeb>  

  - 第五，在cs文件中添加引用： using ZedGraph;using ZedGraph.Web;using System.Drawing;//颜色

  - 第六，注册事件，this.ZedGraphWeb1.RenderGraph += new ZedGraph.Web.ZedGraphWebControlEventHandler(CreateGraph);//注册事件

  - 第七，写方法，private void CreateGraph(ZedGraphWeb zgw, Graphics g, MasterPane masterPane){}

  - 具体代码可以参考ZedGraph webform 初学小例子 (代码有详细解释)

.cs文件下，根据以下要求实现线性图表：

	protected void Button1_Click(object sender, EventArgs e)
    {
		this.ZedGraphWeb1.RenderGraph += new ZedGraph.Web.ZedGraphWebControlEventHandler(CreateGraph);//注册事件
	}
	private void CreateGraph(ZedGraphWeb zgw, Graphics g, MasterPane masterPane)
    {
        //拥有一个MasterPane实例包含一个默认的GraphPane
        GraphPane myPane = masterPane[0];

        myPane.Title.Text = "川江水库库容";//标题
        myPane.XAxis.Title.Text = "时间";//横坐标
        myPane.YAxis.Title.Text = "库容";//纵坐标

        PointPairList list = new PointPairList();
        PointPairList list2 = new PointPairList();

        for (int n = 0; n <= T - 1; n++)
        {

            list.Add(n, bestv[n]);
            //list2.Add(n, v_best[n]);
        }
        myPane.CurveList.Clear();//清空曲线，不加这行代码会有什么后果，自己测试。
        LineItem myCurve = myPane.AddCurve("v", list, Color.Red, SymbolType.Diamond);
        //zedGraphV.IsShowPointValues = true;//当鼠标经过时，显示点的坐标。
        myPane.AxisChange(g);
    }

.aspx文件下：

	<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

	<%@ Register assembly="ZedGraph.Web" namespace="ZedGraph.Web" tagprefix="zgw" %>
	<asp:Content>
		<div>
			<p class="lead">
            	<zgw:ZedGraphWeb ID="ZedGraphWeb1" runat="server" Width="600" Height="400" RenderMode="ImageTag">
            	</zgw:ZedGraphWeb>
        	</p>
        </div>
	</asp:Content>

##参考

- [ZedGraph使用经验](http://www.cnblogs.com/gaizai/archive/2010/02/22/1671154.html)
- [关于zedgraph在web中的两种工作方式](http://www.cnblogs.com/xinzaitian/archive/2008/12/10/1352356.html)
- [zedgraph.org](http://ww1.zedgraph.org/)