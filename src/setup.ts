import { setProjectAnnotations } from "@storybook/react";
import "@testing-library/jest-dom";
import * as globalStorybookConfig from "../.storybook/preview";

setProjectAnnotations(globalStorybookConfig);
