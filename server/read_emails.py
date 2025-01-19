from simplegmail import Gmail

def read_emails():
  gmail = Gmail()
  messages = gmail.get_starred_messages()
  
  reference_emails = []
  for message in messages:
    reference_emails.append(message.plain)
  return reference_emails

