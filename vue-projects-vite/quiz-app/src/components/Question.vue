<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar"></div>
      <div class="status">{{ current_question + 1 }} out of 3 questions answered</div>
    </div>
    <div class="single-question">
      <div class="question">{{ question_text }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in answers"
          @click.prevent="
            onClickAnswer($event);
            question_text, answers;
          "
          :key="answer"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["questions", "question_answered"],
  data() {
    return {
      current_question: 0,
      question_score: 0,
    };
  },
  methods: {
    onClickAnswer(event) {
      this.correct_answer;
      if (this.correct_answer[0].text == event.target.innerText) {
        this.question_score = 1;
      }
      else {
        this.question_score = 0;
      }
      this.current_question++;
      this.$emit("question_answererd_fun", this.question_score);
    },
  },
  computed: {
    question_text() {
      if (this.questions.length > this.current_question) {
        const question = this.questions[this.current_question]["q"];
        return question;
      }
    },
    answers() {
      if (this.questions.length > this.current_question) {
        const answers = this.questions[this.current_question]["answers"];
        return answers;
      }
    },
    correct_answer() {
      const question = this.questions[this.current_question];
      const correct_answer = question.answers.filter((answer) => answer.is_correct);
      return correct_answer;
    },
  },
};
</script>

<style scoped></style>
