"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Wallet = void 0;
var RollsNodeUtils_1 = require("./RollsNodeUtils");
var RpcClient_1 = require("./RpcClient");
// @ts-ignore
var chia_utils_1 = require("chia-utils");
var rollsConfig = (0, RollsNodeUtils_1.getRollsConfig)();
var defaultProtocol = "https";
var defaultHostname = (rollsConfig === null || rollsConfig === void 0 ? void 0 : rollsConfig.self_hostname) || "localhost";
var defaultPort = (rollsConfig === null || rollsConfig === void 0 ? void 0 : rollsConfig.wallet.rpc_port) || 58765;
var host = "https://nebula.pecanrolls.net";
var defaultCaCertPath = rollsConfig === null || rollsConfig === void 0 ? void 0 : rollsConfig.private_ssl_ca.crt;
var defaultCertPath = rollsConfig === null || rollsConfig === void 0 ? void 0 : rollsConfig.daemon_ssl.private_crt;
var defaultCertKey = rollsConfig === null || rollsConfig === void 0 ? void 0 : rollsConfig.daemon_ssl.private_key;
var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet(options) {
        return _super.call(this, {
            protocol: (options === null || options === void 0 ? void 0 : options.protocol) || defaultProtocol,
            hostname: (options === null || options === void 0 ? void 0 : options.hostname) || defaultHostname,
            port: (options === null || options === void 0 ? void 0 : options.port) || defaultPort,
            caCertPath: (options === null || options === void 0 ? void 0 : options.caCertPath) || (0, RollsNodeUtils_1.getRollsFilePath)(defaultCaCertPath),
            certPath: (options === null || options === void 0 ? void 0 : options.certPath) || (0, RollsNodeUtils_1.getRollsFilePath)(defaultCertPath),
            keyPath: (options === null || options === void 0 ? void 0 : options.keyPath) || (0, RollsNodeUtils_1.getRollsFilePath)(defaultCertKey)
        }) || this;
    }
    Wallet.prototype.logIn = function (fingerprint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("log_in", {
                        host: host,
                        fingerprint: fingerprint,
                        type: "start"
                    })];
            });
        });
    };
    Wallet.prototype.logInAndRestore = function (fingerprint, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("log_in", {
                        host: host,
                        fingerprint: fingerprint,
                        type: "restore_backup",
                        file_path: filePath
                    })];
            });
        });
    };
    Wallet.prototype.logInAndSkip = function (fingerprint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("log_in", {
                        host: host,
                        fingerprint: fingerprint,
                        type: "skip"
                    })];
            });
        });
    };
    Wallet.prototype.getPublicKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var public_key_fingerprints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_public_keys", {})];
                    case 1:
                        public_key_fingerprints = (_a.sent()).public_key_fingerprints;
                        return [2 /*return*/, public_key_fingerprints];
                }
            });
        });
    };
    Wallet.prototype.getPrivateKey = function (fingerprint) {
        return __awaiter(this, void 0, void 0, function () {
            var private_key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_private_key", { fingerprint: fingerprint })];
                    case 1:
                        private_key = (_a.sent()).private_key;
                        return [2 /*return*/, private_key];
                }
            });
        });
    };
    Wallet.prototype.generateMnemonic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mnemonic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("generate_mnemonic", {})];
                    case 1:
                        mnemonic = (_a.sent()).mnemonic;
                        return [2 /*return*/, mnemonic];
                }
            });
        });
    };
    Wallet.prototype.addKey = function (mnemonic, type) {
        if (type === void 0) { type = "new_wallet"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("add_key", {
                        mnemonic: mnemonic,
                        type: type
                    })];
            });
        });
    };
    Wallet.prototype.deleteKey = function (fingerprint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("delete_key", { fingerprint: fingerprint })];
            });
        });
    };
    Wallet.prototype.deleteAllKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("delete_all_keys", {})];
            });
        });
    };
    Wallet.prototype.getSyncStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var syncing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_sync_status", {})];
                    case 1:
                        syncing = (_a.sent()).syncing;
                        return [2 /*return*/, syncing];
                }
            });
        });
    };
    Wallet.prototype.getHeightInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_height_info", {})];
                    case 1:
                        height = (_a.sent()).height;
                        return [2 /*return*/, height];
                }
            });
        });
    };
    Wallet.prototype.farmBlock = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("farm_block", { address: address })];
            });
        });
    };
    Wallet.prototype.getWallets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wallets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_wallets", {})];
                    case 1:
                        wallets = (_a.sent()).wallets;
                        return [2 /*return*/, wallets];
                }
            });
        });
    };
    Wallet.prototype.getWalletBalance = function (walletId) {
        return __awaiter(this, void 0, void 0, function () {
            var wallet_balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_wallet_balance", { wallet_id: walletId })];
                    case 1:
                        wallet_balance = (_a.sent()).wallet_balance;
                        return [2 /*return*/, wallet_balance];
                }
            });
        });
    };
    Wallet.prototype.getTransaction = function (walletId, transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_transaction", {
                            wallet_id: walletId,
                            transaction_id: transactionId
                        })];
                    case 1:
                        transaction = (_a.sent()).transaction;
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    Wallet.prototype.getTransactions = function (walletId, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var transactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_transactions", { wallet_id: walletId, end: limit })];
                    case 1:
                        transactions = (_a.sent()).transactions;
                        return [2 /*return*/, transactions];
                }
            });
        });
    };
    Wallet.prototype.getAddress = function (walletId) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_next_address", { wallet_id: walletId, new_address: false })];
                    case 1:
                        address = (_a.sent()).address;
                        return [2 /*return*/, address];
                }
            });
        });
    };
    Wallet.prototype.getNextAddress = function (walletId) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get_next_address", { wallet_id: walletId, new_address: true })];
                    case 1:
                        address = (_a.sent()).address;
                        return [2 /*return*/, address];
                }
            });
        });
    };
    Wallet.prototype.sendTransaction = function (walletId, amount, address, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("send_transaction", {
                            wallet_id: walletId,
                            amount: amount,
                            address: address,
                            fee: fee
                        })];
                    case 1:
                        transaction = (_a.sent()).transaction;
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    Wallet.prototype.sendTransactionAndGetId = function (walletId, amount, address, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, transaction, transaction_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.request("send_transaction", {
                            wallet_id: walletId,
                            amount: amount,
                            address: address,
                            fee: fee
                        })];
                    case 1:
                        _a = _b.sent(), transaction = _a.transaction, transaction_id = _a.transaction_id;
                        return [2 /*return*/, { transaction: transaction, transactionId: transaction_id }];
                }
            });
        });
    };
    Wallet.prototype.sendTransactionRaw = function (walletId, amount, address, fee) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("send_transaction", {
                            wallet_id: walletId,
                            amount: amount,
                            address: address,
                            fee: fee
                        })];
                    case 1:
                        transaction = _a.sent();
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    Wallet.prototype.createBackup = function (filePath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("create_backup", { file_path: filePath })];
            });
        });
    };
    /* https://github.com/CMEONE/chia-utils */
    Wallet.prototype.addressToPuzzleHash = function (address) {
        return (0, chia_utils_1.address_to_puzzle_hash)(address);
    };
    Wallet.prototype.puzzleHashToAddress = function (puzzleHash) {
        return (0, chia_utils_1.puzzle_hash_to_address)(puzzleHash);
    };
    Wallet.prototype.getCoinInfo = function (parentCoinInfo, puzzleHash, amount) {
        return (0, chia_utils_1.get_coin_info_mojo)(parentCoinInfo, puzzleHash, amount);
    };
    return Wallet;
}(RpcClient_1.RpcClient));
exports.Wallet = Wallet;
