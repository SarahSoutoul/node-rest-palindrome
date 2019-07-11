# Palindrome Database

## Requirement 

The task is to build a service that stores a number of palindromes. A palindrome is a word or phrase string that reads the same backwards as forwards, independent of spaces and punctuation. The service has a simple REST interface that presents two endpoints:

An endpoint that accepts a string parameter, that will return true if the string is a palindrome (and false otherwise)

An endpoint that returns a list of the last 10 palindromes the system has received in the last 10 minutes

## How to install 

git clone https://github.com/SarahSoutoul/node-rest-palindrome.git

cd node-rest-palindrome

npm install

## Run the app

npm start

## Implementation 

This app was built with Node/express. I decided to use an array variable to store the palindromes since there was no need to persist the palindromes. 

