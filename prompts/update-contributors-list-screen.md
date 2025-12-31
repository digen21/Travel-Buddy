Update the existing "Trip Contributors" screen.

IMPORTANT:

- This is an UPDATE to an already existing screen.
- Do NOT redesign the layout.
- Do NOT change spacing, colors, typography, cards, or background.
- Keep the overall visual appearance exactly the same.

SCREEN CONTEXT:

- Screen title: "Trip Contributors: Taj Mahal"
- Shows total raised vs goal
- Displays a list of contributors in card-style rows
- Uses the Ancient Indian Heritage UI system already defined

REQUIRED CHANGES (ONLY THESE):

1️⃣ REMOVE EDIT FUNCTIONALITY

- Remove all edit (pencil) icons from contributor rows
- Contributors are now read-only on this screen
- No edit or interaction icons on the right side

2️⃣ REMOVE PAYMENT STATUS CHIPS

- Remove the following chips completely:
  - "Paid"
  - "Pending"
- Do NOT replace them with other payment-related labels

3️⃣ ADD ONLY ONE STATUS CHIP: "JOINED"

- Add a single neutral status chip labeled: "Joined"
- This chip represents that the person is part of the trip
- All contributors should show this same chip

JOINED CHIP STYLE:

- Shape: pill
- Font: Inter
- Size: 12–13px
- Weight: 500
- Background: light warm beige / soft neutral
- Border: subtle warm gray or gold tint
- Text color: dark brown / near black
- No green, no orange, no red
- This is NOT a payment indicator

CONTRIBUTOR ROW STRUCTURE (UNCHANGED):

- Avatar / initials on the left
- Contributor name (Playfair Display)
- Contribution amount (₹)
- Status chip placed near the amount (same position as before)
- Card container with rounded corners and soft shadow

TOP SUMMARY CARD (UNCHANGED):

- Total Raised (₹45,000)
- Goal (₹60,000)
- Keep typography and layout exactly the same

BOTTOM CTA (UNCHANGED):

- Button text: "+ Invite More Contributors"
- Same Primary Button component
- Same position and style

BACKGROUND & THEME:

- Keep the same cream/beige background
- Keep subtle texture
- Keep card shadows and radius unchanged

COMPONENT RULES:

- Reuse existing components:
  - Contributor Card
  - Avatar
  - Status Chip
  - Primary Button
- Do NOT introduce new components
- Only adjust the status chip content and logic

FINAL INTENT:
This screen should now communicate:
"Who has joined the trip"
NOT
"Who has paid or not paid"

The UI must feel calmer and less transactional,
focused on participation rather than payment.

BOTTOM ACTION BUTTON (FIXED FOOTER STYLE — MANDATORY):

When a primary action button is placed at the bottom of the screen
or bottom sheet, it must follow this exact layout and styling pattern.

LAYOUT STRUCTURE:

- Wrap the button inside a dedicated footer container (action section)
- Footer is visually separated from scrollable content

ACTION SECTION CONTAINER:

- Positioned at the bottom of the screen or bottom sheet
- Padding:
  - Horizontal: 20px
  - Vertical: 30px
- Background color: #FFFFFF
- Must sit above bottom safe area
- Content above this section must scroll independently

PRIMARY BUTTON STYLE (CONFIRM / UPDATE / CONTINUE):

- Layout:
  - Horizontal row
  - Center-aligned content
  - Text + icon in one line

- Size:
  - Height: 48px
  - Full available width
  - Border radius: 22px (pill-like, premium)

- Background:
  - Solid Temple Orange
  - Color: COLORS.buttonGradientEnd (#D97706)

- Shadow & Elevation:
  - Shadow color: Temple Orange
  - Shadow offset: (0, -4)
  - Shadow opacity: 0.1
  - Shadow radius: 6
  - Elevation: 6
  - Shadow must visually lift the button from the footer

BUTTON CONTENT:

- Text:
  - Font family: Inter
  - Font size: 16px
  - Font weight: 600
  - Color: White (COLORS.textInverse)
  - Right margin: 8px

- Icon:
  - Icon size: ~20px
  - Icon color: White
  - Placed to the right of the text
  - Use context-appropriate icon (wallet / arrow / check)

DISABLED STATE:

- Button remains visible
- Opacity reduced to ~0.5
- No color change
- No shadow change
- Disabled when required inputs are missing
  (e.g. no amount, no contributors selected)

INTERACTION RULES:

- Button stays fixed while content scrolls
- Button action executes primary screen intent
- Button must feel strong, stable, and final

USAGE RULE:

- This footer-style button is ONLY for primary actions
- Do NOT use this style for inline or secondary buttons

FINAL INTENT:
This button must feel like a banking-grade confirmation action —
clear, confident, and impossible to miss.
