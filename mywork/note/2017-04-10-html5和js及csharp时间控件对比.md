---
layout: post
title: "html5和js及csharp时间控件对比"
date: 2017-04-10
description: "html5和js及csharp时间控件对比"
tag: 博客 
---   

# 201704010 下午

折腾了一天多的vs2015安装卸载等，一度终止进展，不过这会儿得开始了。

## 时间控件对比

### Html5

```
    <label for="meeting">起始日期：</label><input id="start" type="datetime-local" value="2017-04-07"/>
    <label for="meeting">终止日期：</label><input id="end" type="datetime-local" value="2017-04-08"/>
```

### js

- .aspx文件

```
    <asp:panel id="Panel1" style="width: 100%" runat="server" >
    起始时间<input id="tbStartTime" type="text" runat="server" style="width: 102px" />
    截止时间<input id="tbEndTime" type="text" runat="server" style="width: 102px" /> 
    <asp:Button ID="btnQuery" runat="server" Text="查询" onclick="btnQuery_Click" />
    </asp:panel>
```

- .cs文件

```    
    protected void Page_Load(object sender, EventArgs e)
    {
        this.Context.Response.Charset = "UTF8";
        if (!IsPostBack)
        {
            AddDateControl();
            tbStartTime.Value = DateTime.Now.ToString("yyyy-MM-dd");
            tbEndTime.Value = DateTime.Now.ToString("yyyy-MM-dd");
        }
    }
    /// <summary>
    /// 日期输入框设置
    /// </summary>
    private void AddDateControl()
    {
        tbStartTime.Attributes.Add("class", "Wdate");
        tbStartTime.Attributes.Add("onfocus", "new WdatePicker(this,'%Y-%M-%D',false)");
        tbEndTime.Attributes.Add("class", "Wdate");
        tbEndTime.Attributes.Add("onfocus", "new WdatePicker(this,'%Y-%M-%D',false)");
    }
    DateTime dtStart = DateTime.ParseExact(tbStartTime.Value, "yyyy-MM-dd", System.Globalization.CultureInfo.CurrentCulture);
    }

```

### ASP.NET(c#)

.asp文件中，代码如下：

```
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
    <ContentTemplate>
        <asp:TextBox ID="requestedDeliveryDateTextBox" runat="server" Width="100" />
        <asp:ImageButton id="imageButton" runat="server" ImageUrl="~/Images/IconCalendar.png" AlternateText="calendar" OnClick="ImageButton_Click" CausesValidation="false" />
        <br />
        <div id="calendar" class="calendar" visible="false" runat="server">
        <asp:Calendar ID="requestedDeliveryDateCalendar" runat="server" OnSelectionChanged="RequestedDeliveryDateCalendar_SelectionChanged" />
        </div>
    </ContentTemplate>
    </asp:UpdatePanel>
```

后台主要代码如下：

``` 
        /// <summary>
        /// 日期选择图标被点击
         /// </summary>
        protected void ImageButton_Click(object sender, EventArgs eventArgs)
        {
            控制日历的显示与隐藏
            calendar.Visible = !calendar.Visible;
        }
        /// <summary>
        /// 选择日期，通过AJAX触发
         /// </summary>
        protected void RequestedDeliveryDateCalendar_SelectionChanged(object sender, EventArgs eventArgs)
        {
          requestedDeliveryDateTextBox.Text = requestedDeliveryDateCalendar.SelectedDate.ToShortDateString();
            // 隐藏日历
            calendar.Visible = false;
            //设置日历下textbox的焦点，方便用户输入。移除或改变下行代码设置为您自己的控件
             someTextBox.Focus();
        }
```

### 参考

- [asp.net时间控件之用法](http://blog.csdn.net/lishimin1012/article/details/38388987)
- [ ASP.NET(c#) 日期选择控件的另一种实现方法](http://blog.csdn.net/gxiangzi/article/details/5827701)


## IIS配置

- 当前标识没有对"Temporary ASP.NET Files"的写访问权限的解决办法

这种情况通常是因为先安装了.net Framework，然后再安装IIS服务器导致的，所以只要在IIS重新注册一遍.net Framework就可以了：

在命令行中输入命令：
    
    C:/WINDOWS/Microsoft.NET/Framework/v2.0.50727/aspnet_regiis -i –enable


### 参考

- [win7 +IIS配置+Dreamweaver测试服务器建立+数据库连接](http://www.cnblogs.com/waynexu/archive/2013/08/12/essay_one.html)
 - [当前标识没有对"Temporary ASP.NET Files"的写访问权限的解决办法](http://www.cnblogs.com/haocool/archive/2012/11/09/2763069.html)
