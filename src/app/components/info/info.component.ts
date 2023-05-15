import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.text p', {
      backgroundPositionX: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.text p',
        scrub: 1,
        start: 'top center',
        end: 'bottom top'
      }
    })
    // let html = document.documentElement, body = document.body, requestId = 0, scroller = {
    //   target: document.querySelector("#more"),
    //   ease: 0.05,
    //   endY: 0,
    //   y: 0,
    //   resizeRequest: 1,
    //   scrollRequest: 0
    // };
    //
    // TweenLite.set(scroller.target, {
    //   rotation: 0.01,
    //   force3D: true,
    // })
    //
    // window.addEventListener('load', onLoad)
    //
    // function onLoad() {
    //   updateScroller();
    //   window.focus()
    //   window.addEventListener('resize', onResize)
    //   document.addEventListener("scroll", onScroll);
    // }
    //
    // function updateScroller() {
    //   let resized = scroller.resizeRequest > 0;
    //   if (resized) {
    //     // let height = scroller.target.clientHeight;
    //     // body.style.height = height + "px";
    //     // scroller.resizeRequest = 0;
    //   }
    // }
    //
    // let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0
    //
    // scroller.endY = scrollY
    // scroller.y += (scrollY - scroller.y) * scroller.ease;
    //
    // if (Math.abs(scrollY - scroller.y) < 0.05) {
    //   scroller.y = scrollY;
    //   scroller.scrollRequest = 0;
    // }
    //
    // TweenLite.set(scroller.target, {
    //   y: -scroller.y
    // });
    // requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller): 0;
    //
    //
    // function onScroll() {
    //   scroller.scrollRequest++;
    //   if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    //   }
    // }
    //
    // function onResize() {
    //   scroller.resizeRequest++;
    //   if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    //   }
    // }
  }
}
