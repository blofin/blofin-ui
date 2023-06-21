import { ThemeProvider } from "@storybook/theming";
import { Badge } from "./components/Badge/Badge";
import { Button } from "./components/Button/Button";
import { Dialog } from "./components/Dialog/Dialog";
import { Popover } from "./components/Popover/Popover";
import { Typography } from "./components/Typography/Typography";
import "./scss/base.scss";
import { BUIComponentColor, BUIComponentSize, BUITheme } from "./types/component";

export { Badge, Button, Dialog, Popover, Typography };

export type { BUIComponentColor, BUIComponentSize, BUITheme };

export { ThemeProvider };
