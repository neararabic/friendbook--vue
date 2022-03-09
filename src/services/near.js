import { keyStores, Near, WalletConnection } from 'near-api-js';

export const CONTRACT_ID = 'dev-1646314780524-36067631587978';

// use new NEAR here to avoid needing async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

// can now create a new WalletConnection with the created Near object
export const wallet = new WalletConnection(near, 'friend-book');

// a service to get messages from the blockchain
export const getMessages = () => {
  return wallet.account().viewFunction(CONTRACT_ID, 'listWritings', {});
};

// a service to add a message to the blockchain
export const addMessage = ({message, toWho} ) => {

  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'writeSomething',
    args: { message, toWho }
  });
};
