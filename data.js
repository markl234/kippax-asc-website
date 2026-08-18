/* ============================================================================
   KIPPAX ASC — EASY EDIT FILE
   ============================================================================
   This is the ONLY file you need to change to update the website's
   NEWS / ANNOUNCEMENTS and EVENTS. No coding knowledge required.

   HOW TO EDIT
   -----------
   1. Open this file (data.js) in any plain text editor (Notepad, TextEdit, etc.).
   2. Copy an existing block, paste it, and change the words inside the quotes.
   3. Keep the punctuation exactly as it is: quotes "  " , commas , and braces { }.
   4. Save the file and re-upload it to your web host. The site updates instantly.

   TIP: The newest item goes at the TOP of the list so it shows first.
   ============================================================================ */


/* ----------------------------------------------------------------------------
   1) ANNOUNCEMENTS / NEWS
   ----------------------------------------------------------------------------
   Each announcement has:
     date  -> a friendly date, e.g. "17 Jul 2026"
     title -> the headline
     body  -> the message (keep it short; you can write a few sentences)
     tag   -> a small label. Use: "News", "Result", "Celebration" or "Notice"
   ---------------------------------------------------------------------------- */
const ANNOUNCEMENTS = [
  {
    date:  "17 Jul 2026",
    title: "Sponsored Swim 2026 — Wow, just wow!",
    body:  "A massive THANK YOU to everyone who came down for our sponsored swim. The kids turned up ready to go and the effort in the water was incredible. Every length counts and helps keep our volunteer club going.",
    tag:   "Celebration"
  },
  {
    date:  "30 Jun 2026",
    title: "Splashing Success at the Summer Party!",
    body:  "A huge thank you to all the parents, children and families who joined us for our Summer Party. A brilliant afternoon celebrating a fantastic season together.",
    tag:   "News"
  },
  {
    date:  "03 Jun 2026",
    title: "Performance of the Month: April & May Celebrations!",
    body:  "Time to celebrate two incredible swimmers who have been absolutely smashing it both in training and on the racing blocks. Well done to everyone for your hard work.",
    tag:   "Celebration"
  },
  {
    date:  "21 Apr 2026",
    title: "Majorca — Swim Camp!",
    body:  "4th April 2026 marked the start of the first ever Kippax ASC training camp, with 20 excited swimmers aged 10–17 heading out for a week of training, team building and sunshine.",
    tag:   "News"
  },
  {
    date:  "27 Feb 2026",
    title: "Kippax Swimmers Make Waves at Yorkshire Championships",
    body:  "Kippax proved that size isn't everything at the Yorkshire Championships, held at Ponds Forge. Competing against regional giants, our swimmers did the club proud.",
    tag:   "Result"
  }
];


/* ----------------------------------------------------------------------------
   2) EVENTS / CALENDAR
   ----------------------------------------------------------------------------
   Each event has:
     date  -> "18 Aug 2026"
     start -> start time, e.g. "07:36 am"   (leave "" if all day)
     end   -> end time,   e.g. "08:36 am"   (leave "" if all day)
     title -> what it is
     group -> where / squad, e.g. "Kippax Leisure Centre"
     type  -> MUST be one of: "Training", "Gala" or "Social"
              (this controls which filter tab it appears under)
   ---------------------------------------------------------------------------- */
const EVENTS = [
  { date:"18 Aug 2026", start:"07:36 am", end:"08:36 am", title:"Tues Development",  group:"Development / Kippax", type:"Training" },
  { date:"18 Aug 2026", start:"11:30 am", end:"01:00 pm", title:"Tuesday Squad",     group:"Squad / Kippax",       type:"Training" },
  { date:"19 Aug 2026", start:"11:00 am", end:"12:25 pm", title:"Wednesday Squad",   group:"Squad / Kippax",       type:"Training" },
  { date:"19 Aug 2026", start:"11:00 am", end:"12:30 pm", title:"Development Wed",    group:"Development / Kippax", type:"Training" },
  { date:"14 Sep 2026", start:"09:00 am", end:"04:00 pm", title:"Autumn Open Gala",  group:"Ponds Forge, Sheffield", type:"Gala" },
  { date:"12 Oct 2026", start:"06:00 pm", end:"08:00 pm", title:"Club Awards Night", group:"Kippax Leisure Centre", type:"Social" }
];


/* ----------------------------------------------------------------------------
   3) TRAINING TIMETABLE  (shown on the "Squads" section)
   ----------------------------------------------------------------------------
   Each row: group name, the day, the time and the venue.
   ---------------------------------------------------------------------------- */
const TIMETABLE = [
  { group:"Learn to Swim",   day:"Saturday",  time:"09:00 – 10:00", venue:"Kippax Leisure Centre" },
  { group:"Development",     day:"Tue & Thu", time:"18:00 – 19:00", venue:"Kippax Leisure Centre" },
  { group:"Junior Squad",    day:"Mon & Wed", time:"18:00 – 19:30", venue:"Rothwell Leisure Centre" },
  { group:"Senior Squad",    day:"Mon–Fri",   time:"19:30 – 21:00", venue:"Kippax & Rothwell" }
];
/*  ^ These training times are placeholders — update them to match your real
    timetable, then save and re-upload this file.  */
