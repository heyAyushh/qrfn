/**
 * Creates a QR for text passed in Query Parameters based on Azure function and QRcode.js
 * @author - Ayush Chauhan (gtihub.com/heyayushh)
 * 
 * @description - Make QR with text passed into query parameters of an Azure function
 * 
 * Try generating qr after hosting and passing text as
 *  http://localhost:7071/api/qrfn?text="hello"
 * 
 * @param text - Text to be converted into QR
 * - Default html page with qrcode.js library
 * @returns - `genQr` html with QR of text
 */

 var genQr = function(text){
  var qrSite = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>text to QR</title>\n</head>\n<body>\n    <div id="placeHolder"></div>\n    <div id="ASCII"></div>\n</body>\n<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.1/qrcode.js"></script>\n<script>\nvar typeNumber = 4;\nvar errorCorrectionLevel = \'H\';\nvar qr = qrcode(typeNumber, errorCorrectionLevel);\nqr.addData(\'\');\nqr.make();\ndocument.getElementById(\'placeHolder\').innerHTML = qr.createImgTag(20,20);\n\n</script>\n</html> ';
  return qrSite.slice(0, 556) + text + qrSite.slice(556, -1)
 }

module.exports = function(context, req) {
    var text = req.query.text;
    var qr = genQr(text);

    context.res = {
        status: 200,
        body: qr,
        isRaw: true,
        headers: {
          "Content-Type": "text/html"
        }
    };
    context.done();
};
