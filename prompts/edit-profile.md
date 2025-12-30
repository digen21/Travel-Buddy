Design an Edit Profile screen for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- This screen MUST visually match the User Profile, Login, Register, and OTP screens.
- Colors, fonts, border radius, shadows, and spacing must be IDENTICAL.
- Do NOT introduce new colors, gradients, fonts, or component styles.

SCREEN PURPOSE:

- Allow users to edit their personal profile information.
- Keep the experience calm, focused, and trustworthy.
- This is a task-focused screen, not a browsing screen.

SCREEN SIZE & LAYOUT (MANDATORY):

- Screen width: 390px
- Screen height: 844px
- Aspect ratio: 19.5:9
- Top safe area: 44px
- Bottom safe area: 34px
- Horizontal padding: 16px
- Vertical spacing: 16–24px

TOP BAR:

- Back arrow icon on the left
- Icon color: dark brown / near black (#1A1A1A)
- Positioned within top safe area
- Screen title centered: "Edit Profile"
  - Font: Playfair Display
  - Size: 24–26px
  - Weight: 600
  - Color: #1A1A1A

PROFILE PHOTO SECTION:

- Centered circular avatar
- Size: ~96–104px
- Soft outer ring accent in light Temple Orange tint
- Small circular edit button overlaid at bottom-right:
  - Background: Temple Orange (#D97706)
  - White pencil icon
  - Size: ~28px
- Below avatar, text link:
  - Text: "Change Photo"
  - Font: Inter
  - Size: 14–15px
  - Weight: 600
  - Color: Temple Orange (#D97706)

FORM CARD (PERSONAL INFO):

- White card container
- Border radius: 16px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Section title:
  - Text: "Personal Info"
  - Font: Playfair Display
  - Size: 18–20px
  - Weight: 600
  - Color: #1A1A1A
- Thin divider line below title:
  - Color: #EFE6D8

INPUT FIELDS (REUSABLE COMPONENTS):
All inputs must use the SAME Input Field component as Login/Register.

Fields to include:

1. Full Name
   - Left icon: user
   - Placeholder / value text in Inter

2. Email Address
   - Left icon: envelope
   - Non-editable or editable based on product rules

3. Phone Number
   - Left icon: phone
   - Display country code (+91)

4. Bio (multiline)
   - Same background as other inputs
   - Rounded corners
   - Soft scroll if content exceeds height

INPUT STYLE (DO NOT CHANGE):

- Height (single-line): 48px
- Border radius: 12px
- Background: #FAF7F2
- Border:
  - Default: 1px solid #E6E1D5
  - Focused: 1.5px solid #D97706
- Text:
  - Font: Inter
  - Size: 14–15px
  - Color: #1A1A1A
- Placeholder color: #9A9A9A
- Icons:
  - Warm brown tone
  - Size ~18px

PRIMARY ACTION BUTTON:

- Text: "Save Changes"
- Use the SAME Primary Button component as Login / OTP
- Full width
- Height: 48px
- Border radius: 14px
- Background gradient:
  - Top: #F08A24
  - Bottom: #D97706
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: #FFFFFF

SECONDARY ACTION:

- Text link: "Change Password"
- Icon: small lock icon on left
- Font: Inter
- Size: 14–15px
- Weight: 600
- Color: Gold (#DAA520)
- Center aligned below primary button

BACKGROUND:

- Base background: Cream / beige (#F5F5DC)
- Apply provided transparent 3D box PNG:
  - Very subtle
  - Opacity: 6–10%
  - Must NOT interfere with form readability

BOTTOM NAVIGATION:

- DO NOT include bottom navigation on this screen.

COMPONENT SYSTEM REQUIREMENTS:

- Reuse existing components only:
  - Avatar with Edit Button
  - Input Field
  - Primary Button
  - Typography (H1, H2, P, Link)
  - Card Container
- Do NOT invent new components.
- Maintain full consistency across the app.

FINAL FEEL:
The Edit Profile screen must feel calm, premium, focused,
and visually consistent with the entire authentication and profile flow.
