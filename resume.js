
function hovereffects(hoverid, appearid, opacity1, opacity2, backopacity1, backopacity2 ){

    document.querySelector(hoverid).addEventListener('mouseenter',function(){
             this.style.opacity = opacity1; //set the hovered part opacity
             var elements = document.querySelectorAll(appearid); // set var elements for appeared part
            elements.forEach(function (element){
                var currentVisibility = window.getComputedStyle(element).visibility;
                if (currentVisibility == "hidden"){
                    element.style.visibility = "visible";
                    element.style.opacity= opacity2;
                }
                else{
                    element.style.opacity= opacity2;
                }
         });

        } );

        document.querySelector(appearid).addEventListener('mouseleave',function(){
            document.querySelector(hoverid).style.opacity = backopacity1; //set back the hovered part opacity
          
            var elements = document.querySelectorAll(appearid); // set var elements for appeared part
            elements.forEach(function (element){   
            
                element.style.visibility = "hidden";
                element.style.opacity= backopacity2;
            
     });

        
        });
    } 



hovereffects('#guide','.buttoncontainer' , 0, 1, 1, 0 )




// document.querySelector('.ins').addEventListener('mouseenter', function () {
//     document.querySelector('p').style.opacity = 0.03;
//     document.querySelectorAll('.wannachange').forEach(function (img) {
//         img.style.opacity = 0.03;
//     });
// })
// document.querySelector('.ins').addEventListener('mouseleave', function () {
//     document.querySelector('p').style.opacity = 1;
//     document.querySelectorAll('.wannachange').forEach(function (img) {
//         img.style.opacity = 1;
//     });
// })
// document.querySelector('.wechat').addEventListener('mouseenter', function () {
//     document.querySelector('p').style.opacity = 0.03;
//     document.querySelectorAll('.wannachange').forEach(function (img) {
//         img.style.opacity = 0.03;
//     });
// })
// document.querySelector('.wechat').addEventListener('mouseleave', function () {
//     document.querySelector('p').style.opacity = 1;
//     document.querySelectorAll('.wannachange').forEach(function (img) {
//         img.style.opacity = 1;
//     });
// })