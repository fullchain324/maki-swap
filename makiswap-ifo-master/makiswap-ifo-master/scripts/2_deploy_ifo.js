const hre = require("hardhat")

async function main () {
  // const num = 50 * Math.pow(10, 18);
  // const numAsHex = "0x" + num.toString(16);
  const lpToken = '0x8971Af9DDE14c879D178F37169EbB2690DfB18E8'; // TTA - WHT
  const offeringToken = '0x5a9887836d5fd9fb51cd8a851853a89df6f7ddad'; // $C
  const startBlock = '6397500';
  const endBlock = '6402000';
  const offeringAmount = '1000000000000000';
  const raisingAmount = '1000000000000000000';
  const adminAddress = '0xe3aE5711BD7750911F41676aB02FD8F22caD6362';

  const IFO  = await hre.ethers.getContractFactory("IFO");
  const ifo = await IFO.deploy(
    lpToken,
    offeringToken,
    startBlock,
    endBlock,
    offeringAmount,
    raisingAmount,
    adminAddress
  )  

  await ifo.deployed();
  console.log("IFO deployed to:", ifo.address);
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });