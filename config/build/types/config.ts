export type BuildMode = "production"|"development"
export interface BuildOptions {
    mode: BuildMode
    paths:BuildPaths
    isDev: boolean
    port: number
}
export interface BuildPaths {
    entry: string
    build: string
    HTML: string
}