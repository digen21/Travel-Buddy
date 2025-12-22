Design an OTP Verification screen for an Indian travel application.

REFERENCE & CONSISTENCY RULE:

- This OTP screen MUST visually match the Login and Register screens.
- Colors, typography, radius, shadows, and component styles must be IDENTICAL.
- Do NOT introduce new colors, fonts, gradients, or layouts.

SCREEN PURPOSE:

- Allow users to enter a 4-digit OTP sent to their mobile number.
- Maintain a calm, sacred, trustworthy experience.

LAYOUT STRUCTURE:

1. Top navigation:
   - Back arrow icon in a light circular container
   - Icon color: dark brown / near black
   - Positioned within top safe area

2. Main content card (centered vertically):
   - Rounded top container feeling (soft, premium)
   - Background: Cream / beige (#F5F5DC)
   - Generous vertical spacing

HEADER TEXT:

- Title: "Verification"
  - Font: Playfair Display
  - Size: 26–28px
  - Weight: 700
  - Color: #1A1A1A
  - Center aligned

- Description text:
  - "We’ve sent a sacred code to +91 XXXXX XXXXX"
  - Font: Inter
  - Size: 14–15px
  - Color: #4A4A4A
  - Highlight phone number in slightly darker tone
  - Center aligned

OTP INPUT SECTION:

- White card container
  - Border radius: 16px
  - Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Inside the card, place 4 OTP input boxes in a row

OTP INPUT BOX STYLE (MUST MATCH REFERENCE):

- Size: 52px × 52px
- Border radius: 12px
- Background: #FAF7F2
- Border:
  - Default: 1px solid #E6E1D5
  - Active: 2px solid #DAA520 (Gold)
- Text:
  - Font: Playfair Display
  - Size: 20px
  - Weight: 600
  - Color: #1A1A1A
- Cursor:
  - Thin blinking caret
  - Color: Temple Orange (#D97706)
- Spacing between boxes: 12px

TIMER SECTION:

- Icon: minimal clock icon in muted brown
- Text: "Code expires in"
  - Font: Inter
  - Size: 13px
  - Color: #7A7A7A
- Timer value:
  - Format: 00:30
  - Font: Playfair Display
  - Color:
    - Minutes: #1A1A1A
    - Seconds highlight: Temple Orange (#D97706)

PRIMARY ACTION BUTTON:

- Text: "Verify & Proceed"
- Use the SAME Primary Button component as Login/Register
- Height: 48px
- Border radius: 14px
- Background: vertical gradient
  - Top: #F08A24
  - Bottom: #D97706
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: #FFFFFF
- Right arrow icon in white
- Full width button

RESEND SECTION:

- Text: "Didn't receive the code?"
  - Font: Inter
  - Size: 13–14px
  - Color: #7A7A7A
- Action link: "Resend OTP"
  - Font: Inter
  - Weight: 600
  - Color: Gold (#DAA520)

BACKGROUND:

- Base background: Cream / beige (#F5F5DC)
- Apply the provided transparent 3D box PNG:
  - Very subtle
  - Opacity: 6–10%
  - Must NOT overpower content

BOTTOM NAVIGATION:

- DO NOT include bottom navigation on this screen.

COMPONENT SYSTEM REQUIREMENTS:

- Reuse existing components only:
  - Primary Button
  - OTP Input Box
  - Typography (H1, P, Link)
  - Card Container
- Do NOT invent new component styles.
- Show consistency with Login and Register screens.

SCREEN SIZE & LAYOUT (MANDATORY):

- Screen width: 390px
- Screen height: 844px
- Aspect ratio: 19.5:9
- Top safe area: 44px
- Bottom safe area: 34px
- Horizontal padding: 16px
- Vertical spacing: 16–24px

FINAL FEEL:
The screen must feel sacred, calm, premium, and trustworthy,
with strong visual continuity from Login and Register screens.
