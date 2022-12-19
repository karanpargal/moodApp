// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract moodInfo{

    string mood;

    function setmood(string memory _mood) public{
        mood = _mood;
    }

    function getmood() public view returns (string memory) {
        return mood;
    }

}

