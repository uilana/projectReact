import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {WebpackPluginInstance,ProgressPlugin} from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugin({paths}: BuildOptions):WebpackPluginInstance[]{
    return [new HtmlWebpackPlugin({
        template: paths.HTML
    }), new ProgressPlugin()]
}
