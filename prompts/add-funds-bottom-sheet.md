Design a "Collect Funds" Bottom Sheet for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- This bottom sheet MUST visually match the existing app UI:
  Login, OTP, Trip Wallet, Add Funds, Add Contributors.
- Use the SAME colors, typography, radius, shadows, and spacing.
- Do NOT introduce new styles, fonts, or colors.

COMPONENT TYPE:

- Bottom Sheet (modal), NOT a full screen
- Slides up from the bottom
- Background behind the sheet is dimmed (black overlay ~40%)
- Dismissible via swipe down, close (X), or tap outside

BOTTOM SHEET CONTAINER:

- Adaptive height (content-based), max ~85% screen height
- Background: Cream / beige (#F5F5DC)
- Top corners rounded: 20px
- Subtle top shadow for elevation
- Small drag handle centered at the top

HEADER:

- Title: "Collect Funds"
  - Font: Playfair Display
  - Size: 22–24px
  - Weight: 700
  - Color: #1A1A1A
- Close (X) icon on the right
- Divider below header

SECTION 1 — ADDITIONAL AMOUNT NEEDED:

- White card container
- Border radius: 16px
- Shadow: soft, consistent with other cards

Inside the card:

- Label: "ADDITIONAL AMOUNT NEEDED"
  - Font: Inter
  - Size: 12–13px
  - Weight: 600
  - Letter spacing: slight
- Amount input:
  - Large numeric field
  - Currency prefix: ₹
  - Example value: ₹5000
  - Font: Playfair Display
  - Size: 24–28px

- Helper row:
  - Text: "Split among 5 travelers"
  - Badge on right: "₹1,000 / person" (Temple Orange text on light background)

- Quick increment chips:
  - +₹100
  - +₹500
  - +₹1,000
- Chip style:
  - Rounded pill
  - Light background
  - Orange border when selected

SECTION 2 — CONTRIBUTOR LIST:

- Section title: "Contributor List"
- Status badge on right: "2 Paid" (green pill)

Each contributor row (reusable component):

- White card
- Rounded corners (14–16px)
- Left:
  - Circular checkbox
    - Checked → Temple Orange with check icon
    - Unchecked → neutral border
  - Avatar / illustration
- Center:
  - Contributor name
  - Payment status text:
    - Default: "Pending" (muted brown)
    - Paid: "Paid via UPI" / "Paid in Cash" (green pill)
- Right:
  - Contribution amount (₹1,000)

PAYMENT TYPE SELECTION (IMPORTANT):

- Default state for every contributor: PENDING
- If contributor is selected:
  - Show dropdown or pill button:
    - "Select Payment Type"
- Payment options:
  - Cash
  - Online (UPI / Card)
- Once selected:
  - Update status label (e.g., "Paid via UPI")
  - Change row accent to subtle green

SECTION 3 — REMINDER INFO:

- Text with bell icon:
  - "Send reminders to 2 people"
- Text color: Gold / Temple Orange
- This is informational (optional toggle behavior)

PRIMARY ACTION:

- Full-width primary button at bottom
- Text: "Update Wallet Balance"
- Height: 48px
- Border radius: 14px
- Background: Temple Orange gradient
  - Top: #F08A24
  - Bot
