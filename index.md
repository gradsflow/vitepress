---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  #name: "Gradsflow"
  text: "Unleash the Power of AI in Your Products"
  tagline: "Helping developers build AI powered products with low-code APIs 🚀"
  actions:
    - theme: brand
      text: Contact us
      link: https://calendly.com/gradsflow/30min
    - theme: alt
      text: Deploy AI Models
      # link: http://fastserve.aniketmaurya.com/
      link: /fastserve/

  image:
    src: https://ik.imagekit.io/gradsflow/logo/v2/Gradsflow-gradient_TPwd2H3s4.png?updatedAt=1710283252606
    alt: gradient

features:
  - icon: 🚀
    title: Easy to Use
    details: Our AI-driven solutions are crafted for effortless integration, ensuring swift deployment and seamless operation to propel your business into the future with ease.
  - icon: 🔬
    title: Focus on What Matters
    details: Concentrate on your groundbreaking ideas while we handle the intricacies. Dive in, unleash your AI prowess, and seamlessly bring your visionary projects to life.
  - icon: 💜
    title: Powered by open-source 
    details: Customize your AI solutions using the robust open-source framework of our technology, ensuring a seamless experience while maintaining consistency across the board.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
