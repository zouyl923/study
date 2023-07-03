## pc端常用布局
+ 固定宽度布局（Fixed Width Layout）：将页面元素的宽度设为固定值，页面在不同分辨率下宽度不变。这种布局方式简单易懂，但不利于响应式设计，可能在不同分辨率下出现排版问题。
<code>
.container {
  width: 960px;
  margin: 0 auto;
}
</code>
+ 流式布局（Fluid Layout）：将页面元素的宽度设为百分比，页面在不同分辨率下宽度随之改变，页面元素能够自适应浏览器窗口大小，适合响应式设计，但可能出现排版错乱的问题。
<code>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</code>
+ 自适应布局（Adaptive Layout）：针对不同的分辨率采用不同的布局方式，页面在不同的分辨率下呈现不同的布局，相比固定宽度布局和流式布局更具灵活性，但需要考虑多种布局的设计和开发工作量。
<code>
/* 在 media query 中定义不同的样式 */
/* 适应 1200px 及以上分辨率 */
@media screen and (min-width: 1200px) {
  .container {
    width: 1140px;
    margin: 0 auto;
  }
}

/* 适应 992px 及以上分辨率 */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
}

/* 适应 768px 及以上分辨率 */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .container {
    width: 720px;
    margin: 0 auto;
  }
}

/* 适应 480px 及以上分辨率 */
@media screen and (min-width: 480px) and (max-width: 767px) {
  .container {
    width: 480px;
    margin: 0 auto;
  }
}

/* 适应 480px 以下分辨率 */
@media screen and (max-width: 479px) {
  .container {
    width: 320px;
    margin: 0 auto;
  }
}
</code>
+ 栅格布局（Grid Layout）：采用网格系统布局页面，将页面划分为若干列和行，并按照比例分配宽度，页面元素按照网格分布，便于管理和设计，可快速搭建页面和适配不同分辨率设备。
<code>
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
  </div>
</div>
</code>
+ 混合布局（Hybrid Layout）：将以上多种布局方式进行组合，根据页面特点、设计需求和用户行为进行选择和调整，以达到最佳的页面效果和用户体验。
  <code>
/* 固定宽度布局 */
.header {
  width: 960px;
  margin: 0 auto;
}

/* 流式布局 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</code>


# 字体大小设置

参考B站 
主标题：15px
副标题：14px 
常规文本：13px