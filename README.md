# germ-semtree

[![A WikiBonsai Project](https://img.shields.io/badge/%F0%9F%8E%8B-A%20WikiBonsai%20Project-brightgreen)](https://github.com/wikibonsai/wikibonsai)

<p align="center">
  <img src="./demo.png" height="50%" width="50%">
</p>

You can see it [here](https://semantic-tree.netlify.app/).

🪴 Transplant pre-existing knowledge trees to your 🎋 [WikiBonsai](https://github.com/wikibonsai/wikibonsai) digital garden.

## Semantic Tree Germinator

Have an LLM (ChatGPT) generate a semantic (sub) tree from a given word or concept. This kind of concept tree is particularly useful in a couple of scenarios:

- If you're a student, these trees can give you your bearings in relation to other, more familiar concepts. It can also point to other new, relevant concepts one needs to understand to better understand the original concept.
- If you're a teacher, these trees can save time drafting texts or curricula to someone new to the concept.

Results should be returned as raw text formatted in markdown outlines, with [`[[wiki-text]]`](https://github.com/wikibonsai/wikirefs) among other options, which should be note-taking friendly and is also viewable as an interactive mindmap.

## Note On Design

The scripts are separated for cosmetic (and sanity) reasons. In essence, it is still one giant single html file so most things are happening in the global namespace. If anything ever seems confusing, sense might be made by referring back to main html file (`index.html`).

If this project grows further, it should probably first be refactored to use a proper front-end framework.

## Hat Tip

- Inspired by [Elon Musk's quote](https://www.reddit.com/r/IAmA/comments/2rgsan/comment/cnfre0a/?utm_source=share&utm_medium=web2x&context=3&rdt=50009) about semantic trees.
- Neuralink semantic tree image from [waitbutwhy](https://waitbutwhy.com/2017/04/neuralink.html).
- Mindmap functionality from [markmap](https://markmap.js.org/).
- Icons from [icons8](https://icons8.com).
- OpenAI access referenced from [tldraw's makereal template](https://github.com/tldraw/make-real-starter).
