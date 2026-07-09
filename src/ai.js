import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getRecipe = async (ingredients) => {
  const ingredientsList = ingredients.join(', ');

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `Create a recipe using these ingredients: ${ingredientsList}`,
      },
    ],
  });

  const recipeText = response.content[0].text;
  
  return recipeText;
};
