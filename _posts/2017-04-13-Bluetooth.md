---
layout: post
title: "蓝牙模块相关知识汇总"
date: 2017-04-13 
description: "蓝牙，HC-05"
tag: 技术 
---   


<h6><img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/icon/copyright.png" alt="copyright" style="display:inline;margin-bottom: -5px;" width="20" height="20"> 版权声明：本文为博主原创文章，未经博主允许不得转载。
<a target="_blank" href="https://robotkang.cc/17413.html">原文地址：https://robotkang.cc/17413.html</a>
</h6>
## 蓝牙HC05模块探究-设置AT指令



　蓝牙HC05是主从一体的蓝牙串口模块，简单的说，当蓝牙设备与蓝牙设备配对连接成功后，我们可以忽视蓝牙内部的通信协议，直接将将蓝牙当做串口用。当建立连接，两设备共同使用一通道也就是同一个串口，一个设备发送数据到通道中，另外一个设备便可以接收通道中的数据。当然，对于建立这种通道连接是有一定条件，那就是对蓝牙设置好能进行配对连接的AT模式。 一般的蓝牙串口模块引脚：


> RXD：接收端           
> TXD：发送端       
> AT：设置工作模式（1、工作模式 2、AT指令设置模式）            
> VCC：模块供电正极（5V）          
> GND:模块供电负极          


<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E8%93%9D%E7%89%99/7.png" width="380" height="230" alt="photos"/>



### 一般的蓝牙模块使用有三种。




- 一：蓝牙从设备与电脑配对连接(1、电脑自带蓝牙 2、电脑不带蓝牙，这事需要蓝牙适配器)      
- 二：蓝牙从设备与手机配对连接      
- 三：蓝牙从设备与蓝牙主设备配对连接      



### HC05蓝牙模块的AT模式设置的方法大致有三种：



- 一、默认设置         
- 二、用USB转UART模块设置   
- 三、用带有蓝牙设置的主控器串口程序进行设置        

**  第一：主要默认设置：**            

- 模块工作角色：从模式   
- 串口参数：38400bits/s 停止位1位无校验位   
- 配对码：1234  
- 设备名称：HC-05   
- 连接模式：任意蓝牙设备连接模式（恢复默认设置 AT指令：AT+ORGL）  

**  第二：用USB to UART模块设置蓝牙**       
    蓝牙与USB转串口模块连接方式，RXD-TX TXD-RX VCC-VCC GND-GND         
    要设置蓝牙AT指令，必须让AT引脚置高(接高电平)，然后接上蓝牙模块，当蓝牙模块state灯变为慢闪，则表明已经进入AT模式。（j将蓝牙模块与转串口模块对插，用跳线将AT对应的引脚接VCC）这时候将转串口模块接入电脑，打开超级终端或者串口调试助手便可以开始设置AT模式。        
    打开串口调试助手，测试AT指令，找到相应串口号后，注意两点，`1、设置AT模式的波特率为38400 ``2、输入指令后加上回车后换行，发送后返回OK.`     

<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E8%93%9D%E7%89%99/6.png" width="420" height="250" alt="photos"/>

    *下面来设置模块为从机模式，依次输入指令:*  

   
- AT+NAME=Bluetooth-Slave  蓝牙名称为Bluetooth-Slave         
- AT+ROLE=0                蓝牙模式为从模式         
- AT+CMODE=0               蓝牙连接模式为任意地址连接模式         
- AT+PSWD=1234             蓝牙配对密码为1234         
- AT+UART=9600，0，0       蓝牙通信串口波特率为9600，停止位1位，无校验位          
- AT+RMAAD                 清空配对列表        

相应返回OK表示设置成功。这个时候的蓝牙就可以与电脑主机或者手机配对通信。需要注意的是设置指令里的符号不要在中文状态下输入，否则不会返回相应指令。

