require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe struggle repeat office punch harvest muscle army giant'; 
let testAccounts = [
"0x2f2a08054980861755a85b536dcda6418b07fdf185b930ff596bb0cc06ea5bd6",
"0xddba7364e68b84678db7b32f41dbd06056c09a63510784d74fb33874dcb99e7e",
"0x93f95efdee5368f5a8905c40857c7583effeb160c7801e278279f3ae0b04197d",
"0xceabcaf969f3e86bb079dcdffd46bfc0ac28dcc8aa99e6d38cf88c4a40dc3860",
"0x8fccd7d8d7cc4f9d09f4f181faeaaad384e704cb8e3ad6987f262004994ff1fa",
"0xbefa389f677a3bb285db3efce7806c56fe497a0ae6f497eba11b31e1f253b56f",
"0xc3c5a7064955584d45e1f9bf2e527aefcd89a3119f879581eb26dd7be26d17b1",
"0x52e0ca6b78966082967df4a70fd79e600caad7ce510fdba21327cc1d0f7bbb76",
"0x2aa2011a09ce8d17c20a349613865916b69d17930484bf58cf6b74d0dbfa958f",
"0x40f4fa520bb7dc3aca1928efa49b46665f0ef19958b6db3a7806d82db8d5aa7f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
