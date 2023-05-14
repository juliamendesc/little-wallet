// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import {TinyVault} from "./TinyVault.sol";

contract TinyVaultFactory {
   TinyVault[] private _vaults;

   function createFoundation(string memory name) public {
        TinyVault tinyVault = new TinyVault(name, msg.sender);
        _vaults.push(tinyVault);
    }

   function allVaults(uint256 limit, uint256 offset) public pure returns (TinyVault[] memory vaults) {
        return vaults;
    }
}