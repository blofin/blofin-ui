import { Badge } from "./components/Badge/Badge";
import { Button } from "./components/Button/Button";
import { Dialog } from "./components/Dialog/Dialog";
import { LabelTextField } from "./components/LabelTextField";
import { useNotification } from "./components/Notification/Notification";
import { Popover } from "./components/Popover/Popover";
import SortButton, { TextAlign } from "./components/Sort/SortButton";
import SortGroup from "./components/Sort/SortGroup";
import { Tab } from "./components/Tab/Tab";
import Table, { TableColumnProps } from "./components/Table";
import { useToast } from "./components/Toast/Toast";
import { Typography } from "./components/Typography/Typography";

import { ThemeProvider } from "./provider/ThemeProvider";
import useTheme from "./provider/useTheme";
import "./scss/base.scss";
import { BUIComponentColor, BUIComponentSize, BUITheme } from "./types/component";

export {
  Badge,
  Button,
  Dialog,
  LabelTextField,
  Popover,
  SortButton,
  SortGroup,
  Tab,
  Table,
  Typography
};

export type { BUIComponentColor, BUIComponentSize, BUITheme, TableColumnProps, TextAlign };

export { ThemeProvider };

export { useNotification, useTheme, useToast };
