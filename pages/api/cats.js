// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//     res.status(200).json({ name: 'Meow' })
//   }

export default async function handler(req, res) {
  try {
    const cats = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=50&api_key=${process.env.API_KEY}`
    ).then((res) => res.json());
    return res.status(200).send(cats);
  } catch (error) {
    res.error(403).json({
      error:'Error has occurred'
    })
  }
}
