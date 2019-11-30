
date = Date.today
datetime = DateTime.now

json.content @message.content
json.image @message.image
json.group_id @message.group_id
json.user_id @message.user_id
json.user_name @message.user.name
json.created_at datetime.to_s(:datetime)



