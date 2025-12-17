# skystreet-ui

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.0.1-green.svg)

A React UI library focused on high-contrast, dramatic aesthetics inspired by manga and retro-futurism. Skystreet UI provides a set of reusable components designed for impact, featuring sharp borders, deep shadows, and signal-based color themes.

## Features

- **High Contrast Design:** Bold strokes and deep shadows.
- **Micro-animations:** Interactive elements with smooth, dramatic transitions.
- **TypeScript Support:** Fully typed for excellent developer experience.
- **Tailwind CSS Compatible:** Built to integrate seamlessly with Tailwind projects.

## Installation

This library is optimized for module bundlers and requires **Tailwind CSS**.

```bash
# Using npm
npm install skystreet-ui

# Using yarn
yarn add skystreet-ui

# Using bun
bun install skystreet-ui
```

### Tailwind Configuration

Add the Skystreet theme extensions to your `tailwind.config.js`:

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        skystreet: {
          ink: "#1e2a78", // Primary Dark
          paper: "#f0f8ff", // Background Light
          cyan: "#00b4d8", // Accent/Signal
          alert: "#ef4444", // Error/Alert
        },
      },
      boxShadow: {
        manga: "8px 8px 0px var(--shadow-color, rgba(30, 42, 120, 0.2))",
      },
    },
  },
};
```

## Usage

Import components directly from the package:

```tsx
import { SkyButton, SkyPanel, SkyTextarea } from "skystreet-ui";
import "skystreet-ui/dist/style.css"; // Ensure styles are imported if required by your setup

function App() {
  return (
    <SkyPanel title="CONTROL DECK">
      <SkyButton onClick={() => console.log("Clicked")}>ACTIVATE</SkyButton>

      <div className="mt-4">
        <SkyTextarea label="Mission Log" placeholder="Enter log details..." />
      </div>
    </SkyPanel>
  );
}
```

## Component API

### `SkyButton`

A button with a sweep animation on hover.

| Prop       | Type                   | Description                                      |
| ---------- | ---------------------- | ------------------------------------------------ |
| `variant`  | `'primary' \| 'alert'` | Visual style of the button. Default `'primary'`. |
| `children` | `ReactNode`            | Button content.                                  |

### `SkyToggle`

A toggle switch with spring-like animation.

| Prop       | Type                         | Description                                  |
| ---------- | ---------------------------- | -------------------------------------------- |
| `checked`  | `boolean`                    | State of the toggle.                         |
| `onChange` | `(checked: boolean) => void` | Handler for state changes.                   |
| `label`    | `string`                     | Optional label displayed next to the toggle. |

### `SkyTextarea`

A styled textarea with focus effects.

| Prop          | Type     | Description                         |
| ------------- | -------- | ----------------------------------- |
| `label`       | `string` | Label displayed above the textarea. |
| `placeholder` | `string` | Placeholder text.                   |

_(See individual component files or TypeScript definitions for full prop lists.)_

## Development

To run the project locally:

```bash
bun install
npm run dev
```

## License

MIT © [Monumei](https://github.com/monumei)
