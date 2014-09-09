---
layout: post
title:  "Hiding the 3 Dot Action Bar in your Android app"
date:   2012-07-26 17:05:55
---

Android is moving away from physical menu buttons, to a 3 Dot menu bar (Also known as the Action Bar) at the bottom of the screen, as seen below. Some apps, such as games, will not want this displayed, so this article explains how to hide it.

![Android 3 Dot Menu](/blog/attachments/3dotmenu.png)

Firstly, you need to use the latest Android SDK version with the project you are working on. Don’t worry if you want your app to work with older versions of Android, just set minSdkVersion to the minimum version you’re targeting. Personally I use the following to target as many devices as possible:

{% highlight xml %}
<uses-sdk android:minSdkVersion="7" android:targetSdkVersion="15" />
{% endhighlight %}

Then you need to add the NoActionBar theme to your application in the AndroidManifest.xml file, like this:

{% highlight xml %}
<application android:theme="@style/NoActionBar"></application>
{% endhighlight %}

Alternatively you can add the theme to individual activity elements, rather than the entire app, like this:


{% highlight xml %}
<activity android:theme="@style/NoActionBar"> ... </activity>
{% endhighlight %}

Next up you need to create the file res/values/themes.xml containing the following:

{% highlight xml %}
<resources>
    <style name="NoActionBar" parent="@android:style/Theme">
        <!-- Inherits the default theme for pre-HC (no action bar) -->
    </style>
</resources>
{% endhighlight %}

Then create the file res/values-v11/themes.xml containing the following:

{% highlight xml %}
<resources>
    <style name="NoActionBar" parent="@android:style/Theme.Holo.NoActionBar">
        <!-- Inherits the Holo theme with no action bar; no other styles needed. -->
    </style>
</resources>
{% endhighlight %}

And that should hide the 3 Dot action bar throughout your application. I’ve tested this on a HTC One X and it works a treat!

I found this solution in this helpful [article](http://android-developers.blogspot.co.uk/2012/01/say-goodbye-to-menu-button.html) by Scott Main, although I found out elsewhere that you should always develop using the latest SDK even if targeting older Android versions.

If this helped you out then follow me on Twitter!