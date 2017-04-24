---
layout: post
title: "table和div之对比及treeview的使用"
date: 2017-04-11 
description: "table和div之对比及treeview的使用"
tag: 博客 
---   

# 201704011 上午

## table/ul/div之对比

- table
```
	<table>  #定义html表格
		<tr> #定义行
			<td> 
			</td> #定义单元格
		</tr>  
	</table>
```
- ul

以下摘自知乎：

>table的定义较繁琐，有三个层级，table，tr，td，而且它的有些属性，用CSS不易控制，代码繁复混乱。ul只要两层，ul，li，他们可以随意镶套，css中可以div.ul，http://div.li这样定义属性，清楚了然。之所以单独推广div加css，不是为了装逼，用table也完全可以做到的功能，而是为了代码的简洁和样式的分离，还有清晰的代码结构。table完全可以退休，不再在网站结构上使用，只是作为表格出现在内容里。

## tree view和scroll的使用

以下事例中overflow:auto表示的是scroll滚动条，TreeView表示的是树形列表视图，在该视图下，可以跳转页面，调用图片/读取XML中的数据或数据库中的数据：

	<div style="overflow:auto; width:266px; height:200px;">
      <asp:TreeView runat="server" ImageSet="XPFileExplorer" NodeIndent="15" BorderStyle="Inset" Height="126px" Width="250px">
          <HoverNodeStyle Font-Underline="True" ForeColor="#6666AA" />
          <Nodes>
            <asp:TreeNode Text="广西壮族自治区">
                <asp:TreeNode Text="桂林市">
                    <asp:TreeNode Text="兴安县" NavigateUrl="http://www.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="临桂区" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="兴安县" NavigateUrl="http://www.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="临桂区" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="兴安县" NavigateUrl="http://www.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="临桂区" NavigateUrl="http://www.msnbc.msn.com"/>
                    <asp:TreeNode Text="全州县" NavigateUrl="http://www.msnbc.msn.com"/>
                </asp:TreeNode>
            </asp:TreeNode>
         </Nodes>
         <NodeStyle Font-Names="Tahoma" Font-Size="8pt" ForeColor="Black" HorizontalPadding="2px" NodeSpacing="0px" VerticalPadding="2px" />
         <ParentNodeStyle Font-Bold="False" />
         <SelectedNodeStyle BackColor="#B5B5B5" Font-Underline="False" HorizontalPadding="0px" VerticalPadding="0px" />
      </asp:TreeView>
    </div>

## ASP.NET 4.0 TimePicker User Control


## 参考

- [How to use scrollbar for a treeview control in asp.net?](https://www.codeproject.com/Questions/62173/How-to-use-scrollbar-for-a-treeview-control-in-asp)

- [CSS Layout - Overflow](https://www.w3schools.com/css/css_overflow.asp)

- [ASP.NET 4.0 TimePicker User Control](https://www.codeproject.com/articles/329011/asp-net-4-0-timepicker-user-control)

