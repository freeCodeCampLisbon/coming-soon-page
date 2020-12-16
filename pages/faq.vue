<template>
  <div class="container px-5">
    <h1 class="is-size-1 is-family-secondary has-text-white mb-6">FAQS 🤔</h1>
    <div class="content">
      <ol class="block is-size-5 is-family-primary mb-0">
        <li v-for="({ question, answer }, i) in faq" :key="i" class="mb-6">
          <h5 class="title has-text-link">{{ question }}</h5>
          <p class="is-size-5 mt-2 is-family-primary" v-html="answer" />
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    faq: [
      {
        question: 'Is is it a course?',
        answer:
          "No at all. We're just a study group trying to make a difference in the community by contributing our time and knowledge.",
      },
      {
        question: 'What shall I bring to the meetings?',
        answer:
          "Simply put, a computer and/or a notebook, energy, willingness to learn and share what you know. And that's it!",
      },
      {
        question: 'How many meetings per month?',
        answer: "There's a meeting every Saturday unless specified otherwise.",
      },
      {
        question: 'Is it free of charge?',
        answer: "It's completely free of charge.",
      },
      {
        question: 'What will I learn?',
        answer: `You'll learn everything from basic to advaced
                ${['css', 'js', 'html', 'vue', 'react']
                  .map(
                    (tag) => `<span

                  class="tag mx-2 is-link is-size-6"
                >
                  #${tag}
                </span>`
                  )
                  .join('')}<br>
                  We are also open to content produced by our campers, so you might walk into a blockchain workshop or anything else that we might feel interesting.
              `,
      },
      {
        question: 'Am I too old to learn how to code?',
        answer:
          "Ofcourse not! We're here to help everyone, if you have a passion for development, or you just find it interesting then you're all set to go.",
      },
      {
        question: 'I have no experience at all, can I go?',
        answer:
          "We're here for everyone, from the newbie developer to the facebook superhero developer, we're always keen to help you and to share our knowledge with you. Tag along and learn something new",
      },
      {
        question: "I'm already a professional developer. why should I go?",
        answer:
          "We're not just about code, we strongly encourage networking between our campers and that's one of the strongest points of our meetups.<br>By attending you're giving yourself the chance to meet new like-minded people with whom you can share questions, war stories or even land your next gig.",
      },
      {
        question:
          "I'm the owner of a company, can I meet attendees for a job interview?",
        answer:
          "One of our missions is to make an impact on society by helping new developers reach the market, we would be more than glad to have you come over and network with our campers, no strings attached.<br>Come for a coffee, talk to fellow campers and maybe you'll find the new bill gates.",
      },
      {
        question: 'Are you interested in sponsorships?',
        answer: `That's something we'd gladdly look into, as an organization we have some basic needs and costs that are currently covered by ourselves, if you think you can help with any of the following kindly get in touch:<br>
        <ul class="is-block">
          <li>Website hosting</li>
          <li>Streaming material</li>
        </ul>
        Or simply help us buy a coffee! Developers <span class="has-text-danger">❤️</span> coffee! <br />
         <a class="is-inline-block has-background-link has-text-white p-3 mt-5 is-family-secondary has-text-weight-medium btn-coffee" target="_blank" href="https://www.buymeacoffee.com/fccLisbon">
          <img class="pr-3" src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" style="vertical-align:middle">Buy me a BICA
         </a>
        `,
      },
    ],
  }),
}
</script>

<style lang="scss">
a.btn-coffee {
  border-radius: 5px;
  &:hover,
  &:focus {
    color: white !important;
  }
}
</style>
