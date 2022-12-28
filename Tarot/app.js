const cardArray = [
    {
        name: "Ace Of Cups",
        img: "images/Ace Of Cups.png",
        description: "The Ace of Hearts in the Tarot means deep feelings, intuition, sincerity and love. The Ace of Cups in Tarot reading is the introduction of emotional awareness into your life. This awareness can take any form, such as attraction, strong emotion, or sympathetic reaction. It can also offer an occasion, a gift or an encounter."
    },
    {
        name: "Ace Of Swords",
        img: "images/Ace Of Swords.png",
        description: "The Ace of Swords in the Tarot means mental strength, truth, justice, new ideas and plans, victory and courage. The meaning of the Ace of Swords in Tarot reading is one of the difficulties encountered with intelligence and clear thinking."
    },
    {
        name: "Ace Of Talismans",
        img: "images/Ace Of Talismans.png",
        description: "The ace of Talismans in the Tarot means material strength, prosperity, practicality and confidence. It shows the possibility that abundance and security are at stake. The meaning of Ttilsim asi in a Tarot reading is one of new beginnings."
    },
    {
        name: "Ace Of Wands",
        img: "images/Ace Of Wands.png",
        description: "In Tarot, the Ace of Wands represents creative power, enthusiasm and courage. The meaning of Aces of meaning in a Tarot reading is constructive, self-confident energy that works for individual strength and satisfaction."
    },
    {
        name: "Balance",
        img: "images/Balance.png",
        description: "The card of Justice in the Tarot is about reason, truth and, yes, justice. This is a card about a cold and objective balance. It is also about moderation in everything, as well as the truths of karma. If you're not keeping the scales in balance, there could be some fallout. Among the basic symbols of this card is a judge-like figure, sometimes Decked out, standing or standing, with stamps in his left hand and a raised sword in the other hand."
    },
    {
        name: "Chariot",
        img: "images/Chariot.png",
        description: "The chariot card in the Tarot is not an easy card to interpret. After all, it can mean a hard-earned success. The card usually depicts the chariot, an armored warrior, symbols of the sun or moon, the encircled rod on the winged shield, black and white sphinxes (or lions, or horses), sometimes resting. On some decks there is a canopy of stars, and sometimes a throne inside the chariot."
    },
    {
        name: "Court",
        img: "images/Court.png",
        description: "The traditional meaning of the Court Card focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and more objective understanding of where we are now and what we need to do to grow as people. The Judgment card that appears in a reading indicates that you are approaching this important point in your life where you need to start evaluating yourself. Seeing this card can also indicate that you are in a period of awakening caused by an act of self-reflection. Now you have a clearer idea of what you need to change and how you need to be right for yourself and your needs. This can mean making small changes in your daily life or making big changes that affect not only you, but also your loved ones."
    },
    {
        name: "Cup Duo",
        img: "images/Cup Duo.png",
        description: "The Decoupage of the cup in the Tarot symbolizes the beauty and strength of sexual attraction between two people. This is the card that couples want to be dealt. This card also represents the unity of any two entities. Whether it is people, groups, ideas or talents, there is always the potential for a bond when two forces are brought together. Dec. That's the deeper meaning of this card."
    },
    {
        name: "Cup Eight",
        img: "images/Cup Eight.png",
        description: "The Eight Cups in the Tarot mean deeper meaning, moving on and fatigue. The figure on the card is a man who went on a journey, hit a new road. The card means that the change can take many forms. It can be physical, such as a job change, relocation, or change in relationships. This change can also indicate internal changes, such as replacing old thought patterns with new ones."
    },
    {
        name: "Cup Nines",
        img: "images/Cup Nines.png",
        description: "The Nine Cups in the Tarot mean wish fulfillment, satisfaction and sensual pleasure. The Nine Cups are also known as the Wish Card in certain Tarot traditions. The tone of the Nine Cup cards is smug, the feeling that the cat feels when he manages to catch the canary! The number on the Nine Cup card is a man with writing all over it. She is sitting confidently, with her arms folded, with a smiling face. She seems to radiate happiness and seems to have everything she wants. He says he couldn't be happier."
    },
    {
        name: "Cup Quartet",
        img: "images/Cup Quartet.png",
        description: "Four of the Cups in the Tarot mean self-absorption, apathy and entering. The Quadruple Cup in meaning in a Tarot reading is that you should be careful about getting stuck in self-absorption. A self-absorbed person refers only to his own interests and desires, just like the figure on the Four of Cups card. The figure is not aware of the glass presented to him. Because he turns so inward in himself, he misses a valuable gift."
    },
    {
        name: "Cup Quintet",
        img: "images/Cup Quintet.png",
        description: "The Five of the Cups in the Tarot mean loss, mourning and regret. The Five Trophies in the meaning in Tarot reading are related to tangible losses, such as money, property, relationships and work. Or it can be abstract, such as losses, dreams, opportunities, expectations or reputation. Loss, sadness, regret can be big or small. However, you should not be discouraged by the appearance of this card, because every negative has a positive side. The figure on the Five Hearts card is in black and covered with grief. Oblivious to the fact that there are two upright cups behind him, he stares at the overturned cups in front of him. Loss always hurts because we always resist change. However, each loss opens up new opportunities and possibilities for growth. Each loss initiates a change. We have to go with the flow. If we struggle to hold on to what is gone, we will suffer more."
    },
    {
        name: "Cup Sevens",
        img: "images/Cup Sevens.png",
        description: "The Seven Cups in the Tarot mean wishful thinking, options, practicality, sloppiness and dissipation. The meaning of the Seven Cups in a Tarot reading is that it is time to decide and be realistic about what you can do and how far you can stretch. The Seven Cups provide balance for efficiency, neatness, time management and everything that is controlled and orderly. These things have their place, but sometimes you have to let go."
    },
    {
        name: "Cup Ten",
        img: "images/Cup Ten.png",
        description: "The Ten Cups in the Tarot mean joy, peace and family. The Ten Cups in a Tarot reading are a time of blessing, a time of richly deserved satisfaction and a sign of his future. The image on the Ten Hearts card is an image of a happy and loving couple with children. Also, in the background there is a house surrounded by trees and water. This can be your emotional life at its best. The image represents an attainable ideal."
    },
    {
        name: "Cup Trio",
        img: "images/Cup Trio.png",
        description: "The triad of cups in the Tarot means enthusiasm, friendship and community. The Decadent triad of the meaning in Tarot reading comes together in love. Whether it's friendship or community, it comes in terms of emotions, like what you feel when you join others. In the picture, three women dance with their arms outstretched to unite their feelings and emotions, as symbolized by the cups. Women represent the social glue that binds everyone together. The card represents emotions and experiences that make you feel like dancing, singing and joy."
    },
    {
        name: "Death",
        img: "images/Death.png",
        description: "The Death card in the Tarot is a card of great transformation and new beginnings, and it probably won't be easy. The meaning of the Death card in Tarot reading is related to transformation, transition and change. The basic symbols of the death card are death as a skeleton in a black robe or armor. It can also be a flag with a scythe or a five-petaled rose. There may be other figures in the field, the most common and recurrent is a child."
    },
    {
        name: "Duo Of Swords",
        img: "images/Duo Of Swords.png",
        description: "The duo of swords in the Tarot indicates inhibited feelings, avoidance and stalemate. Two of the Swords in Tarot reading means balancing difficult choices and making difficult decisions. The card symbolizes the woman's struggle to keep her emotions within herself and stay away from external approaches."
    },
    {
        name: "Empress",
        img: "images/Empress.png",
        description: "The empress card Isis in the Tarot symbolizes motherhood, femininity and fertility. The Empress is the creator of life, romance, art, business, and here she continues until the idea is ready to be born. The basic Tarot symbols of this card are her dress decorated with pomegranates, a crown of twelve six-pointed stars, a rod, a heart-shaped shield inscribed with the symbol of Venus and a field of ripe wheat."
    },
    {
        name: "Ermish",
        img: "images/Ermish.png",
        description: "The hermit card in the Tarot is a Decalogue of introspection, soul searching, analysis and self-reflection. It indicates that this is not a time of socialization or action, but a time of peace and solitude. The basic symbol of this card is a robed man or monk carrying a lantern in his hand in a barren landscape."
    },
    {
        name: "Joker",
        img: "images/Joker.png",
        description: "The joker card in the Tarot symbolizes new beginnings. The basic meaning of the card is that the joker leads the way to a new beginning and the person has everything he needs or wants, as indicated by his bag. The Joker is shown in colorful clothes with a pack attached to the person, a dog at his heels and a cliff. The Tarot story of the Joker is that he travels aimlessly with all his worldly goods. A dreamer has lost in his thoughts, he does not see the abyss and, most likely, will fall. The dog in heels tries to warn him."
    },
    {
        name: "Justice",
        img: "images/Justice.png",
        description: "The card of Justice in the Tarot is about reason, truth and, yes, justice. This is a card about a cold and objective balance. It is also about moderation in everything, as well as the truths of karma. If you're not keeping the scales in balance, there could be some fallout. Among the basic symbols of this card is a judge-like figure, sometimes Decked out, standing or standing, with stamps in his left hand and a raised sword in the other hand."
    },
    {
        name: "King Of Cups",
        img: "images/King Of Cups.png",
        description: "The King of Cups in the Tarot means wisdom, calm, diplomacy, caring and tolerance. The King of Hearts in the meaning in Tarot reading is a combination of the positive water energy of the Cup suit and the outward focus of a king. His knowledge of the world comes from his heart. With wisdom and understanding, he guides his students with love. He is calm and relaxed in any situation and intuitively knows what is needed at any moment. His person gives peace of mind, and everyone turns to him for advice, as he listens attentively. Under him, all others have the freedom to grow and develop in their own way."
    },
    {
        name: "King Of Swords",
        img: "images/King Of Swords.png",
        description: "The King of Swords in the Tarot represents being intellectual, analytical, articular, fair and ethical. He is quite effective and insightful. His personality is a combination of the positive air energy of the Sword suit and the outward focus of a King. He is intelligent and is able to absorb all kinds of information. He treats all situations fairly and with dignity and makes impartial and fair decisions. He is extremely ethical and incorruptible and expects others to live by the same standards. He works out solutions quickly and is equally good at explaining them to others. The King of Swords is able to move forward by eliminating confusion and providing clarity. In this way, it deals with all chaotic conditions."
    },
    {
        name: "King Of Wands",
        img: "images/King Of Wands.png",
        description: "The King of Wands in Tarot means being creative, inspiring, strong, charismatic and courageous. His personality is a combination of the positive fire energy of the team of Wands and the outward focus of a King. He is enthusiastic and creative and allows his originality and inspiration to form. If an opportunity presents itself, he takes the lead. The King of Wands is powerful in achieving his goals, and others follow him. The King of Wands is never a passive observer, unless it suits his purpose. Jumps to create results. It will never be quiet, it is dramatic and exciting, and often the center of attraction. The king is brave and courageous and has the necessary energy and self-confidence to take risks. He believes in himself, has the courage of his convictions and generally avoids safe and easy routes."
    },
    {
        name: "Knight Of Cups",
        img: "images/Knight Of Cups.png",
        description: "The Knights of the Cup in the Tarot represent being romantic, creative and sensitive. The Knight of Cups, the meaning of which in Tarot reading can also be a little moody and temperamental, is also a great beauty, both for the creation and appreciation of beautiful things. This is an attraction, love and big, big emotions."
    },
    {
        name: "Knight Of The Sword",
        img: "images/Knight Of The Sword.png",
        description: "The Knight of the Sword in the Tarot means direct (blunt), domineering (overbearing), incisive (cutting), erudite (contented) and sensible (not feeling). On the one hand, the Knight of the Sword has a sharp intellect, speaks clearly with authority and is a master of logic. On the other hand, he can be tactless, convinced of his own superiority and diplomatic. He can be relied upon for his analytical clarity. He does not tolerate stupidity, being indifferent to the feelings of others."
    },
    {
        name: "Knight Of Wands",
        img: "images/Knight Of Wands.png",
        description: "Knights of the Scepter in the Tarot mean to be charming (superficial), self-confident (self-righteous), brave (stupid), adventurous (restless) and passionate (hot-tempered). On the one hand, the Knights of the Scepter seem to be full of energy and never afraid to try new things. On the other hand, he seems very confident in himself and his abilities. Although others may be stunned by his crazy stunts, his courage and passion are still admired. Knights of the Scepter tend to be shallow, and deep devotion cannot be expected from him. He is careless and irresponsible and acts without thinking. That would get him into trouble. The Knights of the Scepter also give spiritual messages."
    },
    {
        name: "Lovers",
        img: "images/Lovers.png",
        description: "The lovers card in the Tarot symbolizes love, romance, connection, attraction and perfect harmony (you guessed it). The basic symbols of this card are an angel or cupid, a man and a woman, and two trees. On some Deckhands, there is a man standing between two women, and on some decks, one tree is blooming while the other is bearing fruit. Waite Tarot cards have Adam and Eve, a tree, a snake and an apple."
    },
    {
        name: "Month",
        img: "images/Month.png",
        description: "The moon card in the Tarot symbolizes that things can be wrong and you can not trust your first impression. Not everything is as it seems. The basic card symbols are a full moon (with a crescent moon in it), twin pillars, a dog and a wolf howling, a stream flowing into the ocean and a crayfish emerging from the water."
    },
    {
        name: "Nine Of Wands",
        img: "images/Nine Of Wands.png",
        description: "The Nine Wands in the Tarot mean vulnerability, perseverance, endurance, endurance and resistance. A glance at the figure on the Nine of Wands card shows that he went through certain battles. The figure is wrapped around the head and arm and is supported by a crutch. He may be hurt, but he's not down there, he's still standing! He can be defensive because he's hurt. Some of the cards that strengthen the properties of the Nine Wands are Power (the Great Arcana card) and Seven Wands, Two Swords and Eight Pentagrams. Some cards that are against Nine Aces are the Triple Cup, the Six Cup and the Eight Cup."
    },
    {
        name: "Octet Of The Sword",
        img: "images/Octet Of The Sword.png",
        description: "The Eight Swords in the Tarot mean restraint, confusion and powerlessness. The woman in the card is blindfolded, tightly bound and caught in a prison formed by the surrounding swords. He doesn't know where his security is."
    },
    {
        name: "Octet Of Wands",
        img: "images/Octet Of Wands.png",
        description: "The Eight Wands in the Tarot mean communication, travel and speed. The eight Wands represent the quick action, the result and the news. The wands on this card are indicative of an action and the effects of that action. Normally, before we act, we think about it, imagine, think about talking and imagine. Then we decide to put our ideas into practice. Some of the cards that reinforce the attributes of the Eight Wands are the Sorcerer, the Wheel of Fortune and Death (Major Arcana card) and the Eight Cups. Some cards that oppose the Eight of Wands are the High Priestess (Major Arcana card), the Seven Five Origins, and the Quadruple Sword."
    },
    {
        name: "Power",
        img: "images/Power.png",
        description: "The Power card in the Tarot is energy and courage. It is a card of courage and fierceness, like the hot and roaring energy of the lion. It also symbolizes a woman who is not afraid. He is immortal, stubborn and determined. The basic symbols of the power card are a woman with a lemnisat (the figure eight symbolizing eternal life and eternity on the side) hanging over her head, a lion and a chain of roses."
    },
    {
        name: "Prince Of Charms",
        img: "images/Prince Of Charms.png",
        description: "The prince of talismans in the Tarot means to be practical, prosperous, reliable and trustworthy, and to be effective. The meaning of the talisman prince in tarot reading is related to opportunity."
    },
    {
        name: "Prince Of Hearts",
        img: "images/Prince Of Hearts.png",
        description: "The Prince of Cups card in the Tarot expresses being emotional, intuitive, sincere and loving. The meaning of the prince of cups in a Tarot reading is to allow your feelings to be shown, to be sentimental or romantic and to respond to beauty. It's time to shed your detachment and let your heart lead the way! In order to be intuitive, you need to get guidance from the inside. To be intuitive, you need to have a psychic experience. Being sincere is another aspect of the Trophy Page card. To be intimate is to share a special togetherness, to have special moments of togetherness. Being intimate is about solidifying a friendship, getting closer to someone and starting or renewing a love relationship. It's time to feel free and express your feelings."
    },
    {
        name: "Queen Of Hearts",
        img: "images/Queen Of Hearts.png",
        description: "The Queen of Cups in the Tarot represents being loving, caring, intuitive, psychic and spiritual. The Queen of Hearts in the meaning in Tarot reading is the combination of the positive water energy of all Cups and the inward focus of a Queen. He always has a loving and sensitive nature. He never reacts with impatience or anger and has a kind word for everyone. He is compassionate and lets his heart lead the way. The queen is more open to her inner knowledge and trusts her intuition. He respects all aspects of the divine creation, loves and embraces everyone and is carried away by the tragedies and beauties of life."
    },
    {
        name: "Queen Of Swords",
        img: "images/Queen Of Swords.png",
        description: "The Queen of Swords in the Tarot means honesty, intelligence, honesty, intelligence and experience. Her personality is a combination of the positive air energy of the Sword suit and the inward focus of a Queen. The Queen of Swords admires honesty, is dedicated to the truth and tells you exactly as it is. It has nothing to do with lies or tricks and has no obvious claims. He fully understands the good and bad of the world and is not easy to deceive. He can easily analyze a situation and detect a difficult situation that has come to him. His observations were frank and candid and not intended to be hurtful. Another of the characteristics of the Queen of Swords is a sense of humor combined with witty turns."
    },
    {
        name: "Queen Of Wands",
        img: "images/Queen Of Wands.png",
        description: "The Queen of Wands in the Tarot represents being charming, sincere, energetic, cheerful and self-confident. Her personality is a combination of the positive fire energy of the entire Wands team and the inward focus of a Queen. The Queen of Wands always looks attractive and beautiful. He has an easy attitude, and this and his warm smile attract many friends and admirers. No matter what, he fulfills all the tasks, works with dedication, and his energy and enthusiasm are contagious."
    },
    {
        name: "Saint",
        img: "images/Saint.png",
        description: "The saint card in the Tarot symbolizes traditional values and is usually associated with religious or spiritual. The purpose of the Saint is to bring the spiritual down to earth. The main meaning of this Tarot card is to create harmony in the face of crisis. During a crisis, the Saint dispels panic and gives good and practical advice. The basic symbols of the saint card are twin pillars, a staff, a throne, the triple crown of a pope, a hand raised in blessing and two *acolyts."
    },
    {
        name: "Seven Of Swords",
        img: "images/Seven Of Swords.png",
        description: "Dodging the Seven Swords in the Tarot means lone wolf style and hidden dishonor. Seven of the swords represent someone with secret and lonely plans."
    },
    {
        name: "Seven Of Wands",
        img: "images/Seven Of Wands.png",
        description: "The Seven Wands in the Tarot mean defiance, defense, aggression, conviction and courage. Aggression and defiance are represented as two sides of the same coin with Seven Scepters. Some of the cards that reinforce the quality of the Seven Wands are the Five of Wands, the Nine of Wands and the Five of Swords. Some cards that oppose the Seven of Wands are the High Priestess and the Hanged Man (Major Arcana card) and the Three Pentagrams."
    },
    {
        name: "Six Of Swords",
        img: "images/Six Of Swords.png",
        description: "The Six of the Swords in the Tarot are the blues, which means recovery and travel. It represents crossing a rough sea to reach calmer waters."
    },
    {
        name: "Six Of The Trophies",
        img: "images/Six Of The Trophies.png",
        description: "Six of the Cups in the Tarot mean goodwill, affection, innocence and childhood. The six of the meaning in Tarot reading is a simple good. Yes, there is a lot of violence, anger and dishonesty in the world, but the opposite is also true. This is what the Six Cups represent and encourages you to be kind, forgiving and generous. Lend your car to a friend or fill it up for a sick co-worker. These small movements are important."
    },
    {
        name: "Six Of Wands",
        img: "images/Six Of Wands.png",
        description: "Six of the Wands in the Tarot mean victory, acclaim and pride. This card is the counterpart of the Major Arcana Chariot. Just like the Chariot, it represents the moments of victory and triumph. Some of the cards that strengthen the attributes of the Six Wands are the Chariot and the Sun (Major Arcana cards) and the Nine Trophies. Some cards that oppose Six of the wands are the Tower (Major Arcana card) and Five Fives, Five Trophies and Ten Swords."
    },
    {
        name: "Star",
        img: "images/Star.png",
        description: "The Star card in the Tarot symbolizes the future, clarity of vision and spiritual insight. The basic symbols of this card are seven or eight starters, a pool of water, a kneeling woman (one foot in the water, the other on land) and holding urns with both hands."
    },
    {
        name: "Sword Quartet",
        img: "images/Sword Quartet.png",
        description: "The Four of Swords in the Tarot mean rest, contemplation and quiet preparation. All Sword cards represent some kind of trials and difficulties, and the Sword Quartet is no different. It's a hard job to keep quiet."
    },
    {
        name: "Sword Quintet",
        img: "images/Sword Quintet.png",
        description: "The Five of Swords in the Tarot mean self-interest, disharmony, hostility, aggression and dishonor. All Five of the Swords in the Tarot reading can indicate purely personal interest: it's all about the 'I' and the 'I'. This can also mean giving up, going out, being stressed or in the middle of a conflict."
    },
    {
        name: "Talisman Nine",
        img: "images/Talisman Nine.png",
        description: "The talisman nine in the Tarot means discipline, self-confidence and purification. The meaning of the talisman nine in tarot reading is positive. This is about not concentrating too much on the business side of life, which is represented by the coins in the image placed towards the floor. On the other hand, there is another side to life: art, music and other forms of beauty that are part of our lives. You should also enjoy these subtle things."
    },
    {
        name: "Talisman Quartet",
        img: "images/Talisman Quartet.png",
        description: "The talisman quartet in the Tarot means ownership, control and inhibited change. The Four-Five Origin, the meaning of which is given in a Tarot reading, is the desire to control, the desire of one to impose his will on another. A word of caution: Make sure that your need for control does not get out of hand. This can lead to the stifling of creativity and individual expression."
    },
    {
        name: "Talisman Quintet",
        img: "images/Talisman Quintet.png",
        description: "The talisman quintet in the Tarot means difficult times, poor health and rejection. The meaning of the talisman quintet in a Tarot reading is usually negative. The image of two cold, hungry and sick figures on the talisman quintet card is illustrative. The suffering depicted on the card is easily recognizable: people without the basic necessities of life. But there is also a spiritual component to all this. Remember that all disruptions are temporary, and comfort may be just around the corner."
    },
    {
        name: "Talisman Seven",
        img: "images/Talisman Seven.png",
        description: "The talisman seven in the Tarot means reward and change of direction. The meaning of the talisman seven in Tarot reading is a time out. This is not a final card. This is a Decadal card, which means you need to pause and check your strategy. The image on the card is a person who has worked hard and has taken some time to admire his work."
    },
    {
        name: "Talisman Ten",
        img: "images/Talisman Ten.png",
        description: "The ten of talismans in the Tarot means wealth, permanence and convention. The ten of talismans, as a meaning in Tarot reading, is a material success. The image on the card is a Sunday place in a village where people go about their daily lives. This is a sign of convention and continuity. While the robed old man is stroking his dogs, the coins around him symbolize prosperity."
    },
    {
        name: "Ten Of Swords",
        img: "images/Ten Of Swords.png",
        description: "The Ten Swords in the Tarot mean martyrdom, a sacrificial mentality and hitting rock bottom. The Ten of Swords in Tarot reading is one of deep loss, painful betrayal and sad events."
    },
    {
        name: "Ten Of Wands",
        img: "images/Ten Of Wands.png",
        description: "The ten of Wands in the Tarot means overexertion, overwork, load, pressure and struggle. Some of the cards that reinforce the characteristics of the ten of wands are Justice (the Great Arcana card) and the Five Wands, the Six Swords, the Nine Swords and the Five Pentagrams. Some cards that oppose the Ten of Wands are the Fool and the Hanging Man (Major Arcana card) and the Four of Wands, the Quadruple Sword and the Seven of Swords."
    },
    {
        name: "The Destroyed Tower",
        img: "images/The Destroyed Tower.png",
        description: "The Collapsed Tower card in the Tarot is about the collapse of old ideas. A structure collapsed suddenly and violently, causing chaos and distress, but it also made room for something new to be built. The basic symbols of this card are a tower on a rocky ledge, a thunderbolt, several figures falling from the tower and waves falling below."
    },
    {
        name: "The Devil",
        img: "images/The Devil.png",
        description: "The devil card in the Tarot is related to ambitions and is also synonymous with temptation, addiction and depression. The basic symbols of this card are the devil with wings and horns, naked male and female figures, chains and an inverted pentagram on a black pedestal."
    },
    {
        name: "The Emperor",
        img: "images/The Emperor.png",
        description: "The Emperor card in the Tarot symbolizes success, confidence, wealth, stability, leadership, father / brother / husband, success and a talented person. The basic symbols of this card are the throne, the ram's heads, and sometimes the eagle, the orb and the scepter. The emperor, as Aries (Ram), is the baby, the first sign of the zodiac. He naturally follows the Empress."
    },
    {
        name: "The Hanged Man",
        img: "images/The Hanged Man.png",
        description: "The Hanged Man card in the Tarot symbolizes trial or meditation, unselfishness and sacrifice. The basic symbols of this card are a man hanging by one foot from the tau cross. His free leg is always crossed to form a '4' and his face is always peaceful. His hands may be tied or dangled. Sometimes, some coins may be falling out of their hands or pockets."
    },
    {
        name: "The Magician",
        img: "images/The Magician.png",
        description: "The sorceress card in the Tarot symbolizes the male power of creation through will and desire. The sorceress is wearing red and white clothes. The basic card symbols are the lemniskat (the figure eight symbolizing eternal life and eternity on the side), a small wand, a table depicting a chalice symbolizing knowledge and protection, a five-pointed star, a staff and a sword."
    },
    {
        name: "The Prince Of Asa",
        img: "images/The Prince Of Asa.png",
        description: "The prince of Wands in Tarot means to be creative, enthusiastic, self-confident and courageous. This card also considers spiritual concepts. Depending on the accompanying cards, the Wands Page can sometimes hint that the whole situation is immersed in the spirit of excitement and adventure. Again, depending on the circumstances, the Asa Page may also suggest the presence of a young adult at heart or a child with whom you will interact. Such interactions may involve independence, high energy, risky behavior, or shared enthusiasm."
    },
    {
        name: "The Saint",
        img: "images/The Saint.png",
        description: "The Saint card in the Tarot symbolizes sexuality, mystery and general higher power. The basic symbols of this card are blue, white and black colors, pomegranates, an Isis lunar crown, veil, solar cross, crescent and columns. The 'B' stands for Boaz: negation and seriousness. The 'J' stands for Jachin: the beginning and mercy. The scroll is inscribed with the word 'Torah', the last letter of which does not appear either for the Jewish Torah or for the anagram of the Tarot."
    },
    {
        name: "The Sun",
        img: "images/The Sun.png",
        description: "The solar card in the Tarot radiates positive energy. This is one of the most optimistic cards that shows enthusiasm and joie de vivre."
    },
    {
        name: "The Talisman Duo",
        img: "images/The Talisman Duo.png",
        description: "The duo of talismans in the Tarot means flexibility, fun and juggling. The meaning of the talisman duo in a Tarot reading is high energy. The card symbolizes fun and good times, but beware of overstimulation. The figure on the card is a young man juggling and dancing at the same time. Two five-pointed stars in the infinity loop show that he is able to handle all problems and eliminate earthly worries. He can easily control the ups and downs of his life, as symbolized by two ships riding the waves in the background."
    },
    {
        name: "The Talisman King",
        img: "images/The Talisman King.png",
        description: "The talisman king in the Tarot represents being enterprising, skillful, reliable, supportive and stable. The talisman king is a combination of the positive earth energy of his team and the outward focus of the King. The meaning of the talisman king in a Tarot reading is that he succeeds in everything he wants to do; he actually has the 'golden touch' attributed to King Midas. He is the jack of trades and the master of everything he does. He is competent, enterprising, skillful and can benefit from a wide range of practical knowledge. Best of all, he is reliable and acts with extreme responsibility. Others trust him and give their support when necessary. He pursues all his goals firmly and resolutely, gives stability to all situations and is resolute until he succeeds."
    },
    {
        name: "The Talisman Octet",
        img: "images/The Talisman Octet.png",
        description: "When the talisman octet in a Tarot reading lies flat, it means that it's time to plunge into work or project and give it to all of you. He may not even be a professional. This card can also indicate that it's time to focus and focus on a personal goal. Octet Pentas are a sign that if you put it to work, the result will be satisfactory and very fruitful. It's time to be meticulous and correct mistakes. Maybe you need to develop a new skill or learn something new. This card is a sign that your extraordinary efforts will lead to success."
    },
    {
        name: "The Talisman Queen",
        img: "images/The Talisman Queen.png",
        description: "The queen of talismans in the Tarot means nurture, bewilderment, resourcefulness and reliability. The meaning in the talisman queen tarot is that something needs to be done, and she is here to help make it happen. The talisman queen is a combination of her team's positive earth energy and a Queen's inward focus. He is warm and generous and takes great pleasure in caring for others and feeding them. Sensible and practical, it ensures that everyone is happy and safe. The talisman queen is always ready to calm your fears and share all your troubles."
    },
    {
        name: "The Talisman Six",
        img: "images/The Talisman Six.png",
        description: "The six of talismans in the Tarot represent the possession or not of resources, knowledge and power. The six talismans are difficult to make sense of in a Tarot reading. It Decays between the extremes of having and not having. The image on the talisman six card is a rich person giving money to one beggar, while another is waiting for his turn. The person holds the scales of justice as if deciding who will receive money and who will not. The picture is very clear about who is responsible and who is not, who is and who is not."
    },
    {
        name: "The Talisman Trio",
        img: "images/The Talisman Trio.png",
        description: "The triad of talismans in the Tarot means teamwork, planning and competence. The meaning of the talisman triad in Tarot reading is about overcoming the impossible. This card is one of the three cards in the Tarot deck that focus on the group, the others are the Triad of Cups and the Hieropt of the Major Arcana."
    },
    {
        name: "The Talismanic Knight",
        img: "images/The Talismanic Knight.png",
        description: "The talismanic knight in the Tarot represents being immutable, cautious, thorough, realistic and hardworking. The meaning of the Knight of the Talisman in a Tarot reading is that, on the one hand, the Knight of the Talisman is hardworking, with tremendous endurance and high dedication, and on the other, he is stubborn in small details and stubborn, admit that he is wrong. The talisman knight is prudent and never goes to waste. He is inflexible, does not like changes of any kind and can sometimes take the bloodiest view. A pessimist, although he can call himself a realist."
    },
    {
        name: "The World",
        img: "images/The World.png",
        description: "The world card in the Tarot is a wonderful card that represents a successful outcome after all aspects have been explained. Things have come full circle. A journey has been completed and a long-term project has come to an end. The basic symbols of this card are a dancing woman or hermaphrodite, a wreath in the form of a yoni (almond-shaped circle), two wands, an angel, an eagle, a lion and a bull."
    },
    {
        name: "Trio Of Swords.png",
        img: "images/Trio Of Swords.png",
        description: "The Three Swords in the Tarot represent heartbreak, loneliness and betrayal. Three of the Swords in meaning in Tarot reading can be heartbreak, real grief or seemingly endless sadness."
    },
    {
        name: "Wand Duo",
        img: "images/Wand Duo.png",
        description: "Two of the Wands in the Tarot represent personal strength, boldness and originality. It stands for individual courage and greatness. The Two Wands that touch the same energy source as the Major Arcana Wizard mean personal power brought to the world. Two Wands also mean planning and preparation."
    },
    {
        name: "Wand Quintet",
        img: "images/Wand Quintet.png",
        description: "The Five of Wands in the Tarot mean frictions, strife, difficulties, disagreements, competition and difficulties. It doesn't seem like anything is flowing smoothly and it's as if everything is against you. It seems that nothing is coordinated, everyone is working at cross purposes, and the trip will become even more buffered. Of course, these are all small and irritating obstacles, and there are no big blocks. Apart from difficulties and disagreements, the card also represents competition. Competition is good in the right conditions. It generates courage to do the best."
    },
    {
        name: "Wheel Of Fate",
        img: "images/Wheel Of Fate.png",
        description: "In the Tarot, the wheel of fate card symbolizes fate, unexpected events and progress. This card reminds you that good luck is just as easy as bad, and everything is in cycles. You may be on top of the world now, but you can easily move down. Change is a constant and inevitable part of life, and nothing lasts forever. The basic symbols of this card are a wheel rotating clockwise with figures or monsters rising or falling on it. Some cards feature a sphinx on top of the wheel, while some cards have alchemical symbols and Hebrew letters."
    },
    {
        name: "Nine Of Swords",
        img: "images/Nine Of Swords.png",
        description: "The Nine Swords in the Tarot mean anxiety, guilt and anguish. Unlike the Triple Sword, where people on the outside are responsible for suffering and betrayal, it represents the pain and suffering that we generate within ourselves. In the Nine Swords Tarot reading, the meaning is usually one of fear and anxiety."
    },
    {
        name: "Prince Of Swords",
        img: "images/Prince Of Swords.png",
        description: "The prince of swords in the Tarot means being truthful and fair, using your mind and having courage. The Swords Page sometimes represents a child or a young adult with a heart."
    },
    {
        name: "Trio Of Wands",
        img: "images/Trio Of Wands.png",
        description: "The Three Wands in a Tarot reading mean discovery, foresight, leadership and opportunity."
    },
    {
        name: "Wand Quartet",
        img: "images/Wand Quartet.png",
        description: "The Quartet of Wands in the Tarot means celebration, freedom and excitement. It's all about prosperity and partnerships and represents events that generate excitement. Excitement and celebration can be unexpected and surprise. Sometimes, the appearance of the Four of Wands at a reading represents a planned celebration, such as a wedding or anniversary. These events and celebrations leave you with a feeling of joy. The excitement was the excitement of the little boy, who is still present in all adults, just waiting to get out. The excitement of the child after seeing a birthday cake lit with candles, the child is waiting to turn the roller coaster. All Four of the wands mean freedom, which can take many forms."
    }
]

