(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{59869:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/instructor/course/edit/[slug]",function(){return s(79197)}])},99709:function(e,a,s){"use strict";var t=s(85893),n=s(44466),l=s(53575),o=s(37911),i=s(71577);let{Option:r}=n.Z,c=e=>{let{handleSubmit:a,handleImage:s,handleChange:c,values:d,setValues:u,preview:m,uploadButtonText:p,handleImageRemove:h=e=>e,editPage:g=!1}=e,x=[];for(let e=9.99;e<=100.99;e++)x.push((0,t.jsxs)(r,{children:["$",e.toFixed(2)]},e.toFixed(2)));return(0,t.jsx)(t.Fragment,{children:d&&(0,t.jsxs)("form",{onSubmit:a,children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Name",value:d.name,onChange:c})}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("textarea",{name:"description",cols:"7",rows:"7",value:d.description,className:"form-control",onChange:c})}),(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsxs)(n.Z,{style:{width:"100%"},size:"large",value:d.paid,onChange:e=>u({...d,paid:e,price:0}),children:[(0,t.jsx)(r,{value:!0,children:"Paid"}),(0,t.jsx)(r,{value:!1,children:"Free"})]})})}),d.paid&&(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)(n.Z,{defaultValue:"$9.99",style:{width:"100%"},onChange:e=>u({...d,price:e}),tokenSeparators:[,],size:"large",children:x})})]}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"text",name:"category",className:"form-control",placeholder:"Category",value:d.category,onChange:c})}),(0,t.jsxs)("div",{className:"form-row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsxs)("label",{className:"btn btn-outline-secondary btn-block text-left",children:[p,(0,t.jsx)("input",{type:"file",name:"image",onChange:s,accept:"image/*",hidden:!0})]})})}),m&&(0,t.jsx)(l.Z,{count:"X",onClick:h,className:"pointer",children:(0,t.jsx)(o.C,{width:200,src:m})}),g&&d.image&&(0,t.jsx)(o.C,{width:200,src:d.image.location})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col",children:(0,t.jsx)(i.ZP,{onClick:a,disabled:d.loading||d.uploading,className:"btn btn-primary",loading:d.loading,type:"primary",size:"large",shape:"round",children:d.loading?"Saving...":"Save & Continue"})})})]})})};a.Z=c},68252:function(e,a,s){"use strict";s.d(a,{Z:function(){return m}});var t=s(85893),n=s(67294),l=s(8433),o=s(11163),i=s(98165),r=s(41664),c=s.n(r);let d=()=>{let[e,a]=(0,n.useState)("");return(0,n.useEffect)(()=>{a(window.location.pathname)},[window.location.pathname]),(0,t.jsxs)("div",{className:"nav flex-column nav-pills",children:[(0,t.jsx)(c(),{legacyBehavior:!0,href:"/instructor",children:(0,t.jsx)("a",{className:"nav-link ".concat("/instructor"===e&&"active"),children:"Dashboard"})}),(0,t.jsx)(c(),{legacyBehavior:!0,href:"/instructor/course/create",children:(0,t.jsx)("a",{className:"nav-link ".concat("/instructor/course/create"===e&&"active"),children:"Course Create"})}),(0,t.jsx)(c(),{legacyBehavior:!0,href:"/instructor/revenue",children:(0,t.jsx)("a",{className:"nav-link ".concat("/instructor/revenue"===e&&"active"),children:"Revenue"})})]})},u=e=>{let{children:a}=e,[s,r]=(0,n.useState)(!1),c=(0,o.useRouter)();(0,n.useEffect)(()=>{u()},[]);let u=async()=>{try{let{data:e}=await l.Z.get("/api/current-instructor");e.ok&&r(!0)}catch(e){console.log(e),r(!1),c.push("/")}};return(0,t.jsx)(t.Fragment,{children:s?(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-2",children:(0,t.jsx)(d,{})}),(0,t.jsx)("div",{className:"col-md-10",children:a})]})}):(0,t.jsx)(i.Z,{spin:!0,className:"d-flex justify-content-center display-1 text-primary p-5"})})};var m=u},79197:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return C}});var t=s(85893),n=s(8433),l=s(68252),o=s(67294),i=s(99709),r=s(76770),c=s.n(r),d=s(22920),u=s(11163),m=s(92874),p=s(37911),h=s(30143),g=s(48689),x=s(69814),v=s(72269),j=s(71577),f=s(22004);let N=e=>{let{current:a,setCurrent:s,handleUpdateLesson:n,uploading:l,uploadVideoButtonText:o,handleVideo:i,progress:r}=e;return(0,t.jsx)("div",{className:"container pt-3",children:(0,t.jsxs)("form",{onSubmit:n,children:[(0,t.jsx)("input",{type:"text",className:"form-control square",onChange:e=>s({...a,title:e.target.value}),value:a.title,autoFocus:!0,required:!0}),(0,t.jsx)("textarea",{className:"form-control mt-3",cols:"7",rows:"7",onChange:e=>s({...a,content:e.target.value}),value:a.content}),(0,t.jsxs)("div",{children:[!l&&a.video&&a.video.location&&(0,t.jsx)("div",{className:"pt-2 d-flex justify-content-center",children:(0,t.jsx)(f.Z,{url:a.video.location,width:"410px",height:"240px",controls:!0})}),(0,t.jsxs)("label",{className:"btn btn-dark btn-block text-left mt-3",children:[o,(0,t.jsx)("input",{onChange:i,type:"file",accept:"video/*",hidden:!0})]})]}),r>0&&(0,t.jsx)(x.Z,{className:"d-flex justify-content-center pt-2",percent:r,steps:10}),(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsx)("span",{className:"pt-3 badge",children:"Preview"}),(0,t.jsx)(v.Z,{className:"float-right mt-2",disabled:l,checked:a.free_preview,name:"free_preview",onChange:e=>s({...a,free_preview:e})})]}),(0,t.jsx)(j.ZP,{onClick:n,className:"col mt-3",size:"large",type:"primary",loading:l,shape:"round",children:"Save"})]})})},{Item:y}=m.ZP,w=()=>{let[e,a]=(0,o.useState)({name:"",description:"",price:"9.99",uploading:!1,paid:!0,category:"",loading:!1,lessons:[]}),[s,r]=(0,o.useState)({}),[x,v]=(0,o.useState)(""),[j,f]=(0,o.useState)("Upload Image"),[w,C]=(0,o.useState)(!1),[Z,b]=(0,o.useState)({}),[S,E]=(0,o.useState)("Upload Video"),[_,k]=(0,o.useState)(0),[D,R]=(0,o.useState)(!1),L=(0,u.useRouter)(),{slug:P}=L.query;(0,o.useEffect)(()=>{U()},[P]);let U=async()=>{let{data:e}=await n.Z.get("/api/course/".concat(P));e&&a(e),e&&e.image&&r(e.image)},A=s=>{a({...e,[s.target.name]:s.target.value})},I=async t=>{if(s&&s.location){let e=await n.Z.post("/api/course/remove-image",{image:s});console.log("REMOVED ===>",e)}let l=t.target.files[0];v(window.URL.createObjectURL(l)),f(l.name),a({...e,loading:!0}),c().imageFileResizer(l,720,500,"JPEG",100,0,async s=>{try{let{data:t}=await n.Z.post("/api/course/upload-image",{image:s});console.log("IMAGE UPLOADED",t),r(t),a({...e,loading:!1})}catch(s){console.log(s),a({...e,loading:!1}),(0,d.Am)("Image upload failed. Try again later.")}})},F=async()=>{try{a({...e,loading:!0}),await n.Z.post("/api/course/remove-image",{image:s}),r({}),v(""),f("Upload Image"),a({...e,loading:!1})}catch(s){console.log(s),a({...e,loading:!1}),(0,d.Am)("Failed. Try again later.")}},O=async a=>{a.preventDefault();try{let{data:a}=await n.Z.put("/api/course/".concat(P),{...e,image:s});(0,d.Am)("Successfully Course Updated."),L.push("/instructor")}catch(e){(0,d.Am)(e.response.data)}},T=(e,a)=>{e.dataTransfer.setData("itemIndex",a)},V=async(t,l)=>{let o=t.dataTransfer.getData("itemIndex"),i=e.lessons,r=i[o];i.splice(o,1),i.splice(l,0,r),a({...e,lessons:[...i]});let{data:c}=await n.Z.put("/api/course/".concat(P),{...e,image:s});console.log("LESSONS REARRANGED RES => ",c),(0,d.Am)("Lessons rearranged successfully")},z=async s=>{let t=window.confirm("Are you sure you want to delete?");if(!t)return;let l=e.lessons,o=l.splice(s,1);a({...e,lessons:l});let{data:i}=await n.Z.put("/api/course/".concat(P,"/").concat(o[0]._id));console.log("LESSON DELETED => ",i)},B=async a=>{if(Z.video&&Z.video.location){let a=await n.Z.post("/api/course/video-remove/".concat(e.instructor._id),Z.video);console.log("REMOVED ===>",a)}let s=a.target.files[0];E(s.name),R(!0);let t=new FormData;t.append("video",s),t.append("courseId",e._id);let{data:l}=await n.Z.post("/api/course/video-upload/".concat(e.instructor._id),t,{onUploadProgress:e=>k(Math.round(100*e.loaded/e.total))});console.log(l),b({...Z,video:l}),R(!1)},M=async s=>{s.preventDefault();let{data:t}=await n.Z.put("/api/course/lesson/".concat(P,"/").concat(Z._id),Z);if(E("Upload Video"),C(!1),t.ok){let s=e.lessons,t=s.findIndex(e=>e._id===Z._id);s[t]=Z,a({...e,lessons:s}),(0,d.Am)("Lesson updated successfully")}};return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{className:"jumbotron text-center square",children:"Update Course"}),(0,t.jsx)("div",{className:"pt-3 pb-3",children:(0,t.jsx)(i.Z,{handleSubmit:O,handleImage:I,handleChange:A,values:e,setValues:a,preview:x,uploadButtonText:j,handleImageRemove:F,editPage:!0})}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"row pb-5",children:(0,t.jsxs)("div",{className:"col lesson-list",children:[(0,t.jsxs)("h4",{children:[e&&e.lessons&&e.lessons.length," Lessons"]}),(0,t.jsx)(m.ZP,{onDragOver:e=>e.preventDefault(),itemLayout:"horizontal",dataSource:e&&e.lessons,renderItem:(e,a)=>(0,t.jsxs)(y,{draggable:!0,onDragStart:e=>T(e,a),onDrop:e=>V(e,a),children:[(0,t.jsx)(y.Meta,{onClick:()=>{C(!0),b(e)},avatar:(0,t.jsx)(p.C,{children:a+1}),title:e.title}),(0,t.jsx)(g.Z,{onClick:()=>z(a),className:"text-danger float-right"})]})})]})}),(0,t.jsx)(h.Z,{title:"Update Lesson",centered:!0,visible:w,onCancel:()=>C(!1),footer:null,children:(0,t.jsx)(N,{current:Z,setCurrent:b,handleVideo:B,handleUpdateLesson:M,uploadVideoButtonText:S,progress:_,uploading:D})})]})};var C=w}},function(e){e.O(0,[911,577,466,575,452,317,814,861,774,888,179],function(){return e(e.s=59869)}),_N_E=e.O()}]);