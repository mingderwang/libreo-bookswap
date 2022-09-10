require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      chainId: 1337, //matic
      //chainId: 0x40b9020d, //skale
    },
    alfajores: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
      chainId: 44787,
    },
    'gnosis-test': {
      url: 'https://rpc.ankr.com/gnosis',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
    gnosis: {
      url: 'https://rpc.ankr.com/gnosis',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
      chainId: 100,
    },
    xdai: {
      url: 'https://rpc.gnosischain.com',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
      chainId: 100,
    },
    matic: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },

    skale: {
      url: 'https://hackathon.skalenodes.com/v1/downright-royal-saiph',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
    optimistic: {
      url:
        'https://opt-kovan.g.alchemy.com/v2/cfv68qUqLuZipE8sXJYuG-KQ1eKiuPsl',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
    rinkeby: {
      url:
        'https://eth-rinkeby.gateway.pokt.network/v1/lb/62b8802d123e6f0039866020',
      accounts: [
        'a94b13a69756cb84833978359e6eae91cde82135a7501444f3989b4b6b4cea1d',
      ],
    },
  },
  paths: {
    artifacts: './src/artifacts',
    cache: './src/cache',
  },
  NODE_OPTIONS: '--openssl-legacy-provider',
}