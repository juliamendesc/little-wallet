// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/// @title Tiny Vault Interface
/// @dev ETHLisbon2023
interface ITinyVault {
    function setChild(address walletAddress, bool permission) external;
    function setInterest(uint256 rate) external;

    // Savings
    function newSavings(string memory name, uint256 total, uint256 amount) external;
    function addSavings(uint256 savingsId, uint256 amount) external;
    function removeSavings(uint256 savingsId, uint256 amount) external;

    // Staking
    function stake(uint256 stakeId, uint256 amount) external;
    function unstake(uint256 stakeId) external;
}