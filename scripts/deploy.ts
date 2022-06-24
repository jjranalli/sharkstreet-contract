import { ethers } from "hardhat"
import addresses from "../addresses.json"
import { SharkStreet } from "../typechain-types/SharkStreet"

// Set these before proceeding
const env = "mainnet"
const slicerId = 1 // The ID of the slicer that will be able to interact with this contract
const name = "Shark Street" // ERC721 Name
const symbol = "SKST" // ERC721 Symbol
const initOwner = "" // Address of initial contract owner

async function main() {
  console.log("deploying")

  const CONTRACT = await ethers.getContractFactory("SharkStreet")
  const contract = (await CONTRACT.deploy(
    name,
    symbol,
    addresses[env]["ProductsModule"],
    slicerId
  )) as SharkStreet
  await contract.deployed()

  contract.transferOwnership(initOwner)

  console.log("deploying completed successfully! Address: " + contract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
