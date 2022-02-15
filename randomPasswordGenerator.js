function charArrayFromTo(from,to)
{ 
  const charArray = [];
  for( let i = from; i <= to; i++)
  {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}
function generateRandomPassword(passwordLength)
{
  const lowerCharacters = charArrayFromTo(97,122);
  const upperCharacters = charArrayFromTo(65,90);
  const specialCharacters = charArrayFromTo(33,43).concat(charArrayFromTo(58,64));
  const numberCharacters = charArrayFromTo(48,57);
  const allCharacters = lowerCharacters.concat(upperCharacters,specialCharacters,numberCharacters);
  const password = [];
  for( let i = 0; i < passwordLength; i++)
  {
    let index = Math.floor(Math.random()*allCharacters.length);
    password.push(allCharacters[index]);
  }
  return password.join('');
}
module.exports = generateRandomPassword