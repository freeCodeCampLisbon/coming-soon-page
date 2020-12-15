// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Mailchimp = require('mailchimp-api-v3')

const handler = async (evt, { req, res }) => {
  if (evt.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    }
  }

  const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY)
  const { email, name } = JSON.parse(evt.body)
  if (!email)
    return {
      statusCode: 400,
      body: JSON.stringify({
        errors: {
          email: ['Email is required'],
        },
      }),
    }
  if (!name)
    return {
      statusCode: 400,
      body: JSON.stringify({
        errors: {
          name: ['Name is required'],
        },
      }),
    }
  if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  )
    return {
      statusCode: 400,
      body: JSON.stringify({ errors: { email: ['Email is not valid'] } }),
    }

  try {
    const results = await mailchimp.post({
      method: 'post',
      path: `/lists/${process.env.MAILCHIMP_WELCOME_EMAIL_LIST_ID}/members`,
      body: {
        merge_fields: { FNAME: name },
        email_address: email,
        status: 'subscribed',
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ errors: { email: ['Already Subscribed'] } }),
    }
  }
}

module.exports = {
  handler,
}
