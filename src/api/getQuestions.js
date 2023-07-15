const getQuestions = async () => {
  const questoinsData = await fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean');
  const data = await questoinsData.json();
  return data;
};

export default getQuestions;
