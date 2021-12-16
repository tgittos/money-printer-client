
const apiHost = "localhost";

const Env = {
  API_HOST: process.env.MP_API_HOST ?? apiHost,
  API_VERSION: "v1",
  DEBUG: true
};

export default Env;