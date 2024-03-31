This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Practicum 1

This practicum goes through the way of how to make a simple router on Next.js. We begin by cloning a Github repository and running it on a local development server. Then, we make "home" and "about" page, continued by making "profile" page. The code and the result is as follows. 

Codes: 

![Screenshot](assets/05.png)

![Screenshot](assets/01.png)

![Screenshot](assets/04.png)

Output: 

![Screenshot](assets/03.png)

![Screenshot](assets/02.png)

![Screenshot](assets/06.png)

## Practicum 2

This practicum tackles the problem of nested routing. This is done if a link is clicked on a website it will direct the user to the page inside the nested route. The content of the website could be represented in the following screenshots. 

Codes: 

![Screenshot](assets/07.png)

![Screenshot](assets/08.png)

![Screenshot](assets/09.png)

Output: 

![Screenshot](assets/10.png)

![Screenshot](assets/11.png)

![Screenshot](assets/12.png)

## Practicum 3

In this practicum, we learned about dynamic routing. Dynamic routing means that any parameter displayed on the website can be changed based on the input/modification made to the URL. An example of it could be seen below. 

![Screenshot](assets/15.png)

![Screenshot](assets/14.png)

An additional review page is added for each product by using nested and dynamic routing. 

![Screenshot](assets/16.png)

![Screenshot](assets/17.png)

## Practicum 4

In this practicum, we will add navigation to the various pages using link component. It is one way for users to navigate our website easily. The code will be demonstrated as follows: 

1. Start from home page

![Screenshot](assets/18.png)

2. Navigate to product page

![Screenshot](assets/19.png)

3. Go to the product details using [productId] parameter

![Screenshot](assets/20.png)

4. Go to review of said product

![Screenshot](assets/21.png)

5. Navigate to a particular review by using [reviewId] parameter

![Screenshot](assets/22.png)