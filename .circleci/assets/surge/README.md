We learned somethig very important noting :


Twitch has banned all subdoamins of https://surge.sh : Why ? security might be a reason, other reason may be involved, i do have any odds on that.

But we have there a fact: Twictch has a configuration somewhere in there infra, which refuses to frame on `*.surge.sh`.

I tested that by deploying on surge.sh and on vercel.app , only one simple HTML file `index.html`, with the following content :

```Html
<html>
  <body>
    <div id="twitch-embed"></div>

        
    <script src="https://embed.twitch.tv/embed/v1.js"></script>

    
    <script type="text/javascript">

        new Twitch.Embed("twitch-embed", {
          width: '100%',
          height: 480,
           
           
          channel: "radiojaune", 
          autoplay: true,
          
          parent: ["radiojaune.com"]
        });

    </script>
  </body>
</html>
```



I have suddenly another idea : 
Maybe the reason why Twitch rejected framing the player, is that i had underscore characters into the url, e.g. https://justincurieux_jbl_fix_twitch_connection_rejected.surge.sh/