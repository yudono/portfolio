# Technical Specifications: Trae.ai Landing Page UI/UX

Architecture specs, layout tokens, and files configured for the Trae.ai landing page reconstruction.

## UI Tokens & Classes
- **Primary Blue Accent**: `#3b82f6` (base) and `#2563eb` (hovers).
- **Secondary Bright Green (Trae Core CTA)**: `#22c55e` (emerald green text / backgrounds for primary CTA targets).
- **Borders & Dividers**: `border-zinc-900`, `border-zinc-800`.
- **Backgrounds**: `#000000` (absolute black) with very subtle vertical/horizontal grid lines (`digital-grid`).
- **Interactive canvas**: Interactive node grid using custom vector calculations representing real-time generative models.

## Modular Component Structure
- `src/components/HeroSection.tsx`: Re-written from scratch containing the entire landing page sections (Hero, Featured Works, Experience Timelines, Classified Tech stacks, Contact Terminal, and Footer Call-to-actions).
- `src/components/Layout.tsx` & `src/components/Navbar.tsx`: Wrappers providing navigation telemetry and brand anchors.
