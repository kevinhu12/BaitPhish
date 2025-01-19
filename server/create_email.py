import cohere
import json
from read_emails import *
from simplegmail import Gmail
import json
from flask import Flask
from flask_cors import CORS

import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

load_dotenv()

# Create a route to call the function
@app.route('/api/getGeneratedEmail', methods=['GET'])
def generate_email():
    reference_emails = read_emails()

    prompt = f"""
    I want you to generate me a spoof email, based on some reference emails.
    The spoof email will be used to educate the recipient about spotting phishing emails, and so should have some areas that give away that it's a phishing email.
    The company involved should be the same as one of the reference emails
    The following are the reference emails that the spoof email should be based off: {reference_emails}.
    The spoof email should have a hidden that links to the following url: http://localhost:3000/  This link should follow this format: <a href=""http://localhost:3000/"">Actionable text</a>>
    Format the email body with HTML
    The 'to' field should be: owengtchung@gmail.com
    Generate a JSON containing these fields: To, From, Subject, Preview, Message Body
    Only include the JSON
    """

    co = cohere.ClientV2(os.getenv("API_KEY"), log_warning_experimental_features=False)
    response = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": prompt}],
    )
   
    filtered_json = response.message.content[0].text
    filtered_json = filtered_json[7:-3]
    json_object = json.loads(filtered_json)
    send_email(json_object)
    return



def send_email(send_json):
    gmail = Gmail()
    params = {
        "to": send_json['To'],
        "sender": send_json['From'],
        "subject": send_json['Subject'],
        "msg_html": send_json['Message Body'],
    }
    message = gmail.send_message(**params)
 

if __name__ == '__main__':
    app.run(debug=True)
