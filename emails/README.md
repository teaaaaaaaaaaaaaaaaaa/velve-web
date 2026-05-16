# Velve Email System

This folder contains a production-ready starting point for the Velve app email flow, based on the actual product code in `C:\Users\Tea\velve\apps`.

## Files

- `waitlist-confirmation.html`: branded HTML waitlist confirmation email
- `waitlist-confirmation.txt`: plain-text fallback
- `brand-signature.html`: reusable HTML signature block
- `brand-signature.txt`: reusable plain-text signature
- `waitlist-sequence-copy.md`: suggested email sequence and subjects
- `waitlist-strategy-2026.md`: recommended lifecycle, rewards, and compliance plan
- `api-mailer-integration.js`: backend example wired to the real Velve API mailer

## Product context

The real Velve app is not a pure fashion brand newsletter product. It is a mobile app centered on:

- personal closets
- discovery feed
- wishlist and saved pieces
- trade and buy offers
- chat between users
- trust signals like ratings, completed swaps, and verified profiles
- virtual try-on and body scan setup

The email voice in this folder is written to match that product.

## Sending setup

- Automated sender:
  `noreply@velveapp.com`
- Human reply address:
  `info@velveapp.com`

These are the only two mailboxes assumed in this setup.

## Template variables

- `{{FIRST_NAME}}`: optional first name
- `{{POSITION}}`: waitlist position, for example `001`
- `{{SIGNED_UP_AT}}`: signup date, for example `May 16, 2026`
- `{{INFO_EMAIL}}`: `info@velveapp.com`
- `{{WEB_URL}}`: public web URL, for example `https://velveapp.com`

## Recommended subject and preheader

- Subject:
  `You're on the list for Velve`
- Preheader:
  `Your waitlist spot is confirmed. We'll email you when access opens.`

## Important implementation notes

- The frontend in this repository cannot send the email directly.
- The real implementation should happen in `C:\Users\Tea\velve\apps\api\src\lib\mailer.js`.
- The API already sends waitlist confirmation mail from `C:\Users\Tea\velve\apps\api\src\routes\waitlist.js`.
