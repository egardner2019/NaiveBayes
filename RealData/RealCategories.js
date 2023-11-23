import { categories } from "../TrainingData/TrainingCategories.js";

const {
  app,
  gui,
  contents,
  pricing,
  featureFunctionality,
  improvement,
  updatesVersions,
  resources,
  security,
  model,
  company,
} = categories;

const realCategorizedReviews = [
  {
    review:
      "Solid game. No ads which is a breath of fresh air and the game play is simple but can be engaging If you want to learn about the different character types instead of auto selecting. Biggest issue would probably be the progression speed. It's a little slow for me but good when you have time to kill. The in app purchases aren't horrible. I have yet to spend any money and I have more gems then I know what to do with just from casual progression.",
    categories: [app, pricing, contents],
  },
  {
    review:
      "Game is fun, I like collecting and powering up my favorite characters from the webtoon. I've been playing 100% free and it's worth the download. Only reasons for 4/5 are the game can hit stagnation points in progression, and you're inundated with paid offers on the home screen even when you've been just switching menus, also some of these things are insanely expensive. Things in the $30+ range for 20 pulls and a guaranteed 5+ star hero. And that's a moderate microtransaction. Some are $75.",
    categories: [featureFunctionality, app, pricing],
  },
  {
    review:
      "Overall a good experience for people who like Tower of God, but there are times where the input delay is upwards of 4 or 5 seconds after pressing a button before the game responds. Some examples would be leveling shinsu links, pressing the start button for stages, navigating menus, etc. Unsure if it's related to user volume or optimization issues, but this has easily been the biggest pain point from a user experience perspective. Summon rates could be buffed a little bit too :)",
    categories: [app, improvement],
  },
  {
    review:
      "Solid! Still in the earlyish phase, as there's currently 81 characters. But they're releasing 2-3 new ones each month so it's exciting. Pros: constantly updating, no ads, no pay to win necessary, and engaging story events Cons: down for maintenance every few weeks, a 3.5gb game that's only growing, the price of buying items with money is brokenly expensive, and advancing can stagnate sometimes. Not enough grinding options yet, leaving you forced to wait it out.",
    categories: [pricing, contents, updatesVersions],
  },
  {
    review:
      "The game moves too slow, both from screen to screen and while in battle. I find myself wishing it would move along faster. I think that the game would benefit to have a button that you can maybe press and hold to engage 4x speed up of the game to get through slow, monotonous areas where you easily beat levels. It can be very time-consuming and boring to wait to get through what you know you can win. Or maybe just press once to advance to the final outcome.",
    categories: [improvement],
  },
  {
    review:
      "I wish the game had more replayable levels to kill time and gain small rewards because when you hit a wall and can't progress there is literally nothing to do if you're stuck. You are forced to go afk and wait for the idle rewards to accumulate. I wish the story was separate, not locked to adventure progress. A mode that is repeatable without waiting for a refresh. I wish the opening video when you first start the game is replayable or rewatchable in the game somewhere. I enjoyed it a lot.",
    categories: [improvement],
  },
  {
    review:
      "The game itself is gorgeous, and there's a variety of things to do every day (for daily content). The only gameplay drawback I have encountered is that if you're stuck on a certain level for the adventure mode and chaos trial, there's just about nothing left to do but get off the game and wait until your loot fills up or the daily reset happens. It'd be great to have a replayable stage or something else that can be actively grinded for small rewards so I have a reason to stay on the game.",
    categories: [gui, improvement],
  },
  {
    review:
      "Love the game. Only thing is you cannot make it far without paying realworld money to upgrade/obtain vehicles to continue in career mode. They have made some changes and I like them. Please continue the ad powered blueprint option. It works. The game has gotten much better. It still takes a while to progress in career mode. But it's doable. Season pass cars should be of higher class in my opinion. But overall great game.",
    categories: [pricing, updatesVersions, improvement],
  },
  {
    review:
      "Great arcade style racing game, but they are making you watch ads and pay for items to quickly level up your garage. You can still get items by playing. I don't mind making the occasional purchase to support the game, but now it is getting out of hand, along with watching ads. Gameloft should get rid of the ads or get rid of the pay to win model.",
    categories: [pricing, improvement],
  },
  {
    review:
      "It is a very fun and engaging game with great graphics. The only problem is that you need to spend money to progress in the game faster than normal. I like the free blueprint cards with ads and the one that refills every 4 hours or so. I would love to buy the legend pass but I don't see the need to buy something in a video game. Either way, it is a several notches above any other car game I have played before on mobile.",
    categories: [gui, pricing, featureFunctionality],
  },
  {
    review:
      "Very fun racing dynamic, but it is hard sometimes to get blueprints for cars. I have several levels I can't beat, but I can't just get the blueprints I need to upgrade them, and I don't want to spend a ton of money on a card pack that doesn't guarantee I'll get what I need/want. Overall though, very fun game. I will say, they should add an update where you can either select and buy specific blueprints, or be able to trade with club members",
    categories: [featureFunctionality, pricing, improvement],
  },
  {
    review:
      "This game is mind blowing, the graphics are outstanding, the controls are comfortable and the game play is wonderful. However it is very difficult to finish story without being able to start a race with an underpowered car while the choice of cars are very limited, especially for races that require a car that is very hard to get which is to open it's featured pack even though it's not guaranteed to get the blueprint for the required car. Please fix this.",
    categories: [gui, featureFunctionality],
  },
  {
    review:
      "It was a fun experience while it lasted. But few important things are leading to me delete the game. First, progress is next to impossible beyond a point without payment. I can't keep waiting for weeks to unlock a single car. Second, gameplay is repetitive. The same type of races, the same type of objectives, the same type of outcomes. There's a variety in each no doubt but it becomes super boring after a few weeks. Third, too many ads. I know you need to monetize it but it's just too much.",
    categories: [pricing, contents],
  },
  {
    review:
      "The gameplay is great, good graphics. Ads and tutorials are a little annoying tho. Edit: Well, forgot to mention that grinding for 1 random car is a pain. And please fix this game physics please, especially for super cars, they got some weird physics. edit: I think they should add a story mode that does not affect the career mode, I love the career mode but a story mode will make things interesting. And they fix some physics monstrosity! 5/5",
    categories: [gui, pricing, improvement],
  },
  {
    review:
      "Good game, been enjoying the past few weeks of playing. But the frame rate issue is ruining the immersion for me. Mind you, my phone is perfectly capable of handling genshin at 60fps, so this older and lighter title should have no fps issues, but it does.. and it's bothering me. Please fix it. 3 stars only until you do.",
    categories: [model],
  },
  {
    review:
      "I would go as far as to say this is the best racing game ever. The game feels free unlike other racing games (With touch drive off) because it doesn't make you feel like you're only limited to what section of the road the map includes you can actually bounce off of fences when you land on top of them and interact with the maps elements to win the race. But I wish they added more iconic cars like the Lexus LFA or the original 911",
    categories: [app, improvement, contents],
  },
  {
    review:
      "Excellent game with excellent graphics. I was searching for a good car racing game and then thought to download A9. It's really worth it. The multiplayer is good and other game modes like carrier, events etc are also enjoyable. The maps are well designed but I want gameloft to add a different game mode where we can drive in any map with our unlocked cars, basically like a free roam. Although it's not that important as asphalt 9 is an arcade racing game and the controls are also good and easy.",
    categories: [gui, featureFunctionality, improvement],
  },
  {
    review:
      "I used to be addicted to this game. But anymore the game crashes erratically. I'm unable to pinpoint specific causes, except that collecting prizes at the end of the Regatta seems to consistently cause crashes. This game used to be fun. Now it is more like a job that I keep doing to help my team members. The crashes come faster after every update. It makes me sad.",
    categories: [app, updatesVersions],
  },
  {
    review:
      "The gold ticket events are too close together, it never ends. Regatta rewards weren't new like it said. Being able to get themed welcome signs-- at a reasonable price or earning it was fun. It's all about money now. It costs to build, it costs to play, some people buy their way through everything. They must be rich. There have been some improvements, graphics in particular. I still miss the old zoo tasks. It seems like the zoo has become a dead zone. Nothing new there in years.",
    categories: [pricing, featureFunctionality, gui, contents],
  },
  {
    review:
      "Solid 3 stars. I Love this game, but.. The game REALLY STRONGLY encourages you to spend money. You have to solve puzzles to get ahead. In the beginning you had many more easy puzzles than hard ones. Now I will get one or two easy then you get stuck on a hard or insanely difficult one. I got a free hour of play and spent all hour not getting past the one level. You can pay for more lives or more moves, but often that's the only way to get past the levels. I'm about to uninstall. Not fun anymore",
    categories: [pricing],
  },
  {
    review:
      "The game is fun. I enjoy building my town. But I believe it to be unfair. The amount of storage in the barn is incredibly unreasonable compared to the items required to progress in the game. The train time is ridiculous and doesn't give you enough materials to complete construction of buildings. It's like you don't really have a choice but to spend money. Also, I bought the golden ticket, and after a few days they took the extra barn storage away! I paid for that!",
    categories: [featureFunctionality, pricing],
  },
  {
    review:
      "Great casual game. I love the challenge of organising town, construct buildings, completing people's order, or expanding the land. If you can reduce default the timer of all town work little bit in the next version, I would be pleasant for me. I don't have any issues for the main game. The minigame gets tougher at high level, but I just trying again and again until the algorithm changes where the easy pieces comes in and creating power-ups automatically. I want other minigames.",
    categories: [featureFunctionality, improvement],
  },
  {
    review:
      "Very fun and I love the layers of the game. I am hoping the developers read reviews and wouldn't mind taking a request. Please fix the game so that the levels of the game are not fixed to force you to not proceed. I even spend more than enough money and the game LOCKS you out of rewards. Please provide more pavement options- texture and color. Please adjust the seafood pizza to look more appetizing. Thank you!",
    categories: [pricing, gui, improvement],
  },
  {
    review:
      "Love the game, but someone decided that putting a tutorial speech bubble over the board (which is currently covering the block that I am being told to join with). Please give an option to minimise the tutorial or close the window altogether? I am literally stuck on that screen and have to come out of the game totally to even get back to the main game. Most frustrating!",
    categories: [improvement],
  },
  {
    review:
      "I have really enjoyed the game. My 2 suggestions would be the ability to add small houses in addition to the large buildings and more expansions. (I am on level 74). Thank you.",
    categories: [improvement],
  },
  {
    review:
      "Love this game. I have been playing it for a year and still enjoy playing it every day. There are plenty of opportunities to use real money, but it's balanced with lots of ways to earn in-game cash within the game itself. There are several different components - building your town, producing goods, and the match-3 game adventures - so there's always something to do. I like the balance between challenging puzzles and tasks, and relatively simple ones, and the co-op option is fun and helpful.",
    categories: [pricing, contents, featureFunctionality],
  },
  {
    review:
      "Good game and I like it very much but I want to tell something that before this I was rating it a 3 star but with new things to craft makes the game very good. I just wanted a favour that please reduce the time for growing crops and building buildings. It takes A LOT OF TIME if you reduce it just by 2 or 3 hours I will be happy.",
    categories: [improvement, featureFunctionality],
  },
  {
    review:
      "I absolutely love this game! The only down part is probably that you have to wait for a while to get some items and buildings. I also wish that you could have a farm/ town with another person, so you can build on the same lot but also have your own farm to build on. I think that would make a BIG! change to this game and everybody would love it! I'LL ALSO LOVE HOW I GET NO ADS! I absolutely love this game and I hope I inspired other people to get it!",
    categories: [improvement, pricing],
  },
  {
    review:
      "I only started playing it for less than an hour, and I already love it! If I had to describe this game, I would describe it like Hay Day, but also focuses on the town than just a farm. Also there was one bug where I had a task to feed chicken. When I pressed the task, I was able to, but the chicken coop wasn't don't building yet. It's just a minor bug I noticed. Other than that, the game is great!",
    categories: [app],
  },
  {
    review:
      "I've been playing this game over 5 years now, off and on. I enjoy playing this peaceful game. I've been in 3 co-ops, the last one, almost 2 years now. It seems the people who have reached high levels 100+ have not been playing the game. My reggata has only seen less than 6 players. We used to be in the top 3 and now we come in 17th at best. The prizes are pitiful at best. I wish the co-op leader could step down and let others take control instead of having to start a new one and try to recruit.",
    categories: [improvement],
  },
  {
    review:
      "Great game. Great graphics, been playing for almost 8 years. Only complaint is that within the past year or so, you almost need to spend money to stay competitive. It wasn't like that before.",
    categories: [gui, pricing],
  },
  {
    review:
      "It's a very interesting game..... Earlier there was that restaurant as part of the town, now it's missing, can you add that which was mind blowing,.. Now they have added a new event culinary adventure it was very interesting. I love that part in this game",
    categories: [updatesVersions, featureFunctionality],
  },
  {
    review:
      "I love this game so so much.. I play it every day... one thing that just gets to me sometimes is that you have to wait for a house or a building to finish. And the constant need to update is a headache for real.",
    categories: [updatesVersions, app],
  },
  {
    review:
      "I love this game, but when they update it, make sure your internal storage barely anything in it or you can't update the game. I hate it when they do this. Very stupid. The updates aren't often, don't worry. Just make sure to keep room in your storage! Other than that, it's great!",
    categories: [updatesVersions, resources],
  },
  {
    review:
      "Once you reached the point of completing all the community buildings, other apartments, condos and houses. Gotten all 200 zoo animals, What is next??? I have been here playing this game for about 6 years and counting. But it is time for some new additions to the game. And what are the requirements of the walk of fame???",
    categories: [contents],
  },
  {
    review:
      "It keeps me entertained. My only issue is I don't like how during the mini games, when you win it goes back to the map which takes a while to load instead of going to the next level. This matters when you have timed bonus. It takes sometimes an entire minute to load the map. If you win 5 levels thats at least 5 minutes taken from your 15 minute bonus. Otherwise the game is decent.",
    categories: [featureFunctionality],
  },
  {
    review:
      "it is a fun an entertaining game, much like the others like it. my big issue is the way it does the materials to upgrade an expand unless you pay real money you are stuck.",
    categories: [pricing],
  },
  {
    review:
      "This game is awesome a bit like Family Farm I wish it had more activities to win for land and space in the Farm shed. This game is more expensive each week to play Because I'm on a budget I can buy enough each week. So please give more activities to play so it will make cheaper to buy extensions on the land and buy for machine's. And updates for every machine's. I enjoy playing this game.",
    categories: [contents, pricing, improvement],
  },
  {
    review:
      "I love the game and have recommended it to others. You can make your town as unique as you like, have friends and family play along. The only downside I have is when Christmas comes up, I would love to decorate my town with Christmas decorations, so please consider my thoughts.",
    categories: [featureFunctionality, improvement],
  },
  {
    review:
      "Great app. Just one thing is missing. It needs DRAFT editing Township like Hey Day game. Decorate Township require much time. So, we can not decorate whole Township at one time. So, if we can save Township as draft it would be good.",
    categories: [improvement],
  },
  {
    review:
      "The game is not working it the server down and needs better perks and it's expensive when your playing the mini games it needs better rewards for what you pricing is to pay. And takes forever to build.. it's hard to build your garden when it don't give you enough crop space. This app needs work and plz fix servers",
    categories: [resources, pricing, app],
  },
  {
    review:
      "Love this game but.... small glitches and the extra puzzles to win extra prizes for your town are impossible to finish. It's sad that it's set up this way.",
    categories: [featureFunctionality],
  },
  {
    review:
      "Yes this game is superb I agree with and I gave also 5 star. But I have one request to minimize the harvesting time, it takes 8hr that's awkward moment. And after completing one session we have only less rupees. thats also bad thing give some more money . special request.",
    categories: [improvement],
  },
  {
    review:
      "I'm beginning to have a problem with the game. It is suddenly begin to cut off on me in the middle of me trying to play it. Sometimes I have to re-collect the daily reward. It is becoming extremely annoying. Tell me if there is a glitch in the game and how I can fix it, please.",
    categories: [app, featureFunctionality],
  },
  {
    review:
      "Enjoying this game now but, at first it was a tad bit hard to get the just of it. Once I learned the ins and outs it became much more enjoyable. That is why I rated this 5 stars because now it is hard to stop playing.",
    categories: [contents],
  },
  {
    review:
      "Update suddenly the game can't connect to the server...? I cleared the cash but it still cannot. very well made and super entertaining but you need patience.",
    categories: [updatesVersions, app],
  },
  {
    review:
      "This game is very amazing. I enjoy good time with this game but by mistake. I delete this this game then I download it again but my all factories, community building are disappear I can make products in them but I can't see them they are working but can't see my factories and community building Plz fix it",
    categories: [resources],
  },
  {
    review:
      "I'm NOT liking the other in-game features. They are intrusive. The designer put the other features so close to the touch sensitive main features that I click on them inadvertently so often I just want to throw my phone across the room and watch it smash against the wall",
    categories: [featureFunctionality, contents],
  },
  {
    review:
      "it's a nice different kind of game. highly recommend for all ages. wish I can put on my TV to play.",
    categories: [improvement, model],
  },
  {
    review:
      "Graphics are so pretty but there are lots of updates that i don't like. after every 15 days update is there I don't like updating once a month is okay but after every 15. Days",
    categories: [gui, updatesVersions],
  },
  {
    review:
      "We need bridges as part of roads. Leveling the river to cross over is not a bright idea. Bridges will make it cool to look at.",
    categories: [improvement],
  },
  {
    review:
      "It is nice game. But at first few levels you may feel boring but when it comes to higher level it is interesting. I have a request to the developer's please reduce the waiting time of egg and milk production and also products and make more easy ways to earn cash.",
    categories: [contents, improvement],
  },
  {
    review:
      "Love the game the only issue I have is there is no confirmation to cancel orders or spend bucks etc... like speed ups and such. I have lost countless amounts due to finger slips and it's super annoying. And you can't cancel making an item. If it's in queue it should be able to stop it and get back items but there is no way to. Other than that this game is great.",
    categories: [improvement],
  },
  {
    review:
      "I like the game however it's calling for an update but it won't update... keeps spinning.. I don't want to stop playing cause it won't update",
    categories: [updatesVersions],
  },
  {
    review:
      "I love the game itself. The mini puzzle games are frustrating. I feel like you get to a certain point and the algorithm makes it so you have to spend cash to go further and it's frustrating. I've sat on a level for 2 days and the minute I spend cash to play I beat it. Also there's not enough power ups offered.",
    categories: [featureFunctionality, pricing, contents],
  },
  {
    review:
      "It's a Good Game need Helps tutorial. Lots things are there in the game. Need tutorial. Like In regatta there is a option called - Combo Task, but I am unable to understand how to select combopack. You should have help tutorial. Bank money is very hard to earn. Some time it's by mistake click on buy goods at the times of loading goods at Train/Plane. So there should be some confirmation button before spending for such buy. Please work on that. I have lose lots of money which was not needed",
    categories: [improvement],
  },
  {
    review:
      "I love this game but I am so upset!!!!! After this update I can't get into the mine, my ships or the machine to make ore it keeps saying it's updating but it's been like that for a couple of days! I have been a player for five years and I don't want to stop playing... Well what ever update was recently done screwed my game up again!!! Can't get into anything!",
    categories: [updatesVersions],
  },
  {
    review:
      "Dear developers, i have been playing for 4 years and always love this game, im just asking if only the game have a feature option to disabling animation on game. This will so helpful for limiting background process on phone and could help entry and mid range phone users to experience more smooth gameplay and avoid overheating when using on long period of time, wish the best for team.",
    categories: [improvement, resources, model],
  },
  {
    review:
      "I would like to give a better review, but, like many others here, there are levels that are designed solely to make you spend money. I know the stock answer of every level can be beat...blah, blah, blah. No. Congratulations, you designed a hard level. I play these games for relaxation, not frustration. I get enough frustration in everything else in my life. I will not spend real money. Give an option to skip a level. Seriously, if you lose 100 times, you unlock a pass",
    categories: [pricing, improvement],
  },
  {
    review:
      "I really wanted it to be good because the concept is so fun and it used to be so rewarding. Now there are challenge levels that are ridiculously hard even very very early in the game that are LITERALLY impossible without power ups or incredible luck. It just makes it disappointing, frustrating, and annoying to play and not worth the time even though it could be fun! Glad to see other people have the same problems and it's not just me being bad at the game lol.",
    categories: [contents],
  },
  {
    review:
      "What should have been a casual match-3 game (which, yes, does have the advertised slider puzzles, one about every 8-10 levels) has been overcomplicated with so many extra mechanics that you have two options to advance. Be lucky enough to be able to match 6 or more on every move, or shell out enough cash to buy powerups. This isn't casual, it's frustrating and disappointing.",
    categories: [contents],
  },
  {
    review:
      "Terrible. I've been playing this game for a long time and I really enjoyed it, but something changed recently. I've started noticing that after the last update, there have been alot of glitches that prevent you from winning a level. For example, I'm currently on level 11,366 (yes, I've been playing that long). I needed to clear one square to reveal a garden gnome and complete the level. I hit that square 6 times and it never removed the grass to reveal the gnome.",
    categories: [updatesVersions, app],
  },
  {
    review:
      "An interesting game. good enough to while away time. I never get tired of playing it. my only complaint is that they should enable players to buy at least two extra attempts at 500 gold coins, as you may just need a move or two extra moves to complete a level....and most times, one may not have up to 900 gold coins. it would be nice if they can allow just two extra attempts too. just a suggestion. thank you.",
    categories: [improvement],
  },
  {
    review:
      "The game is very enjoyable game to play the only thing I don't like is the extra bonus level the we are forced to play. We either lose a life or lose the power ups. There should be gone out of the game or have a choice of not playing.",
    categories: [featureFunctionality, improvement],
  },
  {
    review:
      "Its a really nice game but my issue is that, it does not allow for continuity after changing phones. If a player links his/her facebook account to it, they should be able to continue where they stop on another phone rather than starting all over again. Its really exhausting.",
    categories: [resources, model],
  },
  {
    review:
      "I've been playing this game many years and i love it. But got a problem, i purchase coins from safe two times but never get the coins and my account is charged. I try many thing for refund, help center etc. I don't know what to do anymore, please help.",
    categories: [pricing, app, company],
  },
  {
    review:
      "Great game. I like the variety of challenges, the side stories and no ads. I don't understand why people complain when they can't pass a level. Some levels are hard and take me a couple of days to get through, but if it was all easy or I had a button to skip, where would be the satisfaction to pass a level. I haven't spent a cent on the game and I am around level 2700 in under 3 months. My only negative is that the mini games disappeared after a while. One every 10-20 levels or so would be nice.",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "My issues with Disney+ was that my account got hacked, the password was changed and I changed it again after realizing it was hacked. However, THE EMAIL WAS CHANGED TOO! WITHOUT ME EVEN KNOWING! How that was possible, I don't know. After calling customer service and being on the phone the first time, we changed the email and password, only to find out by the first not helpful representative, that they don't give the option to sign everyone out even though you are the administrator of the account, so changing everything was pointless. He basically states that the people who hacked the account will still have access even though I changed all of the login information. I was ready to quit the whole Disney+ until I called customer service again the following day and spoke to Shay, her kindness and helpfulness convinced me to stay with Disney+. She revoked the account immediately and then helped me make a new account. One thing that should be added is better security. For someone to take over my account so easily and change the email and password was a horrible experience. Another thing that should be added is being able to log everyone out as an administrator of the account. The app is decent because of the shows it offers, I do not encounter any buffering and so on; however, the security and privacy isn't that great",
    categories: [security, company, featureFunctionality, contents],
  },
  {
    review:
      "We have just about every streaming app you can think of, and as much as I want this one to be my favorite, it's definitely the worst and the most unreliable. We use Disney+ every single day since we have Little's that NEED to watch Encanto on a constant loop, however myself and my husband are huge Marvel fans so we use it just as much as the kids do. My kids lost the remote to our TV last week, and I have stripped this house bare trying to find it and can't. So we have been relying on screen mirroring and casting. Disney+ is the only app that we have that refuses to work. When we did have our TV remote and could use Disney+ it would ALWAYS (about every 30 minutes) kick us out and tell us our internet was working. So we would just exit the app and go back in and it would be fine. We just moved into a new home and I was hoping the connection with the app would be better. Nope. It still times out about every 30 minutes and tells us there no internet connection when everything else in our house is working just fine. Basically when this happens you would have to exit the app, then return and if MIGHT start to work. The only reason I haven't deleted this app already is because my daughter HAS to watch Mickey Mouse Clubhouse.",
    categories: [model, app],
  },
  {
    review:
      "There's an excellent library of content in here. However the constant frequent mandatory required software updates are ridiculous. I've never had an app that mandates a full software update as often as this one. Disney is wasting my time and bandwith. I've been a subscriber since day one of the service and there's been over 15 mandatory updates in 18 months. Also it's very difficult to see my own selection of my titles that I've saved in my favorites because Disney chooses to only let us see its graphical icons of some movie poster rather than just presenting it in text. Also, I add movies to my favorites list and Disney remove them whenever they want. It's my list of my favorites, but whenever Disney take something out of its library even temporarily remove my favorites from my list. That's just horrible customer service and their idiot buyers who make decisions on what movies to add and delete should look at their users favorites list first and not screw over their customers. How about Letting users sort their own favorites list alphabetically or by category or by date of release of the movie. Instead Disney only lets us see the list using it's ridiculous movie poster blockbuster VCR tape icons that are hard to see and often have dark lettering on dark backgrounds.",
    categories: [
      contents,
      updatesVersions,
      resources,
      gui,
      company,
      improvement,
      featureFunctionality,
    ],
  },
  {
    review:
      "When are we gonna get auto scroll? The only thing that would make the app worth it over just using your browser.",
    categories: [improvement],
  },
  {
    review: "Hurry update the photos.",
    categories: [improvement],
  },
  {
    review: "I downloaded this app but the app is not opening.",
    categories: [app],
  },
  {
    review:
      "iyt installed on my microsoft pro out of no where! without any permission! and I cannot uninstall it either!!!...",
    categories: [app],
  },
  {
    review:
      "You cannot upload from this app. It directs you to the website in your browser. There you have none of the tools on TikTok that you have on the mobile, but you can schedule a video only from website. This mix and match is ridiculous",
    categories: [featureFunctionality, model],
  },
  {
    review:
      "I like to post videos and Stream on there with my PC I do hope in the app will come to Play Station 5 and Xbox so I can Stream game from there the easy way so you don't have to do so many work arounds to do it all from a pc is bad performance with the hole code and lag.",
    categories: [model],
  },
  {
    review:
      "This is not a windows native app. Whenever I open this app lot of Microsoft edge webview tasks running in the background. waste of memory. just use the LinkedIn website",
    categories: [resources],
  },
  {
    review: "The app wont let me sign in with the browser",
    categories: [featureFunctionality],
  },
  {
    review:
      "Worked for about two minutes then gave me a blank off-white screen and would never recover. I only installed the app because the web version causes my computer to run so slowly I can't stand it anymore. Clearly something is wrong, most likely in the LI infrastructure. I'm accessing from Portugal if that makes any difference.",
    categories: [app, resources],
  },
  {
    review:
      "Very easy to play. Reasonable amount of ads. No crashes. I'd recommend this if you were looking for a nice, relaxing game to unwind at the end of a long day. Good job, developers! Update: so I've been playing this game for a few months and I've noticed that it crashes A LOT. Worse, when it crashes, you lose your daily mission. So I'm going to take away one star. Guys, you need to fix the stablity -- or at least not deprive players of the daily when it does crash.",
    categories: [pricing, app, featureFunctionality],
  },
  {
    review:
      "This is really less a game than it is a vehicle for ads for other games. Horrifying amount of unavoidable ads, unless you pay up, of course. Was fun for awhile but hard levels aren't fun and challenging, hard levels are rigged to lose multiple multiple times before allowing you opportunities for play. Not any different than other games wanting you to buy power ups, but combined with the ads, it's a pretty reckless amount of greed, and I'm not buying.",
    categories: [pricing, contents],
  },
  {
    review:
      "I enjoy this game however it frustrates me that it tells me there are no videos available so that I can get additional coins and then when I say OK and leave that spot it immediately shows me a video before I can play again. Either it has the video or it doesn't, all it's doing is creating frustration and annoyance to the app. They really need to fix that bug.",
    categories: [featureFunctionality, improvement],
  },
  {
    review:
      "Pretty good game, though it really strays into pay-to-win territory in higher levels. Too many cases after a while where you just have to be extremely lucky to get the pieces you need to beat the level - even spending all your power-ups can't beat a lot of these levels, so you'd end up spending your coins on a very small number of extra moves. Also, title is very misleading - there are no empires or champions in this game.",
    categories: [pricing, app],
  },
  {
    review:
      "The game itself is good. It's enjoyable, it's not overly difficult. However the amount of ads is just ridiculous. There's always a banner ad at the bottom, and between every round I've played so far I've had to deal with at least two ads back-to-back. I turn my data off when I'm out of the house and that's the only way I can avoid this many ads, but as soon as I turn my data back on while I'm playing, it'll make me watch 3+ ads. Ridiculous.",
    categories: [pricing],
  },
  {
    review:
      "Cute and engrossing game with a lot to do but after getting to level 25 it crashed all the time. I didn't know all it needed was an update. It would be nice if each new island didn't require downloading more data files which is what causes the game to start crashing. This makes it annoying but I will keep playing because it is a challenging and fun game and the magical theme is super adorable.",
    categories: [updatesVersions, resources, app],
  },
  {
    review:
      "False advertising! I'm a big fan of puzzle games and when I saw the ad (and this game info) for a simple interlocking puzzle game, I was intrigued. The game takes a while to load and this is not interlocking rings. It's a whole dragon adventure and the game I was looking for is just a mini game that you can rarely access and only for the first few levels of your characters. This game itself isn't terrible, and has its own merit, no need for false advertising.",
    categories: [app, company, contents],
  },
  {
    review:
      "So, I actually really like this game but have 2 major problems with it. 1. I don't know how many ads I've watched where I do not get the reward advertised. Tried to put in a support ticket only to be told it was my fault. 2. None of the timed maps are winnable w/o paying. I paid over $30 during the event but it still wasn't enough. Now I can't even put in a new support request. The functionality is broken.",
    categories: [pricing, featureFunctionality, company],
  },
  {
    review:
      "I adore the game, but will likely delete it. It takes hundreds of energy points to complete a task and your reward, energy points, are not even a tenth of what you had to spend to complete the quest. When you let the game rest to build up energy points for hours and then get less than two minutes of actual play time because.... Your out of energy again.",
    categories: [featureFunctionality],
  },
  {
    review:
      "Probably won't keep playing. Cost too much to finish challenges. Or you simply don't finish them. The ring turn mini game they advertise with lasts such a short time is negligible. One time when you begin and 2 weeks in, I've seen it one other time. It uses a lot of battery and memory.",
    categories: [pricing, resources],
  },
  {
    review:
      "Constantly freezing up and then booting me off. I've spent too much money on this game. Your not fixing the bugs in this game and not taking issues seriously as far as if there is too much going on in the adventure it freezes. I can't stress enough this issue happens Esp now with almost Everything you do on the game. Don't tell me to update again. It's not even been 3 days since the last update again. Did Not Fix anything!",
    categories: [pricing, app, company, updatesVersions],
  },
  {
    review:
      "Majestic designs, especially the costumes you can get for the cookies, and it gets extremely addicting, the addiction dies down and comes back. But, anyway, very cute and easy to understand game. There isn't much of an objective, and there's loads of things to do. But, after a while it starts to crash and lag an unbelievable amount, and the shop items are WAYYY overpriced.",
    categories: [contents, pricing, app],
  },
  {
    review:
      "I've always had an issue with this game, between the constant 'Hey buy this!' Shoved in your face, and then the issues with finding something to do most of the time. I don't normally mind a story grind, but the least you can do is have an autobattle to just go through the story until you can't anymore. This game is cutesy, lots of fun, until it becomes a grind and a drag in turn.",
    categories: [gui, pricing, contents, improvement],
  },
  {
    review:
      "I love this game. It has beautiful character designs, aesthetically pleasing voicelines for characters, and really nice battling. But my main issue is that it crashes A LOT. Especially on ios devices. I've been experiencing the crashes since last year, to come back to the game just for it to crash again. I can't do anything in the game without it crashing.",
    categories: [gui, contents, app, model],
  },
  {
    review:
      "I love this game so much! I never run out of things to do, and it's so fun to get new characters and progress in the story! My only complaints would be that the game crashes when switching to things like the guild, arena, bounties or world exploration. It may be my specific phone, but it's irritating when it crashes, especially since the loading screen takes a bit to load. Otherwise great game! Very tempting/easy to spend money on, so be careful of that",
    categories: [contents, app, model, pricing],
  },
  {
    review:
      "Overall an awesome game! There are purchases but you don't actually HAVE to purchase stuff to succeed at the game. Which is nice because a lot of games that are free to play will make it so difficult to succeed without paying that you have to. I will say the ad update is awful. The option to watch an ad to receive extra items always makes you watch the ad THEN backs you out of the game, meaning you have to reopen the game, and when you open jt again, it doesn't register you ever watched the ad.",
    categories: [pricing, updatesVersions, featureFunctionality],
  },
  {
    review:
      "I thoroughly enjoyed the game's art, which was visually stunning and immersive. The attention to detail in the graphics was impressive, and it added to the overall enjoyment of the game. The story was captivating and kept me engaged throughout my gameplay. The voice over work was top-notch, with talented actors bringing the characters to life.However, I was disappointed by the false advertisement that initially attracted me to the game. It led to a sense of letdown and made me question the game",
    categories: [gui, contents, app, company],
  },
  {
    review:
      "Started off pretty good, but then I sat the phone down and went to bed. Came back to Charlie foxtrot. Game is completely locked up and unplayable. In looking for a solution I found that it was a known bug, common occurrence with no real solution. A few tentative ones, but they all failed. Cherry on top was the way the game crashed when trying to fill out a bug report...twice in a row. Maybe an okay game someday, but right now a waste of storage space.",
    categories: [app, resources],
  },
  {
    review:
      "I played this game for years, love it as a stress relief, and at level 1854, so I play a bit. I've noticed lately more ads and much longer ones. Worse part, they are the same over and over. I've been looking, but I can't find an ad free version. I'm willing to pay, but the ads are adding stress to my stress reducing game.",
    categories: [pricing],
  },
  {
    review:
      "I've played to level 224. The line showing where the balls should go is not accurate. I've tested it again and again. I have to adjust for the inaccuracies. In the end, I'll look for another similar game that's accurate. Bubble Witch is accurate, as an example. That means whoever created this app has failed at an essential component to a tracking line.",
    categories: [featureFunctionality],
  },
  {
    review:
      "Monotonous. Doesn't really challenge you. Hours of the same thing over and over. Also ad's play between every level and menu change. I was interested in one of the ads and clicked on it. It was a scam for a laser that cleaned rust. Obviously the developer is only interested in advertising dollars since they don't screen out deceptive ads. Also very annoying that there is sound on the ads when it is off in the game.",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "I've really been enjoying the game. It doesn't require so much constant attention like some other online games and it feels like the events occur often enough to keep me engaged when I hit a wall in improving. I love seeing all my favorite characters and reliving moments from the comic. The costumes are cute too! Though I don't pay any money into the game and there are definitely walls, I still find I can enjoy the game.",
    categories: [contents, gui, pricing],
  },
  {
    review:
      "I love having animations and voices to the story. That's very well done (though some voices aren't what I expected). But the gameplay is meh, in that there really isn't any. It's a standard auto battler. While they've made some great improvements, like upgrading slots instead of characters, duplicates are still a ton of the power in the game, so you'll rely mostly on who you draw a bunch of. This is made worse because of having to play around elements. Rates are at least decent though.",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "Fun game without any pay walls (technically) however, there are many opportunities to spend money to gain advantages over f2p players. You can have a great time without ever spending money, however, those who do choose to spend will progress significantly faster than those who don't. Some games only let you do a few races before having to wait to play another. This game will let you play nonstop. There is a fuel system that takes time to restore, but its on a per car basis, so just switch cars.",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "Gameplay in Asphalt 9 centers around high-speed racing action with an arcade-style approach. The controls are designed to be intuitive, making it easy for both casual and hardcore gamers to enjoy. The game offers a variety of control options, including touch and tilt controls, catering to different player preferences. The TouchDrive feature allows players to focus on steering while the game handles acceleration, braking, and nitro boosts, simplifying the experience.",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "I've been playing this game for years now. It's my favorite game EVER. There is always some side story line going on and the challenges and Regattas are super fun and keep things interesting. Also, you do spend money on this game (you don't have too) If you don't it just takes longer to do things. I spent a lot of money on this game, which I don't mind. The video showing this game isn't how it actually is which most game manufacturers show some random video clip lmao. Anyways, BEST GAME EVER.",
    categories: [contents, featureFunctionality, pricing, app],
  },
  {
    review:
      "Really fun game, have been playing it for a while now. I find it very hard to find games that I don't lose interest in. This one has lots of different things to do to stay interested. Heaps of ways to earn points/lives/coins etc. Love it!",
    categories: [contents],
  },
  {
    review:
      "Very addicting, some games like this reach a threshold where you can only play a tiny amount per several hours or spend cash, but this one I've still been able to spend as much time as I want filling orders and upgrading my town. It's refreshing. And there's new ways to play almost every day. Definitely worth a try if you like farming/base building style games!",
    categories: [contents],
  },
  {
    review:
      "I'm really liking this game. It's a great reminder that you need certain items in order to do things. For instance, you need to plant seeds & harvest wheat so that workers can make bread. I love keeping up with what I need in order to fill orders. I really love the chickens & how they prompt me to collect their eggs. The sheep are so cute too! I need to keep them fed so they don't shiver.",
    categories: [featureFunctionality, gui],
  },
  {
    review:
      "It's so enjoyable. I really like that I can leave it for couples of days or weeks without anything happened to my plants and animals. I also like that developer shorten the waiting time for each event games. Thank you and more power!",
    categories: [featureFunctionality, updatesVersions],
  },
  {
    review:
      "Love this game! No need to spend money if you don't want too and don't have to have friends to keep giving you lives for the main game. You can play this non stop pretty much and will keep making things and growing crops while you sleep. Races against friends and can set up your own Co-Op with 30 members after stage 19.",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "This is my favorite game. I have been playing daily for over a year. So much to do. Team regattas, Trains, planes, boats, helicopters, and zoo orders to fill. Farming and manufacturing, mining, decorating. Adventures that take energy refilled by time and winning challenging matching games. Always growing your town by building and populating it. The graphics are cute and dynamic. You even get to name animals in the zoo. There are reward chests and game money to be won. NO ADS!",
    categories: [contents, gui, pricing],
  },
  {
    review:
      "I just love this game. Started playing it 4 years ago. Then I do not know why I took a gap of 2 years. But, when I came again, I again got addicted to it. This game is casual, easy to play, the colour scheme (Red & Green) is good. The way you level up is statisfying. This game is a good time-passer. You could play it for hours and not get bored. How you mainly level up and the main thing to do is complete helicopter orders and filling trains and aeroplane crates. This game is a must",
    categories: [gui, contents],
  },
  {
    review:
      "I found this game through a pay-for-play app. It quickly grew on me because of its conciseness and creativity, the whimsical designs, and its general set-up. There is a nice time spacing built into the game, so that one does not fall into a 24h play frenzy. it is just the right game to kick back and dream. thank you!",
    categories: [contents],
  },
  {
    review:
      "I just enjoy this game! Last year I had surgery but they didn't do the nerve blocker well so I could feel the pain the minute I woke up BUT when I couldn't sleep cause it hurt, I played this game to distract me. Got very far in it, developed my town a lot, and had fun without being aware of my knee. So thanks game developers, you're more effective than the opiods I was prescribed for pain.",
    categories: [contents],
  },
  {
    review:
      "Great game and no ads!!! A great time waster. Play at your own speed. If you're patient, things advance nicely. You don't need to spend actual money to advance in the game; it just takes longer. Side puzzles are fun as well.",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "I enjoy not having to wait for energy to build up to move around and play in my town. most games you start with energy that you quickly burn through and then you wait all day for your energy to build back up! this game I don't bother with that!!",
    categories: [featureFunctionality],
  },
  {
    review:
      "Township is truly an amazing game...it is interactive and never a dull moment. I play it daily just to break up my day a little. No ads or interruptions just fun and enjoyment all around. My family all play and they love it too. Awesome game for any age. I say download and try it today and see for yourself. You can Township too.",
    categories: [pricing, app],
  },
  {
    review:
      "All around great game. If you love farming and building towns this game is for you. Great graphics and not laggy. Barely any ads. There are opportunities to communicate with friends and help them out, and much more.",
    categories: [contents, gui, pricing, featureFunctionality],
  },
  {
    review:
      "Still my go to game, still fun, every update is something new and exciting, always celebrating holidays which makes this game more fun. I also met a lot of ppl from different parts of the world who also have Townships of their own. Plus, there's always side games to add more adventure to Township without downloading a game like it. Great game",
    categories: [updatesVersions, contents],
  },
  {
    review:
      "Great game with good design and cute graphics. Spending is an option, but not required so far. No ads. Very entertaining.",
    categories: [gui, pricing],
  },
  {
    review:
      "I simply love this game. I love the town I built. I love the story that each neighborhood is telling. I love the challenges and find myself engrossed that it's the next day, and I've been up all night. My mind is always being changed!",
    categories: [contents, app],
  },
  {
    review:
      "As an 'orginal farm game' player fanatic including many years later the mobile app, this game is amazing. You can actually play the game without being bothered with ads and being asked constantly to spend 'real' money.",
    categories: [pricing, app],
  },
  {
    review:
      "Fun to play. Easy to understand and a nice level of challenge and engagement without significant pay wall. Good animations!",
    categories: [pricing, gui, contents],
  },
  {
    review:
      "One of the better games on the Tapjoy offer wall. It doesn't have an ad any time you do anything, and it doesn't require you to be on it 24/7. Simple design and very engaging.",
    categories: [pricing, gui, app],
  },
  {
    review:
      "Can't stop playing! The farm animals get fed relatively quickly, and the train is amazing at getting you the otherwise hard to get build materials.",
    categories: [featureFunctionality],
  },
  {
    review:
      "So I've been playing this game for a few months now. I'm a regular, so I really enjoy watching everything coming into full bloom, sending things off, and watching my town grow.",
    categories: [featureFunctionality],
  },
  {
    review:
      "This game is so wholesome and enjoyable! I usually play more fast-paced shooter games, but sometimes I feel the need to calm down and relax... this seems to do just that. With that being said, I'm a proud player of this game. Thnx to the developers for making such a chill and relaxing game :)",
    categories: [app],
  },
  {
    review:
      "It's a fun game, and you're not watching ads every 30 seconds. This is one of the few games you're not constantly having to watch ads",
    categories: [pricing],
  },
  {
    review:
      "It was the best game ever downloaded at first it is not so interesting but later when l leveled up found it so intersting and I feel no problem with it. I love this game. For me it deserve five star",
    categories: [contents, app],
  },
  {
    review:
      "I wasn't even going to play this game but the relentless ads dragged me in. I was expecting to have to pay to truly play but so long as you are ok with grinding you can get enough of the premium currency without paying for which I like.",
    categories: [pricing],
  },
  {
    review:
      "Just downloaded it today but it seems like a really cute little game. The town is charming and i love the idea of building up a small town or community. I personally feel that this is a great thing to know, even if it does feel a bit childish but regardless the game is cute and entertaining",
    categories: [gui, app],
  },
  {
    review:
      "It's good. We can design our own town. While waiting for the goods to be made, we can play match 3 with fun events. Also the game can be connected to facebook so we can play in multiple devices",
    categories: [featureFunctionality, model],
  },
  {
    review:
      "I love playing Township. The game is fast enough for me because of bad eyesight. Slow enough to plan out the town that works for me. If I could have another Township, I would in a New York minute. Lol",
    categories: [app, featureFunctionality],
  },
  {
    review:
      "Amazing I can plan my family and I like on every single level can unlock new things which makes it so much more fun to see new things",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "The game is very interesting. I keep downloading it when i change phones. People shouldn't complain about passing a level because that's where the fun is. I've had to play a level more than 10 times before getting it but persistence made me pass the stage and i felt joy knowing i finally did it. It's a game that exercises you mentally and i recommend it to everyone both young and old",
    categories: [model, contents],
  },
  {
    review:
      "It's RARE that I play any sort of video game, and let's be honest, most are really a horrible waste of time! But this game appeared in my phone after a normal update. Just before I went to uninstall it, I decided to give it a chance and try it. I was surprised to discover that it was actually quite fun! Despite becoming totally engaged in it, I could also easily stop. It's a cute, satisfying little game for anybody who enjoys the theme of renovations.",
    categories: [app, gui, contents],
  },
  {
    review:
      "5 out of 5. The gameplay was nice and for some reason I really liked how the character waved and talked to me even if it is just NPCs, and I love to design it and collect coins. I enjoy the puzzle because it reminds me of candy crush, If you like designing and Pretty simple puzzles, this is the game for you :)",
    categories: [contents],
  },
  {
    review: "the best experience in all platforms i support their content",
    categories: [model],
  },
  {
    review:
      "The app is slick, and works seamlessly. Finally LinkedIn has a native windows app!",
    categories: [model, app],
  },
  {
    review:
      "I dont typically review games. But if you want a game that you can get on and play for awhile straight or just get on for a few minutes this is great! I'm a hairstylist and i'm always struggling to find a simple game I can play during small breaks and long breaks but never have to switch my game. And this one is it. They give you so many power ups and I think almost every time I get on I have an hour of unlimited lives! Just download it! Oh and did I mention NO ANNOYING ADS!",
    categories: [pricing, app],
  },
  {
    review:
      "Very Fun! There's lots to do, an amazing storyline, and beautiful graphics. The only minor bad thing I can say about this game is that it can be kind of grindy sometimes... but that's just because I hadn't been taking the necessary steps before that point, so here's some tips. Upgrade your cookie houses early! Once you get to a high enough level, leveling up will require lots of xp, so it's best to start preparing for it before you get to that point.",
    categories: [contents, gui, app],
  },
  {
    review:
      "It's not a fancy game, but it's one of my go-to time-killers. Yes, there are ads after every level, but the levels take long enough that I don't mind. Some reviewers have said the ball movements are unpredictable, but I don't find that to be the case - it's sometimes hard to fine-tune where you want it to go, depending on the shape of the blocks (square or cut in half diagonally), where you hit a block, and whether there are additional items in the field (a little diamond-shaped thing makes the balls bounce unpredictably off its faceted top). I like these and plan strategy accordingly. There aren't any nauseatingly adorable little dragons or elves, no cutesy soundtrack, no side-games that I've seen - just a straightforward strategy puzzle.",
    categories: [pricing, featureFunctionality, gui],
  },
  {
    review:
      "I really like this game. It kinda reminds me of one of the game variations of Super Breakout. It feels really satisfying to break the blocks with a long string of the bouncy balls.",
    categories: [app, featureFunctionality],
  },
  {
    review:
      "Even with the ads, it's not so bad. I like different ball options. The levels don't feel redundant either. Will continue to play since it's a good easy game.",
    categories: [pricing, contents],
  },
  {
    review:
      "Great challenges and ideal to pass the time while waiting at appointments to be called in, etc. Good options to play the classic style and easy enough to achieve gems if you want the extra challenge.",
    categories: [contents],
  },
  {
    review:
      "What's not to love? It's both an easy & increasingly challenging game. You can earn/buy things to help you win, there are different skins, & the games last approx 10-15 minutes. The ads are tolerable at 5-30 second long. I'm addicted to this game; it's my favorite toilet time activity!",
    categories: [pricing, app, contents],
  },
  {
    review: "Fun way to pass the time when you're relaxing. Not that many ads.",
    categories: [pricing, app],
  },
  {
    review:
      "Downloaded this to get points on another one. I like this version of this type of game. I just installed it and I'm on level like 30 or something. Smooth & fast compared to other versions. There's a cursor at the bottom for more precise shoots. Graphics are nice, sounds are cool. No ads, so far, unless you watch for points/gems. I'd recommend this one.",
    categories: [app, gui, contents],
  },
  {
    review:
      "So satisfying! Love playing this on my OnePlus 11! For me this never gets old. I don't mind sitting on hold, waiting in line or boiling water when I have this installed.",
    categories: [model, app],
  },
  {
    review:
      "It is very nice to look at not many annoying ads that interrupt game play and it's very satisfying.",
    categories: [pricing, gui, app],
  },
  {
    review: "Very good time waster with few ads.",
    categories: [pricing, app],
  },
  {
    review:
      "S/O to this lovely game app that has managed to survive several factory resets and changes of phone; still has all of my info. 500+ levels in and still plenty of play left in it.",
    categories: [model, resources, contents],
  },
  {
    review:
      "Liked it very much. Its a wonderful game. Put your minds off from the hard days work and any other stress. I give 5*. Tnx",
    categories: [app],
  },
  {
    review:
      "One of the best, great strategic brick brake game. I love this one! It is better than a lot of the others and new levels of extreme difficulty are introduced every month or two. This is my ideal time killer when out somewhere waiting for something. I've been loving what Mobirix is doing with their vast range of simple but progressively arduous game catalog of titles dating back to the 90's with a cutting edge twist.",
    categories: [company, app],
  },
  {
    review:
      "Love this game. I see people complaining about the ads, but I really haven't experienced this. I know an ad pops up each time you lose a level and have to restart, but if you're smart, you can avoid actually losing any level. I'm not going to divulge this trick since it would interfere with their ability to make money, but come on people. Even if you do have to watch an ad between attempts or levels, it's a free game with THOUSANDS of free levels. Calm down.",
    categories: [pricing, contents],
  },
  {
    review:
      "Amazing! Not only is it fun, they do ads right!!! Most phone games nowadays have so many ads that there is a way more ad time than there is game time which makes most people uninstall after a while. There are ads, but it's just the occasional ones on the way top of your screen so you don't accidentally click one! And barely see them! Bravo!!!",
    categories: [pricing],
  },
  {
    review:
      "A delightful surprise! I downloaded this game to obtain points in another app, but imagine my surprise when I find this lovely game! It has one little ad at the top but aside from that, no ads!! You can actually play the game quite comfortably! it's basically 99% gameplay!! What a treat! It has lots of levels and it's rather fun! I'm definitely keeping this game downloaded!",
    categories: [app, pricing, contents],
  },
  {
    review:
      "This is one of my favorite games. It's very simple, but it's also challenging and fun. I use it to clear my mind or pass the time.",
    categories: [app],
  },
  {
    review:
      "This game is seriously so much fun. The ads stay at the top and do not interfere with the game! There's also none of those annoying ads in between levels! Honestly, download it. You won't regret it. I really love that the colors change as you get the blocks hit. Great work y'all!",
    categories: [pricing, featureFunctionality],
  },
  {
    review:
      "It is a very awesome game, I'm enjoying every second of it and I love how these rewards keep coming in that's real dope.",
    categories: [app, contents],
  },
  {
    review:
      "This is such an addictive game. I really like the new update which gives you more levels and you can earn many diamonds. I've been playing this game while watching movies, videos, even listening to lectures at my university. It's a perfect background game that helps you focus if you're like me and need multiple stimulations. It's also very satisfying. A big plus is definitely low amount of ads. I highly recommend it.",
    categories: [updatesVersions, featureFunctionality, pricing, app],
  },
  {
    review:
      "Keeps the mind Sharp very good for pool table players (Angles) it's All about Angles and keeping count mathematics! Greatgame",
    categories: [contents],
  },
  {
    review:
      "This game is FUN. I love the fact there are no ads unless you choose to get power ups.",
    categories: [pricing],
  },
  {
    review: "Best ever with WiFi ads gives u point's",
    categories: [pricing],
  },
  {
    review:
      "Fun game! Very dependent on ads/purchases, but overall a good experience. At least there exist ways to succeed without p2w, so that's good. I like how the challenge level increases the longer you play, and the game has all sorts of hidden opportunities that you can use to maximize your chances. I also like how they continue to improve in game events, like rebounds and keeper coming off his line.",
    categories: [pricing, contents],
  },
  {
    review: "Good game, I really like it",
    categories: [app],
  },
  {
    review:
      "This game is magnificent, awesome. I have been playing for 3 yrs now and no issues. You can also make real friends from the association group",
    categories: [featureFunctionality, app],
  },
  {
    review: "Good game Good strategy good looking thank you all Nice game",
    categories: [gui, app],
  },
  {
    review:
      "I am playing the game since the begining and i still enjoy it like on the first day!!",
    categories: [app],
  },
  {
    review:
      "8 months/seasons in and still hooked. Good balance, something to play a few times a day but doesnt take over! 10/10",
    categories: [app],
  },
  {
    review:
      "Great game indeed. The BEST managerial platform out there. No doubt.",
    categories: [app],
  },
  {
    review:
      "so far so good, I'm enjoying my experience. im level 4 and have 3 leagues,I'm now focusing on winning the champion league and cup for next season",
    categories: [app],
  },
  {
    review: "great game very interactive",
    categories: [app],
  },
  {
    review:
      "the best Manager games out there, if not the best. Keep it up guys. I love it...",
    categories: [app],
  },
  {
    review: "Great game, have to give it 5 stars.",
    categories: [app],
  },
  {
    review:
      "Good game for anyone who love challenges. Improved fairness in the competition",
    categories: [app],
  },
  {
    review:
      "If you commit yourself and play for at least 20 mins a day you'll get your rewards. Don't give up!!! Go For it!...",
    categories: [app, featureFunctionality],
  },
  {
    review:
      "Brilliant fun game, very competitive with global players, superb matchplay and graphics. Great team goals too",
    categories: [gui, contents, featureFunctionality],
  },
  {
    review: "Haven't played in a while",
    categories: [app],
  },
  {
    review:
      "I honestly think this is the best game of its type that I've tried. Unlike some of the other games of its kind, I still feel like I'm making progress and can earn gems (the game's premium currency) to unlock things, even if I don't play every day or that often when I do at times. The dragons are cute and have interesting designs, and there's plenty to collect! Ads are still a thing, of course, but being able to still progress without having to purchase things makes it more than managable!",
    categories: [app, pricing, gui],
  },
  {
    review:
      "Great game!!!! The customer support is there for you when you need them, everything is proportionate to your level, so its just as difficult to get certain things at a level 10 as a level 50. I recommend this game to anyone that wants something cool and fun to play, without the worry of being attacked by everyone and losing progress. Noone trash talks, and everything is very stressless.",
    categories: [company, app],
  },
  {
    review:
      "This game is so cool that I never expected I was totally attracted to play this game which I never used so other days now I cannot delete this game this game is become one of my favourite games In this game I have many dragons collection but I still play this game in game new event we're epic and and other event are also epic I love this game Dragon mania legends is going crazy THANK YOU SO MUCH",
    categories: [app, contents],
  },
  {
    review:
      "I love this game and dragons . The dragons looks so pretty and specially LMT dragons are so beautiful . I LOVE this game because of weekly and monthly new events . The game is so attractive.",
    categories: [gui, contents],
  },
  {
    review:
      "Oh my god this game is amazing i previously played a game called dragon city and i liked the concept so much but the loading screen and ads not to mention their pay to win feature made it miserable this game eliminated all that problems and its gameplay is just second to none . KEEP UP THE GOOD WORK",
    categories: [pricing, contents],
  },
  {
    review:
      "Because this game is very nice. And it has good graphics as compared to Dragon city.",
    categories: [gui],
  },
  {
    review:
      "Used to play this back when I was a kid, came back half a decade later. Still the best breeding game out there",
    categories: [app],
  },
  {
    review:
      "Really fun! I love the attention to detail in every aspect of this game. Devs are responsive to feedback. I'm progressing nicely - not too fast or slow - sometimes grindy, but that's expected. Got to level 25 & still fun. There's lots that keeps this fresh. I don't feel the ads/$ is burdensome. Made some purchases when I want to rush things, but it's not necessary to pay to progress. Really enjoying this world, thank you! To new players, def recommend checking out the Discord sooner vs later.",
    categories: [company, pricing, contents],
  },
  {
    review:
      "I rarely write reviews, so this one is personal. Other people have strongly suggested the game, and I'll add my voice to the choir -- what a well made, non-ad intrusive game. The game has animal crossing style graphics, with an addicting gameplay system that keeps me coming back each day. Best of all, the ads aren't intrusive, and the rewards for money spent is worth it. I've been more willing to spend money on this game because I want to support the good practices made by the company. BRAVO!",
    categories: [pricing, gui, company],
  },
  {
    review:
      "Very fun, game has the perfect balance between idle and active gameplay. You can choose to play to collect your rewards and do a mission or two, or you can grind out missions and contracts for hours at a time. game is surprisingly difficult and strategic, with loads of bots abilities and gadgets to keep the game entertaining and fresh. There are always things to be working toward, as well as a fun online arena which is also completely optional. the game is great, with many ways to play and enjoy",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "I haven't gotten hooked on a mobile game for a couple years it feels like. Not sure why but Botworld has definitely changed that. I can't stop! It has just enough loot grinding to make me want to keep playing but not so much that it's tedious. There's a ton of strategy in how you use your bots so it'll keep you trying to improve. And There's an auto battle mode so you can still progress in this time when you can't really focus 100%, like when you should be working ;)",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "Really awesome game! It's a wonder it's free! I put some money in it but only because I wanted to support the developers, it's totally free to play though and you can be great at the game playing that way too. You find blueprints around an open world and build robots (from scrap you find around said open world) and battle NPCs and other real players. There's a story and daily quests and somewhat of a battle pass like system as well. Super fun game! Definitely give it a try.",
    categories: [pricing, contents, featureFunctionality],
  },
  {
    review:
      "Great game, I've been playing non-stop since getting it. I spent money to get the pass, but it doesn't seem like you need to spend anything to progress. If you're like me (fulltime job, family responsibilities, etc.) the ad removal for $6 is totally worth saving time. Combat is automatic, you only control your powers and where you place your bots. But this still offers plenty of strategy. They only give you 500 characters for these reviews, so I'll just say I highly recommend getting this game",
    categories: [pricing, contents],
  },
  {
    review:
      "This is a great moble game! The battle system is fun and unique, the graphics are great, and paying and watching ads just speeds things up a bit... there is nothing you can get through paying that you cant get through normal gameplay which is a nice change of pace. Getting new bots is pretty fun too. You scavenge scrap from the world or beat NPCs in battles to build new bots with certain scraps dropping more frequently depending on how the battle was fought. I love this game, it's worth a try",
    categories: [gui, pricing, contents, featureFunctionality],
  },
  {
    review:
      "This game has been an excellent adventure while I'm quarantined at home with Covid. Highly addicting and endlessly fun, I have yet to find a feature of the game that I don't enjoy. The cherry on top is that there is no pay-to-win; everything is attainable through regular gameplay and minimal grinding, plus there are no ads unless you choose to watch them for rewards. The battles are engaging, the environment tantalizing, and the bots charming. An excellent take on the monster collecting genre.",
    categories: [contents, pricing],
  },
  {
    review:
      "So far Botworld has been an enjoyable experience, with it's interesting take on both adventure and the world as a whole. You are a newbie getting ready to set out to become a botmaster! A user of various types of bots with different roles in arena styled battles. The roles being ranged, tank or close ranged combantants with their own style of combat. I just set out on the adventure, but interested to see how it plays out. Worth a play!",
    categories: [contents, featureFunctionality],
  },
  {
    review:
      "An absolute gem of a game! Gameplay is fun, doesn't drag on, the mechanics are easy to understand but not to simple to be boring, and everything is just so cute! The ads are all optional but best believe I'll be watching them to help support the game! There aren't a lot of bots, but that makes each of them special and recognizable! I'd definitely recommend this game!",
    categories: [gui, pricing, contents],
  },
  {
    review:
      "It's a pretty great little game. It has premium currency, but it's definitely not needed for the full experience! I made a purchase just to show my appreciation to the developers for making a genuinely solid little game! Hopefully we can get some more bots and a little more customization in the future. I'll definitely stick around to see.",
    categories: [pricing, improvement],
  },
  {
    review:
      "It takes a very, very good game for me to take the effort of writing a review. This is one of those games. The amount of time that has gone into this game blows my mind considering it is free. The ads are not pushy whatsoever and completely your choice on whether you watch them or not. The story is fun, upgrading bots is rewarding and doesn't feel grindy, the NPC's are funny and memorable, the daily missions so far have not felt repetitive. There's few cons I would mention but I'm at word limit.",
    categories: [pricing, contents, featureFunctionality],
  },
  {
    review:
      "Tons of content! The whole game is free to play, but there is a season pass system that requires buy-in for extra rewards. Nevertheless, there are still plenty of choices for team building, even for free players. There are a multitude of energy systems here, but there is always something to do. Combat is deep but not too complicated. Plus, very cute animals.",
    categories: [contents, pricing],
  },
  {
    review:
      "I'm not really a fan of pokemon style, catch and collect games, but this one is surprisingly addictive. Good graphics, simple controls, easy to understand UI, and simple game play make this game addictive and great fun to play",
    categories: [gui, contents],
  },
];

export default realCategorizedReviews;
