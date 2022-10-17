<template>
  <div>
    <button type="button" @click.prevent="show = !show">Toggle</button>
    <!-- <transition name="fade" mode="out-in">
      <h1 v-if="show" key="main">Animations</h1>
      <h1 v-else key="second">Seond Animations</h1>
    </transition> -->

    <!-- <transition name="zoom" appear>
      <h2 v-if="!show">Hello</h2>
    </transition> -->

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="true"
      name="fade"
    >
      <h2 v-if="!show">Hello!!!!</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter", el);
    },
    enter(el) {
      console.log("enter", el);
      // animate function is a js function that we can use to animate the element
      // const animation = el.animate([{transform: "scale3d(0,0,0)"}, {}], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterEnter(el) {
      console.log("afterEnter", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave", el);
    },
    leave(el) {
      console.log("leave", el);
      // animate function is a js function that we can use to animate the element
      // const animation = el.animate([{}, {transform: "scale3d(0,0,0)"}], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterLeave(el) {
      console.log("afterLeave", el);
    }
  }
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s linear;
}
.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
