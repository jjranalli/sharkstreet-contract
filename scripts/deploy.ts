import { ethers } from "hardhat"
import addresses from "../addresses.json"
import { SharkStreet } from "../typechain-types/SharkStreet"

// Set these before proceeding
const env = "mainnet"
const slicerId = 10 // The ID of the slicer that will be able to interact with this contract
const name = "Shark Street Comic" // ERC721 Name
const symbol = "SHARK STREET" // ERC721 Symbol
const initOwner = "0x728A4DDe804aeDaF93AC839C9B0Fce031e0361af" // Address of initial contract owner

async function main() {
  console.log("deploying")

  const CONTRACT = await ethers.getContractFactory("SharkStreet")
  const contract = (await CONTRACT.deploy(
    addresses[env]["ProductsModule"],
    slicerId,
    name,
    symbol
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
