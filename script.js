const quizzes = {
    english: [
        { question: "Which word is used to introduce a relative clause?", options: ["And", "Which/That", "But"], answer: "Which/That" },
        { question: "What type of clauses are introduced by 'which' or 'that'?", options: ["Adverbial clauses", "Relative clauses", "Noun clauses"], answer: "Relative clauses" },
        { question: "In the sentence 'This is the book which I bought yesterday,' what does 'which' refer to?", options: ["The book", "The action of buying", "Yesterday"], answer: "The book" },
        { question: "Which sentence correctly uses 'that' in a relative clause?", options: ["This is the house that Mr. Bala built last year.", "This is the house which Mr. Bala built last year.", "This is the house where Mr. Bala built last year."], answer: "This is the house that Mr. Bala built last year." },
        { question: "How can you join 'This is the pen' and 'Mary bought the pen last week' using 'which'?", options: ["This is the pen which Mary bought it last week.", "This is the pen which Mary bought last week.", "This is the pen that Mary bought last week."], answer: "This is the pen which Mary bought last week." },
        { question: "Where do adverbial phrases of time usually go in a sentence?", options: ["At the beginning", "At the end", "In the middle"], answer: "At the end" },
        { question: "Which sentence demonstrates an adverbial phrase at the beginning?", options: ["We heard a loud noise last night.", "Last night, we heard a loud noise.", "We heard a loud noise."], answer: "Last night, we heard a loud noise." },
        { question: "Rewrite 'The Sun and the Water were great friends many years ago' with the adverbial phrase at the beginning.", options: ["Many years ago, the Sun and the Water were great friends.", "The Sun and the Water were great friends many years ago.", "The Sun and the Water many years ago were great friends."], answer: "Many years ago, the Sun and the Water were great friends." },
        { question: "Which sentence has the adverbial phrase in the initial position?", options: ["She sweeps the market every Saturday.", "Every Saturday, she sweeps the market.", "She sweeps the market."], answer: "Every Saturday, she sweeps the market." },
        { question: "Rewrite 'She received an award last month' with the adverbial phrase at the beginning.", options: ["She received an award last month.", "Last month, she received an award.", "She last month received an award."], answer: "Last month, she received an award." },
        { question: "Which conjunction is used to indicate something happening immediately after another event?", options: ["Until", "As soon as", "Before"], answer: "As soon as" },
        { question: "Which conjunction is used to indicate something happening at a particular time?", options: ["Immediately", "When", "After"], answer: "When" },
        { question: "Complete the sentence: 'As soon as he arrived, ________.'", options: ["He left.", "He started working.", "He will arrive."], answer: "He started working." },
        { question: "Which conjunction indicates something happening before another event?", options: ["After", "Before", "Until"], answer: "Before" },
        { question: "Which sentence uses 'when' correctly?", options: ["When she finished her homework, she went out to play.", "When she was finishing her homework, she went out to play.", "When she will finish her homework, she will go out to play."], answer: "When she finished her homework, she went out to play." },
        { question: "What is the correct tag for the sentence 'He isn't young, ________?'", options: ["isn't he", "is he", "isn't it"], answer: "is he" },
        { question: "Which sentence has the correct negative statement followed by a positive tag?", options: ["They aren't going, are they?", "They aren't going, aren't they?", "They aren't going, did they?"], answer: "They aren't going, are they?" },
        { question: "Supply the correct tag for 'She hasn't eaten, ________?'", options: ["hasn't she", "has she", "didn't she"], answer: "has she" },
        { question: "Which sentence demonstrates the correct use of a question tag?", options: ["You don't like it, do you?", "You don't like it, don't you?", "You don't like it, like you?"], answer: "You don't like it, do you?" },
        { question: "What is the correct tag for 'They aren't poor, ________?'", options: ["aren't they", "are they", "aren't it"], answer: "are they" },
        { question: "Who asked the first time if it would be safe for Water to come into the house?", options: ["The Moon", "The Sun", "The Stars"], answer: "The Sun" },
        { question: "How many times did the Sun ask if it would be safe for Water to come into his house?", options: ["Once", "Twice", "Three times"], answer: "Twice" },
        { question: "What happened when the Water reached the level of the knee?", options: ["The Sun and Moon got scared.", "The Sun and Moon allowed more people to come in.", "The Sun and Moon stopped Water from coming in."], answer: "The Sun and Moon got scared." },
        { question: "Who enjoyed watching butterflies?", options: ["The children", "The family", "The adults"], answer: "The children" },
        { question: "Did the family ride horses?", options: ["Yes", "No", "Maybe"], answer: "Yes" },
        { question: "Which conjunction is used to indicate something happening up to a particular point in time and then stopping?", options: ["When", "Until", "Before"], answer: "Until" },
        { question: "Which conjunction is used to indicate something happening without delay?", options: ["As soon as", "Immediately", "After"], answer: "As soon as" },
        { question: "Which sentence uses 'before' correctly?", options: ["Before he arrived, he called.", "Before he arrives, he called.", "Before he will arrive, he called."], answer: "Before he arrived, he called." },
        { question: "Which sentence uses 'after' correctly?", options: ["After he finished his work, he went home.", "After he finishes his work, he went home.", "After he will finish his work, he went home."], answer: "After he finished his work, he went home." },
        { question: "Which sentence uses 'until' correctly?", options: ["Until he finishes his work, he won't leave.", "Until he will finish his work, he won't leave.", "Until he finished his work, he won't leave."], answer: "Until he finishes his work, he won't leave." },
        { question: "Which sound is represented by /eɪ/?", options: ["ai", "ei", "oi"], answer: "ei" },
        { question: "Which sound is represented by /ɔɪ/?", options: ["oi", "ai", "ei"], answer: "oi" },
        { question: "Which sound is represented by /ai/?", options: ["ei", "oi", "ai"], answer: "ai" },
        { question: "Which sound is represented by /ɔː/?", options: ["or", "ar", "er"], answer: "or" },
        { question: "Which sound is represented by /ɜː/?", options: ["er", "ir", "ur"], answer: "er" },
        { question: "Which sentence uses the correct form of the verb in the past tense?", options: ["She runned away.", "She ran away.", "She runs away."], answer: "She ran away." },
        { question: "Which sentence uses the correct form of the verb in the present perfect tense?", options: ["She have eaten.", "She has eaten.", "She ate."], answer: "She has eaten." },
        { question: "Which sentence uses the correct form of the verb in the future tense?", options: ["She will go.", "She goes.", "She went."], answer: "She will go." },
        { question: "Which sentence uses the correct form of the verb in the conditional tense?", options: ["If she goes, she will come back.", "If she went, she will come back.", "If she goes, she came back."], answer: "If she goes, she will come back." },
        { question: "Which sentence uses the correct form of the verb in the passive voice?", options: ["The book was read by her.", "The book reads by her.", "The book was reading by her."], answer: "The book was read by her." },
        { question: "Where did Timmy decide to go for a walk?", options: ["To the market", "To the forest", "To school"], answer: "To the forest" },
        { question: "Why was Timmy interested in going to the forest?", options: ["To meet his friends", "To explore and see new things", "To play football"], answer: "To explore and see new things" },
        { question: "What did Timmy notice while walking through the forest?", options: ["A storm", "Colorful birds and a stream", "A bus stop"], answer: "Colorful birds and a stream" },
        { question: "What animal did Timmy see hopping across the path?", options: ["A squirrel", "A rabbit", "A deer"], answer: "A rabbit" },
        { question: "What did Timmy do after seeing the rabbit?", options: ["Ran back home", "Followed it quietly", "Took a nap"], answer: "Followed it quietly" },
        { question: "What did Timmy discover at the end of his walk with the rabbit?", options: ["A cave", "A hidden garden", "A shop"], answer: "A hidden garden" },
        { question: "How did Timmy feel when he got home?", options: ["Tired and sad", "Happy and refreshed", "Angry and confused"], answer: "Happy and refreshed" },
        { question: "What did Timmy do in the garden?", options: ["Slept for hours", "Sat on a rock and enjoyed the view", "Built a treehouse"], answer: "Sat on a rock and enjoyed the view" },
        { question: "How did Timmy capture the beauty of the garden?", options: ["By drawing it", "By taking pictures with his phone", "By singing a song"], answer: "By taking pictures with his phone" },
        { question: "What time of day did Timmy’s adventure happen?", options: ["At night", "In the morning", "In the evening"], answer: "In the morning" }
    ],
    citizenship: [
        { question: "What is the primary reason why personal hygiene is important?", options: ["To maintain cleanliness and reduce the chances of falling sick.", "To increase self-esteem by looking good.", "To make it easier to play sports."], answer: "To maintain cleanliness and reduce the chances of falling sick." },
        { question: "How should hair be washed according to the text?", options: ["Regularly with water and soap.", "Once a month with shampoo only.", "Only when it looks visibly dirty."], answer: "Regularly with water and soap." },
        { question: "What is the recommended practice for cleaning the eyes?", options: ["Use clean water to wash the eyes.", "Use dirty handkerchiefs to clean the eyes.", "Apply chemicals directly to the eyes."], answer: "Use clean water to wash the eyes." },
        { question: "Which of the following is NOT a proper way to care for the nose?", options: ["Avoid putting foreign objects like beads into the nose.", "Pluck out or cut the hair in the nose.", "Use a clean handkerchief to clean the nose."], answer: "Pluck out or cut the hair in the nose." },
        { question: "How often should teeth and tongue be brushed?", options: ["At least twice a day.", "Once a week.", "Only after eating sugary foods."], answer: "At least twice a day." },
        { question: "What should you do if you have a problem with your ears?", options: ["Visit a doctor.", "Try to remove the problem yourself.", "Ignore the issue until it gets worse."], answer: "Visit a doctor." },
        { question: "Why is it important to keep your feet clean?", options: ["To prevent diseases caused by dirt and germs.", "To make them look shiny.", "To avoid getting sunburned."], answer: "To prevent diseases caused by dirt and germs." },
        { question: "How should you care for your skin?", options: ["Wash the skin frequently with clean water and soap.", "Rub oil into the skin daily.", "Avoid washing the skin to keep it naturally oily."], answer: "Wash the skin frequently with clean water and soap." },
        { question: "What is the recommended practice for caring for your hands?", options: ["Wash your hands before and after meals.", "Only wash your hands when they look dirty.", "Use harsh chemicals to clean your hands."], answer: "Wash your hands before and after meals." },
        { question: "Why is it important to maintain personal hygiene?", options: ["It helps protect your body from illness and promotes overall health.", "It makes you look more attractive.", "It is required by law."], answer: "It helps protect your body from illness and promotes overall health." },
        { question: "What is the primary purpose of a first aid box?", options: ["To provide basic medical supplies for minor injuries and emergencies.", "To store decorative items in case of an emergency.", "To keep food and drinks for long trips."], answer: "To provide basic medical supplies for minor injuries and emergencies." },
        { question: "Which of the following is NOT typically found in a first aid kit?", options: ["Bandages", "Chocolate bars", "Scissors"], answer: "Chocolate bars" },
        { question: "What is the use of cotton wool in a first aid kit?", options: ["For cleaning and covering wounds.", "For making a pillow.", "For decoration."], answer: "For cleaning and covering wounds." },
        { question: "Which item in a first aid kit is used to protect the fingers from infection when handling antiseptic solutions?", options: ["Gloves", "Plaster", "Safety pins"], answer: "Gloves" },
        { question: "What is the function of a thermometer in a first aid kit?", options: ["To check the body temperature of an injured person.", "To measure the length of cuts.", "To determine the color of bruises."], answer: "To check the body temperature of an injured person." },
        { question: "Which of the following is NOT a component of a first aid kit?", options: ["Splints", "Razor blades", "Candy bars"], answer: "Razor blades" },
        { question: "What is the role of safety pins in a first aid kit?", options: ["To hold bandages in place.", "To cut through clothing.", "To mark important documents."], answer: "To hold bandages in place." },
        { question: "Which material in a first aid kit is used for cutting plaster or bandages?", options: ["Scissors", "Cotton wool", "Cold compresses"], answer: "Scissors" },
        { question: "What is the role of medication in a first aid kit?", options: ["To treat pain, infections, and other symptoms.", "To decorate the kit.", "To make the kit heavier."], answer: "To treat pain, infections, and other symptoms." },
        { question: "Which of the following is NOT a supporting object typically found in a first aid kit?", options: ["Chair", "Stretcher", "Bed blanket"], answer: "Chair" },
        { question: "What is the primary goal of safety education?", options: ["To reduce the risk of injury, illness, and accidents.", "To teach students how to decorate their homes.", "To encourage risky behaviors."], answer: "To reduce the risk of injury, illness, and accidents." },
        { question: "Which of the following is NOT a cause of accidents?", options: ["Lack of skills", "Proper training", "Fatigue"], answer: "Proper training" },
        { question: "What is the role of physical educators during sports activities?", options: ["To provide supervision and minimize injuries.", "To participate in the activities themselves.", "To ensure that no one watches the activities."], answer: "To provide supervision and minimize injuries." },
        { question: "Why should fire extinguishers be placed in every building?", options: ["To prevent and control fires.", "To decorate the building.", "To store extra supplies."], answer: "To prevent and control fires." },
        { question: "What is the purpose of road traffic lights?", options: ["To direct and control the flow of traffic.", "To indicate when it's safe to swim.", "To show the time of day."], answer: "To direct and control the flow of traffic." },
        { question: "Which of the following is an example of unsafe behavior?", options: ["Driving under the influence of alcohol.", "Following traffic signs.", "Wearing a seatbelt while driving."], answer: "Driving under the influence of alcohol." },
        { question: "Why should electrical appliances be disconnected immediately after use?", options: ["To prevent electrical hazards and save energy.", "To make them last longer.", "To keep them warm."], answer: "To prevent electrical hazards and save energy." },
        { question: "What is the importance of government legislation in ensuring safety?", options: ["To regulate the use of building materials and practices.", "To allow unrestricted construction.", "To increase taxes on building materials."], answer: "To regulate the use of building materials and practices." },
        { question: "Which of the following is a road safety measure?", options: ["Maintaining clear road signs.", "Removing all road signs.", "Ignoring traffic rules."], answer: "Maintaining clear road signs." },
        { question: "Why should vehicles be maintained regularly?", options: ["To ensure they are safe and reliable.", "To make them look shiny.", "To increase fuel consumption."], answer: "To ensure they are safe and reliable." },
        { question: "What is a general crash?", options: ["An accident that occurs within or outside the home.", "A crash involving only vehicles.", "A crash that happens in space."], answer: "An accident that occurs within or outside the home." },
        { question: "Which of the following is an example of a general crash?", options: ["Collapse of a building due to faulty construction.", "A car hitting another car.", "A plane crashing into the ocean."], answer: "Collapse of a building due to faulty construction." },
        { question: "What is a road traffic crash also known as?", options: ["Automobile accident, road traffic collision, or car smash.", "General crash.", "Space crash."], answer: "Automobile accident, road traffic collision, or car smash." },
        { question: "Which of the following scenarios describes a road traffic crash?", options: ["A vehicle collides with another vehicle.", "A tree falls on a building.", "A house collapses due to faulty construction."], answer: "A vehicle collides with another vehicle." },
        { question: "What should be done before taking any medicine?", options: ["Follow the doctor's prescription strictly.", "Share the medicine with friends.", "Ignore the instructions on the leaflet."], answer: "Follow the doctor's prescription strictly." },
        { question: "Why is it important to check the manufacture and expiry date of a medicine?", options: ["To ensure the medicine is safe and effective.", "To make the medicine look more appealing.", "To save money by using expired medicines."], answer: "To ensure the medicine is safe and effective." },
        { question: "What is medicine vigilance also known as?", options: ["Drug safety.", "Vehicle safety.", "Road safety."], answer: "Drug safety." },
        { question: "Which of the following is an adverse reaction to medicine?", options: ["Frequent vomiting.", "Feeling very happy.", "Improved health."], answer: "Frequent vomiting." },
        { question: "What should you do if someone experiences an adverse reaction to medicine?", options: ["Rush the person to a nearby hospital.", "Ignore the symptoms and wait for them to go away.", "Give the person more medicine."], answer: "Rush the person to a nearby hospital." },
        { question: "Which of the following is NOT a type of road traffic crash?", options: ["A vehicle hits a pedestrian.", "Trees falling on buildings.", "A vehicle collides with another vehicle."], answer: "Trees falling on buildings." },
        { question: "What is the primary purpose of safety measures in schools?", options: ["To protect students from accidents and injuries.", "To decorate the school premises.", "To increase the workload of teachers."], answer: "To protect students from accidents and injuries." },
        { question: "Which of the following is NOT a common cause of accidents at home?", options: ["Tripping over loose wires.", "Playing safely in designated areas.", "Climbing on unstable furniture."], answer: "Playing safely in designated areas." },
        { question: "What is the role of safety education in reducing accidents?", options: ["To teach individuals how to identify and avoid hazards.", "To make people feel anxious about potential dangers.", "To discourage outdoor activities."], answer: "To teach individuals how to identify and avoid hazards." },
        { question: "Which of the following is a key component of a well-maintained first aid kit?", options: ["Bandages and antiseptic solutions.", "Expired medications.", "Decorative items."], answer: "Bandages and antiseptic solutions." },
        { question: "What is the significance of wearing a helmet while riding a bicycle?", options: ["To protect the head in case of an accident.", "To make the rider look stylish.", "To carry additional items."], answer: "To protect the head in case of an accident." },
        { question: "Which of the following is NOT a recommended practice for preventing road accidents?", options: ["Obeying traffic rules.", "Distracted driving (e.g., using a phone).", "Wearing seatbelts."], answer: "Distracted driving (e.g., using a phone)." },
        { question: "What is the purpose of conducting regular safety drills in schools?", options: ["To prepare students for emergencies.", "To waste time.", "To entertain students."], answer: "To prepare students for emergencies." },
        { question: "Which of the following is an example of unsafe behavior at home?", options: ["Leaving sharp objects within reach of children.", "Keeping medicines locked away.", "Using nonslip mats in the bathroom."], answer: "Leaving sharp objects within reach of children." },
        { question: "What is the role of safety signs in public places?", options: ["To warn people of potential hazards.", "To decorate the area.", "To confuse visitors."], answer: "To warn people of potential hazards." },
        { question: "Why is it important to follow safety guidelines in sports activities?", options: ["To prevent injuries and ensure fair play.", "To make the game less exciting.", "To restrict participation."], answer: "To prevent injuries and ensure fair play." }
    ],
basic_science: [
    { question: "What is the primary reason why personal hygiene is important?", options: ["To maintain cleanliness and reduce the chances of falling sick.", "To increase self-esteem by looking good.", "To make it easier to play sports."], answer: "To maintain cleanliness and reduce the chances of falling sick." },
    { question: "How should hair be washed according to the text?", options: ["Regularly with water and soap.", "Once a month with shampoo only.", "Only when it looks visibly dirty."], answer: "Regularly with water and soap." },
    { question: "What is the recommended practice for cleaning the eyes?", options: ["Use clean water to wash the eyes.", "Use dirty handkerchiefs to clean the eyes.", "Apply chemicals directly to the eyes."], answer: "Use clean water to wash the eyes." },
    { question: "Which of the following is NOT a proper way to care for the nose?", options: ["Avoid putting foreign objects like beads into the nose.", "Pluck out or cut the hair in the nose.", "Use a clean handkerchief to clean the nose."], answer: "Pluck out or cut the hair in the nose." },
    { question: "How often should teeth and tongue be brushed?", options: ["At least twice a day.", "Once a week.", "Only after eating sugary foods."], answer: "At least twice a day." },
    { question: "What should you do if you have a problem with your ears?", options: ["Visit a doctor.", "Try to remove the problem yourself.", "Ignore the issue until it gets worse."], answer: "Visit a doctor." },
    { question: "Why is it important to keep your feet clean?", options: ["To prevent diseases caused by dirt and germs.", "To make them look shiny.", "To avoid getting sunburned."], answer: "To prevent diseases caused by dirt and germs." },
    { question: "How should you care for your skin?", options: ["Wash the skin frequently with clean water and soap.", "Rub oil into the skin daily.", "Avoid washing the skin to keep it naturally oily."], answer: "Wash the skin frequently with clean water and soap." },
    { question: "What is the recommended practice for caring for your hands?", options: ["Wash your hands before and after meals.", "Only wash your hands when they look dirty.", "Use harsh chemicals to clean your hands."], answer: "Wash your hands before and after meals." },
    { question: "Why is it important to maintain personal hygiene?", options: ["It helps protect your body from illness and promotes overall health.", "It makes you look more attractive.", "It is required by law."], answer: "It helps protect your body from illness and promotes overall health." },
    { question: "What is the primary purpose of a first aid box?", options: ["To provide basic medical supplies for minor injuries and emergencies.", "To store decorative items in case of an emergency.", "To keep food and drinks for long trips."], answer: "To provide basic medical supplies for minor injuries and emergencies." },
    { question: "Which of the following is NOT typically found in a first aid kit?", options: ["Bandages", "Chocolate bars", "Scissors"], answer: "Chocolate bars" },
    { question: "What is the use of cotton wool in a first aid kit?", options: ["For cleaning and covering wounds.", "For making a pillow.", "For decoration."], answer: "For cleaning and covering wounds." },
    { question: "Which item in a first aid kit is used to protect the fingers from infection when handling antiseptic solutions?", options: ["Gloves", "Plaster", "Safety pins"], answer: "Gloves" },
    { question: "What is the function of a thermometer in a first aid kit?", options: ["To check the body temperature of an injured person.", "To measure the length of cuts.", "To determine the color of bruises."], answer: "To check the body temperature of an injured person." },
    { question: "Which of the following is NOT a component of a first aid kit?", options: ["Splints", "Razor blades", "Candy bars"], answer: "Razor blades" },
    { question: "What is the role of safety pins in a first aid kit?", options: ["To hold bandages in place.", "To cut through clothing.", "To mark important documents."], answer: "To hold bandages in place." },
    { question: "Which material in a first aid kit is used for cutting plaster or bandages?", options: ["Scissors", "Cotton wool", "Cold compresses"], answer: "Scissors" },
    { question: "What is the role of medication in a first aid kit?", options: ["To treat pain, infections, and other symptoms.", "To decorate the kit.", "To make the kit heavier."], answer: "To treat pain, infections, and other symptoms." },
    { question: "Which of the following is NOT a supporting object typically found in a first aid kit?", options: ["Chair", "Stretcher", "Bed blanket"], answer: "Chair" },
    { question: "What is the primary goal of safety education?", options: ["To reduce the risk of injury, illness, and accidents.", "To teach students how to decorate their homes.", "To encourage risky behaviors."], answer: "To reduce the risk of injury, illness, and accidents." },
    { question: "Which of the following is NOT a cause of accidents?", options: ["Lack of skills", "Proper training", "Fatigue"], answer: "Proper training" },
    { question: "What is the role of physical educators during sports activities?", options: ["To provide supervision and minimize injuries.", "To participate in the activities themselves.", "To ensure that no one watches the activities."], answer: "To provide supervision and minimize injuries." },
    { question: "Why should fire extinguishers be placed in every building?", options: ["To prevent and control fires.", "To decorate the building.", "To store extra supplies."], answer: "To prevent and control fires." },
    { question: "What is the purpose of road traffic lights?", options: ["To direct and control the flow of traffic.", "To indicate when it's safe to swim.", "To show the time of day."], answer: "To direct and control the flow of traffic." },
    { question: "Which of the following is an example of unsafe behavior?", options: ["Driving under the influence of alcohol.", "Following traffic signs.", "Wearing a seatbelt while driving."], answer: "Driving under the influence of alcohol." },
    { question: "Why should electrical appliances be disconnected immediately after use?", options: ["To prevent electrical hazards and save energy.", "To make them last longer.", "To keep them warm."], answer: "To prevent electrical hazards and save energy." },
    { question: "What is the importance of government legislation in ensuring safety?", options: ["To regulate the use of building materials and practices.", "To allow unrestricted construction.", "To increase taxes on building materials."], answer: "To regulate the use of building materials and practices." },
    { question: "Which of the following is a road safety measure?", options: ["Maintaining clear road signs.", "Removing all road signs.", "Ignoring traffic rules."], answer: "Maintaining clear road signs." },
    { question: "Why should vehicles be maintained regularly?", options: ["To ensure they are safe and reliable.", "To make them look shiny.", "To increase fuel consumption."], answer: "To ensure they are safe and reliable." },
    { question: "What is a general crash?", options: ["An accident that occurs within or outside the home.", "A crash involving only vehicles.", "A crash that happens in space."], answer: "An accident that occurs within or outside the home." },
    { question: "Which of the following is an example of a general crash?", options: ["Collapse of a building due to faulty construction.", "A car hitting another car.", "A plane crashing into the ocean."], answer: "Collapse of a building due to faulty construction." },
    { question: "What is a road traffic crash also known as?", options: ["Automobile accident, road traffic collision, or car smash.", "General crash.", "Space crash."], answer: "Automobile accident, road traffic collision, or car smash." },
    { question: "Which of the following scenarios describes a road traffic crash?", options: ["A vehicle collides with another vehicle.", "A tree falls on a building.", "A house collapses due to faulty construction."], answer: "A vehicle collides with another vehicle." },
    { question: "What should be done before taking any medicine?", options: ["Follow the doctor's prescription strictly.", "Share the medicine with friends.", "Ignore the instructions on the leaflet."], answer: "Follow the doctor's prescription strictly." },
    { question: "Why is it important to check the manufacture and expiry date of a medicine?", options: ["To ensure the medicine is safe and effective.", "To make the medicine look more appealing.", "To save money by using expired medicines."], answer: "To ensure the medicine is safe and effective." },
    { question: "What is medicine vigilance also known as?", options: ["Drug safety.", "Vehicle safety.", "Road safety."], answer: "Drug safety." },
    { question: "Which of the following is an adverse reaction to medicine?", options: ["Frequent vomiting.", "Feeling very happy.", "Improved health."], answer: "Frequent vomiting." },
    { question: "What should you do if someone experiences an adverse reaction to medicine?", options: ["Rush the person to a nearby hospital.", "Ignore the symptoms and wait for them to go away.", "Give the person more medicine."], answer: "Rush the person to a nearby hospital." },
    { question: "Which of the following is NOT a type of road traffic crash?", options: ["A vehicle hits a pedestrian.", "Trees falling on buildings.", "A vehicle collides with another vehicle."], answer: "Trees falling on buildings." },
    { question: "What is the primary purpose of safety measures in schools?", options: ["To protect students from accidents and injuries.", "To decorate the school premises.", "To increase the workload of teachers."], answer: "To protect students from accidents and injuries." },
    { question: "Which of the following is NOT a common cause of accidents at home?", options: ["Tripping over loose wires.", "Playing safely in designated areas.", "Climbing on unstable furniture."], answer: "Playing safely in designated areas." },
    { question: "What is the role of safety education in reducing accidents?", options: ["To teach individuals how to identify and avoid hazards.", "To make people feel anxious about potential dangers.", "To discourage outdoor activities."], answer: "To teach individuals how to identify and avoid hazards." },
    { question: "Which of the following is a key component of a well-maintained first aid kit?", options: ["Bandages and antiseptic solutions.", "Expired medications.", "Decorative items."], answer: "Bandages and antiseptic solutions." },
    { question: "What is the significance of wearing a helmet while riding a bicycle?", options: ["To protect the head in case of an accident.", "To make the rider look stylish.", "To carry additional items."], answer: "To protect the head in case of an accident." },
    { question: "Which of the following is NOT a recommended practice for preventing road accidents?", options: ["Obeying traffic rules.", "Distracted driving (e.g., using a phone).", "Wearing seatbelts."], answer: "Distracted driving (e.g., using a phone)." },
    { question: "What is the purpose of conducting regular safety drills in schools?", options: ["To prepare students for emergencies.", "To waste time.", "To entertain students."], answer: "To prepare students for emergencies." },
    { question: "Which of the following is an example of unsafe behavior at home?", options: ["Leaving sharp objects within reach of children.", "Keeping medicines locked away.", "Using nonslip mats in the bathroom."], answer: "Leaving sharp objects within reach of children." },
    { question: "What is the role of safety signs in public places?", options: ["To warn people of potential hazards.", "To decorate the area.", "To confuse visitors."], answer: "To warn people of potential hazards." },
    { question: "Why is it important to follow safety guidelines in sports activities?", options: ["To prevent injuries and ensure fair play.", "To make the game less exciting.", "To restrict participation."], answer: "To prevent injuries and ensure fair play." },
    { question: "What is the primary reason for personal hygiene?", options: ["To maintain cleanliness and reduce the chances of falling sick.", "To increase self-esteem by looking good.", "To make it easier to play sports."], answer: "To maintain cleanliness and reduce the chances of falling sick." },
    { question: "How should hair be washed?", options: ["Regularly with water and soap.", "Once a month with shampoo only.", "Only when it looks visibly dirty."], answer: "Regularly with water and soap." },
    { question: "What is the recommended practice for cleaning the eyes?", options: ["Use clean water to wash the eyes.", "Use dirty handkerchiefs to clean the eyes.", "Apply chemicals directly to the eyes."], answer: "Use clean water to wash the eyes." },
    { question: "Which is NOT a proper way to care for the nose?", options: ["Avoid putting foreign objects like beads into the nose.", "Pluck out or cut the hair in the nose.", "Use a clean handkerchief to clean the nose."], answer: "Pluck out or cut the hair in the nose." },
    { question: "How often should teeth be brushed?", options: ["At least twice a day.", "Once a week.", "Only after eating sugary foods."], answer: "At least twice a day." },
    { question: "What should you do if you have ear problems?", options: ["Visit a doctor.", "Try to remove the problem yourself.", "Ignore the issue until it gets worse."], answer: "Visit a doctor." },
    { question: "Why keep feet clean?", options: ["To prevent diseases caused by dirt and germs.", "To make them look shiny.", "To avoid getting sunburned."], answer: "To prevent diseases caused by dirt and germs." },
    { question: "How to care for skin?", options: ["Wash the skin frequently with clean water and soap.", "Rub oil into the skin daily.", "Avoid washing the skin to keep it naturally oily."], answer: "Wash the skin frequently with clean water and soap." },
    { question: "Hand hygiene practice:", options: ["Wash hands before and after meals.", "Only when they look dirty.", "Use harsh chemicals."], answer: "Wash hands before and after meals." },
    { question: "Why is personal hygiene important?", options: ["Protects from illness and promotes health.", "Makes you look attractive.", "Required by law."], answer: "Protects from illness and promotes health." },
    { question: "First aid box purpose:", options: ["Provide medical supplies for emergencies.", "Store decorative items.", "Keep food for trips."], answer: "Provide medical supplies for emergencies." },
    { question: "What’s NOT in a first aid kit?", options: ["Bandages", "Chocolate bars", "Scissors"], answer: "Chocolate bars" },
    { question: "Cotton wool’s use in first aid:", options: ["Cleaning/covering wounds.", "Making pillows.", "Decoration."], answer: "Cleaning and covering wounds." },
    { question: "Gloves in first aid:", options: ["Protect fingers from antiseptic.", "Mark documents.", "Cut clothing."], answer: "Protect fingers from infection." }, // Adjusted for clarity
    { question: "Thermometer’s role:", options: ["Check body temperature.", "Measure cut length.", "Determine bruise color."], answer: "Check body temperature." },
    { question: "What’s NOT in a first aid kit?", options: ["Splints", "Razor blades", "Candy bars"], answer: "Razor blades" },
    { question: "Safety pins’ role:", options: ["Hold bandages.", "Cut clothes.", "Mark documents."], answer: "Hold bandages in place." },
    { question: "Scissors’ use in first aid:", options: ["Cut plaster/bandages.", "Decorate kits.", "Make pillow stuffing."], answer: "Cut plaster or bandages." },
    { question: "Medication’s role in first aid:", options: ["Treat pain/infections.", "Decorate kits.", "Increase weight."], answer: "Treat pain, infections, and other symptoms." },
    { question: "What’s NOT in a first aid kit?", options: ["Chair", "Stretcher", "Bed blanket"], answer: "Chair" },
    { question: "Safety education’s goal:", options: ["Reduce injury/accident risks.", "Decorate homes.", "Encourage risks."], answer: "Reduce injury, illness, and accident risks." },
    { question: "Non-accident cause:", options: ["Lack of skills", "Proper training", "Fatigue"], answer: "Proper training" },
    { question: "Physical educators’ role in sports:", options: ["Supervise to prevent injuries.", "Join the activities.", "Ensure no audience."], answer: "Provide supervision and minimize injuries." },
    { question: "Fire extinguishers’ purpose:", options: ["Prevent/control fires.", "Decorate buildings.", "Store supplies."], answer: "Prevent and control fires." },
    { question: "Road traffic lights’ purpose:", options: ["Control traffic flow.", "Indicate swimming time.", "Show time."], answer: "Control traffic flow." },
    { question: "Unsafe behavior example:", options: ["Drunk driving.", "Follow signs.", "Wear seatbelts."], answer: "Drunk driving." },
    { question: "Why disconnect appliances?", options: ["Prevent hazards/save energy.", "Make them last longer.", "Keep warm."], answer: "Prevent electrical hazards and save energy." },
    { question: "Government safety laws’ role:", options: ["Regulate construction materials.", "Allow unrestricted building.", "Increase taxes."], answer: "Regulate construction materials/practices." },
    { question: "Road safety measure:", options: ["Clear road signs.", "Remove signs.", "Ignore rules."], answer: "Maintain clear road signs." },
    { question: "Vehicle maintenance importance:", options: ["Safety and reliability.", "Look shiny.", "Increase fuel use."], answer: "Ensure safety and reliability." },
    { question: "General crash definition:", options: ["Home/outside home accidents.", "Vehicle-only crashes.", "Space crashes."], answer: "Home or outside home accidents." },
    { question: "General crash example:", options: ["Building collapse.", "Car collision.", "Plane crash."], answer: "Building collapse." },
    { question: "Road traffic crash synonyms:", options: ["Auto accident, collision.", "General crash.", "Space crash."], answer: "Auto accident, collision, or car smash." },
    { question: "Road traffic crash example:", options: ["Vehicle collision.", "Tree on building.", "House collapse."], answer: "Vehicle collision." },
    { question: "Pre-medicine steps:", options: ["Follow doctor’s orders.", "Share with friends.", "Ignore instructions."], answer: "Follow doctor’s prescription." },
    { question: "Check medicine dates to:", options: ["Ensure safety/effectiveness.", "Make it look nice.", "Use expired meds."], answer: "Ensure safety and effectiveness." },
    { question: "Medicine vigilance term:", options: ["Drug safety.", "Vehicle safety.", "Road safety."], answer: "Drug safety." },
    { question: "Adverse drug reaction:", options: ["Frequent vomiting.", "Feeling happy.", "Improved health."], answer: "Frequent vomiting." },
    { question: "Adverse reaction response:", options: ["Go to hospital.", "Wait it out.", "Take more meds."], answer: "Rush to a hospital." },
    { question: "Non-road traffic crash type:", options: ["Hit pedestrian.", "Tree-on-building.", "Vehicle collision."], answer: "Tree falling on buildings." },
    { question: "School safety measures’ goal:", options: ["Protect from accidents.", "Decorate.", "Increase teacher workload."], answer: "Protect from accidents." },
    { question: "Non-home accident cause:", options: ["Tripping on wires.", "Safe play areas.", "Unstable furniture."], answer: "Safe play areas." },
    { question: "Safety education’s role:", options: ["Teach hazard avoidance.", "Cause anxiety.", "Discourage play."], answer: "Teach hazard identification/avoidance." },
    { question: "Key first aid kit component:", options: ["Bandages + antiseptics.", "Expired meds.", "Decorations."], answer: "Bandages and antiseptic solutions." },
    { question: "Helmet’s purpose:", options: ["Head protection.", "Style.", "Carry items."], answer: "Head protection in accidents." },
    { question: "Non-road safety practice:", options: ["Obey rules.", "Distracted driving.", "Wear seatbelts."], answer: "Distracted driving (e.g., phone use)." },
    { question: "Safety drills’ purpose:", options: ["Prepare for emergencies.", "Waste time.", "Entertain."], answer: "Prepare for emergencies." },
    { question: "Unsafe home behavior:", options: ["Leave sharp objects for kids.", "Lock medicines.", "Use nonslip mats."], answer: "Leave sharp objects accessible." },
    { question: "Safety signs’ role:", options: ["Warn of hazards.", "Decorate.", "Confuse visitors."], answer: "Warn of hazards." },
    { question: "Sports safety guidelines’ purpose:", options: ["Prevent injuries/fair play.", "Make games dull.", "Restrict play."], answer: "Prevent injuries and ensure fair play." }
],    
agric_science: [
        { question: "Factors of production are essential for farming. Which of the following is NOT a factor of production?", options: ["Land", "Labour", "Money"], answer: "Money" },
        { question: "Which factor of production is needed for growing crops and rearing livestock?", options: ["Land", "Water", "Management"], answer: "Land" },
        { question: "Labour in agriculture refers to:", options: ["Work done by human beings.", "Machines used in farming.", "Animals used in farming."], answer: "Work done by human beings." },
        { question: "What is the primary use of human labour in farming?", options: ["Clearing land and harvesting crops.", "Building farm structures.", "Planting seeds only."], answer: "Clearing land and harvesting crops." },
        { question: "Water is one of the factors of production. What is its main role?", options: ["Essential for crop growth and animal survival.", "Used only for cleaning farm tools.", "Needed for building farm structures."], answer: "Essential for crop growth and animal survival." },
        { question: "Money plays an important role in farming. Which of the following is NOT a use of money in farming?", options: ["Buying farm implements.", "Paying school fees.", "Growing crops without any expenses."], answer: "Growing crops without any expenses." },
        { question: "Management in farming involves:", options: ["Decision-making and coordination of activities.", "Only financial planning.", "Hiring workers only."], answer: "Decision-making and coordination of activities." },
        { question: "Which factor of production is crucial for ensuring that farming activities are profitable?", options: ["Management", "Labour", "Money"], answer: "Management" },
        { question: "Which of the following is NOT a source of water for farming?", options: ["Rainwater", "Rivers", "Electricity"], answer: "Electricity" },
        { question: "Why is land considered the most important factor of production?", options: ["Without land, farming is not possible.", "It is used only for building houses.", "It provides shelter for animals only."], answer: "Without land, farming is not possible." },
        { question: "Which tool is used to cut grass and sticks?", options: ["Machete/cutlass", "Spade", "Garden fork"], answer: "Machete/cutlass" },
        { question: "What is the primary use of a spade?", options: ["Digging soil and making holes.", "Watering plants.", "Harvesting crops."], answer: "Digging soil and making holes." },
        { question: "What is the main function of a garden fork?", options: ["Loosening topsoil and weeding.", "Cutting grass.", "Harvesting root crops."], answer: "Loosening topsoil and weeding." },
        { question: "Which tool is used to water crops during the dry season?", options: ["Watering can", "Rake", "Handfork"], answer: "Watering can" },
        { question: "The rake is primarily used for:", options: ["Leveling the ground and gathering leaves.", "Digging holes.", "Sowing seeds."], answer: "Leveling the ground and gathering leaves." },
        { question: "What is the main purpose of a headpan?", options: ["Carrying compost and farm produce.", "Planting seeds.", "Watering plants."], answer: "Carrying compost and farm produce." },
        { question: "Which tool is used to dig small holes and clear bushes?", options: ["Machete/cutlass", "Shovel", "Hoe"], answer: "Machete/cutlass" },
        { question: "Which tool is specifically used for harvesting root crops like yam and cassava?", options: ["Machete/cutlass", "Spade", "Garden fork"], answer: "Garden fork" },
        { question: "What is the primary use of a hoe?", options: ["Digging soil and preparing land.", "Watering plants.", "Transplanting seedlings."], answer: "Digging soil and preparing land." },
        { question: "Which tool is used for breaking rocks or hard ground?", options: ["Pickaxe", "Seed trays", "Shovel"], answer: "Pickaxe" },
        { question: "Seed trays are primarily used for:", options: ["Raising seedlings.", "Harvesting crops.", "Watering plants."], answer: "Raising seedlings." },
        { question: "What is the main function of a hoe?", options: ["Cultivating the soil and removing weeds.", "Planting seeds.", "Carrying farm produce."], answer: "Cultivating the soil and removing weeds." },
        { question: "The primary use of a shovel is:", options: ["Digging soil into pots for planting.", "Transplanting seedlings.", "Watering plants."], answer: "Digging soil into pots for planting." },
        { question: "To maintain crop farm tools, you should:", options: ["Wash and dry them after use.", "Leave them outside overnight.", "Store them in water."], answer: "Wash and dry them after use." },
        { question: "Cultural practices for growing vegetables can be divided into:", options: ["Preplanting operations and postplanting operations.", "Only preplanting operations.", "Only postplanting operations."], answer: "Preplanting operations and postplanting operations." },
        { question: "During preplanting operations, what is the first step?", options: ["Choice of site.", "Clearing and stumping.", "Manuring."], answer: "Choice of site." },
        { question: "Clearing and stumping involve:", options: ["Removing trees and stumps from the land.", "Adding manure to the soil.", "Mulching the beds."], answer: "Removing trees and stumps from the land." },
        { question: "Weeding should be done:", options: ["Carefully removed from the beds using hoes.", "Ignored until the plants grow.", "Done with chemicals only."], answer: "Carefully removed from the beds using hoes." },
        { question: "Manuring should be applied:", options: ["Two weeks after planting or transplanting.", "Immediately after harvesting.", "Before clearing the land."], answer: "Two weeks after planting or transplanting." },
        { question: "Mulching involves:", options: ["Covering the vegetable beds with dry grasses.", "Applying fertilizer directly to the soil.", "Removing weeds manually."], answer: "Covering the vegetable beds with dry grasses." },
        { question: "Staking is necessary for:", options: ["Crawling vegetables like fluted pumpkin.", "Root vegetables like carrots.", "Weeds growing in the garden."], answer: "Crawling vegetables like fluted pumpkin." },
        { question: "Which practice helps retain moisture in the soil and suppress weeds?", options: ["Mulching", "Staking", "Transplanting"], answer: "Mulching" },
        { question: "Transplanting is best done when:", options: ["The seedlings have developed two true leaves.", "The plants are fully mature.", "The soil is completely dry."], answer: "The seedlings have developed two true leaves." },
        { question: "Which of the following is a postplanting operation?", options: ["Weeding", "Site selection", "Clearing the land"], answer: "Weeding" },
        { question: "Weeds are defined as:", options: ["Plants growing where they are not wanted.", "Plants that provide nutrients to the soil.", "Plants that are intentionally grown."], answer: "Plants growing where they are not wanted." },
        { question: "If you find waterleaf growing among your planted okro and pumpkin, it is considered:", options: ["A weed.", "A beneficial plant.", "A crop."], answer: "A weed." },
        { question: "Weeds make farmland bushy because:", options: ["They compete with crops for resources.", "They add nutrients to the soil.", "They protect the soil from erosion."], answer: "They compete with crops for resources." },
        { question: "To remove weeds, you can:", options: ["Use weeding or herbicides.", "Ignore them and let them grow.", "Add more fertilizer to the soil."], answer: "Use weeding or herbicides." },
        { question: "Grasses growing on a pineapple plot are:", options: ["Weeds.", "Crops.", "Beneficial plants."], answer: "Weeds." },
        { question: "Waterleaf is an example of:", options: ["A weed.", "A cultivated vegetable.", "A fruitbearing plant."], answer: "A weed." },
        { question: "Why do farmers need to control weeds?", options: ["To prevent competition with crops for resources.", "To increase the growth of weeds.", "To attract more pests."], answer: "To prevent competition with crops for resources." },
        { question: "Which method is commonly used for controlling weeds?", options: ["Weeding manually or using herbicides.", "Planting more crops.", "Ignoring their presence."], answer: "Weeding manually or using herbicides." },
        { question: "Biological control of weeds involves:", options: ["Introducing animals such as cattle, goats, and sheep to feed on them.", "Using chemical herbicides.", "Ignoring their presence."], answer: "Introducing animals such as cattle, goats, and sheep to feed on them." },
        { question: "Excess use of weedkilling chemicals can result in:", options: ["Destruction of beneficial soil organisms.", "Improved soil fertility.", "Increased crop yield."], answer: "Destruction of beneficial soil organisms." },
        { question: "Postemergence herbicides are applied:", options: ["On the weeds after they have emerged from the soil.", "Before planting the crops.", "Only on the crops, not on the weeds."], answer: "On the weeds after they have emerged from the soil." },
        { question: "Preemergence herbicides are applied:", options: ["Before weeds emerge from the soil.", "After weeds have grown tall.", "When the crops are fully mature."], answer: "Before weeds emerge from the soil." },
        { question: "Weedkilling chemicals can be dangerous to crops because:", options: ["They may drift onto crop plants while spraying.", "They increase crop growth.", "They attract beneficial insects."], answer: "They may drift onto crop plants while spraying." },
        { question: "Which of the following is an effect of chemical weed control on the environment?", options: ["Poisoning of water bodies through runoff.", "Increased biodiversity.", "Improved soil structure."], answer: "Poisoning of water bodies through runoff." },
        { question: "Why should farmers use herbicides with caution?", options: ["Because they can harm both weeds and crops if misused.", "Because they are always expensive.", "Because they make farming too easy."], answer: "Because they can harm both weeds and crops if misused." }
    ],
maths: [
    { question: "How many kobo are there in ₦1?", options: ["100 kobo", "50 kobo", "200 kobo"], answer: "100 kobo" },
    { question: "Convert 350 kobo to naira.", options: ["₦3.50", "₦35.0", "₦0.35"], answer: "₦3.50" },
    { question: "Convert ₦7.25 to kobo.", options: ["725 kobo", "72.5 kobo", "705 kobo"], answer: "725 kobo" },
    { question: "Add ₦12.30 and ₦8.45.", options: ["₦20.75", "₦21.65", "₦20.45"], answer: "₦20.75" },
    { question: "Subtract ₦9.20 from ₦15.50.", options: ["₦6.30", "₦6.20", "₦5.30"], answer: "₦6.30" },
    { question: "A book costs ₦25.50 and a pen costs ₦14.25. What is the total cost?", options: ["₦39.75", "₦38.75", "₦40.25"], answer: "₦39.75" },
    { question: "John had ₦50. He spent ₦23. How much does he have left?", options: ["₦27", "₦26", "₦28"], answer: "₦27" },
    { question: "Convert ₦10.50 to kobo.", options: ["1050 kobo", "1005 kobo", "105 kobo"], answer: "1050 kobo" },
    { question: "If a bag costs ₦45.30 and a shoe costs ₦54.70, what is the total cost?", options: ["₦100.00", "₦99.00", "₦101.00"], answer: "₦100.00" },
    { question: "Convert 850 kobo to naira.", options: ["₦8.50", "₦85.0", "₦0.85"], answer: "₦8.50" },
    { question: "How many centimetres are in 1 metre?", options: ["100 cm", "10 cm", "1000 cm"], answer: "100 cm" },
    { question: "Convert 350 cm to metres.", options: ["3.5 m", "35 m", "0.35 m"], answer: "3.5 m" },
    { question: "Convert 2.75 m to centimetres.", options: ["275 cm", "27.5 cm", "2750 cm"], answer: "275 cm" },
    { question: "Add 3 m 25 cm and 2 m 75 cm.", options: ["6 m", "5 m 90 cm", "6 m 10 cm"], answer: "6 m" },
    { question: "Subtract 1 m 40 cm from 3 m 10 cm.", options: ["1 m 70 cm", "2 m 70 cm", "1 m 60 cm"], answer: "1 m 70 cm" },
    { question: "How many meters are in 1 kilometre?", options: ["1000 m", "100 m", "10 m"], answer: "1000 m" },
    { question: "Convert 2.5 km to metres.", options: ["2500 m", "250 m", "25 m"], answer: "2500 m" },
    { question: "Convert 7500 m to kilometres.", options: ["7.5 km", "75 km", "0.75 km"], answer: "7.5 km" },
    { question: "Add 3 km 400 m and 2 km 600 m.", options: ["6 km", "5 km 1000 m", "6 km 100 m"], answer: "6 km" },
    { question: "Subtract 1 km 300 m from 4 km 200 m.", options: ["2 km 900 m", "3 km 900 m", "2 km 800 m"], answer: "2 km 900 m" },
    { question: "How many grams are in 1 kilogram?", options: ["1000 g", "100 g", "10 g"], answer: "1000 g" },
    { question: "Convert 750 g to kilograms.", options: ["0.75 kg", "7.5 kg", "75 kg"], answer: "0.75 kg" },
    { question: "Convert 3.2 kg to grams.", options: ["3200 g", "320 g", "32 g"], answer: "3200 g" },
    { question: "Add 1 kg 400 g and 2 kg 600 g.", options: ["4 kg", "3 kg 1000 g", "4 kg 100 g"], answer: "4 kg" },
    { question: "Subtract 1 kg 300 g from 3 kg 100 g.", options: ["1 kg 800 g", "2 kg 800 g", "1 kg 700 g"], answer: "1 kg 800 g" },
    { question: "Convert 4500 g to kilograms.", options: ["4.5 kg", "45 kg", "0.45 kg"], answer: "4.5 kg" },
    { question: "Convert 0.6 kg to grams.", options: ["600 g", "60 g", "6 g"], answer: "600 g" },
    { question: "Which is heavier: 1 kg 500 g or 1500 g?", options: ["They are equal", "1 kg 500 g", "1500 g"], answer: "They are equal" },
    { question: "Add 2.5 kg and 1.5 kg.", options: ["4 kg", "3 kg", "3.5 kg"], answer: "4 kg" },
    { question: "Subtract 0.8 kg from 2.3 kg.", options: ["1.5 kg", "1.4 kg", "1.6 kg"], answer: "1.5 kg" },
    { question: "How many seconds are in 1 minute?", options: ["60 seconds", "100 seconds", "30 seconds"], answer: "60 seconds" },
    { question: "How many minutes are in 1 hour?", options: ["60 minutes", "100 minutes", "50 minutes"], answer: "60 minutes" },
    { question: "How many hours are in 1 day?", options: ["24 hours", "12 hours", "48 hours"], answer: "24 hours" },
    { question: "Convert 180 seconds to minutes.", options: ["3 minutes", "2 minutes", "4 minutes"], answer: "3 minutes" },
    { question: "Convert 3 hours to minutes.", options: ["180 minutes", "150 minutes", "120 minutes"], answer: "180 minutes" },
    { question: "Add 2 hours 30 minutes and 1 hour 45 minutes.", options: ["4 hours 15 minutes", "3 hours 75 minutes", "4 hours 30 minutes"], answer: "4 hours 15 minutes" },
    { question: "Subtract 1 hour 20 minutes from 3 hours 10 minutes.", options: ["1 hour 50 minutes", "2 hours 50 minutes", "1 hour 40 minutes"], answer: "1 hour 50 minutes" },
    { question: "If a movie starts at 2:15 PM and ends at 3:45 PM, how long is the movie?", options: ["1 hour 30 minutes", "1 hour 45 minutes", "2 hours"], answer: "1 hour 30 minutes" },
    { question: "How many days are in a week?", options: ["7 days", "5 days", "6 days"], answer: "7 days" },
    { question: "What time is shown when the minute hand is on 12 and the hour hand is on 3?", options: ["3:00", "12:03", "12:30"], answer: "3:00" },
    { question: "What is the formula for the perimeter of a rectangle?", options: ["2 × (length + width)", "length × width", "length + width"], answer: "2 × (length + width)" },
    { question: "What is the formula for the area of a rectangle?", options: ["length × width", "2 × (length + width)", "length + width"], answer: "length × width" },
    { question: "Find the area of a rectangle with length 8 cm and width 5 cm.", options: ["40 cm²", "13 cm²", "26 cm²"], answer: "40 cm²" },
    { question: "Calculate the perimeter of a square with side 6 cm.", options: ["24 cm", "12 cm", "36 cm"], answer: "24 cm" },
    { question: "A rectangle has a length of 10 m and a width of 4 m. What is its perimeter?", options: ["28 m", "14 m", "40 m"], answer: "28 m" },
    { question: "The area of a square is 25 cm². What is the length of one side?", options: ["5 cm", "10 cm", "25 cm"], answer: "5 cm" },
    { question: "What is the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm?", options: ["12 cm", "10 cm", "15 cm"], answer: "12 cm" },
    { question: "A rectangular garden is 12 m long and 8 m wide. What is its area?", options: ["96 m²", "20 m²", "40 m²"], answer: "96 m²" },
    { question: "What is the perimeter of a square with side 9 m?", options: ["36 m", "18 m", "81 m"], answer: "36 m" },
    { question: "The area of a rectangle is 60 cm². If the length is 10 cm, what is the width?", options: ["6 cm", "50 cm", "70 cm"], answer: "6 cm" }
]
   
};

