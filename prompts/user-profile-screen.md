Design a User Profile screen for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- This screen MUST visually match the Login, Register, and OTP screens.
- Colors, typography, border radius, shadows, and spacing must be IDENTICAL.
- Do NOT introduce new colors, fonts, gradients, or component styles.

SCREEN PURPOSE:

- Display user identity and core account settings.
- Provide access to common profile-related actions.
- Feel calm, premium, and trustworthy.

SCREEN SIZE & LAYOUT (MANDATORY):

- Screen width: 390px
- Screen height: 844px
- Aspect ratio: 19.5:9
- Top safe area: 44px
- Bottom safe area: 34px
- Horizontal padding: 16px
- Vertical spacing: 16–24px

TOP BAR:

- Back arrow icon inside a light circular container
- Icon color: dark brown / near black (#1A1A1A)
- Positioned within top safe area
- Screen title centered: "My Profile"
  - Font: Playfair Display
  - Size: 24–26px
  - Weight: 600
  - Color: #1A1A1A

PROFILE CARD (PRIMARY CARD):

- White card container
- Border radius: 16px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Centered horizontally

PROFILE AVATAR:

- Circular avatar image or illustration
- Size: ~96–104px
- Soft outer ring accent in light Temple Orange tint
- Small circular edit button overlay:
  - Background: Temple Orange (#D97706)
  - White pencil icon
  - Size: ~28px
  - Positioned bottom-right of avatar

USER DETAILS:

- User name (e.g., "Aarav Sharma"):
  - Font: Playfair Display
  - Size: 20–22px
  - Weight: 600
  - Color: #1A1A1A
- Phone number:
  - Font: Inter
  - Size: 14–15px
  - Color: #4A4A4A
- Location:
  - Font: Inter
  - Size: 13–14px
  - Color: #7A7A7A
- All text center aligned

SECTION LABEL:

- Text: "SETTINGS"
- Font: Inter
- Size: 12–13px
- Weight: 600
- Color: #9A9A9A
- Letter spacing: 1px
- Left aligned with screen padding

SETTINGS LIST CARD:

- White card container
- Border radius: 16px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)

SETTINGS ROW ITEM (REUSABLE COMPONENT):
Each row includes:

- Left circular icon container:
  - Background: #FAF7F2
  - Icon color: Temple Orange (#D97706)
  - Icon size: ~20px
- Label text:
  - Font: Inter
  - Size: 15–16px
  - Weight: 500
  - Color: #1A1A1A
- Right chevron icon:
  - Color: #9A9A9A

Rows to include:

1. Payment Methods
2. Saved Heritage Sites
3. Notifications
4. Help & Support

Rows separated by subtle dividers:

- Divider color: #EFEFEF
- Divider height: 1px

LOGOUT BUTTON:

- Outline-style button
- Height: 48px
- Border radius: 14px
- Border: 1.5px solid Temple Orange (#D97706)
- Background: transparent
- Text:
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: Temple Orange (#D97706)
- Logout icon aligned left of text

FOOTER TEXT:

- Text: "Version 2.4.0 • Built with Heritage"
- Font: Inter
- Size: 12px
- Color: #9A9A9A
- Center aligned
- Positioned above bottom safe area

BACKGROUND:

- Base background: Cream / beige (#F5F5DC)
- Apply the provided transparent 3D box PNG:
  - Very subtle
  - Opacity: 6–10%
  - Must NOT overpower cards or text

BOTTOM NAVIGATION:

- DO NOT include bottom navigation on this screen.

COMPONENT SYSTEM REQUIREMENTS:

- Treat all elements as reusable components:
  - Profile Card
  - Avatar with Edit Button
  - Settings List Item
  - Outline Button
  - Typography (H1, P, Caption)
- Do NOT invent new components or styles.
- Maintain exact consistency across the app.

FINAL FEEL:
The screen should feel calm, premium, culturally rooted,
and visually consistent with the authentication flow.

- NOTE: Always use the common colors defined in the `../constants/colors.js`
