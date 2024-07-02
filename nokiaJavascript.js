const prompt = require('prompt-sync')();


function common(){
    console.log(`
    1 -> Delivert reports
    2 -> Reply via same centre
    3 -> Character support    
    `)

    let commonOption = prompt("")
    switch(commonOption){
        case '1': common();
        case '2': common();
        case '3': common();
    }
}

function set(){
    console.log(`
    1 -> Message centre number
    2 -> Message sents as 
    3 -> Message validity 
    `)

    let setOptions = prompt("")
    switch(setOptions){
        case '1': set()
        case '2': set()
        case '3': set()
    }
}

function messageSettings(){
    console.log(`
    1 -> Set
    2 -> Common
    `)

    messageSettingsOptions = prompt("")
    switch(messageSettingsOptions){
        case '1': set()
        case '2': common()
    }
}

function messages(){
    console.log(`
    1 -> Write Messages
    2 -> Inbox
    3 -> Outbox
    4 -> Picture Messages
    5 -> Templates
    6 -> Smileys
    7 -> Message settings
    8 -> Info service
    9 -> Voice mailbox number
    10 -> Service command editor
    `)

    messagesOptions = prompt("")
    switch(messagesOptions){
        case '1':messages()
        case '2':messages()
        case '3':messages()
        case '4':messages()
        case '5':messages()
        case '6':messages()
        case '7':
        case '8':messages()
        case '9':messages()
        case '10':messages()
    }

}


function options(){
    console.log(`
    1 -> Type of view
    2 -> Memory status
    `)

    optionsSelect = prompt("")
    switch(optionsSelect){
        case '1': options();
        case '2': options();

    }

}



function phoneBook(){
    console.log(`
    1 -> Search
    2 -> Service Nos.
    3 -> Add name
    4 -> Erase
    5 -> Edit
    6 -> Assign tone
    7 -> Send b'card
    8 -> Options
    9 -> Speed dials
    10 -> Voice tags
    `)

    phoneBookOptions = prompt("")
    switch(phoneBookOptions){
        case '1': phoneBook();
        case '2': phoneBook();
        case '3': phoneBook();
        case '4': phoneBook();
        case '5': phoneBook();
        case '6': phoneBook();
        case '7': phoneBook();
        case '8': options();
        case '9': phoneBook();
        case '10': phoneBook();       
    }
}


function mainMenu(){
    console.log(`
    
    MAIN MENU

    1 -> Phone book
    2 -> Messages
    3 -> Chat
    4 -> Call regsiter
    5 -> Tones
    6 -> Settings
    7 -> Call divert
    8 -> Games
    9 -> Calculator
    10 -> Reminders
    11 -> Clock
    12 -> Profiles
    13 -> SIM services 
    
    `)

    mainMenuOtions = prompt("")
    switch(mainMenuOtions){
        case '1':
        case '2':
        case '3': messages();
    }
}

mainMenu()