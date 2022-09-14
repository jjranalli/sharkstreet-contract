// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../extensions/Purchasable/SlicerPurchasable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SharkStreetV2Test is ERC721, SlicerPurchasable, Ownable {
  /// ============ Errors ============

  // Thrown when max supply set is reached
  error MaxSupply();
  // Thrown when raffle has already been done
  error RaffleDone();

  /// ============ Lib ============

  using Strings for uint256;

  /// ============ Storage ============

  IERC721 private constant SHARKSTREET_V1 = IERC721(0x9d4454B023096f34B160D6B654540c56A1F81688); // ERC721Test
  address private constant TREASURY_ADDRESS = 0xAe7f458667f1B30746354aBC3157907d9F6FD15E;
  uint8 private constant INIT_AIRDROP_UNITS = 10;
  uint8 private constant MAX_SUPPLY = 14;

  string private baseTokenURI;
  bool private isRaffleDone;
  uint256 private tokenId;

  /// ============ Constructor ============

  constructor(
    address productsModuleAddress_,
    uint256 slicerId_,
    string memory name_,
    string memory symbol_
  ) ERC721(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {
    // Init mint
    for (uint256 i; i < INIT_AIRDROP_UNITS; i++) {
      _mint(0x728A4DDe804aeDaF93AC839C9B0Fce031e0361af); // Marxist
    }
  }

  /// ============ Functions ============

  /**
   * @notice Overridable function containing the requirements for an account to be eligible for the purchase.
   *
   * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
   * @dev Max quantity purchasable per address and total mint amount is handled on Slicer product logic
   */
  function isPurchaseAllowed(
    uint256,
    uint256 productId,
    address buyer,
    uint256,
    bytes memory,
    bytes memory
  ) public view override returns (bool isAllowed) {
    // Free, NFT-gated product with ID #2
    if (productId == 2) {
      isAllowed = SHARKSTREET_V1.balanceOf(buyer) != 0;

      // Paid product with ID #3, with no additional requirement
    } else {
      isAllowed = true;
    }

    if (tokenId == MAX_SUPPLY) revert MaxSupply();
  }

  /**
   * @notice Overridable function to handle external calls on product purchases from slicers. See {ISlicerPurchasable}
   */
  function onProductPurchase(
    uint256 slicerId,
    uint256 productId,
    address account,
    uint256 quantity,
    bytes memory slicerCustomData,
    bytes memory buyerCustomData
  ) external payable override onlyOnPurchaseFrom(slicerId) {
    // Check whether the account is allowed to buy a product.
    if (
      !isPurchaseAllowed(slicerId, productId, account, quantity, slicerCustomData, buyerCustomData)
    ) revert NotAllowed();

    for (uint256 i; i < quantity; ) {
      // Mint NFTs to account
      _mint(account);

      unchecked {
        ++i;
      }
    }
  }

  /**
   * @notice Returns URI of tokenId, formatted as {baseTokenURI} + {tokenId}
   */
  function tokenURI(uint256 tokenId_) public view override returns (string memory) {
    string memory baseURI = baseTokenURI;
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId_.toString())) : "";
  }

  /**
   * @notice Returns totalSupply
   */
  function totalSupply() external view returns (uint256) {
    unchecked {
      return isRaffleDone ? tokenId + 1 : tokenId;
    }
  }

  /**
   * @dev See {IERC165-royaltyInfo}.
   */
  function royaltyInfo(uint256, uint256 salePrice)
    external
    pure
    returns (address receiver, uint256 royaltyAmount)
  {
    return (TREASURY_ADDRESS, salePrice / 10);
  }

  /**
   * Mint 1 token to `account` and increases tokenId
   */
  function _mintRaffle(address account) external onlyOwner {
    if (isRaffleDone) revert RaffleDone();
    isRaffleDone = true;
    _safeMint(account, 0);
  }

  /**
   * Set tokenURI
   *
   * @dev Only accessible to contract owner
   */
  function _setBaseTokenURI(string memory baseTokenURI_) external onlyOwner {
    baseTokenURI = baseTokenURI_;
  }

  /**
   * Mint 1 token to `account` and increases tokenId
   */
  function _mint(address account) private {
    tokenId++;
    _safeMint(account, tokenId);
  }
}
