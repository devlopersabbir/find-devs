Thank you for your interest in contributing to [finddevs](https://finddevs.vercel.app/)! Here's a guide how you can improve **finddevs**! 🚀

## **Required Things**

Make sure you have [Node.js](https://nodejs.org/en/download) **LTS** version and [Git installed](https://git-scm.com/downloads)) on your computer.

Once you have these in place, let's get the devFind repository onto your local machine. Fire up your terminal and run this command:

## **General Steps**
1.  Identify an Issue from [issue tab](https://github.com/devlopersabbir/find-devs) or feature to add
2.  Check posted Issues to see if your issue has already been posted
3.  If not, create a new Issue (**see directions below**)

```bash
git clone https://github.com/devlopersabbir/find-devs && cd find-devs
```

## **<del>Install `pnpm` (Optional)</del>**

```bash
npm install -g pnpm
```

## **Install dependencies**
To install depecency you can just fire below command.

```bash
pnpm install
```
## **Required Task**
1. Copy `.env.example` to .env using below command. (**Make sure you are in the project directory**)
	```bash
	cp .env.exmaple .env
	```
2. Make your postgresql connection URI and put into your `DATABASE_URI=""`
 env variable (**[Prefer to use neon tech](https://neon.tech)**)
 3. Generate schema using drizzle kit
	```bash
	pnpm generate
	```
3. Push your generated `SQL` table
	```bash
	pnpm push
	```

## **Run Development Server**
Once all dependencies is installed then you can run your development server

```bash
pnpm dev
```

## **Before Commit Create New Branch**
Before you made any commit you should create a new branch 😌
Execute this command:

```bash
git checkout -b your-branch-name
```

## **Make Your Changes & Format code**
Make your all of changes whatever you need. I'll be really happy to see that 😊
Make sure you have formated your code using this command.

```bash
pnpm format
```

## **Commit Your Changes**

You're ready to immortalize your work. Commit your changes to your local branch using this incantation:

```bash
git add .
git commit -m "Your magical commit message"
```

## **Push Your Changes**

it's time to share your magic with the [finddevs](https://finddevs.vercel.app/). Push your changes to your remote branch:

```bash
git push origin your-branch-name
```

## **Create a Pull Request**

Your masterpiece is ready for the world to see! Navigate to the devFind repository on GitHub, and with a flourish, click the "New pull request" button. Follow the magical instructions to create your pull request.

## **Participate in Code Reviews**

Your spellbinding creation will be reviewed by fellow wizards and witches to ensure it meets the project's high standards. Be ready to cast additional spells or address any mystical feedback provided.

## **Merge Your Changes**

When your pull request is blessed by the council of wizards and passes all tests, it can be merged into the main codebase. Congratulations, you've successfully left your mark on devFind! 🪄🔮✨
