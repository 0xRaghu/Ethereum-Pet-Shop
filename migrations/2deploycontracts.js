var Adoption = artifacts.require("./Adoption.sol"); // get the solidity file

module.exports = function(deployer) {
  // deployer is injected by truffle when compiling
  deployer.deploy(Adoption); // deploy it
};
