# JS SDK For DNA Center

## Pre-Requisites
node & npm  
node > 8.11.2  
npm  > 5.6.0  
  
## Environment setup
Run the prepjsenv.sh script at the root of the directory
It installs node_modules in the root of the directory and also the DnsJsAPi
where the library files are present

Set the following environment variable to avoid
SSL complaints from DNA centers without a valid certificate
export NODE_TLS_REJECT_UNAUTHORIZED=0

## Run Sample
node ./sample.js IP USER PASSWORD  
where,  
IP: IP Address or DNS Name of cluster  
USER: DNAC User Name  
PASSWORD: DNAC User Password  
Sample source contains basic authentication, API samples and a console log of the response.
