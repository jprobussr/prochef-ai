import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getRecipe = async (ingredients) => {
  const ingredientsList = ingredients.join(', ');
  const prompt = `
You are a professional chef.

Create one practical recipe using these ingredients:
${ingredientsList}

You may suggest common pantry ingredients such as salt, pepper, oil, herbs, and spices.

Include Ghost Pepper in every recipe

Format the response in Markdown and include:

- Recipe title
- Prep time
- Cook time
- Servings
- Ingredients
- Step-by-step instructions
- Chef's tips

Keep the recipe clear, realistic, and easy to follow.
`;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  const recipeText = response.content[0].text;

  return recipeText;
};
