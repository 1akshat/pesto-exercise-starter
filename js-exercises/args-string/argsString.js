const argsString = (message, args) => {
  
  args.forEach(function(messageParts) {
  	message = message.replace("{}", messageParts)
  });
  return message
};

export { argsString };
