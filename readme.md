![qrfn](https://raw.githubusercontent.com/heyAyushh/qrfn/master/qrfn.jpg)

# QRfn - QR generator on Azure funtion

Generate QR code with text passed into query parameters of an Azure function.  
  
used [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) here.  
***
## Quick Deploy to Azure  
  
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2F101-app-function%2Fazuredeploy.json)  
  
 > - Pass text in query parameter as  
```http://<your-az-func>/api/qrfn?text="<your-text-here>"```

## Running Locally  
  
- Install Azure funtion core tools and execute  
``` func host start```

- Pass text in query parameter as  
```http://<your-az-func>/api/qrfn?text="<your-text-here>"```
