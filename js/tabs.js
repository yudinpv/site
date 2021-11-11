const stepItem = document.querySelectorAll(".step__item");
const tabsItem = document.querySelectorAll(".work-row");



  stepItem.forEach(function(item) {
        item.addEventListener("click", function() {
          let currentStep = item;
          let stepId = currentStep.getAttribute("data-tab");
          let currentTab = document.querySelector(stepId)

          if( ! currentStep.classList.contains('active') ) {

          stepItem.forEach(function(item) {
            item.classList.remove('active');
          })

          tabsItem.forEach(function(item) {
            item.classList.remove('active');
          })

          currentStep.classList.add('active');
          currentTab.classList.add('active');


        }


      });


  });
