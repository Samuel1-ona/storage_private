// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Storage {
    uint private Value = 100;

    function setValue(uint _number) public {
        Value = _number;
    }

    function getValue() public view returns (uint) {
        return Value;
    }
}
