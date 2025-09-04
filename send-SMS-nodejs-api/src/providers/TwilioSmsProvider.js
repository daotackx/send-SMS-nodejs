import twilio from 'twilio'

const accountSid =
  'vaolaitaikhoandexemdi' || process.env.TWILIO_ACCOUNT_SID
const authToken =
  'vaolaitaikhoandexemdi' || process.env.TWILIO_AUTH_TOKEN
const fromPhone = '+15017122661' || process.env.TWILIO_PHONE_NUMBER

// Tạo instance của Twilio để sử dụng
const twilioInstance = twilio(accountSid, authToken)
const sendSMS = async ({ to, body }) => {
  try {
    const message = await twilioInstance.messages.create({
      body,
      from: fromPhone,
      to
    })
    return message
  } catch (error) {
    console.log('error', error)
    throw error
  }
}

export const TwilioSmsProvider = {
  sendSMS
}
