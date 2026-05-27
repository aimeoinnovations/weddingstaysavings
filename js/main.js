/* ===========================
   SHAADISTAYS — MAIN SCRIPT
   =========================== */

/* ---- Navbar active link & mobile menu ---- */
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }
})();

/* ---- Scroll fade-in ---- */
(function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();

/* ---- Footer year ---- */
(function () {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ---- FAQ accordion ---- */
(function () {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) { o.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---- Contact form → WhatsApp ---- */
(function () {
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name    = document.getElementById('f-name').value;
    var phone   = document.getElementById('f-phone').value;
    var email   = document.getElementById('f-email').value;
    var hotel   = document.getElementById('f-hotel').value;
    var rooms   = document.getElementById('f-rooms').value;
    var date    = document.getElementById('f-date').value;
    var message = document.getElementById('f-message').value;
    var text = 'Hi ShaadiStays! I\'m looking for wedding hotel assistance.\n\nName: ' + name +
               '\nPhone: ' + phone +
               (email ? '\nEmail: ' + email : '') +
               (hotel ? '\nHotel: ' + hotel : '') +
               (rooms ? '\nRooms: ' + rooms : '') +
               (date  ? '\nDate: ' + date : '') +
               (message ? '\nMessage: ' + message : '');
    window.open('https://wa.me/918979636730?text=' + encodeURIComponent(text), '_blank');
    form.style.display = 'none';
    if (success) success.style.display = 'block';
  });
})();

/* ---- Chatbot ---- */
(function () {
  var WHATSAPP = '918979636730';
  var questions = [
    {
      text: "Hey! 👋 Planning a wedding? I can help you save 10–40% on hotel stays. What are you looking for?",
      options: ["Wedding room blocks", "Banquet & F&B packages", "Destination wedding", "All of the above"]
    },
    {
      text: "Great choice! How many rooms are you looking to book approximately?",
      options: ["10–30 rooms", "30–60 rooms", "60–100 rooms", "100+ rooms"]
    },
    {
      text: "And when is the wedding? 🎉",
      options: ["Within 3 months", "3–6 months", "6–12 months", "Just exploring"]
    }
  ];

  var trigger    = document.getElementById('chat-trigger');
  var chatWin    = document.getElementById('chat-window');
  var closeBtn   = document.getElementById('chat-close');
  var messages   = document.getElementById('chat-messages');
  var chatFooter = document.getElementById('chat-footer');
  if (!trigger || !chatWin) return;

  var currentQ = 0;
  var answers  = [];
  var triggered = false;

  function addMsg(from, text) {
    var div = document.createElement('div');
    div.className = 'chat-msg ' + from;
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    div.appendChild(bubble);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function renderOptions() {
    chatFooter.innerHTML = '';
    if (currentQ < questions.length) {
      var wrap = document.createElement('div');
      wrap.className = 'chat-options';
      questions[currentQ].options.forEach(function (opt) {
        var btn = document.createElement('button');
        btn.className = 'chat-opt';
        btn.textContent = opt;
        btn.addEventListener('click', function () { handleOption(opt); });
        wrap.appendChild(btn);
      });
      chatFooter.appendChild(wrap);
    } else {
      var waBtn = document.createElement('button');
      waBtn.className = 'btn-wa-full';
      waBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Continue on WhatsApp <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>';
      waBtn.addEventListener('click', function () {
        var text = 'Hi ShaadiStays! I\'m looking for:\n• Service: ' + (answers[0] || 'N/A') +
                   '\n• Rooms: ' + (answers[1] || 'N/A') +
                   '\n• Timeline: ' + (answers[2] || 'N/A') +
                   '\n\nPlease help me get the best rates!';
        window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank');
      });
      chatFooter.appendChild(waBtn);
    }
  }

  function handleOption(opt) {
    answers.push(opt);
    addMsg('user', opt);
    currentQ++;
    setTimeout(function () {
      if (currentQ < questions.length) {
        addMsg('bot', questions[currentQ].text);
      } else {
        addMsg('bot', 'Perfect! Let me connect you with our team on WhatsApp for a personalized quote. Tap below to start chatting! 💬');
      }
      renderOptions();
    }, 500);
  }

  function openChat() {
    trigger.classList.add('hidden');
    chatWin.classList.remove('hidden');
    requestAnimationFrame(function () {
      chatWin.classList.add('open');
    });
    if (messages.children.length === 0) {
      addMsg('bot', questions[0].text);
      renderOptions();
    }
  }

  trigger.addEventListener('click', openChat);
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      chatWin.classList.remove('open');
      setTimeout(function () {
        chatWin.classList.add('hidden');
        trigger.classList.remove('hidden');
      }, 280);
    });
  }

  // Auto open after 10s
  setTimeout(function () {
    if (!triggered) {
      triggered = true;
      openChat();
    }
  }, 10000);
})();
