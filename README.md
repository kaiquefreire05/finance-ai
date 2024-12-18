# Finance AI

**Finance AI** is an application that integrates artificial intelligence into the financial sector, offering advanced tools for data analysis, trend prediction and automation of financial processes.

## Features

- **Financial Data Analysis**: Interprets large volumes of financial data, generating valuable insights.
- **Trend Forecasting**: Uses predictive models to anticipate market movements.
- **Process Automation**: Automates routine financial tasks for greater efficiency and accuracy.

## Technologies Used

- **Next.js**: Framework for developing web interfaces.
- **Tailwind CSS**: Responsive and customizable styling.
- **Prisma**: ORM for database management.
- **TypeScript**: Static typing for greater code security.
- **OpenAI API**: Integration with advanced AI models.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/kaiquefreire05/finance-ai.git
```

2. Navigate to the project directory:

```bash
cd finance-ai
```

3. Install the dependencies:

```bash
npm install
```

4. Set the environment variables:

- Create a `.env` file in the root of the project based on `.env.example`.
- Add your OpenAI API key in the `OPENAI_API_KEY` field.

5. Run the database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Integration with the OpenAI API

To use the AI ​​features, set up your API key:

1. Get your API key from the [OpenAI website](https://platform.openai.com/).

2. In the `.env` file, add:

```env
OPENAI_API_KEY=your_api_key_here
```

3. Access the models in the application code:

```javascript
const response = await openai.Completion.create({
model: 'text-davinci-003',
prompt: 'Your question here',
max_tokens: 100,
});

console.log(response.choices[0].text);
```

## Contribution

Contributions are welcome! Follow the steps below:

1. Fork the repository. 2. Create a branch for your feature:

```bash
git checkout -b feature/nova-feature
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push your changes:

```bash
git push origin feature/nova-feature
```

5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Developed by [Kaique Freire dos Santos](https://github.com/kaiquefreire05).
