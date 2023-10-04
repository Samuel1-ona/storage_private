const axios = require("axios");

const mumbaiUrl = "https://rpc-mumbai.maticvigil.com";
const swisstronikUrl = "https://json-rpc.testnet.swisstronik.com/";

const ContractAddress = "0x18525A4e01556418E5eb1a5C0879E03Cf178dc19";

const slot = "0x0";

const mConfig = {
  url: mumbaiUrl,
  params: {
    jsonrpc: "2.0",
    id: 80001,
    method: "eth_getStorageAt",
    params: [ContractAddress, slot, "latest"],
  },
};

const sConfig = {
  url: swisstronikUrl,
  params: {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getStorageAt",
    params: [ContractAddress, slot, "latest"],
  },
};

async function getState(config, networkName) {
  try {
    const response = await axios.post(config.url, config.params);
    console.log(`State  on ${networkName}: ${response.data.result}`);
  } catch (error) {
    console.error(`Error from here ::: ${networkName}: ${error}`);
  }
}

getState(mConfig, "mumbai");

getState(sConfig, "swisstronik");
