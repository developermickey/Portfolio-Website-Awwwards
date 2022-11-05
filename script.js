function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function (elem) {

        //Create Two Spans
        var spanParent = document.createElement("span");
        var spanChild = document.createElement("span");
    
        // parent and Child both sets their respective classess    
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
    
        // Span Parent Get Child and Child Gets Elem Detaisl
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        //Elem Replaces it's value with parent span
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    
    })
}
function loaderAnimation() {
    var tl = gsap.timeline();
tl

.from(".child span", {
    x: 100,
    stagger: .2,
    duration: 1.5,
    ease: Power3.easeInOut
})

.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInout
})
.to("#loader", {
    height: 0,
    duration: 1,
    ease: Circ.easeInout
})
.to("#green", {
    height: "100%",
    top: 0,
    duration: 1,
    delay: -1.5,
    ease: Circ.easeInout
})

.to("#green", {
    height: "0%",
    top: 0,
    duration: 1,
    delay: -.9,
    ease: Circ.easeInout
})

}

revealToSpan();

// loaderAnimation();



gsap.from("g path", {
    strokeDasharray: 64.68521881103516,
    duration: 1,
    ease: Power3
})













// var tl = gsap.timeline();
// tl
// .to("#fs", {
//     height: 0,
//     duration: 2,
//     ease: Expo.easeInOut
// })
// .to("#elem", {
//     height: "100%",
//     duration: 2,
//     delay: -2,
//     ease: Expo.easeInOut
// })
// .to("#white", {
//     height: "100%",
//     duration: 2,
//     delay: -1.4,
//     ease: Expo.easeInOut
// })