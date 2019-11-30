$(function(){
  
  
  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var img = message.image.url ? `<img src= ${message.image.url}>` : "";
    var html = `
                      <div class="chat_main__info">
                        <p class="chat_main__info--name">
                          ${message.user_name}
                        </p>
                        <p class="chat_main__info--date">
                          ${message.created_at}
                        </p>
                      </div>
                      <div class="chat_main__message">
                        <p class="chat_main__message__content">
                          ${content}
                        </p>
                        <div class="chat_main__message__image">
                          ${img}
                        </div>
                      </div>`
                         
    return html
  }


  $(".new_message").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function (message){
     var html = buildHTML(message);
     $(".chat_list").append(html);
     $(".new_message")[0].reset();
     $('.chat_main').animate({ scrollTop: $('.chat_main')[0].scrollHeight});
     $('.chat_main__form--submitbtn').prop('disabled', false)
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });

  })
});



