DROP TABLE IF EXISTS fact_table;
CREATE TABLE fact_table (
  id         INT AUTO_INCREMENT NOT NULL,
  fact     VARCHAR(300) NOT NULL,
  topic      VARCHAR(128) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO fact_table 
  (fact, topic) 
VALUES
  ("Despite the fact that there are similarities between JavaScript and Java, including language name, respective standard libraries and syntax, these two languages are distinct and differ significantly in design.", 
  "JavaScript"),
  (" Like all other scripting languages, arrays and objects can be created with a brief shortcut syntax. These literals structure the basis of JSON data format.",
  "JavaScript"),
("JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.","JavaScript"),
("JavaScript took just 10 days to develop.JavaScript was invented in 1995 by Brendan Eich for use with the Netscape 2 browser. ","JavaScript"),
("JavaScript was probably named after Java.JavaScript is about as similar to Java as a hamburger is similar to ham. But, there used to be support for running Java in the browser by way of Java “applets”.","JavaScript"),
("NaN(Not a Number) counts as a number.Yes you heard that right","JavaScript"),
("null is an object. Sound odd! Right? But this is fact.","JavaScript"),
("The heart of a shrimp is located in its head.","Animals"),
("A snail can sleep for three years.","Animals"),
("The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.","Animals"),
("Slugs have four noses","Animals"),
("It takes a sloth two weeks to digest its food.","Animals"),
("Nearly three percent of the ice in Antarctic glaciers is penguin urine.","Animals"),
("A cow gives nearly 200,000 glasses of milk in a lifetime.","Animals"),
("Kangaroos can not fart.","Animals"),
("Around 50 percent of orangutans have fractured bones, due to falling out of trees on a regular basis.","Animals"),
("Frogs cannot vomit. If one absolutely has to, then it will vomit its entire stomach.","Animals"),
("A human brain operates on about 15 watts.","Animals"),
("A single strand of spider silk is thinner than a human hair, but also five times stronger than steel of the same width. A rope just 2 inches thick could reportedly stop a Boeing 747.","Animals"),
("Modern-day scientists believe Alexander the Great suffered from the neurological disorder Guillain-Barré Syndrome.They believe that when he “died” he was actually just paralyzed and mentally aware.","History"),
("In the Ancient Olympics, athletes performed naked.The athletes did this to imitate the Gods, but also to help them easily clear toxins from their skin through sweating after each attempt at a sport.","History"),
("Julius Caesar was stabbed 23 times.","History"),
("Rasputin survived being poisoned and being shot .Until they shot him in the face of course","History"),
("Cleopatra’s reign was closer to the moon landings than the Great Pyramid being built.Cleopatra reigned from 51 BC to 30 BC, roughly 2,500 years after the Great Pyramid of Giza was built (between roughly 2580 BC – 2560 BC), and roughly 2,000 years before the first lunar landings in 1969.","History"),
("The saying “fly off the handle” originates from the 1800s.It’s a saying that refers to cheap axe-heads flying off their handles when swung backward before a chop.","History"),
("Captain Morgan was a real guy.The face of the much-loved rum brand was a Welsh privateer who fought against the Spanish alongside the English in the Caribbean.His full name was Sir Henry Morgan and was knighted by King Charles II.","History"),
("It’s fair to say that Thomas Edison was one of the world’s most notorious intellectual property thieves.Of the 1,093 things he smashed a patent on, he stole near enough most of them off real geniuses like Nikola Tesla, Wilhelm Rontgen, and Joseph Swan","History"),
("Roman Emperor Caligula made one of his favorite horses a senator.He was infamous for his brutality and madness. Caligula fed criminals to animals and had conversations with the moon.","History"),
("Iceland has the world’s oldest parliament in history.Called the Althing, it was established in 930 and has stayed as the acting parliament of Iceland since then.","History"),
("46 BC was 445 days long and is the longest year in human history.Nicknamed the annus confusionis, or “year of confusion”, this year had two extra leap months inserted by Julius Caesar.This was in order to make his newly-formed Julian Calendar match up with the seasonal year.","History"),
("Due to medicine not being so great, comatose people were sometimes mistakenly buried alive.In order to counteract these potential blunders, people were buried with little bells above ground. These bells were attached to a string, which went into the coffin.","History")