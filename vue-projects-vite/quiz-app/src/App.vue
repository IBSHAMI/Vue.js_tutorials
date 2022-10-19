<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
      <question
        v-if="test_on"
        :questions="questions"
        :question_answered="question_answererd"
        @question_answererd_fun="question_answererd_fun"
      />
      <results
        v-else
        :results="results"
        :quiz_score="quiz_score"
        :returned_title="returned_title(quiz_score)"
        :returned_text="returned_text(quiz_score)"
        :total_num_question="total_questions()"
      />
    </transition>
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-show="!test_on"
    >
      Reset
    </button>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Results from "@/components/Results.vue";

export default {
  name: "App",
  components: {
    Question,
    Results,
  },
  data() {
    // we want to add the data to the parent component
    return {
      questions: [
        {
          q: "What is 2 + 2?",
          answers: [
            {
              text: "4",
              is_correct: true,
            },
            {
              text: "3",
              is_correct: false,
            },
            {
              text: "Fish",
              is_correct: false,
            },
            {
              text: "5",
              is_correct: false,
            },
          ],
        },
        {
          q: 'How many letters are in the word "Banana"?',
          answers: [
            {
              text: "5",
              is_correct: false,
            },
            {
              text: "7",
              is_correct: false,
            },
            {
              text: "6",
              is_correct: true,
            },
            {
              text: "12",
              is_correct: false,
            },
          ],
        },
        {
          q: "Find the missing letter: C_ke",
          answers: [
            {
              text: "e",
              is_correct: false,
            },
            {
              text: "a",
              is_correct: true,
            },
            {
              text: "i",
              is_correct: false,
            },
          ],
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!",
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!",
        },
      ],
      test_on: true,
      question_answererd: 0,
      quiz_score: 0,
    };
  },
  methods: {
    total_questions() {
      return this.questions.length;
    },
    question_answererd_fun(question_score) {
      this.quiz_score += question_score;
      this.question_answererd++;
    },
    returned_title(quiz_score) {
      if (quiz_score <= 2) {
        return this.results[0].title;
      } else {
        return this.results[1].title;
      }
    },
    returned_text(quiz_score) {
      if (quiz_score <= 2) {
        return this.results[0].desc;
      } else {
        return this.results[1].desc;
      }
    },
    reset() {
      this.test_on = true;
      this.question_answererd = 0;
      this.quiz_score = 0;
    },
  },
  watch: {
    question_answererd() {
      if (this.question_answererd === this.questions.length) {
        this.test_on = false;
      }
    },
  },
};
</script>

<style></style>
