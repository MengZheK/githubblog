---
layout: post
title: "asp：button和input的区别"
date: 2017-04-09 
description: "asp：button和input的区别"
tag: 博客 
---   

# 20170409 下午

打开修复过后的vs2015,asp控件依旧不见，不知如何调整，目前只能想办法，如何使用html控件与cs文件交互了。

# Question

## Ask:input runat= server和asp:button的区别?

- 服务器端区别，一个是<input type= "button" runat= "server "/>，对应System.Web.UI.HtmlControls.HtmlInputButton类 

- <asp:button runat= "server "> </asp:button>对应System.Web.UI.WebControls.Button类

##answer:

>One is a server control (the asp button) that when rendered on the page includes javascript that handles the postback logic, as well as being exposed to your code-behinds as a control you can address by its ID. The Html control is platform agnostic, and is rendered by your browser as just a button. That button will raise click events but will not POST your form.

>一个是服务器控件（asp按钮），当在页面上呈现时，包含处理回发逻辑的javascript，以及作为控件的代码隐藏，可以通过其ID来处理。 Html控件是平台不可知的，只是一个按钮被浏览器呈现。该按钮将引发点击事件，但不会POST您的表单。


## Ask:Difference betwen button and asp:button onclick

- Code 1

  - aspx code

    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="Button" />  
    Codebehind

    protected void Button1_Click(object sender, EventArgs e)
    {
    //Do somthing
    } 

- Code 2

    - aspx code

    <input id="Submit1" type="submit" value="submit" onclick="return Submit1_onclick()" />  


    <script language="javascript" type="text/javascript">
    // <![CDATA[

    function Submit1_onclick() {
    //Do somthing
    }

    // ]]>
    </script>

### answer:

answer by Felipe Oriani:

> The first code it is a server side code. When you add a tag asp:button in your webform, the asp.net will render an input type="button" for you and when you click this button, it will submit a post to the same page (this is called postback) and will processing the life cycle and asp.net event associated with this button. The same is valid for every server control such as TextBoxes (render input type='text'), Panels (renders divs), Checkboxes (render input type='checkbox'), Labels (render spans) etc...

>In the second code, you have the code that first one will render (an input type = 'button'), but associated with an event in the client-side javascript.

>You can also associate a client-side event in a tag asp:button, take a look at the OnClientClick property.

answer by Oded:

>The first is a server side control and the event handler is executed on the server in C#. Clicking the button will cause a postback and all information in the form will be posted to the server for processing, including a call to the click event handler.

>The second is fully client side and the event handler is executed in the browser in JavaScript.