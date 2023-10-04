const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Storage", []);

  await contract.waitForDeployment();

  console.log(`Storage deployed to ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
