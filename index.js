// document.onmousewheel = (function(){
//     var startTime = 0, //翻屏起始时间  
//     endTime = 0,  
//     now = 0,
//     target = 0,
//     scrolling = false,
//     main = document.documentElement;
//     var clientH = window.innerHeight;
//     return function scrollFun(event){
//         startTime = new Date().getTime();  
//         var delta = event.detail || (-event.wheelDelta);
//         var flag = delta > 0 ? 1 : -1;
//             var scrollTop = document.documentElement.scrollTop ;
//             if(!scrolling){
//                 scrolling = true;
//                 var target = Math.ceil(parseInt(scrollTop / clientH) * clientH + clientH * flag);
//                 console.log(target)
//                 if(target + clientH > parseInt(getComputedStyle(main).height) || target < 0){
//                     return;
//                 }
//                 var id = setInterval(function(){
//                     if(document.documentElement.scrollTop < target){
//                         document.documentElement.scrollTop += (target-scrollTop) / 10 * flag;
//                         console.log('scroll')
//                     } else {
//                         scrolling = false;
//                         clearInterval(id)
//                         console.log('not scroll')
//                     }
//                 }, 20)
//                 document.documentElement.scrollTop = Math.ceil(parseInt(scrollTop / clientH) * clientH + clientH);
//                 console.log(document.documentElement.scrollTop)
//                 console.log('==============')
//         }else{  
//             event.preventDefault();    
//         }

//     }
// })();

  