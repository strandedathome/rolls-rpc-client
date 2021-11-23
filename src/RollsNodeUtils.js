"use strict";
exports.__esModule = true;
exports.getRollsFilePath = exports.getRollsConfig = exports.getRollsRootPath = void 0;
var os_1 = require("os");
var path_1 = require("path");
var fs_1 = require("fs");
var yaml_1 = require("yaml");
var rollsRootPath = "";
var getRollsRootPath = function () {
    if (rollsRootPath)
        return rollsRootPath;
    rollsRootPath = (0, path_1.resolve)((0, os_1.homedir)(), process.env["ROLLS_ROOT"] || ".rolls/mainnet");
    return rollsRootPath;
};
exports.getRollsRootPath = getRollsRootPath;
var getRollsConfig = function () {
    var configFilePath = (0, path_1.resolve)((0, exports.getRollsRootPath)(), "config", "config.yaml");
    return (0, yaml_1.parse)((0, fs_1.readFileSync)(configFilePath, "utf8"));
};
exports.getRollsConfig = getRollsConfig;
var getRollsFilePath = function (relativePath) {
    return (0, path_1.resolve)((0, exports.getRollsRootPath)(), relativePath);
};
exports.getRollsFilePath = getRollsFilePath;
