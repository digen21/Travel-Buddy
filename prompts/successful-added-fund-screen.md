Design a "Funds Added Successfully" confirmation screen for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- This screen MUST visually match the existing app UI:
  Login, OTP, Trip Wallet, Add Funds, Collect Funds.
- Use the SAME colors, fonts, border radius, shadows, and spacing.
- Do NOT introduce new styles, gradients, or typography.

SCREEN TYPE:

- Full-screen confirmation / success screen
- Presented immediately after funds are added
- This screen confirms completion and guides the user forward

SCREEN SIZE & LAYOUT (MANDATORY):

- Screen width: 390px
- Screen height: 844px
- Aspect ratio: 19.5:9
- Top safe area respected
- Content vertically centered with generous spacing

TOP ACTION:

- Close (X) icon at top-right
- Icon color: dark brown / near black
- Dismisses the success screen

SUCCESS ICON:

- Centered circular success indicator
- Inner circle:
  - Background: Temple Orange (#D97706)
  - White checkmark icon
- Outer glow ring:
  - Soft orange tint
  - Subtle radial glow
- Icon feels calm and celebratory, not flashy

PRIMARY TITLE:

- Text: "Funds Added Successfully!"
- Font: Playfair Display
- Size: 26–28px
- Weight: 700
- Color: #1A1A1A
- Center aligned

DESCRIPTION TEXT:

- Text:
  "₹5,000 has been securely added to your shared trip wallet."
- Font: Inter
- Size: 14–15px
- Color: #4A4A4A
- Center aligned
- Use calm, reassuring language

CONFIRMATION NOTE:

- Row with small check icon
- Text: "Contributors notified"
- Font: Inter
- Size: 13–14px
- Color: warm neutral / muted brown
- Center aligned

SUMMARY CARD:

- White card container
- Border radius: 16px
- Soft shadow consistent with other cards

Inside the card:

- Row 1:
  - Label: "Amount Added"
  - Value: "+ ₹5,000"
  - Value emphasized, bold
- Divider line
- Row 2:
  - Label: "New Balance"
  - Value: "₹12,500"
  - Font: Playfair Display for amount
- Small decorative accent line at bottom of card (subtle)

PRIMARY ACTION (BOTTOM ACTION BUTTON):

- Fixed footer-style button section
- Background of footer: #FFFFFF
- Padding:
  - Horizontal: 20px
  - Vertical: 30px

Primary button:

- Text: "View Trip Wallet"
- Height: 48px
- Border radius: 22px
- Background: Temple Orange (#D97706)
- Shadow:
  - Lifted, soft elevation
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: White
- Button action:
  - Navigates user to the Trip Wallet main screen

SECONDARY ACTION:

- Text-only button below primary:
  - Text: "Done"
  - Font: Inter
  - Size: 14–15px
  - Weight: 500
  - Color: dark brown / muted
- Action:
  - Closes the success screen
  - Returns to previous context

BACKGROUND:

- Base background: Cream / beige (#F5F5DC)
- Optional subtle texture or soft gradient
- No distractions behind content

NAVIGATION RULES:

- DO NOT show bottom navigation on this screen
- This is a transient confirmation screen

COMPONENT SYSTEM REQUIREMENTS:

- Reuse existing components:
  - Success Icon
  - Card Container
  - Primary Button (footer style)
  - Typography (H1, P, Caption)
- Do NOT invent new components or styles

FINAL FEEL:
The screen should feel reassuring, complete, and trustworthy —
like a banking transaction success screen.
Calm confidence, no clutter, clear next steps.
