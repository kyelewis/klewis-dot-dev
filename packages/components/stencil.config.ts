import type { Config } from "@stencil/core";

export const config: Config = {
  namespace: "components",
  outputTargets: [{ type: "dist-custom-elements", empty: true}],
};
