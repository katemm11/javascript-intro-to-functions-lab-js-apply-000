function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const thing = string.toUpperCase();
  console.log(thing);
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}


function sayHiToGrandma(string) {
  let lowercase = string.toLowerCase()
  let uppercase = string.toUpperCase()
  if (string === lowercase) {
    return 'I can\'t hear you!'
  }
  
  else if (string === uppercase) {
    return 'YES INDEED!'
  }
  else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
  
}
  
  
  
  
