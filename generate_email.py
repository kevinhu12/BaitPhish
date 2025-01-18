import cohere

def generate_email(reference_emails, api_key):
    prompt = """I want you to generate me a spoof email, based on some reference emails.
        The spoof email will be used to educate the recipient about spotting phishing emails, and so should have some areas that give away that it's a phishing email.
        The spoof email will have a link that links to the following url: localhost:3000.
        The following are the reference emails that the spoof email should be based off of: {reference_emails}.
        """

    co = cohere.ClientV2(f"<<{api_key}>>")
    response = co.chat(
        model="command-r-plus", 
        messages=[{"role": "user", "content": prompt}]
    )

    print(response)
