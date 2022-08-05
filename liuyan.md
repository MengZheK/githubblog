---
layout: page
title: 留言板「MESSAGE」
comments: true 
---

<img src="https://robotkang-1257995526.cos.ap-chengdu.myqcloud.com/image/egypt-clipart-desert-pyramid.png" wwidth="100%" height="auto" alt="photos"/>


> 有什么话要对我说吗？             
> 这里是你畅所欲言的地方，            
> 可以咨询，可以交流，可以感叹，可以发飙，但不可以订外卖 、、、                

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
{title:"这是我一生中最勇敢的瞬间",artist:"棱镜乐队",mp3:"http://music.163.com/song/media/outer/url?id=1366216050.mp3",cover:"http://p4.music.126.net/ysc2LpByNXmzAfz9rRVwYg==/109951165267741474.jpg?param=106x106",},
{title:"My All",artist:"浜崎あゆみ",mp3:"http://music.163.com/song/media/outer/url?id=22737627.mp3",cover:"http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",},
{title:"Try Everything",artist:"Shakira",mp3:"http://music.163.com/song/media/outer/url?id=405485737.mp3",cover:"http://p4.music.126.net/KLw_TLTRUe9pClPv4vlEtQ==/936783906865219.jpg?param=106x106",},
{title:"Victory",artist:"Two Steps From Hell",mp3:"http://music.163.com/song/media/outer/url?id=31654455.mp3",cover:"http://p4.music.126.net/YXY1vPG5rtdV7w_cWDnNWw==/884007348732141.jpg?param=106x106",},
{title:"Monody",artist:"TheFatRat,Laura Brehm",mp3:"http://music.163.com/song/media/outer/url?id=36308916.mp3",cover:"http://p3.music.126.net/1odRfg3HXWmYw02EMXKRKQ==/116548232557498.jpg?param=106x106",},
{title:"Luv Letter",artist:"dj okawari ",mp3:"http://music.163.com/song/media/outer/url?id=406232.mp3",cover:"http://p4.music.126.net/F2fqWwTTT2DAOKPQKQ-G0A==/5892282813545901.jpg?param=106x106",},
{title:"Born this way",artist:"lady gaga ",mp3:"http://music.163.com/song/media/outer/url?id=21038513.mp3",cover:"http://p4.music.126.net/G2nCsXpMc81lcUY-pOHr9Q==/2528876745541310.jpg?param=106x106",},
{title:"The Edge of Glory",artist:"Lady Gaga",mp3:"http://music.163.com/song/media/outer/url?id=21038622.mp3",cover:"http://p3.music.126.net/iYG3tZ2xSKrzf65BaDtEJQ==/7929677860524772.jpg?param=106x106",},
{title:"Beautiful",artist:"Eminem ",mp3:"http://music.163.com/song/media/outer/url?id=1405384220.mp3",cover:"http://p4.music.126.net/F2fqWwTTT2DAOKPQKQ-G0A==/5892282813545901.jpg?param=106x106",},
{title:"Hall of Fame",artist:"the script/will.i.am",mp3:"http://music.163.com/song/media/outer/url?id=27508559.mp3",cover:"http://p4.music.126.net/d5ryd0uwq29KWk3bRZ1wsA==/45079976751142.jpg?param=106x106",},
{title:"刚好遇见你",artist:"李玉刚",mp3:"http://music.163.com/song/media/outer/url?id=486188225.mp3",cover:"http://p4.music.126.net/Nn8kTtc14uWJw_UWbEc5mg==/7909886650478099.jpg?param=106x106",},
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










<!--
<a href="/fangke/" style="color:#708090"> <h5>Recent Visitors</h5></a>  
-->



