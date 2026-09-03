/* ─────────────────────────────────────────────────────────────────────────────
   JOURNAL ARTICLE BODIES — FS 6.6

   Structured as blocks rather than HTML so this maps cleanly onto Sanity later
   (article title, slug, category, summary, body, metadata).

   Editorial rules applied here:
   · General Kilimanjaro facts are publicly verifiable and used freely.
   · Nothing Vala-specific that is unconfirmed is asserted — no route, trip
     length, group size or price appears in any of these.
   · Training and kit guidance is framed as shape and principle, not as a
     prescriptive plan Vala has signed off.
   ───────────────────────────────────────────────────────────────────────── */

export type Block =
  | { type: 'lede';    text: string }
  | { type: 'heading'; text: string }
  | { type: 'p';       text: string }
  | { type: 'list';    items: string[] }
  | { type: 'quote';   text: string };

export const BODIES: Record<string, Block[]> = {

  /* ── 1 ────────────────────────────────────────────────────────────────── */
  'could-i-climb-kilimanjaro': [
    { type: 'lede', text: 'Almost certainly yes — and probably not for the reasons you think. The people who summit are rarely the fittest. They are the ones who trained consistently, walked slowly enough to be bored, and kept eating when they did not feel like it.' },

    { type: 'heading', text: 'It is a walk, not a climb' },
    { type: 'p', text: 'Kilimanjaro is a trek. There are no ropes, no ice axes, no technical skills to learn and nothing you need prior mountaineering experience for. If you can walk uphill for several hours, on consecutive days, carrying a small daypack, you have the raw ingredients.' },
    { type: 'p', text: 'What makes it hard is not the terrain. It is the altitude, the repetition, and the fact that the last night is long, cold and dark.' },

    { type: 'heading', text: 'Altitude is the real question' },
    { type: 'p', text: 'At the summit the air holds roughly half the oxygen available at sea level. Your body can adapt to that, but only slowly, and the rate at which it adapts has very little to do with how fit you are. Extremely fit people get altitude sickness. People who have never run a mile in their lives sometimes stroll up feeling fine.' },
    { type: 'p', text: 'This is why the guiding is relentless about pace. Walking slowly is not a courtesy extended to the slowest person in the group — it is the single most effective thing anyone does to get you to the top. Longer routes with more acclimatisation days have consistently better summit rates than short ones, which is the whole argument for not rushing it.' },

    { type: 'heading', text: 'What "fit enough" actually means' },
    { type: 'p', text: 'A useful benchmark: by the time you fly, you want to be able to walk for five to seven hours, on hilly ground, carrying a daypack, and then get up and do something similar the next day without dreading it.' },
    { type: 'p', text: 'Note what is not on that list. No gym membership. No particular pace. No running. Time on your feet is the currency, and four months is enough to build it from a standing start.' },

    { type: 'heading', text: 'Who actually struggles' },
    { type: 'list', items: [
      'People who go too fast in the first few days, because they feel strong and the pace feels absurd.',
      'People who stop eating. Appetite disappears at altitude, and eating anyway is part of the job.',
      'People who do not drink enough water, which produces symptoms that look a lot like altitude sickness.',
      'People who skipped the training and arrive hoping general fitness will carry them.',
      'People who hide how they are feeling from the guides.',
    ]},
    { type: 'p', text: 'Four of those five are entirely within your control, and the fifth is a habit you can decide to break before you go.' },

    { type: 'heading', text: 'Am I too old?' },
    { type: 'p', text: 'Our travellers are largely in their thirties, forties and fifties. Kilimanjaro is summited every year by people considerably older. Age correlates far less with success than preparation does, and in some ways older walkers do better — they tend to be more willing to go slowly and less inclined to prove something in the first two days.' },

    { type: 'heading', text: 'What if I do not make it?' },
    { type: 'p', text: 'Some people do not summit. Altitude occasionally decides the matter regardless of how well you have prepared, and the decision to turn around belongs to your guide, not to you. That is a safety feature, not a judgement.' },
    { type: 'p', text: 'If it happens you are supported down and looked after. Nobody manages it alone and nobody on a Vala trip will treat it as a failure — least of all the people who walked up with you.' },

    { type: 'quote', text: 'The question is almost never whether your body can do it. It is whether you will give it four months to get ready, and then walk slowly enough to let it.' },
  ],

  /* ── 2 ────────────────────────────────────────────────────────────────── */
  'training-for-kilimanjaro': [
    { type: 'lede', text: 'Four months, and far less heroic than it sounds. Kilimanjaro training is mostly walking — long, dull, repetitive walking — plus enough leg strength to protect your knees on the way down.' },

    { type: 'heading', text: 'The one principle that matters' },
    { type: 'p', text: 'Time on your feet beats intensity, every time. A four-hour walk at a conversational pace prepares you better than an hour of hard interval work, because it trains the specific thing you will be doing: staying upright and moving for a long time, day after day.' },
    { type: 'p', text: 'If you take only one thing from this: build up your longest walk, and then learn to repeat it on consecutive days.' },

    { type: 'heading', text: 'The shape of four months' },
    { type: 'p', text: 'This is the shape rather than a prescription — your own plan gets built with the group in Base Camp, around your starting point and your life.' },
    { type: 'list', items: [
      'Month one — establish the habit. Two or three walks a week, one of them longer than the others. Start wearing the boots you intend to travel in.',
      'Month two — add hills and add weight. Find gradient wherever you can, and start carrying the daypack you will actually use, loaded to roughly what you will carry on the mountain.',
      'Month three — back-to-back days. This is the part most people skip and the part that matters most. A long walk on Saturday and another on Sunday teaches your legs something a single big day never will.',
      'Month four — consolidate, then taper. Your longest days sit early in this month. The last fortnight is lighter on purpose, so you arrive fresh rather than freshly exhausted.',
    ]},

    { type: 'heading', text: 'Strength work, kept simple' },
    { type: 'p', text: 'Two short sessions a week is plenty. Prioritise the descent — coming down does more damage to most people than going up, and it is quadriceps and knees that take it. Step-ups, squats, lunges, calf raises, and something for your core so the pack sits well. None of it needs a gym.' },

    { type: 'heading', text: 'Things worth doing that are not exercise' },
    { type: 'list', items: [
      'Break your boots in properly, over many walks, well before you fly.',
      'Find the socks that work for you and then buy several more pairs of exactly those.',
      'Practise walking in bad weather so it is not a novelty at altitude.',
      'Eat on your long walks. Learn what you can stomach when you are tired.',
      'Walk with the pack on your back, not in the boot of the car.',
    ]},

    { type: 'heading', text: 'What not to bother with' },
    { type: 'p', text: 'Altitude tents, hypoxic masks and similar equipment are an expensive answer to a problem the route profile already solves. You do not need to run. You do not need to lose weight to summit. And you do not need to arrive in the best shape of your life — you need to arrive consistent, uninjured and used to being on your feet.' },

    { type: 'heading', text: 'Doing it with other people' },
    { type: 'p', text: 'The reason training happens inside Base Camp rather than on your own is straightforward: most people abandon a solo training plan somewhere around week six, and almost nobody abandons one when five other people are comparing notes about it every week.' },

    { type: 'quote', text: 'Nothing here is difficult. It is just four months long, which is a different kind of difficult.' },
  ],

  /* ── 3 ────────────────────────────────────────────────────────────────── */
  'what-to-pack': [
    { type: 'lede', text: 'You will be handed a full kit list before you travel. This is the thinking behind it — what actually matters, what to spend money on, and what almost everyone over-packs.' },

    { type: 'heading', text: 'Understand the layer system and the list makes sense' },
    { type: 'p', text: 'You will pass through several climates in a few days, from rainforest to alpine desert to genuine cold at the summit. Nothing you own will cover all of that on its own, so the answer is layers you add and remove constantly.' },
    { type: 'list', items: [
      'Base layer — sits against your skin and moves sweat away from it. Merino or synthetic. Never cotton.',
      'Mid layer — traps warm air. Fleece or a light insulated jacket. You will want more than one.',
      'Insulation — a proper down or synthetic jacket, which mostly lives in your bag until summit night.',
      'Shell — waterproof and windproof, jacket and trousers. The wind matters more than the rain.',
    ]},

    { type: 'heading', text: 'Spend your money here' },
    { type: 'list', items: [
      'Boots. Broken in, comfortable, waterproof, with ankle support. This is the single most important item you own and the one most likely to ruin your week if you get it wrong.',
      'Socks. Several pairs of good walking socks. Cheap socks cause blisters and blisters end trips.',
      'A sleeping bag rated genuinely colder than you expect to need.',
      'A head torch that works, plus spare batteries. Summit night starts in the dark.',
      'Sunglasses with real UV protection. The sun at altitude is severe and there is nothing to hide behind.',
    ]},

    { type: 'heading', text: 'Borrow, hire or make do' },
    { type: 'p', text: 'Down jackets, sleeping bags, walking poles and duffels can usually be hired locally, which is worth doing if you will never use them again. Ask before you buy — someone in your group will often have a spare, and hiring keeps money with the local operator.' },

    { type: 'heading', text: 'What everyone over-packs' },
    { type: 'p', text: 'Clothes, overwhelmingly. You are not going to be fragrant regardless, and nobody on the mountain cares. Beyond that: too many books, too many gadgets, too much of whatever you bought in a panic the week before.' },
    { type: 'p', text: 'There is normally a weight limit on the bag the porters carry, so packing light is not merely a preference — it is a constraint, and it is also a matter of respect for the people carrying it.' },

    { type: 'heading', text: 'Summit night deserves its own thought' },
    { type: 'p', text: 'It is the coldest, longest and darkest part of the trip, and it typically begins around midnight. Everything you need for it should be findable in the dark, half-asleep, wearing gloves. Lay it out before you sleep. Keep batteries and water where they will not freeze.' },

    { type: 'heading', text: 'The small things that matter more than they should' },
    { type: 'list', items: [
      'Lip balm with sun protection, and more of it than you think.',
      'Wet wipes, and a bag to carry the used ones out.',
      'Any personal medication, in your daypack rather than your duffel.',
      'Snacks you actually like, for the days your appetite disappears.',
      'A dry bag or liner — waterproof covers leak, and a wet sleeping bag is a serious problem.',
    ]},

    { type: 'quote', text: 'Test everything at home first. The mountain is a bad place to discover that your waterproof is not.' },
  ],

  /* ── 4 ────────────────────────────────────────────────────────────────── */
  'queer-travel-tanzania': [
    { type: 'lede', text: 'Homosexuality is illegal in Tanzania. We are not going to soften that, because you deserve to plan around the real country rather than a brochure version of it — and because knowing what you are walking into is what makes it manageable.' },

    { type: 'heading', text: 'The legal position, plainly' },
    { type: 'p', text: 'Same-sex relationships are criminalised in Tanzania, and the penalties on the statute books are severe. There are no legal protections against discrimination on the grounds of sexual orientation or gender identity.' },
    { type: 'p', text: 'In practice, enforcement overwhelmingly falls on Tanzanian people rather than visitors. That distinction matters enormously — it is the difference between a risk you can navigate and one you cannot — but it should also sit uncomfortably, because the people most exposed are the ones who live there.' },

    { type: 'heading', text: 'What this means day to day' },
    { type: 'p', text: 'For most queer travellers, most of the time, the practical answer is discretion in public and normality everywhere else. No public displays of affection. Some care about what you volunteer to strangers. Beyond that, a safari vehicle and a mountain trail are not places where anyone is interrogating your private life.' },
    { type: 'p', text: 'Discretion here is not shame and it is not closeting yourself for a fortnight. It is the same situational judgement most queer people have been exercising since they were teenagers, applied somewhere unfamiliar.' },

    { type: 'quote', text: 'We are birdwatchers. It is a joke, and it is also occasionally a genuinely useful sentence.' },

    { type: 'heading', text: 'What Vala does about it' },
    { type: 'list', items: [
      'We work with the same local operating partner every time — people who know exactly who they are hosting, chosen deliberately rather than by lowest quote.',
      'Accommodation is selected rather than filtered. Where a room arrangement matters to you, we confirm it in writing before you travel.',
      'The guides and crew who spend the week with you are briefed in advance.',
      'Names and pronouns are shared with the people directly supporting you, with your permission, and not beyond them.',
      'We tell you honestly, before you book, where discretion is sensible and where it genuinely is not an issue.',
    ]},

    { type: 'heading', text: 'What we will not promise' },
    { type: 'p', text: 'We will not tell you that every hotel employee, driver, official and stranger will treat you perfectly. We cannot promise that, and you would be right not to believe us if we did.' },
    { type: 'p', text: 'What we will promise is narrower and more useful: we listen, we respect who you are, we brief the people supporting you, we choose partners accordingly, and we are honest in advance — including about the parts that are uncomfortable.' },

    { type: 'heading', text: 'For trans and non-binary travellers' },
    { type: 'p', text: 'Documentation is the thing worth thinking about early, particularly where your passport, visa and booking names need to align. Bring this up with us as soon as you are considering the trip rather than close to departure — it is a logistics question, we have no interest in making it a personal one, and there is usually more we can do with time.' },

    { type: 'heading', text: 'The part that is not about being queer' },
    { type: 'p', text: 'Most of the practical safety advice for Tanzania is the same as anywhere: sensible precautions with valuables, care after dark in cities, respect for wildlife, comprehensive travel insurance that explicitly covers altitude. Being queer changes some of the calculus. It does not replace the ordinary business of travelling somewhere new.' },

    { type: 'heading', text: 'Why go at all' },
    { type: 'p', text: 'Because it is one of the most extraordinary places on earth, because queer people have always travelled to countries that did not deserve them, and because going with a group who understand the calculation is significantly better than going alone and hoping.' },
    { type: 'p', text: 'If, having read all of that, it is not for you — that is a legitimate answer and we would rather you reached it now than on a call.' },
  ],

  /* ── 5 ────────────────────────────────────────────────────────────────── */
  'how-base-camp-works': [
    { type: 'lede', text: 'Base Camp is the four months before you fly. It is the part nobody else does, and it is the reason arriving on your own stops being the thing you dread.' },

    { type: 'heading', text: 'The problem it solves' },
    { type: 'p', text: 'Most group trips introduce you to each other in a hotel lobby on day one. Everyone is jet-lagged, nobody knows where to look, and if you came alone you spend the first forty-eight hours working out who you can sit next to at dinner.' },
    { type: 'p', text: 'That moment is the single most common reason people who want to do something extraordinary never book it. It is also completely avoidable.' },

    { type: 'heading', text: 'What it actually is' },
    { type: 'p', text: 'From the moment you book, you join the other people going on your departure. You train alongside them, ask questions in front of them, compare kit with them, and complain to them about boot blisters. By the time you land, these are not strangers. They are people whose training injuries you have been following for four months.' },

    { type: 'heading', text: 'The four months' },
    { type: 'list', items: [
      'Month one — introductions and the first shared training block. Most people are quietly relieved to discover everyone else is nervous too.',
      'Month two — training gets real. Hills, longer days, and kit questions answered by people who have actually carried the thing.',
      'Month three — logistics. What to buy, what to hire, what not to waste money on. Flights coordinated so people arrive together where that is possible.',
      'Month four — final preparation. The altitude briefing, the summit night briefing, and the practical detail of what day one actually looks like.',
    ]},

    { type: 'heading', text: 'What it is not' },
    { type: 'p', text: 'It is not homework, and it is not a wellness programme. There is no obligation to post, share, or be relentlessly positive about your training. Some people are in it every week; some read quietly and turn up in February having done every single walk without saying a word about it. Both are entirely fine.' },

    { type: 'heading', text: 'Why it is built into the trip rather than sold separately' },
    { type: 'p', text: 'Because the group is the product. The mountain is the reason people come, and the group is why they finish it, and why they come back. Charging extra for the thing that makes the trip work would be a strange way to run it.' },

    { type: 'heading', text: 'Afterwards' },
    { type: 'p', text: 'The groups tend not to disband. That was not really the plan when we started — it is simply what happens when a group of people spend four months preparing for something difficult and then do it together.' },

    { type: 'quote', text: 'You are not joining a tour. You are joining a group that has been waiting for you.' },
  ],
};
