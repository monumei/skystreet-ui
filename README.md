# SKYSTREET UI

<div align="center">
  <h3>PALE BUT STRONG. A LIGHT PIERCING FROM THE SURFACE.</h3>
  <p>A React UI library for digital manga aesthetics. High contrast, sharp borders, and dramatic shadows.</p>
</div>

---

## 📖 Story: Blue Signal

> "We are dreaming like singing whales, waiting to fly. I know we can't become it unless we jump out."

**Skystreet UI** is not just a component library; it's a narrative device. Built on the "Blue Signal" design system, it evokes the feeling of a submerged world reaching for the stars. Every component—from the **Abyss Glow** panels to the **Sea Firefly** toggles—is crafted to tell a story of connection, signal, and noise.

## 📦 Installation

This library is optimized for **Bun**.

```bash
bun install skystreet-ui
```

_(Note: Requires Tailwind CSS to be configured in your project)_

## 🚀 Quick Start

1. **Configure Tailwind**: Add the Skystreet preset or configuration to your `tailwind.config.js`.

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        skystreet: {
          ink: "#1e2a78", // Ultramarine Ink
          paper: "#f0f8ff", // Manga White
          cyan: "#00b4d8", // Signal Blue
          alert: "#ef4444", // System Alert
        },
      },
      boxShadow: {
        manga: "8px 8px 0px var(--shadow-color, rgba(30, 42, 120, 0.2))",
      },
    },
  },
};
```

2. **Use Components**:

```tsx
import { SkyButton, SkyPanel, SkyGlitchText } from "skystreet-ui";

function App() {
  return (
    <SkyPanel tag="SCENE 01" effect="screentone">
      <SkyGlitchText text="SYSTEM START" className="text-4xl" />
      <SkyButton variant="alert">INITIATE FLIGHT</SkyButton>
    </SkyPanel>
  );
}
```

## 🧩 Components

### Narrative Elements

- **SkyPanel**: The core container. Supports `screentone` and `speedlines` effects.
- **SkyComicBox**: For establishing shots and narration text.
- **SkyVerticalText**: Traditional vertical Japanese typesetting for dramatic headers.
- **SkyGlitchText**: Animated text that splits into chromatic aberration on hover.
- **SkyTicker**: Scrolling marquee for news, updates, or internal monologues.

### Controls & Input

- **SkyButton**: Cybernetic buttons with sweep animations.
- **SkyInput**: High-contrast text inputs with focus markers.
- **SkySelect**: Custom dropdowns with sharp angles.
- **SkyToggle**: Mechanical toggle switches.
- **SkySlider**: Precision sliders for adjusting output magnitude.

### Data Display

- **SkyCard**: Metric cards for system status, user stats, or story progress.
- **SkyTable**: Data grids with hover row highlights.
- **SkySkeleton**: Loading states that look like tuning antennas.

### Layout

- **SkySidebar**: Off-canvas navigation for your app's "Story Index".

## 🎨 Philosophy

**Skystreet UI** adheres to the **"Impact & Ink"** philosophy:

1. **Bold Strokes**: 2px-4px borders are standard.
2. **Deep Shadows**: Hard, non-blurred shadows (`box-shadow: 8px 8px 0px`).
3. **Signal Colors**: Use Cyan (`#00b4d8`) sparingly to guide the eye like a beacon.

## 📜 License

MIT © [Monumei](https://github.com/monumei)

---

> "Even if the sea runs dry, the song will reach you."
