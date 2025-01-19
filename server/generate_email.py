import cohere
from read_emails import *

def generate_email(reference_emails):
    prompt = f"""I want you to generate me a spoof email, based on some reference emails.
        The spoof email will be used to educate the recipient about spotting phishing emails, and so should have some areas that give away that it's a phishing email.
        The spoof email will have a link that links to the following url: localhost:3000.
        The following are the reference emails that the spoof email should be based off of all of the reference emails: {reference_emails}.
        Generate a JSON containing these fields: To, From, Subject, Preview, Message Body
        """

    co = cohere.ClientV2("nZZAoqvnpwl4rdBzl2JS3dP0r2ypHdahMDWDPMFz", log_warning_experimental_features=False)
    response = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": prompt}],
        response_format={
            "type": "json_object",
            "schema": {
                "type": "object",
                "properties": {
                    "To": {"type": "string"},
                    "From": {"type": "string"},
                    "Subject": {"type": "string"},
                    "Preview": {"type": "string"},
                    "Message Body": {"type": "string"},
                },
                "required": ["To", "From", "Subject", "Preview", "Message Body"],
            },
        },
    )
    print(response.message)

reference_emails = readEmails()
generate_email(reference_emails)
