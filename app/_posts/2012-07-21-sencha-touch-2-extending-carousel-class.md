---
layout: post
title:  "Sencha Touch 2: Extending the Carousel class"
date:   2012-07-21 17:05:55
---

Pretty much every example of the Sencha Touch 2 Carousel that I can find creates a customized instance of the carousel rather than extending it. I had a good deal of difficulty figuring out how to extend it (as I’m fairly new to Sencha Touch 2 and Ext.js), and kept getting the dreaded “Invalid config, must be a valid config object” error.

I got it eventually though, and here is an example of a correctly extended carousel:

{% highlight javascript linenos %}
Ext.define('MyApp.view.NewCarousel', {
    extend: 'Ext.Carousel',
    fullscreen: true,
    id: 'new-carousel',
 
    config: {
        items: [{
            xtype: 'panel',
            layout: {
                type: 'vbox'
            },
            items: [{
                html : 'Hello!'
            },
            {
                xtype: 'button',
                text: 'Button!'
            }]
        },
        {
            xtype: 'panel',
            layout: {
                type: 'vbox'
            },
            items: [{
                html : 'Hello Again!'
            },
            {
                xtype: 'button',
                text: 'Another Button!'
            }]
        }]
    }
});
{% endhighlight %}