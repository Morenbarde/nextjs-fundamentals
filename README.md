This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project is a small browser application that simulates rolling 2 dice by generating 2 numbers from 1-6. 

## Dependencies

    This project was developed with:

    Node: 20.20.2
    next: 16.3.3
    react: 19.2.8
    react-dom: 19.2.8


## Running

Clone this repository and navigate into it:

```bash
git clone git@github.com:Morenbarde/nextjs-fundamentals.git
cd nextjs-fundamentals/
```

The program can then be built and run with:
```bash
npm install
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view. Click the numbers to roll.


## Notes

- To develop this, I primarily used the Next.js documentation App Router guide, along with some additional searches to figure out the Route Handler. Based on the searches I did, I think the implementation in app/roll-button.tsx is correct for calling the route handler, but I am somewhat unsure of that as I don't think the documentation made it very clear how that should be called (Unless I missed it by skimming).
- I originally planned to make the dice with images, but realized that was taking too long for the purpose of this project, so I settled on just using the numbers.
- When setting up the project, I installed npm and tried to make the next project, but had an error where I had to manually update the Node version for it to be compatible, so I updated that myself with nvm.
- I also have a recurring issue where, after leaving the development server on for a bit, it would eventually disconnect and have an error where a dependency goes missing. Then, upon running it again, it would not find the old dependancy. I was able to fix this each time by deleting the .next and node_modules, then reinstalling the npm dependencies. Do you know if this a normal issue, or something wrong with how I set the project up?