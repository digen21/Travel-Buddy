Got it. You want **clear, production-ready prompts** for **ALL screens involved in the Trip Wallet flow**, matching the UI you shared and the **bank-account mental model**.

I’ll be **brutally structured**, no fluff, no redesign.
Below are **4 SEPARATE, COPY-PASTE PROMPTS**, one per screen.

All screens **must reuse**:

- Your existing **buttons, inputs, cards, typography**
- Same colors as Login / OTP / Profile
- Same spacing, radius, shadows

---

# 🟢 SCREEN 1 — TRIP WALLET (MAIN / MOST USED)

**Purpose:**
This is the **primary screen**.
Users check balance, contributors, and transaction history here.

```
Design a "Trip Wallet" screen for an Indian travel application.

CONSISTENCY RULE:
- Must match Login, OTP, Profile, Edit Profile UI exactly.
- Reuse existing Card, Button, Typography components.
- No new colors, fonts, or styles.

SCREEN PURPOSE:
- Show shared wallet balance.
- Show contributors and their contribution status.
- Show wallet activity (history).
- Provide entry point to add funds.

TOP BAR:
- Back arrow on left
- Title centered: "Trip Wallet"
  - Font: Playfair Display
  - Size: 24–26px
  - Weight: 700

WALLET BALANCE CARD (PRIMARY):
- White card, rounded (16px), soft shadow
- Label: "Total Wallet Balance"
- Amount: ₹5,000
  - Playfair Display, 28–32px
- Status badge:
  - "Healthy Funds" (green dot + text)
- Subtext:
  - "5 members × ₹1,000 contribution"

PROJECTED REFILL CARD (IMPORTANT):
- Highlighted bordered card
- Title: "Projected Refill Needed"
- Text:
  "Upcoming expenses may exceed balance."
- Calculation:
  "₹500 × 5 members = ₹2,500"
- Primary action button:
  - Text: "Add Funds"
  - Use SAME Primary Button component

CONTRIBUTORS SECTION:
- Title: "Contributors"
- List of members:
  - Avatar / initials
  - Name
  - Contribution amount
  - Status badge:
    - PAID (green)
    - PENDING (muted)
- "View All" link on right

WALLET ACTIVITY SECTION:
- Title: "Wallet Activity"
- List items:
  - Expense / Deposit name
  - Date & time
  - Category
  - Amount:
    - Red for deduction
    - Green for addition
- Last item:
  - "Initial Pool Created +₹5,000"

BACKGROUND:
- Cream / beige base
- Subtle 3D box texture (6–10% opacity)

BOTTOM NAVIGATION:
- DO NOT include bottom navigation.
```

---

# 🟠 SCREEN 2 — ADD FUNDS (CONTRIBUTION SCREEN)

**Purpose:**
Users add money **collectively** to the wallet.

```
Design an "Add Funds" screen for the Trip Wallet.

CONSISTENCY RULE:
- Must visually match Trip Wallet and Auth screens.
- Reuse Input Field and Primary Button components.

TOP BAR:
- Back arrow
- Title: "Add Funds"

AMOUNT INPUT CARD:
- White card
- Label: "Enter Amount"
- Input field:
  - Currency prefix ₹
  - Example: ₹2500

QUICK AMOUNT CHIPS:
- Rounded chips:
  +₹500
  +₹1,000
  +₹2,000
- Active chip highlighted in Temple Orange

CONTRIBUTORS SECTION (IMPORTANT):
- Title: "Contributors"
- List all trip members
- Each row:
  - Avatar
  - Name
  - Checkbox / toggle to include contributor
- Helper text:
  "Selected contributors will equally add funds."

SUMMARY INFO:
- Text:
  "You are adding ₹2,500 to the Trip Wallet."
- Security note:
  "Payment secured with 256-bit encryption."

BOTTOM ACTION BAR:
- Left: "Total Payable ₹2,500"
- Right: Primary Button:
  - Text: "Add Amount"
  - Temple Orange gradient

BOTTOM NAVIGATION:
- DO NOT include bottom navigation.
```

---

# ✅ SCREEN 3 — FUNDS ADDED SUCCESS

**Purpose:**
Confirm money is added. Calm, reassuring.

```
Design a "Funds Added Successfully" screen.

CONSISTENCY RULE:
- Same colors, fonts, and button styles as rest of app.

CENTER ICON:
- Circular success icon
- Soft orange glow
- Checkmark inside

TITLE:
- "Funds Added Successfully!"
- Playfair Display
- 24–26px

DESCRIPTION:
- "₹5,000 has been securely added to your shared trip wallet."
- Contributors notified (with checkmark)

SUMMARY CARD:
- White card
- Rows:
  - Amount Added: +₹5,000
  - New Balance: ₹12,500

PRIMARY ACTION:
- Button: "View Trip Wallet"
- Use Primary Button component

SECONDARY ACTION:
- Text button: "Done"

BOTTOM NAVIGATION:
- DO NOT include bottom navigation.
```

---

# 🔴 SCREEN 4 — LOG EXPENSE (DEDUCT FROM WALLET)

**Purpose:**
Deduct expenses from the shared wallet.

```
Design a "Log Expense" screen for Trip Wallet.

CONSISTENCY RULE:
- Must match Add Funds and Trip Wallet screens exactly.
- Reuse Input, Card, Button components.

TOP BAR:
- Back arrow
- Title: "Log Expense"

BALANCE OVERVIEW:
- Two small cards side by side:
  - Current Balance: ₹15,000
  - After Deduction: ₹14,250

AMOUNT INPUT:
- Label: "Amount Used"
- Input field with ₹ prefix
- Helper text:
  "This amount will be deducted from the shared wallet."

EXPENSE DETAILS:
- Place input (Where?)
- Time picker
- Category dropdown
- Description (optional, multiline)

PRIMARY ACTION:
- Button: "Add to Wallet Ledger"
- Plus icon inside button

NOTE:
- Expense immediately reflects in Trip Wallet history.

BOTTOM NAVIGATION:
- DO NOT include bottom navigation.
```
