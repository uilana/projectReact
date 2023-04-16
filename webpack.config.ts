import path from "path"
import { Configuration } from "webpack" ;
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";
const paths:BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, "build"),
    HTML: path.resolve(__dirname, "public", "index.html")
}

const config:Configuration = buildWebpackConfig({
    mode: "development",
    paths: paths,
    isDev: true
})
export default config