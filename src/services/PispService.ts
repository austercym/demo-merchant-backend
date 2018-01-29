import { Pisp } from "pisp";

export async function GetPisps(): Promise<Pisp[]> {
    return [
        {
            id: "ipagoo",
            name: "Ipagoo",
            pictureUri: "https://www.ipagoo.com/wp-content/uploads/2016/10/ipagoo-logo.png",
            color: "#fff"
        },
        {
            id: "lloyds",
            name: "Lloyds",
            pictureUri: "https://www.lloydsbank.com/assets/img/personal/lloyds_personal_banking_logo.png",
            color: "#006A4D"
        },
        {
            id: "santander",            
            name: "Santander",
            pictureUri: "http://www.santander.co.uk/csdlvlr/BlobServer?blobtable=MungoBlobs&blobkey=id&blobcol=urldata&blobheader=image%2Fgif&blobheadervalue1=inline%3Bfilename%3Dlogo_SAN.gif&blobwhere=1314012717106&blobheadervalue2=911289237421288&blobheadername1=Content-Disposition&blobheadername2=portal",
            color: "#FF0000"
        }
    ]
}