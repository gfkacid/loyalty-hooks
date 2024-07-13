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

WIP


