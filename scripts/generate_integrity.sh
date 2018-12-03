#! /bin/bash

INTEGRITY=$(cat $1 | openssl dgst -sha384 -binary | openssl base64 -A)
echo "<script src=\"$1\" integrity=\"sha384-$INTEGRITY\" crossorigin=\"anonymous\"></script>"