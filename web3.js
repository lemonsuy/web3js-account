var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider)

createAccount = (password) => {
    if(password != "" | password != null) { 
        console.log(web3.eth.accounts.create(password))
    } else {
        console.log(web3.eth.accounts.create())
    }
}

decryptAccount = (encryptedJson, passphase) => {
    console.log(web3.eth.accounts.decrypt(encryptedJson, passphase))
}

var encryptedJson = {
    version: 3,
    id: '04e9bcbb-96fa-497b-94d1-14df4cd20af6',
    address: '2c7536e3605d9c16a7a3d7b1898e529396a65c23',
    crypto: {
        ciphertext: 'a1c25da3ecde4e6a24f3697251dd15d6208520efc84ad97397e906e6df24d251',
        cipherparams: { iv: '2885df2b63f7ef247d753c82fa20038a' },
        cipher: 'aes-128-ctr',
        kdf: 'scrypt',
        kdfparams: {
            dklen: 32,
            salt: '4531b3c174cc3ff32a6a7a85d6761b410db674807b2d216d022318ceee50be10',
            n: 262144,
            r: 8,
            p: 1
        },
        mac: 'b8b010fff37f9ae5559a352a185e86f9b9c1d7f7a9f1bd4e82a5dd35468fc7f6'
    }
}
var passphase = 'test!'
// createAccount();
decryptAccount(encryptedJson, passphase)