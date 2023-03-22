const DEVELOPMENT = {
  WIGGIN_DEV: "http://localhost:3000",
  WIGGIN_LINK: "http://localhost:3001",
};

const PREVIEW = {
  WIGGIN_DEV: "https://dev.wiggin.dev",
  WIGGIN_LINK: "https://dev.wiggin.link",
};

const PRODUCTION = {
  WIGGIN_DEV: "https://wiggin.dev",
  WIGGIN_LINK: "https://wiggin.link",
};

export function getInternalHosts(env: string) {
  switch (env) {
    case "development":
      return DEVELOPMENT;
    case "preview":
      return PREVIEW;
    case "production":
    default:
      return PRODUCTION;
  }
}
