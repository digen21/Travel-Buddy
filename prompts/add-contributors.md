Design an "Add Contributors" Bottom Sheet for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- This bottom sheet MUST visually match the app’s existing UI:
  Login, OTP, Trip Wallet, Add Funds, Log Expense.
- Use the SAME colors, fonts, border radius, shadows, and spacing.
- Do NOT introduce new styles, colors, or typography.

COMPONENT TYPE:

- This is a BOTTOM SHEET (modal), NOT a full screen.
- It slides up from the bottom over the current screen.
- Background behind the sheet is dimmed (light black overlay, ~40% opacity).

BOTTOM SHEET CONTAINER:

- Height: Adaptive (content-based), max ~85% of screen height
- Background: Cream / beige (#F5F5DC)
- Top corners rounded: 20px
- Shadow at top edge for elevation
- Drag handle at top center (subtle)

TOP BAR (INSIDE BOTTOM SHEET):

- Title: "Add Contributors"
  - Font: Playfair Display
  - Size: 22–24px
  - Weight: 600
  - Color: #1A1A1A
- Close (X) icon on the right
- Thin divider below header

FORM SECTION:

- Two input fields in one row:
  1. Contributor Name
     - Placeholder: "e.g. Rahul"
     - Left icon: user
  2. Amount (₹)
     - Numeric input
     - Placeholder: "5000"

INPUT STYLE (MUST MATCH APP INPUTS):

- Height: 48px
- Border radius: 12px
- Background: #FAF7F2
- Border:
  - Default: 1px solid #E6E1D5
  - Focused: 1.5px solid Temple Orange (#D97706)
- Font: Inter
- Icon color: warm brown

STATUS SELECTOR:

- Label: "STATUS"
- Two pill-style toggle buttons:
  - Pending (default selected)
    - Orange border
    - Orange icon
    - Light orange background
  - Paid
    - Neutral border
    - Dark icon
- Only one status selectable at a time

ADD ANOTHER CONTRIBUTOR ACTION:

- Dashed outline button
- Text: "+ Add Another Contributor"
- Text & icon color: Temple Orange (#D97706)
- Border radius: 14px
- Adds a new contributor input block below

ADDED CONTRIBUTORS LIST:

- Section title: "Added Contributors"
- Item count badge on the right (e.g. "2 items")

Each contributor item:

- White card container
- Rounded corners (14px)
- Left:
  - Contributor name
  - Amount (₹)
- Status badge:
  - PENDING → orange badge
  - PAID → green badge
- Right:
  - Delete (trash) icon in warm brown

TOTAL SUMMARY:

- Row at bottom of sheet:
  - Label: "Total to collect:"
  - Amount in Playfair Display
  - Example: ₹10,500

PRIMARY ACTION BUTTON:

- Button text: "Confirm Contributors"
- Full width
- Height: 48px
- Border radius: 14px
- Background: Temple Orange gradient
  - Top: #F08A24
  - Bottom: #D97706
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: White
- Right arrow icon inside button

INTERACTION & BEHAVIOR RULES:

- Bottom sheet can be dismissed by:
  - Swiping down
  - Tapping close (X)
  - Tapping outside the sheet
- Confirm button:
  - Validates contributors
  - Closes bottom sheet
  - Updates Trip Wallet / Add Funds screen

NAVIGATION RULE:

- DO NOT show bottom navigation inside this bottom sheet.
- This is a temporary, focused modal.

COMPONENT SYSTEM REQUIREMENTS:

- Treat this as a reusable Bottom Sheet component.
- Reuse existing components:
  - Input Field
  - Status Pill
  - Card Item
  - Primary Button
  - Typography (H2, P, Caption)
- Do NOT inline or redesign components.

FINAL FEEL:
The bottom sheet should feel clean, structured, and transactional,
like adding people to a shared bank account.
Clear, calm, and mistake-proof.
