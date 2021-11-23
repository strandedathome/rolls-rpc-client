import {RollsOptions, RpcClient} from "./RpcClient";
import { CertPath } from "./types/CertPath";
import { getRollsConfig, getRollsFilePath } from "./RollsNodeUtils";
import {ConnectionResponse} from "./types/FullNode/RpcResponse";
import {RpcResponse} from "./types/RpcResponse";

const rollsConfig = getRollsConfig();
const defaultProtocol = "https";
const defaultHostname = rollsConfig?.self_hostname || "localhost";
const defaultPort = rollsConfig?.full_node.rpc_port || 9877;
const defaultCaCertPath = rollsConfig?.private_ssl_ca.crt;
const defaultCertPath = rollsConfig?.daemon_ssl.private_crt;
const defaultCertKey = rollsConfig?.daemon_ssl.private_key;


class SharedCalls extends RpcClient {
    public constructor(options?: Partial<RollsOptions> & CertPath) {
        super({
            protocol: options?.protocol || defaultProtocol,
            hostname: options?.hostname || defaultHostname,
            port: options?.port || defaultPort,
            caCertPath: options?.caCertPath || getRollsFilePath(defaultCaCertPath),
            certPath: options?.certPath || getRollsFilePath(defaultCertPath),
            keyPath: options?.keyPath || getRollsFilePath(defaultCertKey),
        });
    }

    public async getConnections(): Promise<ConnectionResponse> {
        return this.request<ConnectionResponse>("get_connections", {})
    }

    public async openConnection(host: string, port: number): Promise<RpcResponse> {
        return this.request<RpcResponse>(
            "open_connection", {
                host: host,
                port: port
            });
    }

    public async closeConnection(nodeId: string): Promise<RpcResponse> {
        return this.request<RpcResponse>(
          "close_connection", {
                node_id: nodeId,
            });
    }

    public async stopNode(): Promise<RpcResponse>{
        return this.request<RpcResponse>("stop_node", {});

    }
}

export { SharedCalls }
