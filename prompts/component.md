## Create a reusable Primary Button component.

BUTTON STYLE:

- Height: 48px
- Border radius: 14px (soft, premium)
- Background: vertical gradient
  - Top: #F08A24
  - Bottom: #D97706
- Shadow:
  0 6px 12px rgba(217, 119, 6, 0.25)
- Border: none

TEXT STYLE:

- Font: Inter
- Size: 16px
- Weight: 600 (SemiBold)
- Color: #FFFFFF
- Letter spacing: 0.3px
- Text centered vertically and horizontally

STATES:

- Default: gradient visible
- Pressed: slight scale (0.96) + darker gradient
- Disabled:
  - Background: #E6E1D5
  - Text: #A0A0A0
  - No shadow

RULES:

- This button must look identical everywhere it is used.
- Do NOT change gradient direction or colors.
- Do NOT add icons unless explicitly requested.

Show:

1. Button alone on neutral background
2. Button used inside Login / OTP screens

## Create a reusable Input Field component.

CONTAINER STYLE:

- Height: 48px
- Border radius: 12px
- Background: #FAF7F2
- Border:
  - Default: 1px solid #E6E1D5
  - Focused: 1.5px solid #D97706
- Shadow:
  inset 0 1px 2px rgba(0,0,0,0.03)

TEXT STYLE:

- Font: Inter
- Size: 14px
- Weight: 400
- Text color: #1A1A1A
- Placeholder color: #9A9A9A

ICON SUPPORT:

- Left icon allowed (email / lock)
- Icon color: #8A6A3A (warm brown)
- Icon size: 18px

STATES:

- Default
- Focused (orange border)
- Error:
  - Border: #C2410C
  - Error text below in muted red
- Disabled:
  - Background: #F1F1F1
  - Text: #A0A0A0

RULES:

- Input must be visually calm and soft
- No sharp borders
- No bright white background

Show:

1. Input alone
2. Input with icon
3. Input in focused state

## Create a reusable OTP Input Box component.

BOX STYLE:

- Size: 52px × 52px
- Border radius: 12px
- Background: #FAF7F2
- Border:
  - Default: 1px solid #E6E1D5
  - Active: 2px solid #DAA520 (Gold)

TEXT STYLE:

- Font: Playfair Display
- Size: 20px
- Weight: 600
- Color: #1A1A1A
- Text centered

CURSOR:

- Thin blinking caret
- Color: #D97706

RULES:

- Boxes must feel tactile and premium
- Spacing between boxes: 12px

Show:

- Row of 4 OTP boxes
- One active, others inactive

## Create a reusable Typography System with the following components:

H1 (Screen Title):

- Font: Playfair Display
- Size: 26–28px
- Weight: 700
- Color: #1A1A1A
- Line height: 1.2

H2 (Section Title):

- Font: Playfair Display
- Size: 20–22px
- Weight: 600
- Color: #1A1A1A

H3 (Subsection):

- Font: Playfair Display
- Size: 18px
- Weight: 600
- Color: #2A2A2A

Paragraph (P):

- Font: Inter
- Size: 14–15px
- Weight: 400
- Color: #4A4A4A
- Line height: 1.5

Caption / Helper Text:

- Font: Inter
- Size: 12–13px
- Weight: 400
- Color: #7A7A7A

Link Text:

- Font: Inter
- Size: 14px
- Weight: 500
- Color: #DAA520 (Gold)

RULES:

- Never mix fonts arbitrarily
- Playfair only for headings
- Inter only for body & utility text

Show:

- Typography scale preview
- Usage inside Login & OTP screens

## Apply a background using a transparent 3D box PNG.

BACKGROUND RULES:

- Base color: #F5F5DC
- 3D box PNG:
  - Positioned centered or tiled subtly
  - Opacity: 6–10%
  - Must not overpower content
- No blur on main UI cards
- Cards float above background with shadow

This background must be reusable across:

- Login
- Register
- OTP
