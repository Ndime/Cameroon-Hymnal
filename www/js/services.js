angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
 //hide scrollToTop button on app load
  // Some fake testing data
  var chats = [{
    id: 1,
    name: 'ALL PEOPLE THAT ON EARTH DO DWELL',
    lastText: 'All people that on earth do dwell,<br/>Sing to the Lord with cheerful voice;<br/>Him serve with mirth, his praise forth tell,<br/>Come ye before him, and rejoice.<br/><br/>2. The Lord, ye know, is God indeed;<br/>Without our aid he did us make;<br/>We are his folk, he doth us feed,<br/>And for his sheep he doth us take.<br/><br/>3. O enter then his gates with praise;<br/>Approach with joy his courts unto;<br/>Praise, laud, and bless his name always,<br/>For it is seemly so to do.<br/><br/>4. For why, the Lord our God is good;<br/>His mercy is for ever sure;<br/>His truth at all times firmly stood,<br/>And shall from age to age endure.<br/><br/>5. To Father, Son and Holy Ghost,<br/>The God whom heaven and earth adore,<br/>From men and from the angle-host<br/>Be praise and glory evermore. Amen.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 2,
    name: 'ALL THE EARTH',
    lastText: 'Antiphon:<br/>All the earth proclaim the Lord.<br/>Sing your praise to God.<br/><br/>Serve you the Lord heart filled with gladness<br/>Come into his presence singing for joy.<br/><br/>2. Know that the Lord is our creator.<br/>Yes, He is our father, we are his sons.<br/><br/>3. Enter his gates bringing thanksgiving,<br/>O enter his courts while singing his praise.<br/><br/>4. Our Lord is God his love enduring,<br/>His word is abiding now with all men.<br/><br/>5. Honour and praise be to the Father,<br/>The Son, and the Spirit, world without end.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 3,
    name: 'COME PRAISE THE LORD, YOU CHILDREN OF THE LORD',
    lastText: 'Come, praise the Lord, You children of the Lord!<br/>Come, raise your voice in joyous song.<br/>Alleluia, Alleluia, Alleluia, Alleluia.<br/><br/>2. Come, bless his name, you children of the Lord!<br/>Come, sing his praise, and let the trumpet sound.<br/>Alleluia, Alleluia, Alleluia, Alleluia.<br/><br/>3. Rejoice in God, His love descends on us,<br/>Lift up your voice and sound his name afar,<br/>Alleluia, Alleluia, Alleluia, Alleluia.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 4,
    name: 'COME, RING OUT YOUR JOY (PS.94)',
    lastText: 'Antiphon 1<br/>Come, let us worship the Lord!<br/><br/>Antiphon 2<br/>Let us bow down before the God who made us.<br/><br/>Antiphon 3<br/>Come in, let us worship: bend low, let us kneel<br/>before the God who made us.<br/><br/>Come, RING out our Joy to the LORD;<br/>HAIL the ROCK who SAVES us.<br/>Let us COME beFORE him, giving THANKS,<br/>with SONGS let us HAIL the LORD.<br/><br/>2. A MIGHTY GOD is the LORD,<br/>a GREAT king aBOVE all GODS;<br/>in his HAND are the DEPTHS of the EARTH;<br/>the HEIGHTS of the MOUNTAINS are HIS.<br/>To HIM belongs the SEA, for he MADE it,<br/>and the DRY land SHAPED by his HANDS.<br/><br/>3. Come IN, let us BOW and bend LOW;<br/>let us KNEEL before the GOD who MADE us,<br/>for HE is our GOD and WE<br/>the PEOPLE who beLONG to his PASTURES,<br/>the FLOCK that is LED by his HAND.<br/><br/>4. O that toDAY you would LISten to his VOICE!<br/>\u201CHARDen not your HEARTS as at MerIba,<br/>as on that DAY at MASsah in the DESert<br/>when your Fathers PUT me to the TEST,<br/>when they TRIED me, THOUGH they saw my<br/>work.\u201D<br/><br/>5. For forty YEARS I was WEARied PEOple<br/>and I SAID: \u201CTheir HEARTS are aSTRAY,<br/>these PEOple do not KNOW my WAYS.\u201D<br/>THEN I took an OATH  in my ANGer:<br/>\u201C NEVer shall they ENter my REST.\u201D<br/><br/>6. Give GLORy to the Father AlMIGHTY,<br/>to his SON, Jesus CHRIST, the LORD<br/>to the SPIrit who DWELLS in our HEARTS,<br/>both NOW and for EVer. AMEN.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 5,
    name: 'CRY OUT WITH JOY TO THE LORD (PS.99)',
    lastText: 'Antiphon 1<br/>Arise, come to your God,<br/>sing him your songs of rejoice<br/><br/>Antiphon 2<br/>Glory to you, O God!<br/><br/>Antiphon 3<br/>Alleluia, alleluia, alleluia.<br/><br/>Cry out with JOY to the LORD, all the EARTH.<br/>SERVE the LORD with GLADness.<br/>Come be him, SINGing for JOY.<br/><br/>2. Know that HE, the LORD, is God.<br/>He MADE us, we beLONG to HIM,<br/>We are his PEOple, the SHEEP of his FLOCK.<br/><br/>3. GO within his GATES, giving THANKS.<br/>Enter his COURTS with SONGS of PRAISE.<br/>Give THANKS to him and BLESS his NAME.<br/><br/>4. InDEED, how GOOD is the LORD,<br/>eternal his Merciful LOVE;<br/>he is FAITHful from AGE to AGE.<br/><br/>5. Give GLORy to the FAther AlMIGHTy,<br/>to his SON, Jesus CHRIST, the LORD,<br/>to the SPIrit who DWELLS in our HEARTS.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 6,
    name: 'HOLY GOD, WE PRAISE THY NAME',
    lastText: 'Holy God, we praise thy name;<br/>Lord of all, we bow before thee!<br/>All in heaven above adore thee.<br/>Infinite thy vast domain,<br/>Everlasting is thy reign.<br/><br/>2. Hark! the loud celestial hymn,<br/>Angel choirs above are raising;<br/>Cherubim and seraphim,<br/>In unceasing chorus praising,<br/>Fill the heavens with sweet accord,<br/>Holy, holy, holy Lord.<br/><br/>3. Holy Farther, holy Son,<br/>Holy Spirit, Three we name thee,<br/>While in Essence only One<br/>Undivided God we claim thee;<br/>And adoring bend the knee,<br/>While we own the mystery.<br/><br/>4. Spare thy people, Lord, we pray,<br/>By a thousand snares surrounded;<br/>Keep us without sin today;<br/>Never let us be confounded.<br/>Lo, I put my trust in thee \u2013<br/>Never, Lord, abandon me.<br/><br/>',
    season: '<span class=\'season\'>Communion</span>',
    face: 'img/icon.png'
  }, {
    id: 7,
    name: 'HOW GREAT IS YOUR NAME, O LORD (PS.8)',
    lastText: 'Antiphon 1<br/>How great is your name, O Lord our God,<br/>through all the earth!<br/><br/>Antiphon 2<br/>From the voices of children, Lord,<br/> comes the sound of your praise.<br/><br/>Antiphon 3<br/>What is mortal man that you care for him?<br/><br/>Antiphon 4<br/>What is man that you keep him in mind,<br/> mor-tal man that you care for him?<br/><br/>Your MAJesty is PRAISed above the HEAvens;<br/>on the LIPS of CHILdren and of BABES<br/>you have found PRAISED to FOIL your ENemy,<br/>to SILence the FOE and the REBel.<br/><br/>2. When I see the HEAvens, the WORK of your HANDS,<br/>the MOON and the STARS which are arRANGED,<br/>what is MAN that you should KEEP him in MIND,<br/>mortal MAN that you CARE for HIM?<br/><br/>3. Yet you have MADE him LESS than a GOD;<br/>with GLORy and HONour you CROWNED him,<br/>gave him POWER over the WORKS of your HAND,<br/>put ALL things UNder his FEET.<br/><br/>4. ALL of them, SHIP and CATTLE,<br/>yes, EVen the SAVage BEAST,<br/>BIRDS of the AIR, and FISH<br/>that MAKE their WAY through the WAters.<br/><br/>5. Give GLORy to the FAther ALMIGHTy,<br/>to his SON, Jesus CHRIST, the LORD,<br/>to the SPIrit who DWELLS in our HEARTS,<br/>both NOW and for EVer. AMEN.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 8,
    name: 'HOW LOVELY IS YOUR DWELLING PLACE (PS.83)',
    lastText: 'Antiphon 1<br/>How lovely is your dwelling place, O Lord of hosts.<br/><br/>Antiphon 2<br/>Lord, God of hosts, happy the man who trusts In you.<br/><br/>My SOUL is LONGing and YEARNing,<br/>is YEARNing for the COURTS of the LORD.<br/>My HEART and my SOUL ring out their JOY to GOD, the LIVing GOD.<br/><br/>2. The SPArrow herSELF finds a HOME<br/>and the SWAllow a NEST for her BROOD;<br/>she LAYS her YOUNG by your ALtars,<br/>God of HOSTS, my KING and my GOD.<br/><br/>3. They are HAPpy, who DWELL in your HOUSE,<br/>for EVer SINGing your PRAISE.<br/>They are HAPpy, whose STRENGTH is in YOU,<br/>in whose HEARTS are the ROADS to SION.<br/><br/>4. As they GO through the BITTer VALLey,<br/>they MAKE it a PLACE of SPRINGS,<br/>(the AUtumn rain COVers it with BLESSings,)<br/>they WALK with EVer growing STRENGTH.<br/>They will SEE the God of GODS in SION.<br/><br/>5. O LORD God of HOST, hear my PRAYER,<br/>give EAR, O GOD of JAcob.<br/>Turn your EYES, O GOD, our SHIELD,<br/>LOOK on the FACE of your aNNIONTed.<br/><br/>6. ONE day withIN your COURTS<br/>is BETTer than THOUSand elseWHERE.<br/>The TRESHold of the HOUSE of God<br/>I preFER to the DWELLings of the WICKed.<br/><br/>7. For the Lord GOD is a RAMPart, a SHIELD;<br/>he will GIVE us his FAVour and GLORy.<br/>The LORD will not reFUSE any GOOD<br/>to those who WALK without BLAME.<br/><br/>8. Give PRAISE to the FAther AlMIGHTy,<br/>to his SON, Jesus CHRIST the LORD,<br/>to the SPIrit who DWELLS in our HEARTS,<br/>both NOW and for EVer. AMEN.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 9,
    name: 'I REJOICED WHEN I HEARD THEM SAY (PS.121)',
    lastText: 'Antiphon 1<br/>We shall go up with joy to the house of our God.<br/><br/>Antiphon 2<br/>For love of the house of the Lord I will pray for your good.<br/><br/>I reJOIced when I HEARD them SAY;<br/>\u201CLet us GO to God\u2019s HOUSE.\u201D<br/>And NOW our FEET are STANDing <br/>within your GATES, O JerUsalem.<br/><br/>2. JerUsalem is BUILT as a CITy<br/>STRONGly comPACT.<br/>It is THERE that the TRIBES go UP,<br/>the TRIBES of the LORD.<br/><br/>3. For ISrael\u2019s LAW it IS<br/>there to PRAISE the Lord\u2019s NAME.<br/>THERE were set the THRONES of JUDGment,<br/>of the HOUSE of DAVid.<br/><br/>4. For the PEACE of JerUsalem, PRAY;<br/>\u201CPEACE be your HOMES!<br/>May PEACE REIGN in your WALLS,<br/>in your PALaces, PEACE!\u201D<br/><br/>5. For LOVE of my BRETHren and FRIENDS,<br/>I say; \u201CPEACE upon YOU!\u201D<br/>For LOVE of the HOUSE of the LORD<br/>I will ASK for your GOOD.<br/><br/>6. Praise the FAther, the SON and Holy SPIrit,<br/>both NOW and for EVer,<br/>the God who IS, who WAS and is to COME<br/>at the END of the Ages.<br/><br/>',
    season: '<span class=\'season\'>Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 10,
    name: 'LIKE THE DEER THAT YERNS (PS.41)',
    lastText: 'Antiphon 1<br/>My soul is thirsting for the Lord: when shall<br/>I see him face to face?<br/><br/>Antiphon 2<br/>I shall go to the House of God with songs of joy.<br/><br/>LIKE the DEER that YERNS<br/>for RUNning STREAMS,<br/>SO my SOUL is YERNing<br/>for YOU, my GOD.<br/><br/>2. My SOUL is THIRSTing for GOD,<br/>the GOD of my LIFE;<br/>WHEN can I ENTer and SEE<br/>the FACE of GOD?<br/><br/>3. My TEARS have beCOME my BREAD,<br/>by NIGHT, by DAY,<br/>as I HEAR it SAID all day LONG:<br/>\u201CWHERE is your GOD?\u201D<br/><br/>4. THESE things will I reMEMber<br/>as I POUR out my SOUL:<br/>how I would LEAD the reJOICing CROWD<br/>into the HOUSE of GOD.<br/>(amid CRIES of GLADness and THANKSgiving,<br/>the THRONG wild with JOY.)<br/><br/>5. WHY are you cast DOWN, my SOUL,<br/>why GROAN withIN me?<br/>Hope in GOD, I will PRAISE him STILL,<br/>my SAViour and my GOD.<br/><br/>6. My SOUL is cast DOWN withIN me<br/>so I THINK of YOU<br/>from the COUNtry of JORdan and Mount HERmon,<br/>From the HILL of MIzar.<br/><br/>7. DEEP is CALLing on DEEP,<br/>in the ROAR of WAters:<br/>your Torrent and ALL your WAVES<br/>swept OVer ME.<br/><br/>8. By DAY the LORD will SEND<br/>his LOVing KINDness;<br/>by NIGHT I will SING to HIM,<br/>praise the GOD of my LIFE.<br/><br/>9. I will SAY to GOD, my Rock,<br/>\u201CWHY have you forGOTten me?<br/>WHY do I go MOURNing,<br/>opPRESSed by the FOE? \u201D<br/><br/>10. With CRIES that PIERCE me to the HEART,<br/>my ENemies reVILE me,<br/>SAYing to me ALL day LONG:<br/>\u201CWHERE is your GOD?\u201D<br/><br/>11. WHY are you cast DOWN, my SOUL,<br/>why GROAN withIN me?<br/>Hope in GOD, I will PRAISE him STILL,<br/>my SAViour and my GOD.<br/><br/>12. Praise the FAther, the SON and the Holy SPIrit,<br/>both NOW and for EVer,<br/>the God who IS, who WAS and who WILL be,<br/>WORLD without END.<br/><br/>',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 11,
    name: 'O COME TO THE SPRINGS OF LIVING WATERS',
    lastText: 'Refrain:<br/>O come to the springs of living waters that<br/>flow from the Lord.<br/><br/>O come you nations come and adore the<br/>Lord.<br/><br/>2. O come from valley and mountain unto your<br/>Lord.<br/><br/>3. O come with your humble offerings unto your<br/>King.<br/><br/>4. O come with drums and cymbals to praise your<br/>God.<br/><br/>5. O come with voices singing in love to God.<br/><br/>6. Come to him, now come hasten to pay your<br/>vows.<br/><br/>7. Blessed is the man who makes the Lord his<br/>trust.<br/><br/>8. Come now adore the Lord in his temple court.<br/><br/>',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 12,
    name: 'O GIVE THE LORD, YOU SONS OF GOD (Ps.28)',
    lastText: 'Antiphon 1<br/>The Lord will give strength to his people; the<br/>Lord will bless his people with peace.<br/><br/>Antiphon 2<br/>Sing glory to the king of kings!<br/><br/>give the LORD you SONS of GOD,<br/>give the LORD GLORy and POWer;<br/>give the LORD the GLORY of his NAME;<br/>adore the LORD in his HOLy COURT.<br/><br/>2. The Lord\u2019s VOICE reSOUNDing on the WATers,<br/>the LORD on the imMENSity of WAters;<br/>the VOICE of the LORD, full of POWer,<br/>the VOICE of the LORD, full of SPLENdour.<br/><br/>3. The Lord\u2019s VOICE SHATtering the CEdars,<br/>the Lord SHATters the CEdars of LEBanon;<br/>he makes LEBanon LEAP like a CALF<br/>and SIRion like a YOUNG wild-ox.<br/>(the Lord\u2019s VOICE FLASHing flames of FIRE)<br/><br/>4. The Lord\u2019s VOICE SHAKing in the WILDerness,<br/>the Lord SHAKES the WILDerness of KADesh<br/>the Lord\u2019s VOICE RENDing the OAK tree<br/>and STRIPping the FORest BARE.<br/><br/>5. In his TEMple they ALL cry: \u201CGLORy!\u201D<br/>The LORD sat enTHRONED over the FLOOD;<br/>the LORD sits as KING for EVer.<br/><br/>6. Give GLORy to the FAther AlMIGHTy,<br/>to his SON, Jesus CHRIST, the LORD,<br/>to the SPIrit who DWELLS in our HEARTS,<br/>both NOW and for EVer.  AMEN.',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 13,
    name: 'O GOD, GIVE YOUR JUDGEMENT TO THE KING (Ps.71)',
    lastText: 'Antiphon:<br/>Blessed be the Lord: let his glory fill the earth.<br/><br/>O GOD, give your JUDGEment to the KING,<br/>to a KING\u2019S son your JUSTice,<br/>that he may JUDGE your PEOple in JUSTice<br/>and your POOR in right JUDGEment.<br/><br/>2. May the MOUNTains bring forth PEACE for the PEOple<br/>and the HILLS, JUSTice!<br/>May he deFEND the POOR of the PEOple<br/>and save the CHILDren of the NEEDy.<br/><br/>3. He shall enDURE like the SUN and the MOON, from AGE to AGE.<br/>He shall deSCEND like RAIN on the MEADOW,<br/>like RAINdrops on the EARTH.<br/><br/>4. In his DAYS JUSTice shall FLOURish<br/>and PEACE till the MOON fails.<br/>He shall RULE from SEA to SEA,<br/>from the Great RIVer to earth\u2019s BOUNDS.<br/><br/>5. BeFORE him his ENemies shall FALL,<br/>his FOES lick the DUST.<br/>The KINGS of TARshish and the SEA coasts<br/>shall PAY him TRIButes.<br/><br/>6. The KINGS of SHEba and SEba shall BRING him GIFTS.<br/>Before HIM all THINGS shall fall PROStrate,<br/>all NAtions shall SERVE him.<br/><br/>7. For he shall SAVE the POOR when they CRY,<br/>and the NEEDY who are HELPless.<br/>HE will have PITY on the WEAK<br/>and save the LIVES of the POOR.<br/><br/>8. From opPRESSion he will REScure their LIVES,<br/>to HIM their blood is DEAR.<br/>They shall PRAY for HIM without CEASing,<br/>BLESS him all the DAY.<br/><br/>9. May CORN be aBUNDant in the LAND,<br/>to the PEAKS of the MOUNTains!<br/>May its FRUITS RUStle like LEBanon,<br/>may men FLOURish in the CITies<br/>like GRASS on the EARTH!<br/><br/>10. May his NAME be BLESSed for EVer,<br/>and enDURE like the SUN.<br/>Every TRIBE shall be BLESSed in HIM,<br/>all NAtions bless his NAME.<br/><br/>11. BLESSed be the LORD, God of ISrael,<br/>who aLONE works WONders.<br/>Ever BLESSed his GLORious NAME!<br/>Let his GLORy fill the EARTH.<br/><br/>',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 14,
    name: 'O HOLY LORD, BY ALL ADORED',
    lastText: 'O Holy Lord by all adored,<br/>Our trespasses confessing,<br/>To thee this day thy children pray,<br/>Our holy faith professing!<br/>Accept, O king, the gifts we bring,<br/>Our songs of praise the prayers we raise,<br/>And grant us Love thy blessing.<br/><br/>2. To God on High be thanks and praise,<br/>Who deigns are bonds to sever;<br/>His care shall guide us all our days,<br/>And harm shall reach us never.<br/>On Him we rest with faith assured;<br/>Of all that live He is the Lord,<br/>For ever and for ever.<br/><br/>',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 15,
    name: ' ',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 16,
    name: ' ',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 17,
    name: '',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 18,
    name: ' ',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 19,
    name: ' ',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }, {
    id: 20,
    name: ' ',
    lastText: '',
    season: '<span class=\'season\' >Entrance</span>',
    face: 'img/icon.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
