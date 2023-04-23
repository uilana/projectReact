import path from "path";
import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugin } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import {buildDevServer} from "./buildDevServer"
export function buildWebpackConfig(options: BuildOptions): Configuration {
    return {
        entry: options.paths.entry,
        output: {
            filename: "[name][contenthash].js",
            path: options.paths.build,
            clean: true

        },
        mode: "production",
        // mode: "development"
        plugins: buildPlugin(options),

        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devServer: buildDevServer(options),
        devtool: "inline-source-map"
    }

}