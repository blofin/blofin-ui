import { Badge } from "./components/Badge/Badge";
import { Button } from "./components/Button/Button";
import { Dialog } from "./components/Dialog/Dialog";
import { Popover } from "./components/Popover/Popover";
import { Typography } from "./components/Typography/Typography";
import { useToast } from "./components/Toast/Toast";
import "./scss/base.scss";
import { BUIComponentColor, BUIComponentSize, BUITheme } from "./types/component";
import { ThemeProvider } from "./provider/ThemeProvider";

export { Badge, Button, Dialog, Popover, Typography };

export type { BUIComponentColor, BUIComponentSize, BUITheme };

export { ThemeProvider };

export { useToast };
