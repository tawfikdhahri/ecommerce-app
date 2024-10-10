

type Config = {
    baseUrl: string;
}
export const config: Config = {
    baseUrl: process.env.NEXT_BASE_PATH ?? ""
}