---
layout: post
title:  "Applying a Tint to a MovieClip in Actionscript 3"
date:   2012-05-25 17:05:55
---

Within the Flash CS3 IDE you can quite easily add a “tint” to a MovieClip. In the “Color” drop down menu on the Properties pane whilst you have a MovieClip selected, you’ll find the tint options. These are very useful.

However, when I decided that I would like to add some tints during run-time using Actionscript, it took me a while to figure out how to do it. Here’s what I eventually came across:

{% highlight actionscript %}
// import the Color class.
import fl.motion.Color;
// create a Color object
var c:Color = new Color();
// set the color of the tint and set the multiplier/alpha
c.setTint(0xff0000, 0.8);
// apply the tint to the colorTransform property of the
// desired MovieClip/DisplayObject
mc.transform.colorTransform = c;
This will add a red 80% tint to your MovieClip.
{% endhighlight %}

The setTint() method changes the tintColor and tintMultiplier properties of the Color object to the arguments that you pass. The first argument is a uint value representing the color you want to use (0x followed by the RGB color code), and the second argument is the multiplier (or opacity) of the tint, which must be between 0 and 1.

Color is an extension of the ColorTransform class, which allows you to apply a Color object to the colorTransform property of the MovieClip’s transform property.

Let’s do a practical example. The following is the code for applying a tint to a MovieClip based on the value of a slider.

{% highlight actionscript %}
// set slider event listener
slider.addEventListener(SliderEvent.CHANGE, changeTint);
 
function changeTint(s:SliderEvent):void {
    var c:Color = new Color();
    c.setTint(0xFF0000, slider.value);
    mc.transform.colorTransform = c;
}
{% endhighlight %}

Just make sure the minimum value of the slider is 0 and the max is 1.

Here’s an example:

<object type="application/x-shockwave-flash" 
data="/blog/attachments/TintExample.swf" 
width="200" height="100">
	<param name="movie" value="/blog/attachments/TintExample.swf" />
	<param name="quality" value="high"/>
</object>