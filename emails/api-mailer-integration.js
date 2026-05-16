/**
 * Example integration for the real Velve API mailer.
 *
 * This mirrors the current stack in:
 * C:\Users\Tea\velve\apps\api\src\lib\mailer.js
 */

const { sendWaitlistConfirmation, sendVerificationEmail } = require('../../../velve/apps/api/src/lib/mailer')

async function sendWaitlistExample() {
  await sendWaitlistConfirmation({
    to: 'user@example.com',
    position: 14,
  })
}

async function sendVerificationExample() {
  await sendVerificationEmail({
    to: 'user@example.com',
    displayName: 'Tea',
    verificationUrl: 'https://velveapp.com/verify?token=example-token',
  })
}

module.exports = {
  sendWaitlistExample,
  sendVerificationExample,
}
