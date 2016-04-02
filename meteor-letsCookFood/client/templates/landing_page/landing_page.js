Template.landingPage.events({
  'click [data-action="getStarted"]': function(e) {
    e.stopPropagation();
    $('#login-dropdown-list').addClass('open');
    $('#login-username-or-email').focus();
  }
});
