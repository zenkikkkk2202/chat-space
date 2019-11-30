$(function(){
  
  
  function buildHTML(message){
    var info =  `<div class="chat_main__info">
                    <p class="chat_main__info--name">
                      ${message.user_name}
                    </p>
                    <p class="chat_main__info--date">
                      ${message.created_at}
                    </p>
                  </div>`
    if (message.image.url) {
      var html = `
                      ${info}
                      <div class="chat_main__message">
                        <p class="chat_main__message__content">
                          ${message.content}
                        </p>
                        <div class="chat_main__message__image">
                          <image src = "${message.image.url}">
                        </div>
                      </div>`
                            
    } else {
      var html = `
                      ${info}
                      <div class="chat_main__message">
                        <p class="chat_main__message__content">
                          ${message.content}
                        </p>
                      </div>`
                    
              
    }
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
     $('.chat_main__form__blank').val('');
     $('.chat_main').animate({ scrollTop: $('.chat_main')[0].scrollHeight});
     $('.chat_main__form--submitbtn').prop('disabled', false)
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });

  })
});



