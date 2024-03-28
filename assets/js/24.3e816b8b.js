(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{310:function(e,t,v){"use strict";v.r(t);var l=v(10),i=Object(l.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("summary",[t("b",[e._v("2022-09-19 星期一")])]),e._v(" "),t("blockquote",[t("p",[e._v("人生就是这样，求上得中求中得下，求下而不得。职场黄金期，没几年的，你年轻，要跟优秀的人一起做事，学会他们的工作方法，待人处事，不要一直想着要好好做，就单纯的好好去做。所有的学习，最开始都像是在照镜子，无非是学到了，再换一个老师，换一面镜子，直到有一天你发现，新的镜子里是你自己，你就有你自己的方法了，你就可以做别人的镜子了。")])]),e._v(" "),t("p",{staticStyle:{color:"blue"}},[e._v("1.使用代码画一个三角形 【CSS】")]),e._v(" "),t("details",[t("summary",[t("b",[e._v("参考答案")])]),e._v(" "),t("p"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".triangle{\n  width:0;\n  height:0;\n  border:100px solid red;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n\n")])])]),t("p")]),e._v(" "),t("p",{staticStyle:{color:"blue"}},[e._v("2. 1rem、1em、1vh、1vw、1px各自代表的含义？vw和vh与百分比的区别？vw和%可以同时使用吗，比如宽度用vw，padding用%？ 讲讲viewport和移动端布局 【CSS】")]),e._v(" "),t("details",[t("summary",[t("b",[e._v("参考答案")])]),e._v(" "),t("p",[t("ul",[t("li",[t("p",[e._v("1rem与网站根标签font-size有关，若html根标签设置font-size:20px,那么这里的1rem为20px；")])]),e._v(" "),t("li",[t("p",[e._v("1em与父元素有关，若父元素设置的font-size:20px;那么在子组件中2em就表示为40px；")])]),e._v(" "),t("li",[t("p",[e._v("1vh(Viewport Height)表示可视化窗口高度的的1%；")])]),e._v(" "),t("li",[t("p",[e._v("1vw(Viewport Width)表示可视化窗口宽度的的1% ；")])]),e._v(" "),t("li",[t("p",[e._v("1px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的；")])]),e._v(" "),t("li",[t("p",[e._v("vw和%同时使用可能会发生宽度自动滑动的问题，建议尽量宽度使用%。")])]),e._v(" "),t("li")])])]),e._v(" "),t("p",{staticStyle:{color:"blue"}},[e._v("3. 普通文档流的布局规则和BFC布局规则？BFC的理解？清除浮动的方式？ 【CSS】")]),e._v(" "),t("details",[t("summary",[t("b",[e._v("参考答案")])]),e._v(" "),t("p"),t("p",[e._v("普通文档流奇怪问题：")]),e._v(" "),t("ol",[t("li",[e._v("两个相邻元素的margin会重叠")]),e._v(" "),t("li",[e._v("父子元素相邻时，子元素的margin属性会传递到父元素中")]),e._v(" "),t("li",[e._v("普通文档流存在的问题可以通过触发BFC机制去解决")])]),e._v(" "),t("ul",[t("li",[e._v("触发BFC机制：")])]),e._v(" "),t("ol",[t("li",[e._v("float:left | right (父元素若没给定高度，使用float布局、会有高度坍缩问题)")]),e._v(" "),t("li",[e._v("overflow:auto| hidden| scroll")]),e._v(" "),t("li",[e._v("display:flex | inline-block | table-cells")]),e._v(" "),t("li",[e._v("position:absolute | fixed")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/febobo/web-interview/issues/99",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/febobo/web-interview/issues/99"),t("OutboundLink")],1)]),e._v(" "),t("p")]),e._v(" "),t("p",{staticStyle:{color:"blue"}},[e._v("4. 说一下图片懒加载和预加载 ")]),e._v(" "),t("details",[t("summary",[t("b",[e._v("参考答案")])]),e._v(" "),t("p"),t("p",[e._v("预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。"),t("br"),e._v("\n懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。")]),e._v(" "),t("p",[e._v("两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。\n懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。")]),e._v(" "),t("p")]),e._v(" "),t("p",{staticStyle:{color:"blue"}},[e._v("5. JS哪些操作会引起内存泄漏  【JS】")]),e._v(" "),t("details",[t("summary",[t("b",[e._v("参考答案")])]),e._v(" "),t("p",[t("ol",[t("li",[e._v("意外的全局变量；在js文件开头添加 ‘use strict’，开启严格模式；")]),e._v(" "),t("li",[e._v("未清理的DOM元素引用；\nvar a = document.getElementById('id');\ndocument.body.removeChild(a);\n解决：a = null；")]),e._v(" "),t("li",[e._v("被遗忘的定时器或者回调；\n解决：调用clearInterval或者clearTimeout")]),e._v(" "),t("li",[e._v("闭包")])])])]),e._v(" "),t("comment")],1)}),[],!1,null,null,null);t.default=i.exports}}]);