** 第三：用Arduino配置蓝牙AT指令**              
`步骤一 `给Arduino下载程序        

		#define AT 2
		#define LED 13
		void setup()
		{
			pinMode(LED,OUTPUT);
			pinMode(AT,OUTPUT);
			digitalWrite(AT,HIGH);
			Serial.begin(38400);//这里应该和你的模块通信波特率一致
			delay(100);
			Serial.println("AT");
			delay(100);
			Serial.println("AT+NAME=OPENJUMPER-Bluetooth");//命名模块名
			delay(100);
			Serial.println("AT+ROLE=0");//设置主从模式：0从机，1主机
			delay(100);
			Serial.println("AT+PSWD=1234");//设置配对密码，如1234
			delay(100);
			Serial.println("AT+UART=9600,0,0");//设置波特率9600，停止位1，校验位无
			delay(100);
			Serial.println("AT+RMAAD");//清空配对列表
		}
		void loop()
		{
		       digitalWrite(LED, HIGH);
		       delay(500);
		       digitalWrite(LED, LOW);
		       delay(500);
		}



`步骤二` 蓝牙与Ardino连线 RXD-TX TXD-RX VCC-VCC GND-GND AT-2 （当很多传感器扩展板带有蓝牙模块接口，则可以直接将蓝牙插在扩展板上接口，不用麻烦接线）。     
`步骤三` 按下Arduino的复位按键，让程序开始运行一次，当发现板载L灯500ms闪烁时则表明已设置成功。           


## 两个蓝牙模块配对连接教程：（具体AT指令参考HC05AT指令集）    
         
             

简单说 一个蓝牙设置为主机，一个蓝牙设置为从机，设置对应密码波特率AT指令后，自动连接配对。     


`第一步`：准备好做主机的蓝牙模块，用cp2102转串口模块连接蓝牙并进入AT设置模式（指示灯慢闪）
分别输入下面AT指令 （注意输入指令后加上回车后换行，发送后返回OK表示设置成功，如下指令是一条一条输入，切勿所有一起输入再点发送。设置完成后可以通过AT指令类似AT+NAME?这样的指令查询刚刚设置是否成功，具体参考HC05AT指令集）             


- AT+NAME=Bluetooth-Master  蓝牙主机名称为Bluetooth-Master     
- AT+ROLE=1                蓝牙模式为主模式       
- AT+CMODE=1              蓝牙连接模式为任意地址连接模式        
- AT+PSWD=1234             蓝牙配对密码为1234           
- AT+UART=9600，0，0       蓝牙通信串口波特率为9600，停止位1位，无校验位         
- AT+RMAAD                 清空配对列表         


`第二步`：准备好做从机的蓝牙模块用cp2102转串口模块连接蓝牙并进入AT设置模式（指示灯慢闪）
分别输入下面AT指令 （注意输入指令后加上回车后换行，发送后返回OK表示设置成功）      
（如果设置没有效果可以先恢复出厂设置AT+ORGL）        

- AT+NAME=Bluetooth-Slave  蓝牙名称为Bluetooth-Slave          
- AT+ROLE=0                蓝牙模式为从模式      
- AT+CMODE=1              蓝牙连接模式为任意地址连接模式       
- AT+PSWD=1234             蓝牙配对密码为1234          
- AT+UART=9600，0，0       蓝牙通信串口波特率为9600，停止位1位，无校验位     
- AT+RMAAD                 清空配对列表      

`第三步`：分别给主模块和从模块选择进入工作模式，并重新上电。两个模块会自动连接然后配对，这样后，状态灯会出现慢闪烁指示。       
 
### 附表：


<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E8%93%9D%E7%89%99/5.png" width="680" height="430" alt="photos"/>


----------
>  人，活一辈子，总该做点什么，应该有自己存在的目的和追求。但大多数的人，仅仅是为了生存而疲于奔波，他们中的很多人一直到老，整个人生经历中竟然没有几件值得回忆的事情。如果问他们为什么而活着，他们会告诉你，既然还活着，那就活下去吧。那样的人生有什么意义？多么可悲。当你的精神上有了追求，不管你追寻的是什么，只要你坚信你是对的，就去做。就算是时间和历史将你遗忘，只要你自己为你自己所做的一切而感到满足，那就足够了。——《藏地密码》
<br>



