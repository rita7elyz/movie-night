import * as loadedConfig from "!val-loader!./config-loader";

export interface IConfig {
  env: "production" | "development" | "test" | "local" | "stage";
}

export const config = loadedConfig as IConfig;