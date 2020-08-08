(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f91a9a8"],{3419:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",[t._v("Adding a Markdown blog to my Vue + TS site")]),i("p",[t._v("So I've been a C++ application developer for 7 years, and despite my forays into the web stack, I cannot say I'm an expert at it. Nonetheless, I had gone through the process of creating my landing page in plain HTML/CSS, followed by Github Pages in Jekyll, and then finally utilizing VueJS.")]),i("p",[t._v("I wanted then to add a blog component to my site, just for me to do write-ups on things I think are interesting enough for me to want to consolidate my knowledge on them and keep them around (not just in my head).")]),i("p",[t._v("After some research, I ruled out ButterCMS (which Vue recommends) because I wasn't thinking of handling a large volume of posts. The secondary recommendation was Nuxtent, which seemed like it was what I wanted at first, but by the time I managed to get it working, proved to be somewhat incompatible with my existing site.")]),i("p",[t._v("So a little more research later, here we are. I found a great walkthrough by "),i("a",{attrs:{href:"https://dev.to/vycoder/creating-a-simple-blog-using-vue-with-markdown-2omd"}},[t._v("Yev")]),t._v(" and this gave me a good starting point.")]),i("p",[t._v("Since I was using TypeScript instead of JavaScript, once I got an initial implementation hacked together I had to work out how to get it to run with TypeScript. Doing this I discovered a few things:")]),i("h2",[t._v("1. Using a JSON import was tricky in TypeScript.")]),i("p",[t._v("Although JSON import is now supported past Typescript 2.9, it imports as an Object, and Typescript does not allow you to retrieve from an Object using a string (in general, I realize, Typescript restricts such behavior so you must use Map instead, which is more well defined). This was a bit of a problem, since the original implementation utilized strings to automatically retrieve the blog sections and define their children. I had to do some work to pull out the sections and simplify the JSON so that it would read a single string for each entry, while also allowing me to easily extend the blog without messing with "),i("code",{pre:!0},[t._v("router.ts")])]),i("p",[t._v("I ended up with a "),i("code",{pre:!0},[t._v("contents.ts")]),t._v(" file which had the job of pulling in any of the requisitie content pages and then exporting them so that "),i("code",{pre:!0},[t._v("router.ts")]),t._v(" coult pick them up for routing.")]),i("p",[i("img",{attrs:{src:o("f134"),alt:"contents.ts"}})]),i("h2",[t._v("2. Setting up a Contents page")]),i("p",[t._v("I'm pretty new to web technology, so it was a lot of searching and trial and error to get all the routes correctly linked up. I discovered that "),i("code",{pre:!0},[t._v("this.$router")]),t._v(" could be correctly called in one context and gave me the correct router path, but somehow... failed to do the same when I tried to use it to route the abstracts to my actual blog post.")]),i("p",[t._v("It also took a while to re-work the JSON parsing code that "),i("a",{attrs:{href:"https://dev.to/vycoder/creating-a-simple-blog-using-vue-with-markdown-2omd"}},[t._v("Yev")]),t._v(" had used in JavaScript into a more strictly typed format that TypeScript would accept.")]),i("p",[t._v("Anyway~")]),i("p",[t._v("Moving forward, the plan is to start populating this blog every once in awhile with exposition on technical things, or documentation on my mini-projects (like this one), just as a way for me to force myself to consolidate my knowledge and keep track of it.")])])}],a=o("2877"),r={},s=Object(a["a"])(r,i,n,!1,null,null,null);e["default"]=s.exports},f134:function(t,e,o){t.exports=o.p+"img/contents_ts.5e4658d5.png"}}]);
//# sourceMappingURL=chunk-6f91a9a8.423dc4c8.js.map