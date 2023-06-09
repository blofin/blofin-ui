import { setProjectAnnotations } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import * as globalStorybookConfig from "../.storybook/preview";

setProjectAnnotations(globalStorybookConfig);