let currentQuiz = null;
let currentQuestion = 0;
let selectedAnswers = [];
let timerInterval;
let timeLeft = 3600; // 1 hour in seconds

function startQuiz() {
    const subject = document.getElementById('subject').value;
    currentQuiz = quizzes[subject];
    
    if (!currentQuiz) {
        alert("Subject not available");
        return;
    }
    
    // Initialize timer
    document.getElementById('timer').textContent = formatTime(timeLeft);
    timerInterval = setInterval(updateTimer, 1000);
    
    document.getElementById('subject-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    
    showQuestion(currentQuestion);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = formatTime(timeLeft);
    
    if(timeLeft <= 0) {
        clearInterval(timerInterval);
        showResults();
    }
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion(index) {
    const questionData = currentQuiz[index];
    const questionText = document.querySelector('.question-text');
    const optionsContainer = document.querySelector('.options');
    
    questionText.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach(option => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        
        const label = document.createElement('label');
        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${option}`));
        
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement('br'));
    });
    
    // Update progress bar
    const progress = ((index + 1)/currentQuiz.length)*100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer");
        return;
    }
    
    selectedAnswers[currentQuestion] = selectedOption.value;
    currentQuestion++;
    
    if (currentQuestion < currentQuiz.length) {
        showQuestion(currentQuestion);
    } else {
        clearInterval(timerInterval);
        showResults();
    }
}

function showResults() {
    let score = 0;
    const breakdown = [];
    
    currentQuiz.forEach((question, index) => {
        const userAnswer = selectedAnswers[index] || 'Not answered';
        const correct = userAnswer === question.answer;
        
        breakdown.push(`
            <div class="result-item">
                <p>Q${index + 1}: ${question.question}</p>
                <p>Your Answer: ${userAnswer}</p>
                <p>Correct Answer: ${question.answer}</p>
                <p class="${correct ? 'correct' : 'incorrect'}">${correct ? '✔️' : '❌'}</p>
            </div>
        `);
        
        if (correct) score++;
    });
    
    document.getElementById('score').textContent = `Your Score: ${score}/${currentQuiz.length}`;
    document.getElementById('answer-breakdown').innerHTML = breakdown.join('');
    
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
}

function resetQuiz() {
    currentQuestion = 0;
    selectedAnswers = [];
    timeLeft = 600;
    document.getElementById('timer').textContent = formatTime(timeLeft);
    
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('subject-selection').classList.remove('hidden');
}