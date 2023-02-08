'use strict'

const Encrypt = require('crypto')

module.exports = class ModuleEncrypt {

    constructor(secret) {
        this.secret = secret ?? 'UnPetitSecretBienGarde'
    }

    encryptPassword(plainPassword) {
        return Encrypt.createHmac('sha256', this.secret)
            .update(plainPassword)
            .digest('hex');
    }

    validatePassword(plainPassword, hashedPassword){
        return this.encryptPassword(plainPassword) === hashedPassword;
    }
}



