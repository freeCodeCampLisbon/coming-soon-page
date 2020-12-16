<template>
  <div class="container px-5">
    <h1 class="is-size-1 is-family-secondary has-text-white mb-6">FAQS 🤔</h1>
    <ol class="block is-size-5 is-family-primary mb-0">
      <li class="mb-6" v-for="({ question, answer }, i) in faq" :key="i">
        <strong class="has-text-white">{{ question }}</strong>
        <p class="is-size-5 mt-2 is-family-primary" v-html="answer" />
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data: () => ({
    faq: [
      {
        question: 'Is is it a course',
        answer:
          "No at all. We're just a study group trying to make a difference in the community by contributing our time and knowledge.",
      },
      {
        question: 'What shall I bring to the meetings?',
        answer:
          "Simply put, a computer and/or a notebook, energy, willingness to learn and share and that's it!",
      },
      {
        question: 'How many meetings per month?',
        answer: "There's a meeting every Saturday specified told otherwise.",
      },
      {
        question: 'Is it free of charge?',
        answer: "It's completely free of charge.",
      },
      {
        question: 'What will I learn',
        answer: `You'll learn everything from basic to advaced 
                ${['css', 'js', 'html', 'vue', 'react']
                  .map(
                    (tag) => `<span
                
                  class="tag mx-2 is-link"
                >
                  #${tag}
                </span>`
                  )
                  .join(' ')}<br>
                  We are also open to content from our campers, so you might walk into a blockchain workshop or anything else that we might feel its interesting.
              `,
      },
      {
        question: 'Am I too old to learn how to code?',
        answer:
          "Ofcourse not! We're here to help everyone, if you have a passion for development, or you just found out you have an interest for it then you're all set to go.",
      },
      {
        question: 'I have no experience at all, can I go?',
        answer:
          "We're here for everyone, from the newbie developer to the facebook superhero developer, we're always keen to help you and to share our knowledge with you. Tag along and learn some new",
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
          "One of your missions is to have an impact on society by helping new developers reach the market, we would be more than glad to have you come over and network with our campers, no strings attached.<br>Come for a coffee, talk to fellow campers and maybe you'll find the new bill gates.",
      },
      {
        question: 'Are you interested in sponsorships?',
        answer: `That's something we'd gladdly look into, as an organization we have some basic needs and costs that are currently covered by ourselves, if you think you can help with any of the following kindly get in touch:<br>
        <ul class="is-block">
          <li>Website hosting</li>
          <li>Streaming material</li>
        </ul>
         <a target="_blank" rel="noopener" href="https://www.buymeacoffee.com/fccLisbon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=fccLisbon&button_colour=f59a31&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>
        `,
      },
    ],
  }),
}
</script>
