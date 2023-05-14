// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

contract TinyVault {
    string public name;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not owner");
        _;
    }

    struct Transaction {
        uint256 amount;
        string indicator;
    }

    struct SavingAccount {
        string name;
        uint256 balance;
        //Transaction[] transations;
    }

    SavingAccount[] _savings;

    constructor(string memory _name, address _owner) {
        name = _name;
        owner = _owner;
    }

    function newSavingAccount(string memory accountName) external payable {
        // Verify if exists
        _savings.push(SavingAccount(accountName, msg.value));
    }

    function addSavings(uint256 savingAccountId) external payable {
        // Verify if exists
        _savings[savingAccountId].balance += msg.value;
    }

    function removeSavings(uint256 savingAccountId, uint256 amount) external {
        require(_savings[savingAccountId].balance >= amount, "Insufficient balance!");
        // Verify if sender is the owner child
        payable(msg.sender).transfer(amount);
        _savings[savingAccountId].balance -= amount;
    }
}