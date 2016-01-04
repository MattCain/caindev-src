do ($ = jQuery) ->
  $('#mobile-nav-trigger').on('click', ->
    $('#main-nav').slideToggle(->
      $(this).toggleClass('closed').removeAttr('style')
    )
  )

  $('.hiringEmail').attr('href', 'mailto:matt@cainmedia.com')
