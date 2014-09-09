---
layout: post
title:  "Mobile Pinch Zoom Gesture Detection in Javascript & JQuery"
date:   2012-06-24 17:05:55
---

Here is how to detect a pinch zoom gesture for mobile browsers in Javascript:

{% highlight javascript linenos %}
function onPinch(e) {
    if (e.scale > 1)
    {
        // React to the pinch zoom in here.
    } else if (e.scale < 1) {
        //React to the pinch zoom out here.
    }
}
document.getElementById("myPinchElement").ongestureend = onPinch;
{% endhighlight %}

You can also listen for the pinch event using jQuery like this:

{% highlight javascript linenos %}
$("#myPinchElement").on("gestureend", onPinch);
{% endhighlight %}