require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note night mobile hunt casual flat giant'; 
let testAccounts = [
"0x45e98c6989a88e3586222cf08e2170b6721733b5fe634b04a681122a3709aea3",
"0xb6ee7e20f115037422b240525bcf109c9d33f04c6ff08b0dcd082706aa5ab447",
"0xd15739ed8e146214370c37d525381b1cb08f04147babb4b3da5a3f0e51f81d02",
"0xbebad06fea27363faad923ca02337018834950497ece9c89000f23c89fef7eab",
"0x97ebcdef713c7bf9be125fad30ed310d6d4b333f0a79fab4d3c3a8e7c2ba621b",
"0xbfd651269ef94d6af605e6adb4588c6e944f13057b943d206aa652484bc4e0f1",
"0xd3039c2b5bd269aea3390b82fc23fb12941aa8e500a95ca43e6ab5639f268890",
"0x5329f0db17991ab3fa88d483cd3014fdb27eb0ff475b61fbff1f28b5cab5e21d",
"0xcb01f39a110a0be10c3dc5c0ba8c99bf07597c04b218b465d718775f086d178b",
"0x5790bf74a039783af8c4aa6089bf1219c2e27138833675c6f89b0204476bda31"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


