---
layout: post
title:  "HTML5 placeholder fallback for crappy old browsers"
date:   2013-02-16 17:05:55
---

One of the best features of HTML 5 is the input placeholder. All you have to do is:

{% highlight html %}
<input type="text" placeholder="Enter some text!">
{% endhighlight %}

And you get a nice faded piece of text in your input that disappears to allow you to enter your text, like this:

<input type="text" placeholder="Enter some text!">

You will have seen this used across the web, especially for search bars. The problem is that many citizens of the web are still using crappy, outdated browsers that don't support HTML5, and you may choose to implement a fallback for them so that they get the same experience.

Using the brilliant [Modernizr](http://modernizr.com/) library, you can easily detect a browser's missing features.

The below script will detect if the user's browser supports the placeholder attribute and will use javascript/jQuery to imitate it if it doesn't. Read the comments in the code to see what is going on.

{% highlight javascript linenos %}
// If placeholder isn't supported.
if (!Modernizr.input.placeholder) {
    // For every element that has a placeholder attribute
    $('[placeholder]').each(function() {
        var $this = $(this),
            placeholderValue = $this.attr('placeholder');

        // if field is empty, put the placeholder in it
        if ($this.val() == '') {
            $this.val( placeholderValue );
            $this.addClass('hasPlaceholderText');
        }
        // Add/remove placeholder on focus/blur
        $this.focus(function() {
            // Hide the placeholder so the user can enter
            // their own text
            if ($this.val() == placeholderValue) {
                $this.val('');
                $this.removeClass('hasPlaceholderText');
            }
        }).blur(function() {
            // If the user didn't enter any text, show the
            // placeholder text again.
            if ($this.val() == '' || $this.val() == placeholderValue) {
                $this.val(placeholderValue);
                $this.addClass('hasPlaceholderText');
            }
        });

        // If the user submits the form, remove the placeholder
        // if it is still there.
        $this.closest('form').submit(function() {
            if ($this.val() == $this.attr('placeholder')) {
                $this.val('');
            }
        });
    });
}
{% endhighlight %}

Then all you have to do is add the following rule to your css to make your fake placeholder text gray:

{% highlight css %}
.hasPlaceholderText {
    color: #aaa;
}
{% endhighlight %}

I hope this helps you out.

<script>
(function($) {
    if (!Modernizr.input.placeholder) {
        // For every element that has a placeholder attribute
        $('[placeholder]').each(function() {
            var $this = $(this),
                placeholderValue = $this.attr('placeholder'); // Save the value of the placeholder for later

            if ($this.val() == '') { // if field is empty, put the placeholder in it
                $this.val( placeholderValue );
                $this.addClass('hasPlaceholderText');
            }
            // Add/remove placeholder on focus/blur
            $this.focus(function() {
                // Hide the placeholder so the user can enter their own text
                if ($this.val() == placeholderValue) {
                    $this.val('');
                    $this.removeClass('hasPlaceholderText');
                }
            }).blur(function() {
            // If the user didn't enter any text, show the placeholder text again.
                if ($this.val() == '' || $this.val() == placeholderValue) {
                    $this.val(placeholderValue);
                    $this.addClass('hasPlaceholderText');
                }
            });

            // If the user submits the form, remove the placeholder if it is still there.
            $this.closest('form').submit(function() {
                if ($this.val() == $this.attr('placeholder')) {
                    $this.val('');
                }
            });
        });
    }
})(jQuery);
</script>
<style>
.hasPlaceholderText {
    color: #aaa;
}
</style>