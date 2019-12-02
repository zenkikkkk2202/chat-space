
date = Date.today
datetime = DateTime.now

json.content @message.content
json.image @message.image
json.user_name @message.user.name
json.created_at datetime.to_s(:datetime)


