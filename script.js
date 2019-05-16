   var appended = false
       , arrow = document.createElement("div");
   arrow.id = "arrowUp";
   arrow.innerHTML = '<a href="#top">&uarr;</a>';
   window.onscroll = function () {
       var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
       if (scrollTop > 500) {
           if (!appended) {
               document.body.appendChild(arrow);
               appended = true;
           }
       }
       else {
           if (appended) {
               document.body.removeChild(arrow);
               appended = false;
           }
       }

       AOS.init({
  duration: 1200,
})