require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: [process.env.PRIVATE_KEY], //Your private key starting with "0x"
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
    mumbai_testnet: {
      url: "https://rpc-mumbai.maticvigil.com", //URL of the RPC node for mumbai
      accounts: [process.env.PRIVATE_KEY], //Your private key starting with "0x"
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
