import Vue from 'vue'

Vue.directive('n', {
    bind: (el, binding) => {
        el.textContent = Math.pow(binding.value, 2)
    },
    updata: (el, binding) => {

        el.textContent = binding.value+2;
    }
})