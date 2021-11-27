import {
  PlotDirectoriesResponse,
  PlotsResponse
} from "./types/Harvester/RpcResponse";
import { CertPath } from "./types/CertPath";
import { getRollsConfig, getRollsFilePath } from "./RollsNodeUtils";
import { RollsOptions, RpcClient } from "./RpcClient";
import { RpcResponse } from "./types/RpcResponse";

const rollsConfig = getRollsConfig();
const defaultProtocol = "https";
const defaultHostname = rollsConfig?.self_hostname || "localhost";
const defaultPort = rollsConfig?.harvester.rpc_port || 5433;
const defaultCaCertPath = rollsConfig?.private_ssl_ca.crt;
const defaultCertPath = rollsConfig?.daemon_ssl.private_crt;
const defaultCertKey = rollsConfig?.daemon_ssl.private_key;

class Harvester extends RpcClient {
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

  public async getPlots(): Promise<PlotsResponse> {
    return this.request<PlotsResponse>("get_plots", {});
  }

  public async refreshPlots(): Promise<RpcResponse> {
    return this.request<RpcResponse>("refresh_plots", {});
  }

  public async deletePlot(
    fileName: string
  ): Promise<RpcResponse> {
    return this.request<RpcResponse>("delete_plot", {
      filename: fileName
    });
  }

  public async addPlotDirectory(
    dirName: string
  ): Promise<RpcResponse> {
    return this.request<RpcResponse>("add_plot_directory", {
      dirname: dirName
    });
  }

  public async getPlotDirectories(): Promise<PlotDirectoriesResponse> {
    return this.request<PlotDirectoriesResponse>("get_plot_directories", {});
  }

  public async removePlotDirectory(
    dirName: string
  ): Promise<RpcResponse> {
    return this.request<RpcResponse>("remove_plot_directory", {
      dirname: dirName
    });
  }
}

export { Harvester };
