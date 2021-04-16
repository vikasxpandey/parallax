let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

timeline
	.to('.fore-fore', 10, { y: -300 })
	.to('.fore', 10, { y: -200 }, '-=10')
	.to('.back', 10, { y: -100 }, '-=10')
	.fromTo('.back-back', { y: -50 }, { y: 0, duration: 10 }, '-=10')
	.to('.content', 10, { top: '0%' }, '-=10')

let scene = new ScrollMagic.Scene({
	triggerElement: 'section',
	duration: '300%',
	triggerHook: 0
})
	.setTween(timeline)
	.setPin('section')
	.addTo(controller)
