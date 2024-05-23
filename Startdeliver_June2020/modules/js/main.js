(function () {
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';

  var firstLanguageSwitcherItem = document.querySelector(".header__language-switcher .lang_list_class li:first-child")
  var languageSwitcherList = document.querySelector(".header__language-switcher .lang_list_class")

  var Nav = document.querySelector(".header__navigation")
  var LangSwitcher = document.querySelector(".header__language-switcher")
  var Search = document.querySelector(".header__search")

  var allToggles = document.querySelectorAll(".header--toggle")
  var navToggle = document.querySelector(".header__navigation--toggle")
  var langToggle = document.querySelector(".header__language-switcher--toggle")
  var searchToggle = document.querySelector(".header__search--toggle")
  var closeToggle = document.querySelector(".header__close--toggle")

  var allElements = document.querySelectorAll(".header--element, .header--toggle")

  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function showFocusOutline() {
    document.body.classList.add(SHOW_FOCUS_STYLES_CLASS);
    document.body.classList.remove(HIDE_FOCUS_STYLES_CLASS);
  }

  function hideFocusOutline() {
    document.body.classList.add(HIDE_FOCUS_STYLES_CLASS);
    document.body.classList.remove(SHOW_FOCUS_STYLES_CLASS);
  }

  // adds hover effects to the pseduoelement triangle on the menu
  // for design continutity
  function hoverLanguageSwitcher() {
    languageSwitcherList.classList.add("first-active")
  }

  function unhoverLanguageSwitcher() {
    languageSwitcherList.classList.remove("first-active")
  }

  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide')
    })

    Nav.classList.toggle('open')
    navToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide')
    })

    LangSwitcher.classList.toggle('open')
    langToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide')
    })

    Search.classList.toggle('open')
    searchToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open')
    })

    closeToggle.classList.remove('show')
  }

  $('.active-branch').each(function () {
    $(this).parent('li').addClass('active-branch');
  });

  domReady(function () {
    if (!document.body) {
      return;
    } else {

      // Show the focus outline when keyboard activity occurs
      document.body.addEventListener('keydown', showFocusOutline);

      // Hide the focus outline when mouse activity occurs
      document.body.addEventListener('mousemove', hideFocusOutline);
      document.body.addEventListener('mousedown', hideFocusOutline);
      document.body.addEventListener('mouseup', hideFocusOutline);

      // function dependent on the language switcher component
      if (LangSwitcher) {
        // Adds a hover style class to the parent element when the cursor hovers
        // over the first child item
        firstLanguageSwitcherItem.addEventListener('mouseover', hoverLanguageSwitcher);
        firstLanguageSwitcherItem.addEventListener('mouseout', unhoverLanguageSwitcher);

        // Toggles the language switcher
        langToggle.addEventListener('click', toggleLang);
      }

      // Toggles the mobile views for menu, search, and close button
//       navToggle.addEventListener('click', toggleNav);
//       searchToggle.addEventListener('click', toggleSearch);
//       closeToggle.addEventListener('click', closeAll);
    }
  });
  $('input[name="globalunsub"]').change(function () {
    if ($(this).is(':checked')) {
      $('.item').addClass('disabled')
      $('.item input').attr('disabled', 'disabled')
    }
    else {
      $('.item').removeClass('disabled')
      $('.item input').removeAttr('disabled')
    }
  });
})();


// define fixed header variable
const fixedHeader = document.querySelector(".header");
function scrollFunction() {
  if (window.pageYOffset > 10) { // Show fixedHeader
    if (!fixedHeader.classList.contains("sticky")) {
      fixedHeader.classList.remove("no-sticky");
      fixedHeader.classList.add("sticky");
    }
  } else { // Hide fixedHeader
    if (fixedHeader.classList.contains("sticky")) {
      fixedHeader.classList.remove("sticky");
      fixedHeader.classList.add("no-sticky");
    }
  }
}
// call top to bottom scroll function
window.addEventListener("scroll", scrollFunction);

// Smooth Scroll
var scrollBtns = document.querySelectorAll("a[href*='#']:not([href='#']");
scrollBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    var target = btn.href.split('#')[1];
    var targetElement = document.getElementById(target);  
    if (targetElement !== null) {
      e.preventDefault();
      var targetElementOffset = targetElement.offsetTop - $('.cs_header').outerHeight();
      var targetPosition = targetElementOffset;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000;
      var start = null;
      window.requestAnimationFrame(step);
      function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      };
      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
      return false;
    }
  });
});


