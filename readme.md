![qrfn](https://raw.githubusercontent.com/heyAyushh/qrfn/master/qrfn.jpg)

# QRfn - QR generator on Azure funtion

Generate QR code with text passed into query parameters of an Azure function.  
  
used [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) here.  
***
## Quick Deploy to Azure  
  
[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)  
  
 > - Pass text in query parameter as  
```http://<your-az-func>/api/qrfn?text="<your-text-here>"```

## Running Locally  
  
- Install Azure funtion core tools and execute  
``` func host start```

- Pass text in query parameter as  
```http://<your-az-func>/api/qrfn?text="<your-text-here>"```
