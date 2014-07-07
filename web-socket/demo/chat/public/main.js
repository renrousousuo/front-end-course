$(function() {
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Initialize varibles
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page
  var username;
  // Prompt for setting a username
  $usernameInput.val(localStorage['chat-username'] || '');

  var connected = false;
  var $currentInput = $usernameInput.focus();

  var host = window.document.location.host.replace(/:.*/, '');
  var ws = new WebSocket('ws://' + host + ':2016');
  var self = {};
  var messages = {};
  var users = {};

  ws.onmessage = function(e) {
    var param = JSON.parse(e.data);
    switch (param.event) {
      case 'rename':
        var user = users[param.data.id];
        if (user) {
          user.name = param.data.name;
        }
        updateUsers();
        break;
      case 'join':
        users[param.data.id] = param.data;
        updateUsers();
        break;
      case 'exit':
        delete users[param.data.id];
        updateUsers();
        break;
      case 'init':
        connected = true;
        self = param.data.self;
        messages = param.data.messages;
        users = param.data.users;
        messages.forEach(function(message) {
          addChatMessage(message);
        });
        updateUsers();
        break;
      case 'talk':
        addChatMessage(param.data);
        break;
    }
  };

  function encodeHTML(text) {
    return String(text).replace(/["<>& ]/g, function(all){
      return "&" + {
          '"': 'quot',
          '<': 'lt',
          '>': 'gt',
          '&': 'amp',
          ' ': 'nbsp'
      }[all] + ";";
    });
  }

  function updateUsers() {
    var html = '';
    for (var key in users) {
      var user = users[key];
      html += '<li>' + encodeHTML(user.name) + '</li>'
    }
    $('.users').html(html);
  }

  // Sets the client's username
  function setUsername () {
    username = cleanInput($usernameInput.val().trim());
    localStorage['chat-username'] = username;

    // If the username is valid
    if (username) {
      $loginPage.fadeOut();
      $chatPage.show();
      $loginPage.off('click');
      $currentInput = $inputMessage.focus();

      ws.send(JSON.stringify({ // 发送加入
        event: 'rename',
        data: {
          name: username
        }
      }));
    }
  }

  // Sends a chat message
  function sendMessage () {
    var message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      $inputMessage.val('');
      // tell server to execute 'new message' and send along one parameter
      ws.send(JSON.stringify({ // 发送加入
        event: 'talk',
        data: {
          message: message
        }
      }));
    }
  }

  // Log a message
  function log(message, options) {
    var $el = $('<li>').addClass('log').text(message);
    addMessageElement($el, options);
  }

  // Adds the visual chat message to the message list
  function addChatMessage(data, options) {
    var $usernameDiv = $('<span class="username"/>')
      .text(data.from.name)
      .css('color', getUsernameColor(data.from.id));
    var $messageBodyDiv = $('<span class="messageBody">')
      .text(data.message);

    var $messageDiv = $('<li class="message"/>')
      .data('username', data.from.name)
      .append($usernameDiv, $messageBodyDiv);

    addMessageElement($messageDiv, options);
  }

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  function addMessageElement (el, options) {
    var $el = $(el);

    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    if (options.fade) {
      $el.hide().fadeIn(FADE_TIME);
    }
    if (options.prepend) {
      $messages.prepend($el);
    } else {
      $messages.append($el);
    }
    $messages[0].scrollTop = $messages[0].scrollHeight;
  }

  // Prevents input from having injected markup
  function cleanInput (input) {
    return $('<div/>').text(input).text();
  }

  function getUsernameColor(id) {
    return COLORS[id % COLORS.length];
  }

  // Keyboard events

  $window.keydown(function (event) {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
      } else {
        setUsername();
      }
    }
  });

  // Click events

  // Focus input when clicking anywhere on login page
  $loginPage.click(function () {
    $currentInput.focus();
  });

  // Focus input when clicking on the message input's border
  $inputMessage.click(function () {
    $inputMessage.focus();
  });
});