# About the Maki Protocol Repo
This repository is designed as a container for the contracts that play the most pivotal role in the farm and exchange components of the Maki Protocol, which is a Pancakeswap fork designed to operate on Fantom.
___
# Contracts for Audit
## Primary Exchange Contracts
    -   MakiswapFactory.sol
    -   MakiswapRouter.sol
    -   MakiswapPair.sol

## Primary Farm Contracts
    -   SoyBar.sol
    -   MakiToken.sol
    -   MasterChef.sol
    -   SousChef.sol
___
# Contracts Directory
-   Contains all the smart contracts relevant for direct inspection. This directory consists of two isolated sections -- exchange and farm. 
-   When possible, Open Zeppelin smart contracts are imported directly, however, some contracts required customization and those files are contains in this repository and stored public on NPM. 
-   In such instances, the Pancakeswap revision is forked and altered *strictly* where naming convention required, leaving the logic unscathed.

___
# (Auto)-Generate Flat Contracts
- We've enabled our Makiswap Protocol repository to automagically produce flats using the truffle-flattener.
- Use the `flatten` scripts to generate fresh, flattened contracts stored in the *flats* directory. 

```
yarn flatten:chefs 
```
___
## Main Directory Composition
___
-   [EXCHANGE](#exchange-and-farm) or [FARM](#exchange-and-farm)
    -   [Flats](#flats-and-libraries)
    -   [Interfaces](#interfaces-and-token)
    -   [Token](#interfaces-and-token)
    -   [Libraries](#flats-and-libraries)


[Notes on Libraries](#notes-on-libraries)

___
## Exchange and Farm
___
- This repository contains the smart contracts for the **exchange** and the **farm** component of MakiSwap. 
- These are included together to benefit the auditor tasked with reviewing each series of contracts.
___
## Interfaces and Token
___

- **Interfaces Directory**: includes the interfaces referenced in the main smart contracts for each respective sub-section.
- **Token Directory**: includes the smart contracts that are inherited by the MakiToken.sol, namely HRC20.sol and SafeHRC20.sol, which are designed to mirror the OZ smart contracts for the ERC equivalents.
___
## Flats and Libraries
___
- **Flats Directory**: contains the flattened versions of the smart contracts.
- **Libraries Directory**: contains the smart contracts that are referenced via an import, stored publicly in node package manager (npm).
- **More Details** 
    -   Please feel free to review each component in the context of their respective repositories as listed below,
        -   [maki-swap-lib](https://github.com/makiswap-protocol/maki-swap-lib)
        -   [maki-swap-core](https://github.com/makiswap-protocol/maki-swap-core)
        -   [maki-swap-periphery](https://github.com/makiswap-protocol/maki-swap-periphery)
        -   [maki-farm](https://github.com/makiswap-protocol/maki-farm)

### Notes on Libraries
- Conventionally, devs import Open Zeppelin smart contracts. However, given Fantom is the smart chain of choice, in instances where ERC20 / BEP20 is referenced a new variant of the contract in question is forked and becomes a unique contract in name only, not in logic.
- The schema of swap-lib, swap-core, and swap-periphery are modeled exactly like Pancakeswap, from which the repositories are forked and altered to meet the context of Fantom.


## Deployed Contracts (Mainnet)

# About the Maki Protocol Repo
This repository is designed as a container for the contracts that play the most pivotal role in the farm and exchange components of the Maki Protocol, which is a Pancakeswap fork designed to operate on Fantom.
___

## Deployed Contracts (Mainnet)
- [MakiswapFactory.sol](https://ftmscan.com/address/0x5003Aba8e9F72d40927f1305ee370E426d8A5321#code): 0x5003Aba8e9F72d40927f1305ee370E426d8A5321
    - `INIT_CODE_PAIR_HASH`: 0xef9b31ecd67f9d95e8084c8b67baac51bd22f26a9febdc2077b08d554ce90f33  
- [MakiswapRouter.sol](https://ftmscan.com/address/0x58C408AEDB2C6868a5599E4ad2Eb4e260cBCd686#code): 0x58C408AEDB2C6868a5599E4ad2Eb4e260cBCd686

- [MakiToken.sol](https://ftmscan.com/address/0xEDf5e2Ac09002094Cc51B597CebE58C70182ADC5#code): 0xEDf5e2Ac09002094Cc51B597CebE58C70182ADC5
- [SoyBar.sol](https://ftmscan.com/address/0x07752dfa1aF06063dCc6c986B717c71e9E06a827#code): 0x07752dfa1aF06063dCc6c986B717c71e9E06a827
- [MasterChef.sol](https://ftmscan.com/address/0x06b2040383B04d99536f85cb2d49a26Ca26bA6Dd#code): 0x06b2040383B04d99536f85cb2d49a26Ca26bA6Dd
- [SousChef.sol](https://ftmscan.com/address/0xbe96159F6d8E73d1e3979CAA3E54A60b690faCAb#code): 0xbe96159F6d8E73d1e3979CAA3E54A60b690faCAb


## Deployed Contracts (Testnet)
- [MakiswapFactory.sol](https://testnet.ftmscan.com/address/0xec70d9d36cb0fa0768cf1e4c3417badb39678072#code): 0xec70d9d36cb0fa0768cf1e4c3417badb39678072
    - `INIT_CODE_PAIR_HASH`: 0xef9b31ecd67f9d95e8084c8b67baac51bd22f26a9febdc2077b08d554ce90f33
- [MakiswapRouter.sol](https://testnet.ftmscan.com/address/0x85Fc0F494Ca5cd9d277aD8AbB026404f4F059eD0#code): 0x85Fc0F494Ca5cd9d277aD8AbB026404f4F059eD0

- [MakiToken.sol](https://testnet.ftmscan.com/address/0x593e40F3aca5C579A5F13E0d6e8F113E3A6D56b1#code): 0x593e40F3aca5C579A5F13E0d6e8F113E3A6D56b1
- [SoyBar.sol](https://testnet.ftmscan.com/address/0xe249A7AE64a2b0A59bAAcE12b6e5e1B3FdBDB863#code): 0xe249A7AE64a2b0A59bAAcE12b6e5e1B3FdBDB863
- [MasterChef.sol](https://testnet.ftmscan.com/address/0x336C2eF388BF1E07F90c55f9377Aeb44734Cd569#code): 0x336C2eF388BF1E07F90c55f9377Aeb44734Cd569
- [SousChef.sol](https://testnet.ftmscan.com/address/0x167e9a6F63FeBBCB2F5a0538bA0724Bb2c9eD6c1#code): 0x167e9a6F63FeBBCB2F5a0538bA0724Bb2c9eD6c1
