new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
        let loading2 = new TimelineMax();
        loading2.fromTo(".upper", 0.6, { 
            autoAlpha: 0,
        
        }, { 
            autoAlpha: 1,
       
        }, "+=0.5")
        .fromTo(".lower", 0.6, { 
            autoAlpha: 0,
        
        }, { 
            autoAlpha: 1,
       
        }, "-=0.6")
        ;
    },
});

document.addEventListener("DOMContentLoaded", function(){
    
    let arrows = document.getElementsByClassName('arrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }


    let loading = new TimelineMax();
    loading.fromTo(".upper h2", 0.6, { 
        autoAlpha: 0,
        y: 20 
    }, { 
        autoAlpha: 1,
        y: 0 
    })
    .fromTo(".upper p", 0.6, { 
        autoAlpha: 0,
        
    }, { 
        autoAlpha: 1,
        
    })
    .fromTo(".btn1", 0.6, { 
        autoAlpha: 0,
        x: -20
    }, { 
        autoAlpha: 1,
        x: 0
    }, "-=0.6")
    .fromTo(".btn2", 0.6, { 
        autoAlpha: 0,
        x: 20
    }, { 
        autoAlpha: 1,
        x: 0
    }, "-=0.6")
    .fromTo(".arrow", 0.6, { 
        autoAlpha: 0,
        
    }, { 
        autoAlpha: 1,
       
    })            
    ;
})