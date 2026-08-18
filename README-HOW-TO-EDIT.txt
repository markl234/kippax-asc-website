KIPPAX ASC WEBSITE — HOW TO EDIT (for club volunteers)
=======================================================

WHAT'S IN THE FOLDER
--------------------
  index.html                -> the web page itself (rarely needs touching)
  style.css                 -> colours and layout (only if you want a redesign)
  script.js                 -> behind-the-scenes logic (leave this alone)
  data.js                   -> *** THE FILE YOU EDIT for news & events ***
  assets/logo.png           -> the club badge
  README-HOW-TO-EDIT.txt    -> this file


ADDING A NEWS ANNOUNCEMENT
--------------------------
1. Open  data.js  in Notepad (Windows) or TextEdit (Mac).
2. Find the section headed "1) ANNOUNCEMENTS / NEWS".
3. Copy one whole block, from  {  down to  },  and paste it at the TOP of
   the list (newest first).
4. Change the wording between the quotes:
       date  -> e.g. "05 Sep 2026"
       title -> the headline
       body  -> the message
       tag   -> choose one of: "News", "Result", "Celebration", "Notice"
5. Save the file. Done.


ADDING AN EVENT
---------------
1. In  data.js  find the section headed "2) EVENTS / CALENDAR".
2. Copy one line (from { to },) and edit it:
       date  -> "14 Sep 2026"
       start -> "09:00 am"   (leave as ""  if it's all day)
       end   -> "04:00 pm"   (leave as ""  if it's all day)
       title -> what it is
       group -> where / which squad
       type  -> choose one of: "Training", "Gala", "Social"
3. The "type" decides which tab (Training / Galas / Social) it appears under.
4. Save the file. Done.


UPDATING THE TRAINING TIMETABLE
-------------------------------
Edit the "3) TIMETABLE" section in data.js the same way. The current times
are placeholders — replace them with your real sessions.


GOLDEN RULES
------------
* Keep every " quote " and , comma exactly where they are.
* Never delete the { curly braces } around a block.
* The newest item goes at the TOP so it shows first.
* If something looks broken after an edit, you probably removed a comma or a
  quote — undo your change and try again slowly.


PUTTING IT ONLINE
-----------------
This is a "static" site, so it works with any basic (often free) host:
  * GitHub Pages        (free)
  * Netlify             (free tier, drag-and-drop the whole folder)
  * Cloudflare Pages    (free)
  * Any standard web hosting via FTP
Just upload the WHOLE folder (keeping the files together) and point your
domain at it. To preview locally, simply double-click index.html.
