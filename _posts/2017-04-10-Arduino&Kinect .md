---
layout: post
title: "Arduino与Kinect打造体感智能车"
date: 2017-04-10
description: "Arduino，Kinect，体感智能车"
tag:  技术
---   

<h6><img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/icon/copyright.png" alt="copyright" style="display:inline;margin-bottom: -5px;" width="20" height="20"> 版权声明：本文为博主原创文章，未经博主允许不得转载。
<a target="_blank" href="https://robotkang.cc/17410.html">原文地址：https://robotkang.cc/17410.html</a>
</h6>
这个小项目是之前在学校实验室做的，已成功运行，现在把相关的资料记录下来，便于日后察阅。         

之前大部分步骤是按照奥松的这篇教程来做的，原文地址：<a href="http://www.alsrobot.cn/article-114.html" target="_blank">奥松</a>，有什么问题也可以在文章末尾给我留言。        
 

## 正文：    
体感智能车的原理非常的简单，就是利用Kinect采集人体的姿体信息，然后通过蓝牙串口向Arduino发送字符命令。Arduino通过相应的字符命令控制双H桥电机驱动模块实现小车的前进后退等动作。项目主要用到小车底盘套件、蓝牙、控制器等...     
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E6%99%BA%E8%83%BD%E8%BD%A6/1.png" width="380" height="230" alt="photos"/>  

### Arduino实现串口控制小车     

下面按照制作过程为大家介绍如何来弄。    