cardArray.sort(() => 0.5 - Math.random())
const step1 = document.querySelector("#step1")
const cardsDisplay = document.querySelector("#cards")
const step2 = document.querySelector("#step2")
const step3 = document.querySelector("#step3")
const resultDisplay = document.querySelector("#result")
const startTarotButton = document.querySelector("#startButton")
let cardsChoisen = []
let cardsChoisenId = []
let cardsChoisenImage = []
let cardsChoisenDescription = []
const cardsWon = []

cardsDisplay.classList.add("hide")
step2.classList.add("hide")
step3.classList.add("hide")
startTarotButton.addEventListener("click", startTarot)

function startTarot(){
    step1.classList.add("hide")
    cardsDisplay.classList.remove("hide")
}

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("data-id", i)
        card.setAttribute("class", "card")
        card.setAttribute("src", "images/cardback.jpg")
        card.addEventListener("click", choiceCard)
        cardsDisplay.appendChild(card)
    }
}

createBoard()

function choiceCard(){
    let cardId = this.getAttribute("data-id")
    if(cardsChoisenId.includes(cardId)){
        alert("The card has already been Selected. Choose another card.")
    }else{
        cardsChoisen.push(cardArray[cardId].name)
        cardsChoisenId.push(cardId)
        cardsChoisenImage.push(cardArray[cardId].img)
        cardsChoisenDescription.push(cardArray[cardId].description)
        this.setAttribute("src", cardArray[cardId].img)
        if(cardsChoisen.length === 3){
            setTimeout(showStep2, 1000)
        }
    }
}

