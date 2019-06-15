---
layout: page
title: 留言板「MESSAGE」
comments: true 
---

<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/2345%E6%88%AA%E5%9B%BE20170318141303_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg" width="360" height="250" alt="huanying"/>


<p><h4>有什么话要对我说吗？</h4>     
<P><h4>这里是你畅所欲言的地方，可以咨询，</h4>
<p><h4>可以交流，可以感叹，可以发飙，但不可以订外卖 、、、</h4>   

<div class="text-center" style="margin-top: 15px;">
    <img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/%E5%A4%9A%E5%90%88%E4%B8%80%E6%89%93%E8%B5%8F%E4%BA%8C%E7%BB%B4%E7%A0%81.png" width="128" height="128" title="支付宝、微信、手机QQ扫码打赏">
</div>

<p>
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/log_yuan.png" width="20" height="20" alt="photos" style="display:inline;margin-bottom: -5px;"/>
<a href="/donation/" target="_blank" style="text-decoration:none;color:#FF4500">赞助光荣榜</a> &nbsp;&nbsp;
<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/log_yuan.png" width="20" height="20" alt="photos" style="display:inline;margin-bottom: -5px;"/>
<a href="/dsimg/" style="color:#FF4500" target="_blank" style="text-decoration:none">Donation</a> &nbsp;&nbsp;
<p>花径不曾缘客扫，蓬门今始为君开！
我一直相信，所有的相遇都是一种缘分。能够看到这些文字，我们之间就已经产生了些不可言喻，却又令人期待的微妙联系。

虽然不知文字维系的缘分会有多长。
既然来了，请尽量享受O(∩_∩)O~。




<!--<audio autoplay="autopaly" controls="controls" loop="loop"  preload="auto" id="audio1">
	<source src="http://omjh2j5h3.bkt.clouddn.com/%E6%9D%8E%E7%8E%89%E5%88%9A%20-%20%E5%88%9A%E5%A5%BD%E9%81%87%E8%A7%81%E4%BD%A0.mp3" type="audio/mp3">你的浏览器不支持audio标签</a>
	</audio>

<div>  
           
 
<object width="330" height="180" data="http://music.163.com/style/swf/widget.swf?sid=441877316&type=0&auto=1&width=310&height=430" type="application/x-shockwave-flash"></object>  
          
  </div> 
-->


<div id="QPlayer" class="QPlayer">
<div id="pContent">
	<div id="player">
<span class="cover"></span>
<div class="ctrl">
<div class="musicTag marquee">
<strong>Title</strong>
<span> - </span>
<span class="artist">Artist</span>
</div>
<div class="progress">
<div class="timer left">0:00</div>
<div class="contr">
<div class="rewind icon"></div>
<div class="playback icon"></div>
<div class="fastforward icon"></div>
</div>
<div class="right">
<div class="liebiao icon"></div>
</div>
</div>
</div>
</div>
	<div class="ssBtn">
	        <div class="adf"></div>
    </div>
</div>
<ol id="playlist"></ol>
</div>

<script src="/js/jquery.min.js"></script>
<script src="/js/jquery.marquee.min.js"></script>