一、安装4WD小车，小车是纯金属的外壳比较抗撞不容易损坏，亚克力的也行，视自己情况而定。
[安装视频](http://v.youku.com/v_show/id_XNTU2NjY3MDI0.html)              
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E6%99%BA%E8%83%BD%E8%BD%A6/3.png" width="380" height="230" alt="photos"/> 

安装好小车地盘后再小车地盘内部安装双H桥驱动和电池将控制引脚用3P杜邦线接到Arduino上，连接好电源向Arduino内烧录程序（编译软件为Arduino IDE）。代码如下：                 

	    #define  pinI1  9      //定义I1接口
        #define  pinI2  8      //定义I2接口
        #define  speedpin 10   //定义EA(PWM调速)接口
        #define  pinI3  4      //定义I3接口
        #define  pinI4  5      //定义I4接口
        #define  speedpin1 6   //定义EB(PWM调速)接口 
        #define SPEED    150 
        char opt = ' ' ; 
	void setup()
	{ 
	  Serial.begin(115200);
	  pinMode(pinI1,OUTPUT);       //初始化电机控制引脚为输出
	  pinMode(pinI2,OUTPUT);
	  pinMode(speedpin,OUTPUT);
	  pinMode(pinI3,OUTPUT);       //初始化电机控制引脚为输出
	  pinMode(pinI4,OUTPUT);
	  pinMode(speedpin1,OUTPUT);
	}
	 void loop()
	{
	    while(Serial.available()>0)
	      opt = Serial.read();
	    switch(opt)
	    {
	      case 'w':
	        Straight(200);
	        break;
	      case 'a':
	        zuozhuan(200);
	        break;
	      case 's':
	        Retreat(200);
	        break;
	      case 'd':
	        youzhuan(200);
		break;
	      case 'x':
	        Stop(200);
	        break;
	      case 'q':
	        Straight(200);
	        delay(1000);
	        zuozhuan(200);
	        delay(500);
	         Straight(200);
	        delay(1000);
	        youzhuan(200);
	        delay(500);
	        Stop(200);
	        opt = -1;
	        break;
	      default:
	        break;
	    }
	    Serial.flush();
	}
	//直行函数time为直行的时间  单位ms
	 void Straight(int time)
	 {
	     analogWrite(speedpin,SPEED);//输入模拟值进行设定速度
	     analogWrite(speedpin1,SPEED);
     
	     digitalWrite(pinI4,HIGH);//使直流电机（右）逆时针转
	     digitalWrite(pinI3,LOW);
     
	     digitalWrite(pinI1,HIGH);//使直流电机（左）顺时针转
	     digitalWrite(pinI2,LOW);     
	     delay(time);
	 } 
	  //右转函数time为直行的时间  单位ms
	 void youzhuan(int time)
	 {
	     analogWrite(speedpin,SPEED);//输入模拟值进行设定速度
	     analogWrite(speedpin1,SPEED);
     
	     digitalWrite(pinI4,HIGH);//使直流电机（右）逆时针转
	     digitalWrite(pinI3,LOW);
     
	     digitalWrite(pinI1,LOW);//使直流电机（左）顺时针转
	     digitalWrite(pinI2,HIGH);     
	     delay(time);
	 }
	  //左转函数time为直行的时间  单位ms
	 void zuozhuan(int time)
	 {
	     analogWrite(speedpin,SPEED);//输入模拟值进行设定速度
	     analogWrite(speedpin1,SPEED);
     
	     digitalWrite(pinI4,LOW);//使直流电机（右）逆时针转
	     digitalWrite(pinI3,HIGH);
     
	     digitalWrite(pinI1,HIGH);//使直流电机（左）顺时针转
	     digitalWrite(pinI2,LOW);     
	     delay(time);
	 }
	 //后退函数time为后退的时间  单位ms
	 void Retreat(int time)
	 {
	     analogWrite(speedpin,SPEED);//输入模拟值进行设定速度
	     analogWrite(speedpin1,SPEED);
     
	     digitalWrite(pinI4,LOW );//使直流电机（右）顺时针转
	     digitalWrite(pinI3,HIGH);
     
	     digitalWrite(pinI1,LOW);//使直流电机（左）逆时针转
	     digitalWrite(pinI2,HIGH);
 
	     delay(time);
	 }
 
	//刹车函数time为停车的时间  单位ms
	 void Stop(int time)
	 {
	     digitalWrite(pinI4,HIGH);//使直流电机（右）刹车
	     digitalWrite(pinI3,HIGH);
     
	     digitalWrite(pinI1,HIGH);//使直流电机（左）刹车
	     digitalWrite(pinI2,HIGH);
	     delay(time);
 
	 }


程序下载好后安装蓝牙模块，通过串口助手进行测试，确定字符命令可以控制小车。      


### Kinect与Arduino进行串口通信       

下面进行Kinect的代码编写，我采用的是processing软件（最好使用低版本的），使用前需要安装Kinect驱动`OpenNI_NITE_Installer-win32-0.27`和kinect的链接库`SimpleOpenNI-0.27`<a href="https://code.google.com/p/simple-openni/downloads/list" target="_blank">下载地址</a>。         

下载SimpleOpenNI这个库需要翻墙下载，具体方法可看我这篇文章：
<a href="https://robotkang.cc/2017/11/The-ladder/" target="blank">如何高效且优雅的翻墙</a>             

 解压驱动包，首先安装`OpenNI`，然后安装`SensorKinect`，最后Sensor全部安装完成以后，重启电脑。将你的Kinect连接上电脑插好电源，可以通过查看控制面板中的设备管理器，检查你的电脑是否已 经识别`Kinect`。      
 
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E6%99%BA%E8%83%BD%E8%BD%A6/2.png" width="300" height="180" alt="photos"/>

驱动安装完成后下载`processing`软件双击打开，打开后会在`我的文档`中出现processing文件夹讲下载的库文件`SimpleOpenNI-0.27`解压后复制到processing下的libraries下如果没有新建一个即可。重新打开processing就可以进行Kenect的程序编写了。         

控制小车的代码如下：      


		import SimpleOpenNI.*;
		SimpleOpenNI  kinect;
 
		import processing.serial.*;
		Serial port;
 
		PFont myFont;
		String myStr;
		String Str_w;
		String Str_s;
		String Str_a;
		String Str_d;
		String Str_x;
		String Str_temp_NO;
		String Str_temp_Yes;
 
		PVector right_hand;
		PVector right_hip;
 
		PVector head;
 
		PVector left_hand;
		PVector left_hip;
 
		PVector difference;
		float   shouju;
		float   youtou;
		float   zuotou;
		float   youhip;
		float   zuohip;
 
		char ch_w= 'w';
		char ch_s= 's';
		char ch_a= 'a';
		char ch_d= 'd';
		char ch_x= 'x';
 
		void setup() 
		{
		  size(640, 600);   
		  kinect = new SimpleOpenNI(this); 
		  kinect.enableDepth(); 
		  kinect.enableRGB();  
		  kinect.setMirror(true);  
		  kinect.enableUser(SimpleOpenNI.SKEL_PROFILE_ALL); 
  
		  myFont = createFont("黑体", 32); 
		  myStr = "重庆文理学院机器人研究所"; 
		  Str_w = "前进";
		  Str_s = "后退";
		  Str_a = "左转";
		  Str_d = "右转";
		  Str_x = "停止"; 
		  Str_temp_NO = "未识别";
		  Str_temp_Yes = "连接成功";
  
		  right_hand = new PVector();
		  right_hip = new PVector();
 
		  head = new PVector();
 
		  left_hand = new PVector();
		  left_hip = new PVector();
  
		  println(Serial.list());//定义串口
		  String portName = Serial.list()[0];
		  port = new Serial(this, portName, 115200);//波特率
		}
 
		void draw() 
		{ 
		  background(80,100,140);//
		kinect.update();
  
		  //PImage depthImage = kinect.depthImage();
		  //image(kinect.depthImage(),0, 0);  
		  PImage rgbImage = kinect.rgbImage();  
		  image(rgbImage, 0, 0); 
  
		  fill(0,0,255); 
		  textFont(myFont); 
		  text(myStr, 100, 530);   
		  text("www.cqwu.net" , 195, 565);
   
		  IntVector userList = new IntVector();
		  kinect.getUsers(userList);
 
		  if (userList.size() > 0)
		  {
		    int userId = userList.get(0);
		    onEndCalibration(userId, true);
 
		    if ( kinect.isTrackingSkeleton(userId))
		    {
		        fill(0,0,255);
		        textFont(myFont); 
		        text(myStr, 100, 530);   
		        text("www.cqwu.net " , 195, 565);
        
		        fill(0, 255, 0);
		        textSize(25);
		        text(Str_temp_Yes, 270,30);
        
		        kinect.getJointPositionSkeleton(userId, SimpleOpenNI.SKEL_RIGHT_HAND,right_hand);
		        kinect.convertRealWorldToProjective(right_hand, right_hand);
      
		        kinect.getJointPositionSkeleton(userId, SimpleOpenNI.SKEL_RIGHT_HIP,right_hip);
		        kinect.convertRealWorldToProjective(right_hip, right_hip);
            
		        kinect.getJointPositionSkeleton(userId, SimpleOpenNI.SKEL_HEAD,head);
		        kinect.convertRealWorldToProjective(head, head);
        
		        kinect.getJointPositionSkeleton(userId, SimpleOpenNI.SKEL_LEFT_HAND,left_hand);
		        kinect.convertRealWorldToProjective(left_hand, left_hand);
              
		        kinect.getJointPositionSkeleton(userId, SimpleOpenNI.SKEL_LEFT_HIP,left_hip);
		        kinect.convertRealWorldToProjective(left_hip, left_hip);
        
		       //textSize(20);
		        difference = PVector.sub(right_hand, left_hand);
		        shouju = difference.mag();
		// text("shouju: " + int(shouju), 20, 20);
         
		        difference = PVector.sub(right_hand, head);
		        youtou = difference.mag();
		      //  text("youtou: " + int(youtou), 20, 45);
        
		        difference = PVector.sub(left_hand, head);
		        zuotou = difference.mag();
		      //  text("zuotou: " + int(zuotou), 20, 70);
        
		        difference = PVector.sub(right_hand, right_hip);
		        youhip = difference.mag();
		      //  text("youhip: " + int(youhip), 20, 95);
        
		        difference = PVector.sub(left_hand, right_hip);
		        zuohip = difference.mag();
             //  text("zuohip: " + int(zuohip), 20, 120); 
        
		        fill(255, 255, 0);
		        textSize(20);
		        if(shouju>400 && youtou>200 && zuotou>200 && youhip>200 && zuohip>200)
		        {
		          text(Str_w, 20, 40);
		          port.write(ch_w);
		        }
		        else if(shouju<200 && youtou<200 && zuotou<200 && youhip>200 && zuohip>200)
		        {
		          text(Str_s, 20, 40);
		          port.write(ch_s); 
		        }
		        else if(shouju>300 && youtou>180 && zuotou>180 && youhip<150 && zuohip>250)
		        {
		          text(Str_a, 20, 40);
		          port.write(ch_a); 
		        }
		        else if(shouju>300 && youtou>180 && zuotou>180 && youhip>200 && zuohip<150)
		        {
		          text(Str_d, 20, 40);
		          port.write(ch_d); 
		        }
		        else if(shouju<250 && youtou>180 && zuotou>180 && youhip<180 && zuohip<180)
		        {
		          text(Str_x, 20, 40);
		          port.write(ch_x); 
		        }        
		        /***************************************************************
		        fill(255, 0, 0);
		        ellipse(left_hip.x, left_hip.y, 15, 15);
		        ellipse(left_hand.x, left_hand.y, 15, 15);
		        ellipse(head.x, head.y, 15, 15);
		        ellipse(right_hip.x, right_hip.y, 15, 15);
		        ellipse(right_hand.x, right_hand.y, 15, 15);
		        ****************************************************************/
		        /****************************************************************
		        stroke(0, 255, 0);
		        strokeWeight(4);
		        line(right_hand.x, right_hand.y, head.x, head.y);
		        line(right_hand.x, right_hand.y, right_hip.x, right_hip.y);
		        line(left_hand.x, left_hand.y, head.x, head.y);
		        line(left_hand.x, left_hand.y, left_hip.x, left_hip.y);
		        ****************************************************************/
		    }
		  }
		  else
		  {
		      fill(255, 0, 0);
		      textSize(25);
		      text(Str_temp_NO, 280, 30);
		  }
		}
 
		// user-tracking callbacks!
		void onNewUser(int userId) {
		  println("start pose detection");
		  kinect.startPoseDetection("Psi", userId);
		}
		void onEndCalibration(int userId, boolean successful) {
		  if (successful) {
		    println("  User calibrated !!!");
		    kinect.startTrackingSkeleton(userId);
		  }
		  else {
		    println("  Failed to calibrate user !!!");
		    kinect.startPoseDetection("Psi", userId);
		  }
		}
		void onStartPose(String pose, int userId) {
		  println("Started pose for user");
		  kinect.stopPoseDetection(userId);
		  kinect.requestCalibrationSkeleton(userId, true);
		}


程序编写完成后连接蓝牙串口（注意没有串口时程序会报错）这样一个体感智能车就制作完成了。    



----------
>  我觉得生命是最重要的，所以在我心里，没有事情是解决不了的。不是每一个人都可以幸运的过自己理想中的生活，有楼有车当然好了，没有难道哭吗？所以呢，我们一定要享受我们所过的生活。——《新不了情》
<br>

　



