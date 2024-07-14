require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const SEPOLIA_KEY = process.env.SEPOLIA_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.drpc.org`,
      accounts: [SEPOLIA_KEY],
    },
  },
};
