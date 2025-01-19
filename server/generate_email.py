import cohere
import json
from read_emails import *
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Create a route to call the function
@app.route('/api/getGeneratedEmail', methods=['GET'])
def generate_email():
    reference_emails = readEmails()

    prompt = f"""I want you to generate me a spoof email, based on some reference emails.
        The spoof email will be used to educate the recipient about spotting phishing emails, and so should have some areas that give away that it's a phishing email.
        The spoof email will have a link that links to the following url: localhost:3000.
        The following are the reference emails that the spoof email should be based off of all of the reference emails: {reference_emails}.
        Generate a JSON containing these fields: To, From, Subject, Preview, Message Body.
        Only include the json.
        """

    co = cohere.ClientV2("nZZAoqvnpwl4rdBzl2JS3dP0r2ypHdahMDWDPMFz", log_warning_experimental_features=False)
    response = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": prompt}],
    )

    filtered_json = response.message.content[0].text
    filtered_json = filtered_json[7:-3]
    json_object = json.loads(filtered_json)
    print(json_object)
    return json_object
    # TODO: instead of returning the object, send the email and the return response should be success or fail
 

if __name__ == '__main__':
    app.run(debug=True)
