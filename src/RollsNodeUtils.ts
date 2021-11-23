import { homedir } from "os";
import { resolve } from "path";
import { readFileSync } from "fs";
import { parse } from "yaml";
import { RollsConfig } from "./types/RollsConfig";

let rollsRootPath: string = "";

export const getRollsRootPath = (): string => {
  if (rollsRootPath) return rollsRootPath;

  rollsRootPath = resolve(
    homedir(),
    process.env["ROLLS_ROOT"] || ".rolls/mainnet"
  );

  return rollsRootPath;
};

export const getRollsConfig = (): RollsConfig => {
  const configFilePath = resolve(getRollsRootPath(), "config", "config.yaml");
  return parse(readFileSync(configFilePath, "utf8")) as RollsConfig;
};

export const getRollsFilePath = (relativePath: string): string => {
  return resolve(getRollsRootPath(), relativePath);
};
