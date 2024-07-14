pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LoyaltyToken is ERC20 {
    constructor() ERC20("LoyaltyToken", "LTY") {}
}
