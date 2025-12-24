Create a reusable Bottom Navigation Bar component for an Indian travel application.

REFERENCE CONSISTENCY RULE:

- The bottom navigation bar MUST visually match the provided reference.
- Do NOT change icon style, colors, spacing, elevation, or layout.
- This bottom navigation must remain identical across all eligible screens.

POSITION & CONTAINER:

- Fixed at the bottom of the screen
- Total height: 72px (including safe area)
- Background color: #FFFFFF
- Top border: 1px solid #E5E5E5
- Top shadow:
  0 -2px 6px rgba(0,0,0,0.08)
- Rounded top corners only (subtle, premium feel)

NAVIGATION ITEMS (5 TOTAL):
Left → Right order:

1. Home
2. Explore
3. Center FAB (Primary Action)
4. Trips
5. Profile

ICON STYLE:

- Line-based icons only
- Icon size: 22px
- Label font: Inter
- Label size: 11px
- Label weight: 500 (Medium)

ICON STATES:
Inactive:

- Icon color: #9A9A9A (warm gray)
- Label color: #9A9A9A

Active:

- Icon color: Temple Orange (#D97706)
- Label color: Temple Orange (#D97706)
- No underline
- No background highlight

CENTER FLOATING ACTION BUTTON (FAB):

- Shape: Perfect circle
- Size: 56px × 56px
- Position:
  - Centered horizontally
  - Elevated above navigation bar by ~8px
- Background: Temple Orange (#D97706)
- Icon:
  - White "+" symbol
  - Size: 24px
- Shadow:
  0 6px 14px rgba(217, 119, 6, 0.35)

FAB INTERACTION:

- Pressed state:
  - Slight scale down (0.96)
- No color change
- No ripple outside circular bounds

SPACING & ALIGNMENT:

- Equal spacing between navigation items
- Icons centered vertically
- Label text directly below icons
- FAB does NOT overlap icon labels

ACCESSIBILITY:

- Minimum tap target: 44px
- High contrast between active and inactive states

USAGE RULES:

- Bottom navigation appears ONLY on top-level screens:
  Home, Explore, Travel By, Trips, Blogs, Profile
- Must NOT appear on:
  Login, Register, OTP, Detail screens, Add/Edit flows

COMPONENT SYSTEM REQUIREMENTS:

- Treat Bottom Navigation Bar as a reusable component
- Also extract:
  - Bottom Nav Item (Active)
  - Bottom Nav Item (Inactive)
  - Center FAB
- Show:
  1. Full bottom navigation bar
  2. Isolated component previews

SCREEN SIZE CONTEXT:

- Screen width: 390px
- Screen height: 844px
- Bottom safe area: 34px

FINAL FEEL:
The bottom navigation bar must feel modern, calm, premium,
and perfectly aligned with the Ancient Indian Heritage UI style.
