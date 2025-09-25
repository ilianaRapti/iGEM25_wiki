import { useState } from "react";
import "./inclusivity.css";
import { Events } from "./events";

export function Inclusivity() {
  const [section, setSection] = useState<"menu" | "stories" | "events">("menu");
  const [activeStory, setActiveStory] = useState<"The forest of Dreams" | "The girl and the plane tree" | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  //images for stories + all languages
  const storyImages: Record<string, Record<string, string[]>> = {
    "The forest of Dreams": {
      en: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-allimages/14.webp",
      ],
      gr: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/gr/14.webp",
      ],
      alb:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/alb/14.webp",
      ],
      viet:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/viet/14.webp",
      ],
      
      it:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/it/14.webp",        
      ],
      ger:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ger/14.webp",
      ],
      span:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/span/14.webp",

      ],
      fr:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/fr/14.webp",
      ],
      croat:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cro/14.webp",
      ],
      port:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/por/14.webp",
      ],
      cat:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/cat/14.webp",
      ],
      rus:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/russ/14.webp",
      ],
      ser:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/ser/14.webp",
      ],
      rom:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest-languages/rom/14.webp",

      ],
    },
    "The girl and the plane tree": {
      gr:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/greek/16.webp",
      ],
      en: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl-allimages/16.webp",
      ],
      alb: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/albanian/16.webp",
      ],
      cat: [
       "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/catalan/16.webp",
      ],
      croat: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/croatian/16.webp", 
      ],
      port:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/portuguese/16.webp",
      ],
      rom:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/romanian/16.webp",
      ],
      rus:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/russian/16.webp",

      ],
      ser: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/serbian/16.webp",
      ],
      swa: [
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/swahili/16.webp",
      ],
      viet:[
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/1.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/2.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/3.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/4.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/5.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/6.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/7.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/8.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/9.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/10.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/11.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/12.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/13.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/14.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/15.webp",
        "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/languages/vietnamese/16.webp",
      ],
    },
  };



  const languageButtons: Record<string, string> = {
    en: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/english.webp",
    gr: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/greek.webp",
    alb: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/albanian.webp",
    cat: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/catalan.webp",
    croat: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/croatian.webp",
    port: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/portugese.webp",
    rom: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/romanian.webp",
    rus: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/russian.webp",
    ser: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/serbian.webp",
    swa: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/swahili.webp",
    viet: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/vietnamese.webp",
    it: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/italian.webp",
    ger: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/german.webp",
    span : "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/spanish.webp",
    fr: "https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/buttons-lang/french.webp",
  };

  if (section === "menu") {
    return (
      <div className="menu">
        <button onClick={() => setSection("stories")} aria-label="Fairytails">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/fairytails-et-al.webp" alt="Fairytails" />
        </button>
        <button onClick={() => setSection("events")} aria-label="Events">
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/new-events.webp" alt="Events" />
        </button>
      </div>
    );
  }

  if (section === "events") {
    return <Events goBack={() => setSection("menu")} />;
  }

  // language selection
  if (activeStory && !selectedLanguage) {
    return (
      <div className="stories-list">
        <h2 className="stories-title">{activeStory}</h2>
        <div className="language-cards-wrapper">
          {Object.keys(storyImages[activeStory]).map((langKey) => (
            <div key={langKey} className="language-card" onClick={() => setSelectedLanguage(langKey)}>
              <img src={languageButtons[langKey]} alt={langKey} />
            </div>
          ))}
        </div>
        <button className="back" onClick={() => setActiveStory(null)}>Back</button>
      </div>
    );
  }

  // story pages
  if (activeStory && selectedLanguage) {
    return (
      <div className="stories-list">
        <h2 className="stories-title">{activeStory}</h2>
        <div className="story-images-wrapper">
          {storyImages[activeStory][selectedLanguage].map((src, idx) => (
            <img key={idx} src={src} alt={`${activeStory} page ${idx + 1}`} className="story-image" />
          ))}
        </div>
        <button className="back" onClick={() => setSelectedLanguage(null)}>Back</button>
      </div>
    );
  }

  return (
    <div className="stories-list">
      <h2 className="stories-title">Our Fairytails</h2>
      <div className="story-cards-wrapper">
        <div className="story-card" onClick={() => setActiveStory("The forest of Dreams")}>
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/theforest.webp" alt="The forest of Dreams" />
        </div>
        <div className="story-card" onClick={() => setActiveStory("The girl and the plane tree")}>
          <img src="https://static.igem.wiki/teams/5684/wikipics/human-practices/fairytails/thegirl.webp" alt="The girl and the plane tree" />
        </div>
      </div>
      <button className="back" onClick={() => setSection("menu")}>Back</button>
    </div>
  );
}

