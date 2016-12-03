#!/bin/bash
zip DnsQuery.js.zip DnsQuery.js && aws lambda update-function-code --function-name DnsQuery --zip-file fileb://DnsQuery.js.zip --publish --region us-east-1 --profile adminuser