// import React, { Component } from 'react';
// class ChatCustomerCare extends Component {
//     state = {  }
//     render() { 
//         return ( <React.Fragment>
             
// <div class="outer_screen">
//     {/* <!-- <div class="inner_screen height_10">
//         <div>as</div>
//     </div>
//     <div id="chat_messages" class="inner_screen height_90 ">
//         <div class="self-message"> <p> Self-message asdddddddddddddddds </p></div>
//         <div class="other-message"><p> Other-message   hi hello nameasets</p></div>
        
      
//     </div>
//     <div>
//         <form style="background-color: white;">
//             <input id="input_text"  type='text'>
//             <button id="message_send">Clikcme</button>
//         </form>
//     </div> --> */}
//     <div class="chat-container">
//       <div class="row no-gutters">
//         <div class="col-md-4 border-right">
//         <div class="settings-tray">
//           <img class="profile-image" src="/images/download.png" alt="Profile img"/>
//           <span class="settings-tray--right">
           
//           <i class="material-icons">Customers online list</i>
           
//           </span>
//         </div>
        
//         <%for(customer of customers){%>
//           <div data-value="<%=customer.chat_id.id%>" class="customer_chat_list  friend-drawer friend-drawer--onhover">
//             <%if(customer.chat_id.avatar){%>
//               <img class="profile-image" src="<%=customer.chat_id.avatar%>" alt="">

//               <%}else{%>
//                 <img class="profile-image" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" alt="">

//                 <%}%>
//             <div class="text">
//             <h6><%=customer.chat_id.name%></h6>
//             <p class="text-muted"><%=customer.chat_id.email%></p>
//             </div>
//             <span class="time text-muted small"><%=customer.chat_id.mobile%></span>
//           </div>
//           <hr>
//         <%}%>
//         </div>
//         <div class="col-md-8">
         
//         <div class="chat-panel">
//          <section class="msger">
//     <header class="msger-header">
//       <div class="msger-header-title">
//         <i class="fas fa-comment-alt"></i> CustomerCare Service
//       </div>
//       <div class="msger-header-options">
//         <span><i class="fas fa-cog"></i></span>
//       </div>
//     </header>
  
//     <main id="chat_messages"  class="msger-chat">
//       <div class="msg left-msg">
//         <div
//          class="msg-img"
//          style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
//         ></div>
  
//         <div   class="msg-bubble">

//           <div class="msg-info">
//             <div class="msg-info-name">Customer</div>
//             <div class="msg-info-time">12:45</div>
//           </div>
  
//           <div class="msg-text other-message">
//              I have an Issue !!!
//           </div>
//         </div>
//       </div>
  
//       <div class="self-message msg right-msg">
//         <div
//          class="msg-img"
//          style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)">
         
//         </div>
  
//         <div class="msg-bubble">
//           <div class="msg-info">
//             <div class="msg-info-name">You</div>
//             <div class="msg-info-time">12:46</div>
//           </div>
  
//           <div class="msg-text ">
//             Your messages!
//           </div>
//         </div>
//       </div>
//     </main>
  
//     <form class="msger-inputarea">
//       <input type="text" id="input_text" class="msger-input" placeholder="Enter your message...">
//       <button type="submit" id="message_send" class="msger-send-btn">Send</button>
//     </form>
//   </section>
 
             
           
           
          
           
            
           
//         </div>
//         </div>
//       </div>
//       </div>
// </div>
// <%if(locals.user){%>
 
//     <%}%>
//     <script
//     src="https://code.jquery.com/jquery-3.4.1.min.js"
//     integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
//     crossorigin="anonymous"></script>
  
// <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
// <script>
//  var socket = io('http://localhost:5000');
//   var room;
//   // socket.on("main_server",function(data){

//     // console.log("main server called");
//     // socket.emit('server_join_room',  data);
//     // room=data.room;
//   // })
//   var customer_active_list=$(".customer_chat_list");
//   customer_active_list.on("click",function(e){
//     e.preventDefault();
//     data={"room":$(this).attr("data-value")}
//     console.log($(this).attr("data-value"));
//     socket.emit('server_join_room',  data);
//     room=data.room;
//   })
  
//   socket.on("receive_message",function(data){
//     if(data.sender!="<%=user.id%>"){
//         $("#chat_messages").append(`<div class="msg left-msg">
//         <div
//          class="msg-img"
//          style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
//         ></div>
  
//         <div   class="msg-bubble">

//           <div class="msg-info">
//             <div class="msg-info-name">Customer</div>
//             <div class="msg-info-time">12:45</div>
//           </div>
  
//           <div class="msg-text other-message">
//             ${data.msg}
//           </div>
//         </div>
//       </div>`)
//       }
//       else{
//         $("#chat_messages").append(` <div class="self-message msg right-msg">
//         <div
//          class="msg-img"
//          style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)">
         
//         </div>
  
//         <div class="msg-bubble">
//           <div class="msg-info">
//             <div class="msg-info-name">You</div>
//             <div class="msg-info-time">12:46</div>
//           </div>
  
//           <div class="msg-text ">
//             ${data.msg}
//           </div>
//         </div>
//       </div>`)
//       }
//       var d = $('#chat_messages');
// d.scrollTop(d.prop("scrollHeight"));

//       console.log("info-sen",data.sender,data)
//   });
//   var btn=document.getElementById("message_send");
//   btn.addEventListener('click',function(e){
//       e.preventDefault()
//       var input_text=$('#input_text').val()
//       console.log("clicked",room,input_text)
//       socket.emit("send_message",{msg:input_text,sender:'<%=user.id%>'})
//       $("#input_text").val("")
//   })
// </script>

// <script>

// // Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU

// $( '.friend-drawer--onhover' ).on( 'click',  function() {
  
//   $( '.chat-bubble' ).hide('slow').show('slow');
  
// });

// // Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU
// </script>
//         </React.Fragment> );
//     }
// }
 
// export default ChatCustomerCare;