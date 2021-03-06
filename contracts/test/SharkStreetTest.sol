// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../extensions/Purchasable/SlicerPurchasable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";

contract SharkStreetTest is ERC721, SlicerPurchasable, Ownable {
    /// ============ Errors ============

    // Thrown when max supply set is reached
    error MaxSupply();

    /// ============ Constructor ============

    constructor(
        string memory name_,
        string memory symbol_,
        address productsModuleAddress_,
        uint256 slicerId_
    ) ERC721(name_, symbol_) SlicerPurchasable(productsModuleAddress_, slicerId_) {
        // _mint(address1);
        // _mint(address2);
        // _mint(address3);
        // _mint(address4);
        // _mint(address5);
    }

    /// ============ Storage ============

    IERC20 private constant SHARK = IERC20(0x56639dB16Ac50A89228026e42a316B30179A5376); // SLX
    IERC721 private constant GNARS = IERC721(0x9E545E3C0baAB3E08CdfD552C960A1050f373042); // ERC721Test
    address private constant TREASURY_ADDRESS = 0xAe7f458667f1B30746354aBC3157907d9F6FD15E;
    uint8 private constant MAX_SUPPLY = 2;

    string private _tokenURI;
    uint256 private tokenId;

    /// ============ Functions ============

    /**
     * @notice Overridable function containing the requirements for an account to be eligible for the purchase.
     *
     * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
     * @dev Max quantity purchasable per address and total mint amount is handled on Slicer product logic
     */
    function isPurchaseAllowed(
        uint256,
        uint256,
        address buyer,
        uint256,
        bytes memory,
        bytes memory
    ) public view override returns (bool isAllowed) {
        // Add all requirements related to product purchase here
        // Return true if account is allowed to buy product
        if (tokenId == MAX_SUPPLY) revert MaxSupply();
        isAllowed = SHARK.balanceOf(buyer) >= 10000 * 10**18 || GNARS.balanceOf(buyer) != 0;
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
            !isPurchaseAllowed(
                slicerId,
                productId,
                account,
                quantity,
                slicerCustomData,
                buyerCustomData
            )
        ) revert NotAllowed();

        // Add product purchase logic here
        _mint(account);
    }

    /**
     * @notice Returns URI of tokenId
     */
    function tokenURI(uint256) public view override returns (string memory) {
        return _tokenURI;
    }

    /**
     * @notice Returns totalSupply
     *
     * Calculated from current tokenIds of drop[1] and drop[2]
     */
    function totalSupply() external view returns (uint256) {
        return tokenId;
    }

    /**
     * @dev See {IERC165-royaltyInfo}.
     */
    function royaltyInfo(uint256, uint256 salePrice)
        external
        view
        returns (address receiver, uint256 royaltyAmount)
    {
        return (TREASURY_ADDRESS, salePrice / 10);
    }

    /**
     * Mint 1 token to `account` and increases tokenId
     */
    function _mint(address account) private {
        tokenId++;
        _safeMint(account, tokenId);
    }

    /**
     * Set tokenURI
     *
     * @dev Only accessible to contract owner
     */
    function _setTokenURI(string memory tokenURI_) external onlyOwner {
        _tokenURI = tokenURI_;
    }
}
