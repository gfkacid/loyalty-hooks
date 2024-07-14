# LoyaltyHooks

LoyaltyHooks is a loyalty system designed to incentivize positive behaviors in the Uniswap ecosystem. By leveraging Uniswap v4 hooks, LoyaltyHooks allows ERC20 token projects to reward users for providing liquidity and holding tokens while disincentivizing selling and removing liquidity. This system aims to promote long-term engagement and stability within the token's ecosystem.

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Usage](#usage)

## Features

- **Incentivizes Liquidity Provision**: Rewards users for providing liquidity to Uniswap pools.
- **Rewards Token Holding**: Grants loyalty points for buying and holding tokens.
- **Disincentivizes Selling**: Reduces loyalty points or incurs fees for selling tokens.
- **Penalizes Removing Liquidity**: Applies penalties for removing liquidity prematurely.

## How It Works

LoyaltyHooks uses Uniswap v4 hooks to monitor and respond to specific actions within the Uniswap ecosystem. The system tracks the following activities:

1. **Providing Liquidity**: Users earn loyalty points proportional to the amount and duration of liquidity provided.
2. **Holding Tokens**: Users receive loyalty points for holding tokens over a predefined period.
3. **Selling Tokens**: Selling tokens within a short holding period results in a penalty, reducing loyalty points or incurring a fee.
4. **Removing Liquidity**: Users who remove liquidity before a minimum period incur penalties.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [Uniswap v4](https://uniswap.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gfkacid/loyalty-hooks.git
   cd LoyaltyHooks
2. Install dependencies
   ```npm install```
## Deployment

WIP

## Usage
loyaltyPoints translate to dynamic fees set for a given swap.

- minimum loyalty points = 0 , maximum = 100.
- swaps that buy token, add loyalty points. amount of points added is a function of swap amount divided by liquidity in the pool.
- swaps that sell token, subtract loyalty points. amount of points subtracted is a function of swap amount divided by liquidity in the pool.
- record latest buy & sell swaps executed by any address. When that address swaps the token, hook checks how much time has passed since last swap of same direction. For buys, it adds a multiplier on loyalty points gained if this address has bought more recently than when they last sold, and the last time they bought is within INTERVAL parameter (set to 1 day by default). For sells, adds a multiplier on loyalty points subtracted if this address has sold more recently than when they last bought, and the last time they sold is within INTERVAL.
- adjusts fees on any trade based on loyalty points: 100 points = minimum fee of 0.1% , 0 points = maximum fee of 3%, with any other number of points in between linearly translating to a fee between 0.1% and 3%


