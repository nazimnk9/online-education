(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{98165:function(e,c,a){"use strict";a.d(c,{Z:function(){return i}});var t=a(1413),n=a(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},l=a(42135),r=function(e,c){return n.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:c,icon:s}))};r.displayName="SyncOutlined";var i=n.forwardRef(r)},2616:function(e,c,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stripe/cancel",function(){return a(76046)}])},64806:function(e,c,a){"use strict";var t=a(85893),n=a(41664),s=a.n(n),l=a(67294);let r=()=>{let[e,c]=(0,l.useState)("");return(0,l.useEffect)(()=>{c(window.location.pathname)},[window.location.pathname]),(0,t.jsx)("div",{className:"nav flex-column nav-pills",children:(0,t.jsx)(s(),{legacyBehavior:!0,href:"/user",children:(0,t.jsx)("a",{className:"nav-link ".concat("/user"===e&&"active"),children:"Dashboard"})})})};c.Z=r},86437:function(e,c,a){"use strict";var t=a(85893),n=a(67294),s=a(8433),l=a(11163),r=a(98165),i=a(64806);let d=e=>{let{children:c,showNav:a=!0}=e,[d,o]=(0,n.useState)(!1),u=(0,l.useRouter)();(0,n.useEffect)(()=>{f()},[]);let f=async()=>{try{let{data:e}=await s.Z.get("/api/current-user");e.ok&&o(!0)}catch(e){console.log(e),o(!1),u.push("/login")}};return(0,t.jsx)(t.Fragment,{children:d?(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-2",children:a&&(0,t.jsx)(i.Z,{})}),(0,t.jsx)("div",{className:"col-md-10",children:c})]})}):(0,t.jsx)(r.Z,{spin:!0,className:"d-flex justify-content-center display-1 text-primary p-5"})})};c.Z=d},76046:function(e,c,a){"use strict";a.r(c),a.d(c,{default:function(){return f}});var t=a(85893),n=a(1413),s=a(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z"}},{tag:"path",attrs:{d:"M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 003 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 00-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7.2-4.5-3.4-8.3-8-8.3z"}}]},name:"cloud-sync",theme:"outlined"},r=a(42135),i=function(e,c){return s.createElement(r.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:c,icon:l}))};i.displayName="CloudSyncOutlined";var d=s.forwardRef(i),o=a(86437);let u=()=>(0,t.jsxs)(o.Z,{showNav:!1,children:[(0,t.jsx)("div",{className:"row text-center",children:(0,t.jsxs)("div",{className:"col-md-9",children:[(0,t.jsx)(d,{className:"display-1 text-danger p-5"}),(0,t.jsx)("p",{className:"lead",children:"Payment failed. Try again."})]})}),(0,t.jsx)("div",{className:"col-md-3"})]});var f=u}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2616)}),_N_E=e.O()}]);