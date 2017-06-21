<template>
  <div id="app">
    <div class="head top  J-Head">
    <div class="width">
      <a href="/" class="fl logo"><img src="http://www.nodegeek.org/logo.png"></a>
      <div class="settings">
        <div class="raidus">未登录</div>
        <div class="trans">
          <a href="/register">注册</a>
          <a href="/login">登录</a>
        </div>
      </div>
      <div class="menu-box">
        <div class="menu">
          <a href="/" class="item active">主页</a>
          <a href="/categories/tool" class="item">工具</a>
          <a href="/categories/share" class="item">分享</a>
          <a href="/categories/essay" class="item">随笔</a>
          <a href="/categories/exhibition" class="item">展示</a>
        </div>
      </div>
  </div>
</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
  display: block;
}

ul,ol,li,p,img,h1,h2,h3,h4,h5,dt,dd,dl,body,span, strong,code, em, img, button, select, textarea {
  color: #666;
  padding: 0px;
  margin: 0px;
}
h1,h2,h3,h4,h5,h6 {
  font-weight: 100;
}
select{
  padding: 2px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #f0f0f0;
}
ul, ol {
  list-style: none;
}

img {
  border: none;
  vertical-align: top;
}

a {
  text-decoration: none;
  color: #333;
}

a:visited,a:link {
  outline: none;
}
input{
  padding: 2px 10px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #f0f0f0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.clear {
  clear: both;
}

.clearfix:after {
  display: block;
  content: '';
  height: 0;
  clear: both;
}

body {
  font-family: '微软雅黑';
  line-height: 18px;
  font-size: 14px;
  color: #666;
  background-color: #f9f9f9;
}

.fl{
  float: left;
}

.fr{
  float: right;
}

.font12{
  font-size: 12px;
  line-height: 18px;
  color: #999;
}

.font14{
  font-size: 14px;
  line-height: 20px;
  color: #999;
}

.font16{
  font-size: 16px;
  line-height: 22px;
  color: #666;
}

.font18{
  font-size: 18px;
  line-height: 24px;
  color: #666;
}

.font20{
  font-size: 20px;
  line-height: 26px;
  color: #333
}

.font22{
  font-size: 22px;
  line-height: 28px;
  color: #333
}
.font42{
  font-size: 42px;
  line-height: 84px;
  color: #333
}

.iconfont{
  font-family: 'iconfont-tcl';
}

.iconspan{
  display: inline-block;
  padding-right: 5px;
}

.margin5{
  margin: 5px 0;
}

.margin10{
  margin: 10px 0;
}

.marginT20{
  margin-top: 20px;
}


.marginL12{
  margin-left: 12px;
}

.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0
}

.clearfloat:before {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0
}
.width{
  width: 100%;
  max-width: 1120px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #FFF;
  position: relative;
}
.head{
  width: 100%;
  padding: 0 60px;
  height: 60px;
  line-height: 60px;
  background-color: #26272b;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
    position: relative;
    z-index: 10;
}
.head.top {
  height: 230px;
}
.head .width{
  background-color: transparent;
}
.head .logo{
    margin: 10px 0;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 45px;
    z-index: 10;
}
.head .logo-box {
  padding: 5px 0;
  height: 60px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.head .logo img, .head .logo-box img {
  max-height: 100%;
}
.head .menu-box{
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
}
.head.top .width{
  height: 230px;
}
.head .menu-box .menu{
  width: 100%;
  height: 50px;
  line-height: 50px;
    max-width: 1120px;
    padding: 0 15px;
    background: #33363b;
    z-index: 1;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 -1px 0 rgba(0,0,0,0.2), inset 1px 0 0 rgba(0,0,0,0.2), inset -1px 0 0 rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 -1px 0 rgba(0,0,0,0.2), inset 1px 0 0 rgba(0,0,0,0.2), inset -1px 0 0 rgba(0,0,0,0.2);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 -1px 0 rgba(0,0,0,0.2), inset 1px 0 0 rgba(0,0,0,0.2), inset -1px 0 0 rgba(0,0,0,0.2);
}
.head .settings {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 5px 0px 5px 10px;
  background-color: #333;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  top: 0;
  right: 0;
  position: absolute;
}
.head .settings>div {
  width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #333;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    line-height: 50px;
    font-size: 12px;
    text-align: center;
}
.head .settings .raidus {
  z-index: 2;
  overflow: hidden;
}
.head .settings .raidus img{
  max-width: 100%;
  border-radius: 50px;
  overflow: hidden;
}
.head .settings .trans {
  height: 0px;
  top: 15px;
  overflow: hidden;
}
.head .settings:hover .trans {
  border-radius: 10px;
  height: 40px;
  padding: 45px 0 15px 0;
  background-color: #454545;
}
.head .settings .trans a{
  display: block;
  line-height: 22px;
  color: #999;
  -webkit-transition: all 0.3s ;
  transition: all 0.3s ;
  text-align: center;
}
.head .settings .trans a:hover {
  background-color: #3a3939;
}
.head .menu-box .menu-icon{
  width: 60px;
  height: 60px;
  font-family: 'iconfont-tcl';
  color: #FFF;
  font-size: 26px;
  cursor: pointer;
  text-align: center;
  display: none;
  float: right;
}
.head .menu .item{
  padding: 0 40px;
  display: inline-block;
  color: #FFF;
  line-height: 50px;
  margin-left: -4px;
}
.head .menu .item:hover{
  color: #6bc30d;
  /*background-color: #36333A;*/
}
.head .menu .item.active{
  color: #6bc30d;
  /*background-color: #302D35;*/
}
</style>
