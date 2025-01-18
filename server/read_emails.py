from simplegmail import Gmail

gmail = Gmail()
# Starred messages
messages = gmail.get_starred_messages()

# ...and many more easy to use functions can be found in gmail.py!

# Print them out!
for message in messages:
    print("To: " + message.recipient)
    print("From: " + message.sender)
    print("Subject: " + message.subject)
    print("Date: " + message.date)
    print("Preview: " + message.snippet)
    print("Message Body: " + message.plain)  # or message.html

from simplegmail import Gmail

params = {
  "to": "owengtchung@gmail.com",
  "sender": "owengtchung@gmail.com",
  "subject": "My first email",
  "msg_html": "<h1>Woah, my first email!</h1><br />This is an HTML email.",
  "msg_plain": "Hi\nThis is a plain text email.",
}

message = gmail.send_message(**params)  