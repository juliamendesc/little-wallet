require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = process.env.PRIVATE_KEY || null

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.12",
  defaultNetwork: "gnosis",
  networks: {
    hardhat: {
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.0", version: "0.8.12"}
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          //Blockscout
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
    ],
    // apiKey: {
    //   //4) Insert your Gnosisscan API key
    //   //blockscout explorer verification does not require keys
    //   chiado: "your key",
    // },
  }
};
