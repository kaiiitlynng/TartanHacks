import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 5,
  pages: 5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "RETROFUTURISM",
      image: "- Syd Mead.jpeg",
      aspect: 1.51,
      text: "retrofuturism is an art movement where artists visualized the future through the perspective of a non-futuristic age. retro2future embraces this idea: visualizing modern 3D through the perspective of archaic 2D, distorting and disrupting reality."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "THE YEAR 2000 PROBLEM",
      image: "nsync.jpeg",
      aspect: 1.5,
      text: "anticipated computer errors related to calendar dates after 1999 disrupted daily life as people prepared for a technological apocalypse. out of this emerged “Y2K” - an optimistic unconventional aesthetic filled with metallic shiny clothing, ultity wear, and cyber-accessories. we seek to infuse retro2future with the spirit of y2k: positive disruption."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "POSTIIVE DISRUPTION",
      image: "model.png",
      aspect: 1.5037,
      text: "oftentimes disruption is considered in a negative context: tantrum, violence, war. with retro2future, we want to emphasize the benefit of disruption: 3D distortion to improve our understanding of schematics and scans with an aesthetic inspired by optimism in the future."
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 2.5, factor: 4 }
  ],
  top: createRef()
}

export default state
