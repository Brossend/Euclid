document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.block-step__text').forEach(function(blockStepText) {
        blockStepText.addEventListener('click', function(event) {
            path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.block-steps').forEach(function(blockSteps) {
                blockSteps.classList.remove('active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('active')
        })
    })
  })