// initialise Vue application
new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a,b) => {
        return b.votes - a.votes
      });
    }
  },
  methods: {
    upVote(submissionId) {
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
    }
  }
});