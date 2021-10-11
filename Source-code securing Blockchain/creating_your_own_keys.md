**Create Your own Private and Public Key for signing your source code before using it**

I’m using the OpenSSL library to do this.
Type below commands.


# This Creates the private Key.
$ openssl genrsa -out guysPrivateKey.pem 4096

# Extracting Public Key From Private Key
$ openssl rsa -in guysPrivateKey.pem -pubout >guysPublicKey.pem