---
layout: post
title:  "Bootstrap 2.3: Make the carousel swipeable on mobile & tablet"
date:   2013-07-10 17:05:55
---

Making the bootstrap carousel swipeable on mobile devices is a breeze. First grab a copy of the [jQuery touchSwipe plugin](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin).

Then use their slideLeft and slideRight callbacks to detect each gesture and respond to each by telling the carousel to go to the next/previous slide. Here’s the code:

{% highlight javascript linenos %}
$('#myCarousel').swipe( {
    swipeLeft: function() {
        $(this).carousel('next');
    },
    swipeRight: function() {
        $(this).carousel('prev');
    },
    allowPageScroll: 'vertical'
});
{% endhighlight %}

Also set the `allowPageScroll` option to vertical as above to make sure that scrolling downwards isn’t blocked.

And that’s all there is to it. Happy coding!