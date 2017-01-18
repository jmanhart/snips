import dynamics from 'dynamics.js'

export let MVanimateSpring = function(el, delay){
    dynamics.animate(el,{
        translateY: 0,
        opacity: 1
    },{
        type: dynamics.spring,
        duration: 883,
        frequency: 83,
        friction: 171,
        delay: delay || 0
    }
)
}

export let MVanimateEase = function(el, delay){
    dynamics.animate(el,{
        translateY: 0,
        opacity: 1
    },{
        delay: delay || 0
    }
)
}

export let open = function(el){
    dynamics.animate(el, {
      opacity: 1,
      scale: 1
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}

export let close = function(el){
    dynamics.animate(el, {
      opacity: 0,
      scale: 0
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 800
    })

}
