pragma solidity 0.8.0;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract IFOUpgradeProxy is TransparentUpgradeableProxy {

    constructor(address admin, address logic, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}