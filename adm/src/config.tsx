import { Configuration } from "../generated";

export const baseDomain = "dev.wolontariusz.app"
export const apiConfig = new Configuration({
  basePath: `https://api.${baseDomain}`,
  credentials: 'include',
});
