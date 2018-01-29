import * as jwt from 'jsonwebtoken'
import * as fs from 'fs'
const pem2jwk = require('pem-jwk').pem2jwk

const jose = require('node-jose');
let privateKey = fs.readFileSync('./dist/jwt/private_key.pem');
let keystore: any = jose.JWK.createKeyStore();
console.log(JSON.stringify(pem2jwk(privateKey.toString("utf8"))));
// jose.JWK.asKeyStore(pem2jwk(privateKey.toString("utf8"))).then((result: any) => {
//     keystore = result;
//     console.log(keystore.toJSON());
// })

export function createJtw(params: any): string {
    // return '';
    
    return jwt.sign({
        ...params,
        response_type: 'code id_token'

    }, privateKey, { algorithm: 'RS256' })
}

export function createAssertion(params?: any): string {
    // return '';
    
    return jwt.sign({
        ...params,
        sub: 'aspsp_client'

    }, privateKey, { algorithm: 'RS256' })
}
