<template>
  <div class="result">
    <div class="title">
      {{ returned_title }}, You got {{ quiz_score }} out of
      {{ total_num_question }}!
    </div>
    <div class="desc">{{ returned_text }}</div>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["results", "quiz_score", "total_num_question", "returned_title", "returned_text"],
};
</script>

<style scoped></style>
