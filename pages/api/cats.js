// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//     res.status(200).json({ name: 'Meow' })
//   }

export default async function handler(req, res) {
    const cats = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=4&page=1&api_key=${process.env.API_KEY}`
    ).then((res) => res.json());
  res.status(200).send(cats);
}