function showStep2(){
    cardsDisplay.classList.add("hide")
    step2.classList.remove("hide")
    step2.innerHTML = "You chose 3 cards. Let's remind again;<br>The 1nd card is about your background and your approach to the subject.<br>The 2nd card is your approach and perspective to the subject right now.<br>The 3rd card will be related to your thoughts and behaviors related to this topic in the future.<br><br>"
    const fortuneButton = document.createElement("button")
    fortuneButton.setAttribute("id", "fortuneButton")
    fortuneButton.setAttribute("class", "fortuneButton")
    fortuneButton.addEventListener("click", fortune)
    step2.appendChild(fortuneButton)
    fortuneButton.innerHTML = "Read My Tarot!"
}

function fortune(){
    step2.classList.add("hide")
    step3.classList.remove("hide")
    for(let i=0; i<cardsChoisen.length; i++){
        const choicenCardDiv = document.createElement("div")
        const choicenCardImage = document.createElement("img")
        const choicenCardTitle = document.createElement("h1")
        const choicenCardName = document.createElement("h2")
        const choicenCardDescription = document.createElement("p")
        choicenCardDiv.setAttribute("id", cardsChoisenId[i])
        choicenCardDiv.setAttribute("class", "step3CardDiv")
        step3.appendChild(choicenCardDiv)

        choicenCardTitle.setAttribute("class", "choicenCardTitle")
        choicenCardDiv.appendChild(choicenCardTitle)
        if(i == 0){
            choicenCardTitle.innerHTML = "Past"
        }else if(i == 1){
            choicenCardTitle.innerHTML = "Now"
        }else if(i == 2){
            choicenCardTitle.innerHTML = "Future"
        }
        
        choicenCardImage.setAttribute("src", cardsChoisenImage[i])
        choicenCardImage.setAttribute("class", "card")
        choicenCardDiv.appendChild(choicenCardImage)

        choicenCardName.setAttribute("class", "choicenCardName")
        choicenCardDiv.appendChild(choicenCardName)
        choicenCardName.innerHTML = cardsChoisen[i]
        choicenCardDescription.setAttribute("class", "choicenCardDescription")
        choicenCardDiv.appendChild(choicenCardDescription)
        choicenCardDescription.innerHTML = cardsChoisenDescription[i]
    }
}