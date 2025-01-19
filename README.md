# BaitPhish

BaitPhish is an educational tool designed to raise awareness about phishing attacks by delivering realistic phishing emails and testing users' ability to recognize and avoid them. Fake phishing emails can be automatically generated and are seamlessly delivered to the users' inboxes via Google Workspace's Gmail API. Email generation is powered by Cohere's Large Language Model, Command +R, which analyzes the users' inboxes and generates emails that seem like ones they would normally receive. If the user isn't attentive to the email's contents and they click on a link they shouldn't have, they will be directed to our page that informs them that they should have been more attentive. Our goal with this project is to help users gain perspective on what malicious emails could look like and help them stay safe on the internet.


This project was created using an MUI-based React frontend, a Python backend run on Flask, and the Cohere Command +R model. The Google Workspace Gmail API integration was supported by simplegmail, an API client created by @jeremyephron, which can be found here: https://github.com/jeremyephron/simplegmail
