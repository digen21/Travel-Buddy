Design a "Log Expense" screen to deduct money from a shared Trip Wallet.

REFERENCE CONSISTENCY RULE:

- This screen MUST visually match the existing app UI:
  Trip Wallet, Add Funds, Collect Funds, Success screens.
- Use the SAME colors, typography, border radius, shadows, and spacing.
- Do NOT introduce new fonts, gradients, or component styles.

SCREEN PURPOSE:

- Allow users to log a transaction that deducts money from the shared wallet.
- Show impact on wallet balance clearly before confirming.
- Feel like a controlled financial action, not casual data entry.

SCREEN SIZE & LAYOUT (MANDATORY):

- Screen width: 390px
- Screen height: 844px
- Aspect ratio: 19.5:9
- Top safe area respected
- Bottom safe area respected

TOP BAR:

- Back arrow on the left
- Screen title centered: "Log Expense"
  - Font: Playfair Display
  - Size: 24–26px
  - Weight: 700
  - Color: #1A1A1A

BALANCE PREVIEW SECTION:

- Two cards displayed side-by-side

Card 1 — Current Balance:

- White card
- Rounded corners (16px)
- Label: "CURRENT BALANCE"
- Amount: ₹15,000
  - Font: Playfair Display
  - Size: 22–24px
- Small wallet icon in warm brown

Card 2 — After Deduction:

- White card with dashed border
- Rounded corners (16px)
- Label: "AFTER DEDUCTION"
- Amount updates dynamically (e.g. ₹14,250)
- Calculation icon
- Amount updates live when expense amount is entered

EXPENSE FORM CARD:

- Large white card container
- Rounded corners (16px)
- Soft shadow

FIELD 1 — AMOUNT USED:

- Label: "AMOUNT USED"
- Numeric input with ₹ prefix
- Placeholder: ₹0.00
- Helper text below:
  "\*This amount will be deducted from the shared wallet."
- Input uses existing Input Field component

FIELD 2 — PLACE & TIME (ROW):

- Place input:
  - Placeholder: "Where?"
  - Location pin icon
- Time picker:
  - Clock icon
  - Default current time
- Both fields share the same row and input style

FIELD 3 — EXPENSE TYPE:

- Dropdown input
- Placeholder: "Select Category"
- Category icon on the left
- Opens category selection modal/sheet

FIELD 4 — DESCRIPTION (OPTIONAL):

- Multiline input
- Placeholder:
  "Add details like 'Lunch at Fort Kochi'..."
- Same background and border style as other inputs

BOTTOM ACTION SECTION (FIXED FOOTER STYLE):

- Footer container with white background
- Padding:
  - Horizontal: 20px
  - Vertical: 30px

PRIMARY ACTION BUTTON:

- Text: "+ Add to Wallet Ledger"
- Height: 48px
- Border radius: 22px
- Background: Temple Orange (#D97706)
- Shadow and elevation consistent with other footer buttons
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: White
- Icon: plus icon before text

BUTTON BEHAVIOR:

- Disabled if:
  - Amount is 0
  - Amount exceeds current wallet balance
- On press:
  - Deduct amount from wallet
  - Add transaction to wallet ledger
  - Navigate to success or wallet overview screen

VALIDATION RULES (MANDATORY):

- Expense amount cannot exceed wallet balance
- Amount must be greater than zero
- Category selection required
- Place optional but recommended

BOTTOM NAVIGATION:

- Bottom navigation MAY be visible depending on app rules
- If visible:
  - FAB remains functional
- If hidden:
  - This screen is treated as a focused task flow

COMPONENT SYSTEM REQUIREMENTS:

- Reuse existing components only:
  - Balance Card
  - Input Field
  - Dropdown Field
  - Primary Footer Button
  - Typography (H1, P, Caption)
- Do NOT invent new UI patterns

FINAL FEEL:
The screen must feel precise, controlled, and trustworthy —
like logging a transaction in a real bank ledger.
No clutter. Clear impact. Clear confirmation.