<script>
	var	playlist = [
{title:"My All",artist:"浜崎あゆみ",mp3:"http://10.247.192.70/2Q2WF68C72B40BD8CF214BAD4C9D1A8B0168A0BAE177_unknown_A7E391748C36FBE69EDCBCDF9BE55BDB7B9A3554_6_116.77.75.203_80/m10.music.126.net/20190122224558/d43f3276f251c7a667a28bfa575c0dd5/ymusic/d0fd/fdba/0f82/f07e62a9a70f5cc09b7351a563755020.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
{title:"Try Everything",artist:"Shakira",mp3:"http://10.247.192.71/2Q2W8EE3EA8028BBBE50E422F1BB84671D0712D172B1_unknown_B57DCE6271C023118F5C8D9ACB6F6E3C73364180_0_116.77.76.230_80/m10.music.126.net/20190122224800/09238a6466e58a113c3da5387256e33b/ymusic/57b3/ecea/f5fe/12b654b5486536ac67cc36742dc6e3e2.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
{title:"Victory",artist:"Two Steps From Hell",mp3:"http://10.247.192.70:81/2Q2W85CDAD9F135F9FD71267C4042E3C2557AB7AFC6A_unknown_9E48C150A06BDADCDFDEFB99533EE59DCD5CEB29_10_116.77.76.229_81/m10.music.126.net/20190122224950/64bcef2e1c9517dcb63cec6829a3823b/ymusic/140e/f621/b3b1/aeed0174bcd6b5fd59f8fdcd05fc42fe.mp3",cover:"http://p4.music.126.net/YXY1vPG5rtdV7w_cWDnNWw==/884007348732141.jpg?param=106x106",},
{title:"Monody",artist:"TheFatRat,Laura Brehm",mp3:"http://10.247.192.70:83/2Q2W49CEF2E3FA931D92565FB00EBBD7C0FFEE45FF07_unknown_91D654C0659BAC0AF2B98A50F0D6C0FB0A125A8F_0_116.77.75.202_83/m10.music.126.net/20190122225037/e374dc010d1f654b171ea795be0e9a63/ymusic/30f0/7291/04c0/1b52de41653825643ed98a871a6b3157.mp3",cover:"http://p3.music.126.net/1odRfg3HXWmYw02EMXKRKQ==/116548232557498.jpg?param=106x106",},
{title:"Luv Letter",artist:"dj okawari ",mp3:"http://10.247.192.71:83/2Q2WC9A24655BC22B25B355238CA2B839DA0C2320647_unknown_BCAA72EE899B9E14D074589694400520B93A0BC7_0_116.77.76.230_83/m10.music.126.net/20190122225119/58562f8422635a521be21ed673556fa4/ymusic/501e/7ea7/8203/9bf3f54d9d7f8e3b32b463ecfc074718.mp3",cover:"http://p4.music.126.net/F2fqWwTTT2DAOKPQKQ-G0A==/5892282813545901.jpg?param=106x106",},
{title:"Born this way",artist:"lady gaga ",mp3:"http://10.247.192.67:81/2Q2W5D6E49490E9A08BC94F62F18719BE4F5C23E616A_unknown_19622556E86744878F7CBBA4856DD0035DD25281_0_116.77.76.226_81/m10.music.126.net/20190122225210/7d31b7024eaf80e79d1da898434df4d9/ymusic/4d7b/cf81/b1a2/03c659fd1ae64d2b5b8d7761ee13a552.mp3",cover:"http://p4.music.126.net/G2nCsXpMc81lcUY-pOHr9Q==/2528876745541310.jpg?param=106x106",},
{title:"The Edge of Glory",artist:"Lady Gaga",mp3:"http://10.247.192.72:81/2Q2W23024728DBB70A1A8E52DDBF16BDB88EB6778DB0_unknown_F2E734ABA62252CF0EBF4B2FC1426E6F53BF489D_4_116.77.76.234_81/m10.music.126.net/20190122225254/185b02a88a94f8867d6e84b3e9abfc83/ymusic/6763/cfde/edfc/25f792523b102b277b60687c488be1c9.mp3",cover:"http://p3.music.126.net/iYG3tZ2xSKrzf65BaDtEJQ==/7929677860524772.jpg?param=106x106",},
{title:"Beautiful",artist:"Eminem ",mp3:"http://10.247.192.69:82/2Q2WAC1DB0D38FC2BEA6BA0970F67E874C2D61CBA7E5_unknown_67551CA99CCEB5B268C118FED19C5A8129E41EBA_0_116.77.76.228_82/m10.music.126.net/20190122225454/66408de614af59f39d93e7014d12870a/ymusic/d09a/13fb/d1c9/4d1b480319625523bec279d506317892.mp3",cover:"http://p4.music.126.net/F2fqWwTTT2DAOKPQKQ-G0A==/5892282813545901.jpg?param=106x106",},
{title:"Hall of Fame",artist:"the script/will.i.am",mp3:"http://10.247.192.72:83/2Q2WF390DFFEB7AA8E7A7854D5329EA743ECA64FB69A_unknown_E3504936CAE67F771DA5857E259D1CFEC80115CB_9_116.77.76.231_83/m10.music.126.net/20190122225548/503432a742119de6c065a336ef8c4320/ymusic/c770/441a/9a8e/2f64d8b7c42eebd33138242101ebfe33.mp3",cover:"http://p4.music.126.net/d5ryd0uwq29KWk3bRZ1wsA==/45079976751142.jpg?param=106x106",},
{title:"刚好遇见你",artist:"李玉刚",mp3:"http://10.247.192.70/2Q2W372C268C52F82E53242C83EB73DE1E48F864904D_unknown_9CB15E4E7BF25C356E685BC9AD7A82595FFF8860_2_116.77.76.229_80/m10.music.126.net/20190122225636/c898955b7bf94d987a22603645752ef3/ymusic/3466/f88c/165c/3520e5664afd420989e88bc3a694c237.mp3",cover:"http://p4.music.126.net/Nn8kTtc14uWJw_UWbEc5mg==/7909886650478099.jpg?param=106x106",},
];
  var isRotate = true;
  var autoplay = true;
</script>
<script src="/js/player.js"></script>
<script>

function bgChange(){
	var lis= $('.lib');
	for(var i=0; i<lis.length; i+=2)
	lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;
</script>

<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
	<title></title>
	<link rel="stylesheet" href="/css/player.css">



<script>
myVid=document.getElementById("audio1");

function setHalfVolume()
  { 
  myVid.volume=0.2;
  } 

</script> 


<!-- 多说评论框 start 
	<div class="ds-thread" data-thread-key="/liuyan/" data-title="留言板" data-url="http://roboutkang/liuyan/"></div>
<!-- 多说评论框 end 
<!-- 多说公共JS代码 start (一个网页只需插入一次) 
<script type="text/javascript">
var duoshuoQuery = {short_name:"robotkang"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		 || document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
	</script>
<!-- 多说公共JS代码 end -->







<!--
<a href="/fangke/" style="color:#708090"> <h5>Recent Visitors</h5></a>  
-->



