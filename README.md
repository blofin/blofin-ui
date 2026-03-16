<p align="center">
  <a href="https://blofin.com/" rel="noopener" target="_blank"><img width="150" src="/src/assets/logo.svg" alt="Blofin logo"></a>
</p>

<h1 align="center">Blofin UI</h1>

![cover](./src/assets/cover.png)

![NPM](https://img.shields.io/npm/l/@blofin/blofin-ui)
![npm](https://img.shields.io/npm/v/@blofin/blofin-ui)
![npm](https://img.shields.io/npm/dt/@blofin/blofin-ui)

**UI library for crypto exchanges.**

Introducing our exquisite and sophisticated UI library tailored specifically for discerning crypto exchanges.

Immerse yourself in a world of luxury and elegance as our meticulously crafted design elements seamlessly integrate with the cutting-edge technology of the cryptocurrency industry.

Elevate your user experience to new heights with our high-end interface components, meticulously curated to ensure a seamless and visually stunning trading environment.

With our UI library, you can confidently offer your users a truly elevated and refined trading experience, solidifying your position as a premier destination for secure and stylish cryptocurrency transactions.

## Installation

**NPM**

```bash
npm install @blofin/blofin-ui
```

**Yarn**

```bash
yarn add @blofin/blofin-ui
```

## Usage

```jsx
import "src/styles/globals.css";
import { BlofinUiProvider } from "@blofin/blofin-ui";
import { Button } from "@blofin/blofin-ui";

<BlofinUiProvider value={{ theme: "light" }}>
  <Component {...pageProps}></Component>
</BlofinUiProvider>;
```

```css
/** global.css */
@import "@blofin/blofin-ui/blofin.css";
@import "./tailwind.css";

/** tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Components

- [x] Alert
- [x] Badge
- [x] Button
- [x] Calendar
- [x] Checkbox
- [x] CssDropdown
- [x] DatePickerRange
- [x] DateTimePicker
- [x] Dialog
- [x] Divider
- [x] Drawer
- [x] Dropdown
- [x] Empty
- [x] Form
- [x] Icon
- [x] Input
- [x] LabelTextField
- [x] MonthPicker
- [x] MultiSelect
- [x] Notification
- [x] Pagination
- [x] Picker
- [x] Popover
- [x] Popup
- [x] ProTable
- [x] RadioButton
- [x] SVG
- [x] Select
- [x] Slider
- [x] Sort
- [x] Sortable
- [x] Switch
- [x] Tab
- [x] Table
- [x] TextField
- [x] TextSelect
- [x] Textarea
- [x] Toast
- [x] Tooltip
- [x] Typography

## Stack we use

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
