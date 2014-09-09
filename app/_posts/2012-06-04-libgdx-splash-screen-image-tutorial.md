---
layout: post
title:  "Libgdx Splash Screen Image Tutorial"
date:   2012-06-04 17:05:55
---

Lots of people like to start their app with a splash screen image. The libgdx game framework makes this nice and easy.

Start with your initial game class, which should extend Game.

{% highlight java linenos %}
import com.badlogic.gdx.Game;
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.Texture;
 
public class MyGame extends Game
{
    public static int WIDTH;
    public static int HEIGHT;
 
    @Override
    public void create() {
        WIDTH = Gdx.graphics.getWidth();
        HEIGHT = Gdx.graphics.getHeight();
 
        Texture.setEnforcePotImages(false);
        setScreen( new Splash(this) );
        }
    @Override
    public void resize(int width, int height) {
    }
    @Override
    public void pause() {
    }
    @Override
    public void resume() {
    }
    @Override
    public void dispose() {
    }
}
{% endhighlight %}

**Line 12:** This is the `create()` method, which is called once when your game is started, do your initialization here.

**Lines 13 and 14:** We store the width and height of the screen in static variables so that we can access them easily throughout our app without calling `getWidth()` and `getHeight()` every time we want those values.

**Line 16:** `Texture.setEnforcePotImages(false);` This allows us to use an image that’s width and height aren’t powers of 2.

**Line 17:** This sets the current screen output to be controlled by our Splash class. We pass in a reference to our main class so that we can pass on control of the screen to a new class once we want to stop showing the splash screen.

Now lets move on to our Splash class, which should implement Screen.

{% highlight actionscript linenos %}
import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.Screen;
import com.badlogic.gdx.graphics.GL10;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
 
public class Splash implements Screen
{
    private Texture logo;
    private SpriteBatch spriteBatch;
    private MyGame game;
 
    public Splash( MyGame game )
    {
    	this.game = game;
    }
 
    @Override
    public void show()
    {
        logo = new Texture(Gdx.files.internal("logo.png"));
        spriteBatch = new SpriteBatch();
    }
 
    @Override
    public void render(float delta)
    {
        handleInput();
 
        GL10 gl = Gdx.graphics.getGL10();        
        gl.glClear(GL10.GL_COLOR_BUFFER_BIT);
 
        spriteBatch.begin();
        spriteBatch.draw(logo, 0, 0, MyGame.WIDTH, MyGame.HEIGHT);
        spriteBatch.end();
    }
 
    private void handleInput()
    {
        if(Gdx.input.justTouched())
        {
            game.setScreen(new LevelOne(game));
        }
    }
 
    @Override
    public void resize(int width, int height) {
    }
    @Override
    public void hide() {
    }
    @Override
    public void pause() {
    }
    @Override
    public void resume() {
    }
    @Override
    public void dispose() {	
    }
}
{% endhighlight %}

**Line 15:** We store a reference to our main game object so we can pass on control of the screen when the splash screen is done with. You may want to change/remove this depending on how you want to manage your screens.

**Line 19:** The `show()` method is only called once, it’s pretty much the same as the `create()` method in our main game class.

**Line 21:** We load our splash screen image and store it in texture.

**Line 22:** We initialize a SpriteBatch for drawing our splash screen image to the screen.

**Line 26:** This is our `render()` method, where we draw our output.

**Line 28:** we call our `handleInput()` method, which listens for a tap of the screen which lets us know that the user wants to move on from the splash screen and start the game.

**Lines 30 and 31:** This will clear our screen.

**Lines 33 to 35:** These will use our SpriteBatch object to draw our logo to the screen, using the `HEIGHT` and `WIDTH` values we stored earlier.

**Line 42:** In the event of the screen having just been tapped, we pass control of the screen to a new class using the reference to the main game object that we stored earlier.

This should give you a nice working splash screen that can be skipped by tapping the screen, much like the one used by popular games like Angry Birds. Make sure to use an image big enough for screen with high resolution. Your image will still look good if it is scaled down, but it’ll look terrible if it has to be scaled up. You could always include multiple images and display a certain one depending on the resolution being used.

Hope this helps.