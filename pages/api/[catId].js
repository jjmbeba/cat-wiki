// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//     res.status(200).json({ name: 'Meow' })
//   }

export default async function handler(req, res) {
  try {
    const { catId } = req.query;

    const foundCat = await fetch(
      `https://api.thecatapi.com/v1/breeds/${catId}?api_key=${process.env.API_KEY}}`
    ).then((res) => res.json());

    return res.status(200).send(foundCat);

  } catch (error) {
    res.error(403).json({
      error: "Error has occurred",
    });
  }
}
