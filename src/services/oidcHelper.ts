import * as Request from 'request'
import * as uuid from 'uuid'

let redirectUris: { [id: string]: string } = {};

export let getRedirectUri = (): Promise<any> => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    return new Promise<any>((resolve, reject) => {
        Request.get("https://identity.ipagoo.com:9031/.well-known/openid-configuration",
            (err: any, response: any) => {
                if (err) {
                    console.log(err);
                }
                let tokenEndpoint = JSON.parse(response.body)["token_endpoint"];
                let uid = uuid.v4();
                redirectUris[uid] = `${tokenEndpoint}?response_type=id_token%20token&client_id=basicnode&state=txiKMh8BmBJScCCiGAFxvq9TIBs0KSuIgkqEymyW&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=openid&nonce=txiKMh8BmBJScCCiGAFxvq9TIBs0KSuIgkqEymyW`;

                resolve(`http://ec2-52-56-167-217.eu-west-2.compute.amazonaws.com:4000/redirect/${uid}`);
            }
        )

    });
}
 
export let getByUid = (uid:string): string => redirectUris[uid];